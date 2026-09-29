import { CROPS_DATABASE } from '../data/crops';
import { 
  FarmerInputForm, 
  CropRecommendationResult, 
  CropInfo, 
  WaterAvailability,
  SoilType
} from '../types';

const WATER_HIERARCHY: Record<WaterAvailability, number> = {
  rainfed: 1,
  limited: 2,
  moderate: 3,
  full: 4
};

const SOIL_NAMES_EN: Record<SoilType, string> = {
  alluvial: 'Alluvial soil',
  black: 'Black Regur soil',
  red: 'Red soil',
  laterite: 'Laterite soil',
  sandy_loam: 'Sandy loam',
  clay_loam: 'Clay loam',
  saline_alkaline: 'Saline/Alkaline soil'
};

const SOIL_NAMES_TE: Record<SoilType, string> = {
  alluvial: 'ఒండ్రు నేల',
  black: 'నల్లరేగడి నేల',
  red: 'ఎర్ర నేల',
  laterite: 'లేటరైట్ నేల',
  sandy_loam: 'ఇసుక లేదా తేలికపాటి నేల',
  clay_loam: 'జిగురు నేల',
  saline_alkaline: 'చవుడు నేల'
};

export function evaluateCropSuitability(
  crop: CropInfo,
  input: FarmerInputForm
): CropRecommendationResult {
  let score = 0;
  const maxScore = 100;

  // 1. Water Compatibility (35% weight)
  // Strict agronomic rule: Do not recommend high-water crops for dry/rainfed conditions.
  const farmerWaterLevel = WATER_HIERARCHY[input.water.availability];
  const cropWaterLevel = WATER_HIERARCHY[crop.minWaterAvailability];
  
  let waterSuitability: 'High' | 'Moderate' | 'Marginal' = 'High';
  let waterScore = 0;

  if (crop.waterRequirementCategory === 'very_high' && input.water.availability === 'rainfed') {
    // Rice/Sugarcane under pure rain-fed: high risk failure
    waterScore = 5;
    waterSuitability = 'Marginal';
  } else if (farmerWaterLevel >= cropWaterLevel) {
    waterScore = 35;
    waterSuitability = 'High';
  } else if (farmerWaterLevel === cropWaterLevel - 1) {
    waterScore = 20;
    waterSuitability = 'Moderate';
  } else {
    waterScore = 8;
    waterSuitability = 'Marginal';
  }

  // 2. Soil Type Compatibility (25% weight)
  let soilSuitability: 'High' | 'Moderate' | 'Marginal' = 'Moderate';
  let soilScore = 0;

  if (crop.suitableSoils.includes(input.soil.soilType)) {
    soilScore += 20;
    soilSuitability = 'High';
  } else {
    soilScore += 8;
    soilSuitability = 'Marginal';
  }

  // Soil pH match (5% weight)
  if (!input.soil.phUnknown) {
    if (input.soil.ph >= crop.idealPhMin && input.soil.ph <= crop.idealPhMax) {
      soilScore += 5;
    } else if (input.soil.ph >= crop.toleratedPhMin && input.soil.ph <= crop.toleratedPhMax) {
      soilScore += 3;
    } else {
      soilScore -= 5;
    }
  } else {
    soilScore += 3.5; // neutral average
  }

  // 3. Climate & Season Match (25% weight)
  let climateSuitability: 'High' | 'Moderate' | 'Marginal' = 'High';
  let climateScore = 0;

  // Season
  const seasonMatch = crop.suitableSeasons.includes('any') || 
                      input.climate.season === 'any' || 
                      crop.suitableSeasons.includes(input.climate.season);
  if (seasonMatch) {
    climateScore += 15;
  } else {
    climateScore += 3;
    climateSuitability = 'Marginal';
  }

  // Temperature
  if (input.climate.temperature >= crop.idealTempMin && input.climate.temperature <= crop.idealTempMax) {
    climateScore += 10;
  } else if (Math.abs(input.climate.temperature - crop.idealTempMin) <= 4 || Math.abs(input.climate.temperature - crop.idealTempMax) <= 4) {
    climateScore += 6;
    if (climateSuitability === 'High') climateSuitability = 'Moderate';
  } else {
    climateScore += 1;
    climateSuitability = 'Marginal';
  }

  // 4. Economics & Preferences (15% weight)
  let economicsMatch: 'High' | 'Moderate' | 'Marginal' = 'High';
  let prefScore = 10;

  // Budget check
  if (input.preferences.budgetLevel === 'low' && crop.estimatedCostPerAcre.min > 35000) {
    prefScore -= 5;
    economicsMatch = 'Marginal';
  } else if (input.preferences.budgetLevel === 'high') {
    prefScore += 3;
  }

  // Duration match
  const avgDuration = (crop.durationDays.min + crop.durationDays.max) / 2;
  if (input.preferences.durationPreference === 'short' && avgDuration <= 95) {
    prefScore += 2;
  } else if (input.preferences.durationPreference === 'medium' && avgDuration > 95 && avgDuration <= 140) {
    prefScore += 2;
  } else if (input.preferences.durationPreference === 'long' && avgDuration > 140) {
    prefScore += 2;
  }

  score = Math.min(maxScore, Math.max(15, Math.round(waterScore + soilScore + climateScore + prefScore)));

  // Generate personalized "Why this crop?" in English and Telugu
  const whyEn = generateWhyCropEn(crop, input, waterSuitability, soilSuitability);
  const whyTe = generateWhyCropTe(crop, input, waterSuitability, soilSuitability);

  // Financial summary
  const farmSize = input.preferences.farmSizeAcres || 1;
  const costMin = crop.estimatedCostPerAcre.min * farmSize;
  const costMax = crop.estimatedCostPerAcre.max * farmSize;
  const revenueMin = crop.potentialRevenuePerAcre.min * farmSize;
  const revenueMax = crop.potentialRevenuePerAcre.max * farmSize;
  const profitMin = revenueMin - costMax;
  const profitMax = revenueMax - costMin;

  let riskWarning: { en: string; te: string } | undefined;
  if (crop.waterRequirementCategory === 'very_high' && (input.water.availability === 'rainfed' || input.water.availability === 'limited')) {
    riskWarning = {
      en: 'Warning: This crop requires heavy irrigation. Planting under scarce or rain-fed water carries extreme risk of crop failure.',
      te: 'హెచ్చరిక: ఈ పంటకు సమృద్ధిగా నీరు అవసరం. తక్కువ నీరు లేదా కేవలం వర్షాధార పరిస్థితుల్లో సాగు చేస్తే పంట నష్టపోయే ప్రమాదం ఉంది.'
    };
  }

  return {
    crop,
    suitabilityScore: score,
    soilSuitability,
    climateSuitability,
    waterSuitability,
    economicsMatch,
    whyThisCrop: {
      en: whyEn,
      te: whyTe
    },
    riskWarning,
    financialSummary: {
      costMin,
      costMax,
      revenueMin,
      revenueMax,
      profitMin,
      profitMax
    }
  };
}

function generateWhyCropEn(
  crop: CropInfo, 
  input: FarmerInputForm, 
  waterSuit: 'High' | 'Moderate' | 'Marginal',
  soilSuit: 'High' | 'Moderate' | 'Marginal'
): string {
  const soilName = SOIL_NAMES_EN[input.soil.soilType] || 'your soil';
  const seasonStr = input.climate.season.toUpperCase();
  
  if (waterSuit === 'Marginal') {
    return `${crop.nameEn} can grow in ${soilName}, but its water requirement (${crop.waterRequirementMm.min}-${crop.waterRequirementMm.max} mm) exceeds your current ${input.water.availability} supply. Only pursue if supplementary irrigation is secured.`;
  }

  if (soilSuit === 'High') {
    return `${crop.nameEn} is a natural match for your ${soilName}. Your ${input.water.availability} water supply from ${input.water.source} satisfies its ${crop.waterRequirementCategory} requirement, and current ${seasonStr} climate (${input.climate.temperature}°C) promotes healthy growth.`;
  }

  return `${crop.nameEn} fits your current ${seasonStr} season and ${input.water.availability} water availability well, providing steady returns for a ${input.preferences.farmSizeAcres}-acre holding.`;
}

function generateWhyCropTe(
  crop: CropInfo, 
  input: FarmerInputForm, 
  waterSuit: 'High' | 'Moderate' | 'Marginal',
  soilSuit: 'High' | 'Moderate' | 'Marginal'
): string {
  const soilName = SOIL_NAMES_TE[input.soil.soilType] || 'మీ నేల';
  
  if (waterSuit === 'Marginal') {
    return `${crop.nameTe} సాగుకు ${soilName} అనుకూలమైనప్పటికీ, మీ వద్ద ఉన్న నీటి వసతి కంటే ఈ పంటకు ఎక్కువ నీరు (${crop.waterRequirementMm.min}-${crop.waterRequirementMm.max} మి.మీ) అవసరం. ప్రత్యామ్నాయ నీరు ఉంటేనే సాగు చేయండి.`;
  }

  if (soilSuit === 'High') {
    return `${crop.nameTe} మీ ${soilName}కు అత్యంత అనువైన పంట. మీ ${input.water.availability === 'rainfed' ? 'వర్షాధార' : 'నీటి'} వసతి ఈ పంట అవసరాలకు సరిపోతుంది. ప్రస్తుత ఉష్ణోగ్రత (${input.climate.temperature}°C) ఆరోగ్యకరమైన పెరుగుదలకు తోడ్పడుతుంది.`;
  }

  return `${crop.nameTe} మీ ${input.preferences.farmSizeAcres} ఎకరాల భూమిలో తగిన నీటి వసతి మరియు ప్రస్తుత కాలానికి అనుగుణంగా మంచి దిగుబడిని అందిస్తుంది.`;
}

export function recommendCrops(input: FarmerInputForm): CropRecommendationResult[] {
  const results = CROPS_DATABASE.map(crop => evaluateCropSuitability(crop, input));
  // Sort descending by suitability score
  return results.sort((a, b) => b.suitabilityScore - a.suitabilityScore);
}
