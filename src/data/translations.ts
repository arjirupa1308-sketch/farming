import { Language } from '../types';

export const TRANSLATIONS = {
  en: {
    appTitle: 'Smart Crop Advisor',
    appTagline: 'Empowering Farmers with Scientific Land & Crop Intelligence',
    home: 'Home',
    recommendation: 'Crop Recommendation',
    soilAnalysis: 'Soil Analysis',
    weather: 'Weather Advisory',
    comparison: 'Crop Comparison',
    calendar: 'Farming Calendar',
    dashboard: 'Farmer Dashboard',
    resources: 'Govt & Extension',
    about: 'About & Science',
    
    // Hero
    heroTitle: 'Choose the Right Crop for Your Land',
    heroSubtitle: 'Get precision crop recommendations based on your soil, climate, water availability, and location.',
    findCropBtn: 'Find the Best Crop',
    checkSoilBtn: 'Check Soil Health',
    heroBadge: 'ICAR & Agronomy University Backed Guidance',
    heroStatsAccuracy: 'Agronomic Rules',
    heroStatsCrops: 'Key Crops Analyzed',
    heroStatsLanguages: 'Bilingual (EN / తె)',
    quickPresetsTitle: 'Or Try Real Farmer Land Scenarios',

    // Form
    step1Title: '1. Location Details',
    step2Title: '2. Climate & Season',
    step3Title: '3. Soil Information',
    step4Title: '4. Water Availability',
    step5Title: '5. Farmer Preferences',
    stateLabel: 'State',
    districtLabel: 'District',
    villageLabel: 'Village / Mandal',
    detectGpsBtn: 'Detect My Location (GPS)',
    tempLabel: 'Average Temperature (°C)',
    rainfallLabel: 'Rainfall Condition',
    humidityLabel: 'Humidity (%)',
    seasonLabel: 'Current / Planned Season',
    autoWeatherBtn: 'Fetch Live Weather for Location',
    soilTypeLabel: 'Soil Type',
    soilPhLabel: 'Soil pH Level',
    iDontKnow: "I don't know (Use typical defaults)",
    nitrogenLabel: 'Nitrogen (N) Content',
    phosphorusLabel: 'Phosphorus (P) Content',
    potassiumLabel: 'Potassium (K) Content',
    organicMatterLabel: 'Organic Matter Level',
    waterAvailabilityLabel: 'Water Supply Status',
    waterSourceLabel: 'Primary Water Source',
    farmSizeLabel: 'Farm Size (Acres)',
    durationPrefLabel: 'Preferred Crop Duration',
    budgetLabel: 'Investment Budget Level',
    riskLabel: 'Farming Risk Tolerance',
    calculateBtn: 'Analyze Land & Recommend Crops',
    resetBtn: 'Reset All',
    
    // Soil Types
    alluvial: 'Alluvial Soil (ఒండ్రు నేల)',
    black: 'Black Soil / Regur (నల్లరేగడి నేల)',
    red: 'Red Soil (ఎర్ర నేల)',
    laterite: 'Laterite Soil (లేటరైట్ నేల)',
    sandy_loam: 'Sandy Loam (ఇసుక నేల)',
    clay_loam: 'Clay Loam (జిగురు నేల)',
    saline_alkaline: 'Saline / Alkaline (చవుడు నేల)',

    // Water Availabilities
    rainfed: 'Rain-fed (No assured irrigation / కేవలం వర్షాధారం)',
    limited: 'Limited Irrigation (1-2 critical waterings / పరిమిత నీటి వసతి)',
    moderate: 'Moderate Irrigation (Borewell/Drip / సాధారణ నీటి వసతి)',
    full: 'Full Irrigation (Canal / Perennial River / సమృద్ధిగా నీరు)',

    // Water Sources
    rain: 'Rainfall Only',
    borewell: 'Borewell / Tube well',
    canal: 'Canal System',
    river: 'River / Stream',
    farm_pond: 'Farm Pond / Check dam',
    drip_sprinkler: 'Drip or Sprinkler System',

    // Seasons
    kharif: 'Kharif (Monsoon: June - Oct)',
    rabi: 'Rabi (Winter: Oct - March)',
    summer: 'Summer / Zaid (March - June)',
    any: 'Any Season / Perennial',

    // Durations
    short: 'Short Duration (<90 days)',
    medium: 'Medium Duration (90 - 130 days)',
    long: 'Long Duration (>130 days)',

    // Budget & Risk
    low: 'Low',
    mediumRisk: 'Moderate',
    high: 'High',

    // Recommendation Results
    recommendationTitle: 'Recommended Crops for Your Land',
    recommendationSubtitle: 'Ranked scientifically by soil compatibility, water sufficiency, climate, and profitability.',
    suitability: 'Suitability Match',
    highSuitability: 'Highly Recommended',
    modSuitability: 'Moderate Suitability',
    lowSuitability: 'Conditional Suitability',
    whyThisCropLabel: 'Why this crop for your land?',
    viewDetails: 'Full Agronomy Guide',
    listen: 'Listen Aloud',
    stopListening: 'Stop Audio',
    addToCompare: 'Compare',
    inComparison: 'Added to Compare',
    saveToDashboard: 'Save to My Crops',
    saved: 'Saved',
    expectedYield: 'Expected Yield',
    estCost: 'Estimated Input Cost',
    potRevenue: 'Potential Revenue',
    estProfit: 'Estimated Net Profit',
    growingDuration: 'Growing Duration',
    waterNeeded: 'Water Required',
    sowingWindow: 'Sowing Window',
    harvestWindow: 'Harvest Window',
    pestsAndDiseases: 'Major Pests & Diseases',
    fertilizers: 'Fertilizer Protocol (NPK)',
    precautions: 'Important Field Precautions',
    disclaimerTitle: 'Agricultural Advisory Disclaimer',
    disclaimerText: 'These recommendations are based on agronomic standards from ICAR and State Agricultural Universities. Real yields and revenues vary by seed variety, weather fluctuations, market rates, and management practices. Please consult your local Agriculture Extension Officer or Krishi Vigyan Kendra (KVK) before making final investments.',
    
    // Soil Analysis Page
    soilAnalysisTitle: 'Soil Health & Fertility Diagnostic',
    soilAnalysisSubtitle: 'Understand your soil test values, identify deficiencies, and discover organic and mineral amendments.',
    soilHealthScore: 'Estimated Soil Health Index',
    soilRecommendations: 'Corrective Soil Amendments',
    idealCropsForSoil: 'Best Natural Crops for this Soil',
    
    // Weather
    weatherTitle: 'Agro-Meteorological Advisory',
    weatherSubtitle: 'Live weather and micro-climate forecasts tailored for field operations and spray windows.',
    currentTemp: 'Current Temperature',
    currentHumidity: 'Relative Humidity',
    currentWind: 'Wind Speed',
    sevenDayForecast: '7-Day Agronomic Forecast',
    sprayWindowAdvisory: 'Field Operation & Spray Window',
    
    // Comparison
    comparisonTitle: 'Side-by-Side Crop Comparison',
    comparisonSubtitle: 'Compare economics, water footprint, duration, and yield across up to 4 crops to make the best decision.',
    clearComparison: 'Clear All',
    selectCropsToCompare: 'Please select crops from the recommendations or list below to compare.',
    
    // Calendar
    calendarTitle: 'Smart Farming Lifecycle Calendar',
    calendarSubtitle: 'Stage-by-stage operational calendar from land preparation to post-harvest storage.',
    
    // Dashboard
    dashboardTitle: 'Farmer Command Dashboard',
    dashboardSubtitle: 'Your personalized land profile, active agro-alerts, saved crops, and seasonal milestones.',
    myLandProfile: 'My Active Land Profile',
    activeAlerts: 'Active Field Alerts & Advisories',
    mySavedCrops: 'My Saved Crops',

    // Alerts
    noAlerts: 'No critical weather or pest hazards detected for your zone at this moment.',
    alertRain: 'Heavy Rainfall Warning',
    alertDrought: 'Dry Spell / Moisture Stress',
    alertHeat: 'Heatwave Stress',
    alertPest: 'Pest Outbreak Alert',

    // Audio & Action
    listeningNow: 'Reading crop guidance...',
  },
  te: {
    appTitle: 'స్మార్ట్ పంట సలహాదారు',
    appTagline: 'రైతులకు శాస్త్రీయ భూమి మరియు పంట విజ్ఞానం',
    home: 'హోమ్',
    recommendation: 'పంటల సిఫార్సు',
    soilAnalysis: 'నేల పరీక్ష విశ్లేషణ',
    weather: 'వాతావరణ సలహాలు',
    comparison: 'పంటల పోలిక',
    calendar: 'వ్యవసాయ క్యాలెండర్',
    dashboard: 'రైతు డాష్‌బోర్డ్',
    resources: 'ప్రభుత్వ పథకాలు',
    about: 'విధానం & శాస్త్రం',
    
    // Hero
    heroTitle: 'మీ భూమికి సరైన పంటను ఎంచుకోండి',
    heroSubtitle: 'మీ నేల రకం, శీతోష్ణస్థితి, నీటి వసతి మరియు ప్రాంతం ఆధారంగా అత్యుత్తమ పంట సిఫార్సులు పొందండి.',
    findCropBtn: 'ఉత్తమ పంటను కనుగొనండి',
    checkSoilBtn: 'నేల సారాన్ని తనిఖీ చేయండి',
    heroBadge: 'ICAR & వ్యవసాయ విశ్వవిద్యాలయాల ప్రామాణిక సమాచారం',
    heroStatsAccuracy: 'శాస్త్రీయ నియమాలు',
    heroStatsCrops: 'ప్రధాన పంటల వివరాలు',
    heroStatsLanguages: 'ద్విభాషా వేదిక (తెలుగు / EN)',
    quickPresetsTitle: 'లేదా నేరుగా నిజమైన రైతు భూమి పరిస్థితులను ఎంచుకోండి',

    // Form
    step1Title: '1. ప్రాంత వివరాలు (Location)',
    step2Title: '2. వాతావరణం & కాలం (Climate & Season)',
    step3Title: '3. నేల సమాచారం (Soil Info)',
    step4Title: '4. నీటి వసతి (Water Availability)',
    step5Title: '5. రైతు ప్రాధాన్యతలు (Preferences)',
    stateLabel: 'రాష్ట్రం (State)',
    districtLabel: 'జిల్లా (District)',
    villageLabel: 'గ్రామం / మండలం (Village)',
    detectGpsBtn: 'నా లొకేషన్ గుర్తించండి (GPS)',
    tempLabel: 'సగటు ఉష్ణోగ్రత (°C)',
    rainfallLabel: 'వర్షపాతం పరిస్థితి',
    humidityLabel: 'గాలిలో తేమ శాతం (%)',
    seasonLabel: 'పంట కాలం (Season)',
    autoWeatherBtn: 'లొకేషన్ ఆధారంగా ప్రత్యక్ష వాతావరణం తీసుకోండి',
    soilTypeLabel: 'నేల రకం (Soil Type)',
    soilPhLabel: 'నేల pH విలువ (ఆమ్ల/క్షార స్థాయి)',
    iDontKnow: 'నాకు తెలియదు (సాధారణ విలువలు వాడండి)',
    nitrogenLabel: 'నత్రజని (N) మోతాదు',
    phosphorusLabel: 'భాస్వరం (P) మోతాదు',
    potassiumLabel: 'పొటాష్ (K) మోతాదు',
    organicMatterLabel: 'సేంద్రీయ కర్బనం (Organic Matter)',
    waterAvailabilityLabel: 'నీటి సదుపాయం (Water Supply)',
    waterSourceLabel: 'ప్రధాన నీటి వనరు (Water Source)',
    farmSizeLabel: 'భూమి విస్తీర్ణం (ఎకరాలు)',
    durationPrefLabel: 'పంట కాలపరిమితి ప్రాధాన్యత',
    budgetLabel: 'పెట్టుబడి స్థోమత (Budget)',
    riskLabel: 'రిస్క్ తీసుకునే సామర్థ్యం',
    calculateBtn: 'భూమిని విశ్లేషించి పంటలను సిఫార్సు చేయండి',
    resetBtn: 'మొత్తం రీసెట్ చేయండి',
    
    // Soil Types
    alluvial: 'ఒండ్రు నేల (Alluvial Soil)',
    black: 'నల్లరేగడి నేల (Black / Regur)',
    red: 'ఎర్ర నేల (Red Soil)',
    laterite: 'లేటరైట్ నేల (Laterite)',
    sandy_loam: 'ఇసుక లేదా తేలికపాటి నేల (Sandy Loam)',
    clay_loam: 'జిగురు / బంకమట్టి నేల (Clay Loam)',
    saline_alkaline: 'చవుడు / ఉప్పు నేల (Saline / Alkaline)',

    // Water Availabilities
    rainfed: 'కేవలం వర్షాధారం (Rain-fed / ఎటువంటి నీటి పారుదల లేదు)',
    limited: 'పరిమిత నీటి వసతి (1-2 రక్షక తడులు మాత్రమే)',
    moderate: 'సాధారణ నీటి వసతి (బోరుబావి / తుంపర లేదా బిందు సేద్యం)',
    full: 'సమృద్ధిగా నీరు (కాలువ / నిరంతర నది పారుదల)',

    // Water Sources
    rain: 'వర్షం మాత్రమే',
    borewell: 'బోరుబావి / బావి',
    canal: 'కాలువ నీరు',
    river: 'నది / వాగు',
    farm_pond: 'రైతు కుంట / చెరువు',
    drip_sprinkler: 'బిందు లేదా తుంపర సేద్యం',

    // Seasons
    kharif: 'ఖరీఫ్ (వర్షాకాలం: జూన్ - అక్టోబర్)',
    rabi: 'రబీ (శీతాకాలం: అక్టోబర్ - మార్చి)',
    summer: 'వేసవి / జాయెద్ (మార్చి - జూన్)',
    any: 'ఏ కాలమైనా / వార్షిక పంట',

    // Durations
    short: 'స్వల్పకాలికం (<90 రోజులు)',
    medium: 'మధ్యమకాలికం (90 - 130 రోజులు)',
    long: 'దీర్ఘకాలికం (>130 రోజులు)',

    // Budget & Risk
    low: 'తక్కువ',
    mediumRisk: 'మధ్యస్థం',
    high: 'ఎక్కువ',

    // Recommendation Results
    recommendationTitle: 'మీ భూమికి సిఫార్సు చేసిన ఉత్తమ పంటలు',
    recommendationSubtitle: 'నేల అనుకూలత, నీటి సరిపోలిక, శీతోష్ణస్థితి మరియు లాభాల ఆధారంగా వరుస క్రమంలో ఇవ్వబడ్డాయి.',
    suitability: 'అనుకూలత శాతం (Match)',
    highSuitability: 'అత్యంత అనుకూలం',
    modSuitability: 'మధ్యస్థ అనుకూలం',
    lowSuitability: 'పరిమిత అనుకూలం',
    whyThisCropLabel: 'ఈ పంట మీ భూమికి ఎందుకు సరైనది?',
    viewDetails: 'సమగ్ర సాగు వివరాలు',
    listen: 'వినండి (చదవండి)',
    stopListening: 'ఆపండి',
    addToCompare: 'పోల్చి చూడండి',
    inComparison: 'పోలికలో ఉంది',
    saveToDashboard: 'నా పంటలలో సేవ్ చేయండి',
    saved: 'సేవ్ అయింది',
    expectedYield: 'అంచనా దిగుబడి',
    estCost: 'ఎకరానికి పెట్టుబడి ఖర్చు',
    potRevenue: 'అంచనా ఆదాయం',
    estProfit: 'నికర లాభం (అంచనా)',
    growingDuration: 'పంట కాలపరిమితి',
    waterNeeded: 'నీటి అవసరం',
    sowingWindow: 'విత్తే సమయం',
    harvestWindow: 'కోత సమయం',
    pestsAndDiseases: 'ప్రధాన చీడపీడలు & తెగుళ్ళు',
    fertilizers: 'ఎరువుల యాజమాన్యం (NPK)',
    precautions: 'ముఖ్యమైన మెలకువలు & జాగ్రత్తలు',
    disclaimerTitle: 'వ్యవసాయ సలహా సూచన - ముఖ్య గమనిక',
    disclaimerText: 'ఈ సిఫార్సులు ICAR మరియు వ్యవసాయ విశ్వవిద్యాలయాల ప్రమాణాల ఆధారంగా అందించబడ్డాయి. విత్తన రకం, వాతావరణ మార్పులు, మార్కెట్ ధరలు మరియు నిర్వహణ ఆధారంగా వాస్తవ దిగుబడి మరియు ఆదాయాలు మారవచ్చు. పెట్టుబడి పెట్టే ముందు మీ స్థానిక వ్యవసాయ విస్తరణ అధికారి (AEO) లేదా కృషి విజ్ఞాన కేంద్రం (KVK) ను సంప్రదించండి.',
    
    // Soil Analysis Page
    soilAnalysisTitle: 'నేల ఆరోగ్య నిర్ధారణ & పోషకాల విశ్లేషణ',
    soilAnalysisSubtitle: 'మీ నేల పరీక్ష ఫలితాలను పరిశీలించి, లోపాలను సరిదిద్దే సేంద్రీయ మరియు రసాయన యాజమాన్య పద్ధతులను తెలుసుకోండి.',
    soilHealthScore: 'నేల ఆరోగ్య సూచిక',
    soilRecommendations: 'నేల సారాన్ని పెంచే దిద్దుబాటు చర్యలు',
    idealCropsForSoil: 'ఈ నేలకు సహజంగా అనుకూలమైన పంటలు',
    
    // Weather
    weatherTitle: 'ప్రత్యక్ష వ్యవసాయ వాతావరణ సలహా',
    weatherSubtitle: 'పొలంలో మందుల పిచికారీ మరియు నీటి తడుల ప్రణాళిక కోసం ఖచ్చితమైన వాతావరణ సూచనలు.',
    currentTemp: 'ప్రస్తుత ఉష్ణోగ్రత',
    currentHumidity: 'గాలిలో తేమ',
    currentWind: 'గాలి వేగం',
    sevenDayForecast: '7 రోజుల వాతావరణ అంచనా',
    sprayWindowAdvisory: 'మందులు పిచికారీ చేయడానికి అనుకూల సమయం',
    
    // Comparison
    comparisonTitle: 'పంటల ముఖాముఖి పోలిక',
    comparisonSubtitle: 'ఖర్చు, నీటి అవసరం, కాలపరిమితి మరియు లాభాల పరంగా 2 నుండి 4 పంటలను ఒకేచోట పోల్చి చూడండి.',
    clearComparison: 'మొత్తం క్లియర్ చేయండి',
    selectCropsToCompare: 'పోల్చడానికి సిఫార్సు చేసిన పంటల నుండి 2 లేదా ఎక్కువ పంటలను ఎంచుకోండి.',
    
    // Calendar
    calendarTitle: 'స్మార్ట్ వ్యవసాయ క్యాలెండర్',
    calendarSubtitle: 'దుక్కి దున్నడం నుండి కోత మరియు భద్రపరచడం వరకు దశలవారీగా చేయవలసిన పనులు.',
    
    // Dashboard
    dashboardTitle: 'రైతు కమాండ్ డాష్‌బోర్డ్',
    dashboardSubtitle: 'మీ భూమి సమాచారం, ప్రస్తుత వాతావరణ హెచ్చరికలు, సేవ్ చేసుకున్న పంటలు మరియు ప్రణాళికలు.',
    myLandProfile: 'నా భూమి వివరాలు',
    activeAlerts: 'ప్రస్తుత హెచ్చరికలు & సూచనలు',
    mySavedCrops: 'నేను సేవ్ చేసుకున్న పంటలు',

    // Alerts
    noAlerts: 'ప్రస్తుతం మీ ప్రాంతంలో ఎటువంటి తీవ్రమైన వాతావరణ లేదా పురుగుల ప్రమాద హెచ్చరికలు లేవు.',
    alertRain: 'భారీ వర్షపాతం హెచ్చరిక',
    alertDrought: 'తీవ్ర వర్షాభావం / కరువు బెట్ట',
    alertHeat: 'తీవ్రమైన ఎండ వేడిమి',
    alertPest: 'పురుగుల ఉధృతి ప్రమాద హెచ్చరిక',

    // Audio & Action
    listeningNow: 'పంట వివరాలు చదువుతున్నాము...',
  }
};
