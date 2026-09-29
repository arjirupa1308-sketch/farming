export type Language = 'en' | 'te';

export type Season = 'kharif' | 'rabi' | 'summer' | 'any';

export type SoilType = 
  | 'alluvial'
  | 'black'
  | 'red'
  | 'laterite'
  | 'sandy_loam'
  | 'clay_loam'
  | 'saline_alkaline';

export type WaterAvailability = 
  | 'rainfed'
  | 'limited'
  | 'moderate'
  | 'full';

export type WaterSource = 
  | 'rain'
  | 'borewell'
  | 'canal'
  | 'river'
  | 'farm_pond'
  | 'drip_sprinkler';

export type RiskPreference = 'low' | 'moderate' | 'high';
export type BudgetLevel = 'low' | 'moderate' | 'high';
export type CropDurationPreference = 'short' | 'medium' | 'long' | 'any';

export interface SoilData {
  soilType: SoilType;
  ph: number;
  phUnknown: boolean;
  nitrogen: 'low' | 'medium' | 'high' | 'unknown';
  phosphorus: 'low' | 'medium' | 'high' | 'unknown';
  potassium: 'low' | 'medium' | 'high' | 'unknown';
  organicMatter: 'low' | 'medium' | 'high' | 'unknown';
}

export interface ClimateData {
  temperature: number; // Celsius
  rainfallLevel: 'low' | 'moderate' | 'high'; // low < 500mm, mod 500-1000mm, high > 1000mm
  rainfallMm?: number;
  humidity: number; // %
  season: Season;
}

export interface LocationData {
  state: string;
  district: string;
  village: string;
  latitude?: number;
  longitude?: number;
}

export interface FarmerPreferences {
  farmSizeAcres: number;
  durationPreference: CropDurationPreference;
  budgetLevel: BudgetLevel;
  desiredIncomePerAcre?: number;
  riskPreference: RiskPreference;
}

export interface FarmerInputForm {
  location: LocationData;
  climate: ClimateData;
  soil: SoilData;
  water: {
    availability: WaterAvailability;
    source: WaterSource;
  };
  preferences: FarmerPreferences;
}

export interface CropInfo {
  id: string;
  nameEn: string;
  nameTe: string;
  scientificName: string;
  category: 'cereal' | 'pulse' | 'oilseed' | 'commercial' | 'vegetable' | 'millet' | 'fruit';
  suitableSoils: SoilType[];
  idealPhMin: number;
  idealPhMax: number;
  toleratedPhMin: number;
  toleratedPhMax: number;
  waterRequirementCategory: 'low' | 'moderate' | 'high' | 'very_high';
  waterRequirementMm: { min: number; max: number };
  minWaterAvailability: WaterAvailability;
  idealTempMin: number;
  idealTempMax: number;
  suitableSeasons: Season[];
  durationDays: { min: number; max: number };
  expectedYieldPerAcre: { min: number; max: number; unit: string };
  estimatedCostPerAcre: { min: number; max: number }; // INR
  potentialRevenuePerAcre: { min: number; max: number }; // INR
  majorPestsAndDiseases: {
    en: string[];
    te: string[];
  };
  fertilizerRequirements: {
    en: string;
    te: string;
  };
  sowingPeriod: {
    en: string;
    te: string;
  };
  harvestPeriod: {
    en: string;
    te: string;
  };
  importantPrecautions: {
    en: string[];
    te: string[];
  };
  whyThisCropSummary: {
    en: string;
    te: string;
  };
  iconName: string;
  dataSource: string;
}

export interface CropRecommendationResult {
  crop: CropInfo;
  suitabilityScore: number; // 0 - 100%
  soilSuitability: 'High' | 'Moderate' | 'Marginal';
  climateSuitability: 'High' | 'Moderate' | 'Marginal';
  waterSuitability: 'High' | 'Moderate' | 'Marginal';
  economicsMatch: 'High' | 'Moderate' | 'Marginal';
  whyThisCrop: {
    en: string;
    te: string;
  };
  riskWarning?: {
    en: string;
    te: string;
  };
  financialSummary: {
    costMin: number;
    costMax: number;
    revenueMin: number;
    revenueMax: number;
    profitMin: number;
    profitMax: number;
  };
}

export interface WeatherData {
  temperature: number;
  humidity: number;
  rainfall: number;
  weatherCode: number;
  condition: string;
  windSpeed: number;
  forecast: {
    day: string;
    tempMin: number;
    tempMax: number;
    rainProb: number;
    condition: string;
  }[];
  agriculturalAdvisory: {
    en: string;
    te: string;
  };
}

export interface AgroAlert {
  id: string;
  type: 'rain' | 'drought' | 'heat' | 'irrigation' | 'pest';
  severity: 'low' | 'medium' | 'high';
  titleEn: string;
  titleTe: string;
  descriptionEn: string;
  descriptionTe: string;
  actionEn: string;
  actionTe: string;
  date: string;
}
