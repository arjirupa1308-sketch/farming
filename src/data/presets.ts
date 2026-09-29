import { FarmerInputForm } from '../types';

export interface FarmerPreset {
  id: string;
  titleEn: string;
  titleTe: string;
  descriptionEn: string;
  descriptionTe: string;
  data: FarmerInputForm;
}

export const FARMER_PRESETS: FarmerPreset[] = [
  {
    id: 'rayalaseema-rainfed',
    titleEn: 'Rayalaseema Dryland (Red Soil & Rain-fed)',
    titleTe: 'రాయలసీమ మెట్ట భూములు (ఎర్ర నేల, వర్షాధారం)',
    descriptionEn: 'Anantapur / Kadapa red loam, low rainfall, rainfed water availability in Kharif.',
    descriptionTe: 'అనంతపురం / కడప ఎర్ర నేలలు, స్వల్ప వర్షపాతం, ఖరీఫ్ వర్షాధార సాగు.',
    data: {
      location: {
        state: 'Andhra Pradesh',
        district: 'Anantapur',
        village: 'Kalyandurg',
        latitude: 14.68,
        longitude: 77.60
      },
      climate: {
        temperature: 29,
        rainfallLevel: 'low',
        rainfallMm: 380,
        humidity: 55,
        season: 'kharif'
      },
      soil: {
        soilType: 'red',
        ph: 6.4,
        phUnknown: false,
        nitrogen: 'low',
        phosphorus: 'medium',
        potassium: 'high',
        organicMatter: 'low'
      },
      water: {
        availability: 'rainfed',
        source: 'rain'
      },
      preferences: {
        farmSizeAcres: 4,
        durationPreference: 'medium',
        budgetLevel: 'low',
        desiredIncomePerAcre: 50000,
        riskPreference: 'low'
      }
    }
  },
  {
    id: 'delta-irrigated',
    titleEn: 'Krishna Delta (Canal Irrigated Alluvial Soil)',
    titleTe: 'కృష్ణా డెల్టా (కాలువ నీరు, ఒండ్రు నేల)',
    descriptionEn: 'Krishna / West Godavari alluvial fertile soils with guaranteed canal irrigation.',
    descriptionTe: 'కృష్ణా / పశ్చిమ గోదావరి సమృద్ధిగా కాలువ నీరు ఉన్న సారవంతమైన ఒండ్రు నేలలు.',
    data: {
      location: {
        state: 'Andhra Pradesh',
        district: 'Krishna',
        village: 'Gudivada',
        latitude: 16.44,
        longitude: 80.99
      },
      climate: {
        temperature: 28,
        rainfallLevel: 'high',
        rainfallMm: 950,
        humidity: 80,
        season: 'kharif'
      },
      soil: {
        soilType: 'alluvial',
        ph: 6.8,
        phUnknown: false,
        nitrogen: 'medium',
        phosphorus: 'medium',
        potassium: 'medium',
        organicMatter: 'medium'
      },
      water: {
        availability: 'full',
        source: 'canal'
      },
      preferences: {
        farmSizeAcres: 5,
        durationPreference: 'medium',
        budgetLevel: 'moderate',
        desiredIncomePerAcre: 70000,
        riskPreference: 'moderate'
      }
    }
  },
  {
    id: 'telangana-black-soil',
    titleEn: 'Telangana Black Soil (Borewell Irrigated)',
    titleTe: 'తెలంగాణ నల్లరేగడి నేల (బోరుబావి వసతి)',
    descriptionEn: 'Warangal / Khammam deep black soil with moderate borewell/drip irrigation.',
    descriptionTe: 'వరంగల్ / ఖమ్మం లోతైన నల్లరేగడి నేలలు, బోరుబావి మరియు డ్రిప్ సేద్యం.',
    data: {
      location: {
        state: 'Telangana',
        district: 'Warangal',
        village: 'Parkal',
        latitude: 18.20,
        longitude: 79.71
      },
      climate: {
        temperature: 30,
        rainfallLevel: 'moderate',
        rainfallMm: 680,
        humidity: 68,
        season: 'kharif'
      },
      soil: {
        soilType: 'black',
        ph: 7.2,
        phUnknown: false,
        nitrogen: 'medium',
        phosphorus: 'low',
        potassium: 'high',
        organicMatter: 'medium'
      },
      water: {
        availability: 'moderate',
        source: 'borewell'
      },
      preferences: {
        farmSizeAcres: 3,
        durationPreference: 'long',
        budgetLevel: 'moderate',
        desiredIncomePerAcre: 85000,
        riskPreference: 'moderate'
      }
    }
  },
  {
    id: 'guntur-spices',
    titleEn: 'Guntur Commercial Spices (Chilli & Cotton)',
    titleTe: 'గుంటూరు వాణిజ్య పంటలు (మిరప & పత్తి)',
    descriptionEn: 'High investment, high return commercial belt with drip irrigation & fertile clay loam.',
    descriptionTe: 'అధిక పెట్టుబడి, అధిక రాబడి కలిగిన మిరప వాణిజ్య సాగు నేలలు.',
    data: {
      location: {
        state: 'Andhra Pradesh',
        district: 'Guntur',
        village: 'Prathipadu',
        latitude: 16.30,
        longitude: 80.43
      },
      climate: {
        temperature: 29,
        rainfallLevel: 'moderate',
        rainfallMm: 720,
        humidity: 65,
        season: 'kharif'
      },
      soil: {
        soilType: 'clay_loam',
        ph: 7.0,
        phUnknown: false,
        nitrogen: 'medium',
        phosphorus: 'medium',
        potassium: 'high',
        organicMatter: 'medium'
      },
      water: {
        availability: 'moderate',
        source: 'drip_sprinkler'
      },
      preferences: {
        farmSizeAcres: 2.5,
        durationPreference: 'long',
        budgetLevel: 'high',
        desiredIncomePerAcre: 180000,
        riskPreference: 'high'
      }
    }
  }
];

export const INITIAL_FORM_STATE: FarmerInputForm = {
  location: {
    state: 'Andhra Pradesh',
    district: 'Guntur',
    village: '',
    latitude: 16.3067,
    longitude: 80.4365
  },
  climate: {
    temperature: 28,
    rainfallLevel: 'moderate',
    rainfallMm: 650,
    humidity: 65,
    season: 'kharif'
  },
  soil: {
    soilType: 'red',
    ph: 6.8,
    phUnknown: false,
    nitrogen: 'medium',
    phosphorus: 'medium',
    potassium: 'medium',
    organicMatter: 'medium'
  },
  water: {
    availability: 'limited',
    source: 'borewell'
  },
  preferences: {
    farmSizeAcres: 3,
    durationPreference: 'medium',
    budgetLevel: 'moderate',
    desiredIncomePerAcre: 60000,
    riskPreference: 'moderate'
  }
};
