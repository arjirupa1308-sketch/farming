import { CropInfo } from '../types';

export const CROPS_DATABASE: CropInfo[] = [
  {
    id: 'rice',
    nameEn: 'Rice (Paddy)',
    nameTe: 'వరి (వరి ధాన్యం)',
    scientificName: 'Oryza sativa',
    category: 'cereal',
    suitableSoils: ['alluvial', 'clay_loam', 'black'],
    idealPhMin: 5.5,
    idealPhMax: 6.8,
    toleratedPhMin: 5.0,
    toleratedPhMax: 8.0,
    waterRequirementCategory: 'very_high',
    waterRequirementMm: { min: 1100, max: 1400 },
    minWaterAvailability: 'full',
    idealTempMin: 22,
    idealTempMax: 33,
    suitableSeasons: ['kharif', 'rabi'],
    durationDays: { min: 115, max: 145 },
    expectedYieldPerAcre: { min: 24, max: 32, unit: 'Quintals' },
    estimatedCostPerAcre: { min: 22000, max: 28000 },
    potentialRevenuePerAcre: { min: 52000, max: 70000 },
    majorPestsAndDiseases: {
      en: ['Stem Borer', 'Brown Plant Hopper (BPH)', 'Bacterial Leaf Blight', 'Blast disease'],
      te: ['కాండం తొలుచు పురుగు', 'సుడి దోమ (BPH)', 'బ్యాక్టీరియల్ ఆకు ఎండు తెగులు', 'అగ్గి తెగులు (బ్లాస్ట్)']
    },
    fertilizerRequirements: {
      en: 'NPK 120:60:40 kg/ha. Apply Zinc Sulphate 25 kg/ha basal. Split Nitrogen into 3 doses: basal, tillering, panicle initiation.',
      te: 'ఎకరానికి నత్రజని 48 కేజీలు, భాస్వరం 24 కేజీలు, పొటాష్ 16 కేజీలు. 10 కేజీల జింక్ సల్ఫేట్ ఆఖరి దుక్కిలో వేయాలి.'
    },
    sowingPeriod: {
      en: 'Kharif: June - July (Nursery), Rabi: Nov - Dec',
      te: 'ఖరీఫ్: జూన్ - జూలై (నారుమడి), రబీ: నవంబర్ - డిసెంబర్'
    },
    harvestPeriod: {
      en: 'Kharif: Oct - Nov, Rabi: March - April',
      te: 'ఖరీఫ్: అక్టోబర్ - నవంబర్, రబీ: మార్చి - ఏప్రిల్'
    },
    importantPrecautions: {
      en: [
        'Requires continuous standing water or frequent saturated irrigation.',
        'Avoid excessive urea which invites leaf blast and Brown Plant Hopper.',
        'Drain water completely 10 days before harvest to hasten uniform grain ripening.'
      ],
      te: [
        'నిరంతరం నీటి వసతి లేదా సమృద్ధిగా తడులు అవసరం.',
        'అధిక యూరియా వాడితే అగ్గి తెగులు మరియు సుడి దోమ ఉధృతి పెరుగుతుంది.',
        'కోతకు 10 రోజుల ముందు పొలంలో నీటిని తీసివేయాలి.'
      ]
    },
    whyThisCropSummary: {
      en: 'Ideal for fertile clayey/alluvial soils with guaranteed canal or borewell irrigation and warm humid temperatures.',
      te: 'కాలువ లేదా పూర్తి బోరుబావి నీటి వసతి ఉన్న ఒండ్రు, నల్లరేగడి నేలలకు అత్యుత్తమ ఎంపిక.'
    },
    iconName: 'Wheat',
    dataSource: 'ICAR-Indian Institute of Rice Research (IIRR) & ANGRAU'
  },
  {
    id: 'cotton',
    nameEn: 'Cotton (White Gold)',
    nameTe: 'పత్తి (తెల్ల బంగారం)',
    scientificName: 'Gossypium hirsutum',
    category: 'commercial',
    suitableSoils: ['black', 'alluvial', 'clay_loam'],
    idealPhMin: 6.0,
    idealPhMax: 8.0,
    toleratedPhMin: 5.5,
    toleratedPhMax: 8.5,
    waterRequirementCategory: 'moderate',
    waterRequirementMm: { min: 650, max: 850 },
    minWaterAvailability: 'limited',
    idealTempMin: 21,
    idealTempMax: 35,
    suitableSeasons: ['kharif'],
    durationDays: { min: 140, max: 180 },
    expectedYieldPerAcre: { min: 8, max: 14, unit: 'Quintals' },
    estimatedCostPerAcre: { min: 25000, max: 32000 },
    potentialRevenuePerAcre: { min: 56000, max: 98000 },
    majorPestsAndDiseases: {
      en: ['Pink Bollworm', 'Whitefly', 'Thrips & Aphids', 'Fusarium Wilt', 'Leaf Curl'],
      te: ['గులాబీ రంగు కాయ తొలుచు పురుగు', 'తెల్లదోమ', 'తామర పురుగులు, పేనుబంక', 'ఎండు తెగులు', 'ఆకుముడత']
    },
    fertilizerRequirements: {
      en: 'NPK 120:60:60 kg/ha. Apply Magnesium Sulphate and Boron during boll development to prevent red leaf disease.',
      te: 'ఎకరానికి 48 కిలోల నత్రజని, 24 కిలోల భాస్వరం, 24 కిలోల పొటాష్. కాయలు పెరిగే దశలో మెగ్నీషియం లోపం రాకుండా జాగ్రత్తలు తీసుకోవాలి.'
    },
    sowingPeriod: {
      en: 'Mid June to Mid July with onset of monsoon',
      te: 'జూన్ 15 నుండి జూలై 15 వరకు (వర్షాలు ప్రారంభమైన వెంటనే)'
    },
    harvestPeriod: {
      en: 'November to February (Multiple pickings)',
      te: 'నవంబర్ నుండి ఫిబ్రవరి వరకు (విడతల వారీగా పత్తి తీయడం)'
    },
    importantPrecautions: {
      en: [
        'Waterlogging for more than 48 hours severely destroys cotton root system; ensure good drainage.',
        'Install pheromone traps (5 traps/acre) at 45 days after sowing to monitor Pink Bollworm.',
        'Do not spray monocrotophos or synthetic pyrethroids early in crop season to preserve natural predators.'
      ],
      te: [
        'పొలంలో 48 గంటలకు మించి నీరు నిలిస్తే వేరు కుళ్ళు వస్తుంది; మురుగు నీటి కాలువలు ముఖ్యం.',
        'గులాబీ పురుగు నివారణకు 45 రోజుల నుండి ఎకరానికి 5 లింగాకర్షక బుట్టలు పెట్టాలి.',
        'మొదటి దశలో మితిమీరి పురుగుమందులు వాడకూడదు.'
      ]
    },
    whyThisCropSummary: {
      en: 'High-value cash crop exceptionally suited to deep black soils with good moisture retention in Kharif.',
      te: 'తేమను నిల్వ ఉంచే లోతైన నల్లరేగడి నేలలకు అధిక ఆదాయాన్ని ఇచ్చే వాణిజ్య పంట.'
    },
    iconName: 'Flower2',
    dataSource: 'ICAR-Central Institute for Cotton Research (CICR)'
  },
  {
    id: 'groundnut',
    nameEn: 'Groundnut (Peanut)',
    nameTe: 'వేరుశెనగ (పల్లీ)',
    scientificName: 'Arachis hypogaea',
    category: 'oilseed',
    suitableSoils: ['red', 'sandy_loam', 'alluvial', 'laterite'],
    idealPhMin: 6.0,
    idealPhMax: 7.2,
    toleratedPhMin: 5.5,
    toleratedPhMax: 7.8,
    waterRequirementCategory: 'low',
    waterRequirementMm: { min: 400, max: 600 },
    minWaterAvailability: 'rainfed',
    idealTempMin: 22,
    idealTempMax: 32,
    suitableSeasons: ['kharif', 'rabi'],
    durationDays: { min: 100, max: 120 },
    expectedYieldPerAcre: { min: 10, max: 16, unit: 'Quintals' },
    estimatedCostPerAcre: { min: 18000, max: 24000 },
    potentialRevenuePerAcre: { min: 50000, max: 80000 },
    majorPestsAndDiseases: {
      en: ['Tikka Leaf Spot', 'Rust', 'Collar Rot', 'Spodoptera / Leaf Miner'],
      te: ['తిక్కా ఆకుమచ్చ తెగులు', 'తుప్పు తెగులు', 'మొవ్వు కుళ్ళు', 'ఆకుముడత పురుగు']
    },
    fertilizerRequirements: {
      en: 'NPK 20:40:40 kg/ha. Apply Gypsum @ 200 kg/acre at 40-45 days after sowing (pegging stage) for optimal pod filling.',
      te: 'ఎకరానికి 8 కిలోల నత్రజని, 16 కిలోల భాస్వరం, 16 కిలోల పొటాష్. ఊడలు దిగే 40-45 రోజుల దశలో ఎకరానికి 200 కిలోల జిప్సం తప్పనిసరిగా వేయాలి.'
    },
    sowingPeriod: {
      en: 'Kharif: June - July, Rabi: Oct - Nov',
      te: 'ఖరీఫ్: జూన్ - జూలై, రబీ: అక్టోబర్ - నవంబర్'
    },
    harvestPeriod: {
      en: 'Kharif: Sept - Oct, Rabi: Feb - March',
      te: 'ఖరీఫ్: సెప్టెంబర్ - అక్టోబర్, రబీ: ఫిబ్రవరి - మార్చి'
    },
    importantPrecautions: {
      en: [
        'Light, well-drained sandy loam soil is essential for easy peg penetration and pod development.',
        'Avoid heavy clay soils where pegging fails and pod harvesting causes kernel breakage.',
        'Critical irrigation windows: Flowering (25-30 DAS) and Pod development (45-60 DAS).'
      ],
      te: [
        'ఊడలు సులువుగా నేలలోకి దిగడానికి గుల్లగా ఉండే ఎర్ర లేదా ఇసుక రేగడి నేలలు ఎంతో అనుకూలం.',
        'బరువైన జిగురు నేలల్లో కాయలు సరిగా ఊరవు మరియు తవ్వేటప్పుడు ఊడిపోతాయి.',
        'పూత మరియు కాయ ఊరే దశల్లో తేమ కొరత లేకుండా చూడాలి.'
      ]
    },
    whyThisCropSummary: {
      en: 'Tolerant to mild drought, improves soil nitrogen naturally, and yields best in light, sandy loam, and red soils.',
      te: 'తేలికపాటి ఎర్ర నేలలకు, వర్షాధార లేదా పరిమిత నీటి వసతికి అత్యంత అనువైన నూనెగింజల పంట.'
    },
    iconName: 'Nut',
    dataSource: 'ICAR-Directorate of Groundnut Research & ANGRAU'
  },
  {
    id: 'maize',
    nameEn: 'Maize (Corn)',
    nameTe: 'మొక్కజొన్న',
    scientificName: 'Zea mays',
    category: 'cereal',
    suitableSoils: ['alluvial', 'red', 'black', 'clay_loam'],
    idealPhMin: 5.8,
    idealPhMax: 7.2,
    toleratedPhMin: 5.2,
    toleratedPhMax: 8.0,
    waterRequirementCategory: 'moderate',
    waterRequirementMm: { min: 500, max: 700 },
    minWaterAvailability: 'limited',
    idealTempMin: 20,
    idealTempMax: 32,
    suitableSeasons: ['kharif', 'rabi', 'summer'],
    durationDays: { min: 95, max: 115 },
    expectedYieldPerAcre: { min: 25, max: 35, unit: 'Quintals' },
    estimatedCostPerAcre: { min: 16000, max: 22000 },
    potentialRevenuePerAcre: { min: 45000, max: 68000 },
    majorPestsAndDiseases: {
      en: ['Fall Armyworm (Spodoptera frugiperda)', 'Stem Borer', 'Turcicum Leaf Blight', 'Banded Leaf and Sheath Blight'],
      te: ['కత్తెర పురుగు (ఫాల్ ఆర్మీవార్మ్)', 'కాండం తొలిచే పురుగు', 'తుర్సికమ్ ఆకు ఎండు తెగులు', 'మచ్చ తెగులు']
    },
    fertilizerRequirements: {
      en: 'NPK 120:60:50 kg/ha. Apply Nitrogen in 3 splits (basal, knee-high 30 DAS, and tasseling stage). Zinc is vital.',
      te: 'ఎకరానికి 48 కిలోల నత్రజని, 24 కిలోల భాస్వరం, 20 కిలోల పొటాష్. మోకాలి ఎత్తు దశలో మరియు కంకి దశలో నత్రజని అందించాలి.'
    },
    sowingPeriod: {
      en: 'Kharif: June - July, Rabi: Oct - Nov',
      te: 'ఖరీఫ్: జూన్ - జూలై, రబీ: అక్టోబర్ - నవంబర్'
    },
    harvestPeriod: {
      en: 'Kharif: Sept - Oct, Rabi: Feb - March',
      te: 'ఖరీఫ్: సెప్టెంబర్ - అక్టోబర్, రబీ: ఫిబ్రవరి - మార్చి'
    },
    importantPrecautions: {
      en: [
        'Inspect crop whorls weekly from 10 days of emergence for Fall Armyworm egg masses and pinhole damage.',
        'Avoid waterlogging, especially at seedling and pollination stages.',
        'Ensure soil moisture is maintained during flowering (tasseling and silking).'
      ],
      te: [
        'మొలకెత్తిన 10 రోజుల నుండి కత్తెర పురుగు ఆనవాళ్ళను సుడిలో గమనించి నివారణ చర్యలు చేపట్టాలి.',
        'మొక్కజొన్నకు నీరు నిల్వ ఉండరాదు, నీటి పారుదల సక్రమంగా ఉండాలి.',
        'పూత మరియు కంకి ఏర్పడే దశలో బెట్ట రాకుండా చూసుకోవాలి.'
      ]
    },
    whyThisCropSummary: {
      en: 'Fast growth, resilient yield, high market demand for poultry feed and starch, and broad soil adaptability.',
      te: 'తక్కువ సమయంలో అధిక దిగుబడినిచ్చే పంట; దాణా మరియు ఆహార పరిశ్రమలలో మంచి డిమాండ్ ఉంటుంది.'
    },
    iconName: 'Sparkles',
    dataSource: 'ICAR-Indian Institute of Maize Research (IIMR)'
  },
  {
    id: 'red_gram',
    nameEn: 'Red Gram (Pigeonpea / Toor Dal)',
    nameTe: 'కందులు (తోర్ దాల్)',
    scientificName: 'Cajanus cajan',
    category: 'pulse',
    suitableSoils: ['black', 'red', 'alluvial', 'laterite'],
    idealPhMin: 6.0,
    idealPhMax: 7.8,
    toleratedPhMin: 5.5,
    toleratedPhMax: 8.2,
    waterRequirementCategory: 'low',
    waterRequirementMm: { min: 350, max: 550 },
    minWaterAvailability: 'rainfed',
    idealTempMin: 20,
    idealTempMax: 35,
    suitableSeasons: ['kharif'],
    durationDays: { min: 140, max: 180 },
    expectedYieldPerAcre: { min: 6, max: 10, unit: 'Quintals' },
    estimatedCostPerAcre: { min: 12000, max: 17000 },
    potentialRevenuePerAcre: { min: 42000, max: 75000 },
    majorPestsAndDiseases: {
      en: ['Gram Pod Borer (Helicoverpa armigera)', 'Maruca Pod Borer', 'Fusarium Wilt', 'Sterility Mosaic Disease'],
      te: ['శనగ పచ్చ పురుగు (హెలికోవిర్పా)', 'మారుక మచ్చల పురుగు', 'ఎండు తెగులు', 'స్టెరిలిటీ మొజాయిక్ (గొడ్రాలి తెగులు)']
    },
    fertilizerRequirements: {
      en: 'NPK 20:50:20 kg/ha. Apply Rhizobium seed inoculation. Red gram fixes 40 kg atmospheric nitrogen per hectare.',
      te: 'ఎకరానికి 8 కిలోల నత్రజని, 20 కిలోల భాస్వరం. విత్తన శుద్ధికి రైజోబియం కల్చర్ వాడటం వల్ల వేరు బుడిపెల ద్వారా నేల సారవంతమవుతుంది.'
    },
    sowingPeriod: {
      en: 'June to July (onset of South-West Monsoon)',
      te: 'జూన్ నుండి జూలై (తొలకరి వర్షాలు పడగానే)'
    },
    harvestPeriod: {
      en: 'December to January',
      te: 'డిసెంబర్ నుండి జనవరి'
    },
    importantPrecautions: {
      en: [
        'Deep tap root system makes it extremely drought-resistant; ideal for dryland rain-fed farming.',
        'Nipping / pruning terminal buds at 45-50 days promotes heavy secondary branching and higher pod sets.',
        'Pest monitoring during flowering is critical to protect tender pods.'
      ],
      te: [
        'లోతైన తల్లివేరు వ్యవస్థ ఉండటం వల్ల కరువును తట్టుకుంటుంది; వర్షాధార భూములకు ఉత్తమం.',
        '45-50 రోజుల వయసులో చిగుళ్ళు తుంచితే ఎక్కువ కొమ్మలు వచ్చి కాయల సంఖ్య పెరుగుతుంది.',
        'పూత దశలో పురుగుల నివారణకు సరైన సమయంలో సస్యరక్షణ చేయాలి.'
      ]
    },
    whyThisCropSummary: {
      en: 'Outstanding drought hardiness, fixes atmospheric nitrogen, low input cost, and fetches premium market prices.',
      te: 'కరువును తట్టుకుని తక్కువ పెట్టుబడితో ఎక్కువ లాభాన్ని ఇచ్చే అద్భుతమైన పప్పుధాన్యాల పంట.'
    },
    iconName: 'Bean',
    dataSource: 'ICAR-Indian Institute of Pulses Research (IIPR)'
  },
  {
    id: 'bengal_gram',
    nameEn: 'Bengal Gram (Chickpea / Chana)',
    nameTe: 'శనగలు (చనా)',
    scientificName: 'Cicer arietinum',
    category: 'pulse',
    suitableSoils: ['black', 'alluvial', 'clay_loam'],
    idealPhMin: 6.0,
    idealPhMax: 8.0,
    toleratedPhMin: 5.5,
    toleratedPhMax: 8.5,
    waterRequirementCategory: 'low',
    waterRequirementMm: { min: 250, max: 400 },
    minWaterAvailability: 'rainfed',
    idealTempMin: 14,
    idealTempMax: 28,
    suitableSeasons: ['rabi'],
    durationDays: { min: 90, max: 110 },
    expectedYieldPerAcre: { min: 7, max: 12, unit: 'Quintals' },
    estimatedCostPerAcre: { min: 11000, max: 16000 },
    potentialRevenuePerAcre: { min: 38000, max: 66000 },
    majorPestsAndDiseases: {
      en: ['Helicoverpa Pod Borer', 'Dry Root Rot', 'Wilt', 'Ascochyta Blight'],
      te: ['శనగ పచ్చ పురుగు', 'ఎండు తెగులు', 'వేరుకుళ్ళు తెగులు', 'ఆకుమచ్చ']
    },
    fertilizerRequirements: {
      en: 'NPK 20:40:20 kg/ha basal. Seed treatment with Trichoderma viride and Rhizobium.',
      te: 'ఎకరానికి 8 కిలోల నత్రజని, 16 కిలోల భాస్వరం. ట్రైకోడెర్మా విరిడె మరియు రైజోబియంతో విత్తన శుద్ధి తప్పనిసరి.'
    },
    sowingPeriod: {
      en: 'October to November (Rabi season after Kharif harvest)',
      te: 'అక్టోబర్ నుండి నవంబర్ (రబీ కాలంలో)'
    },
    harvestPeriod: {
      en: 'February to March',
      te: 'ఫిబ్రవరి నుండి మార్చి'
    },
    importantPrecautions: {
      en: [
        'Requires cool, dry winter weather; cloudy or humid weather invites blight and fungal rot.',
        'Requires residual moisture in black soil; 1 or 2 protective irrigations at podding stage boost yield by 30%.',
        'Avoid waterlogging at all costs.'
      ],
      te: [
        'చల్లని, పొడి వాతావరణం అనుకూలం. మబ్బులతో కూడిన వాతావరణంలో పురుగుల దాడి పెరుగుతుంది.',
        'నల్లరేగడి నేలలోని నిల్వ తేమతో చక్కగా పెరుగుతుంది; కాయ దశలో ఒక్క తడి ఇస్తే దిగుబడి పెరుగుతుంది.',
        'పొలంలో నీరు నిలువకుండా చూడాలి.'
      ]
    },
    whyThisCropSummary: {
      en: 'Premier Rabi pulse crop thriving on residual soil moisture in deep black soils with low water requirement.',
      te: 'రబీ కాలంలో నల్లరేగడి నేలల్లో మిగిలిన తేమతో తక్కువ ఖర్చుతో పండే ప్రధాన పప్పు పంట.'
    },
    iconName: 'CircleDot',
    dataSource: 'ICAR-IIPR & PJTSAU'
  },
  {
    id: 'chilli',
    nameEn: 'Chilli (Mirchi)',
    nameTe: 'మిరప',
    scientificName: 'Capsicum annuum',
    category: 'vegetable',
    suitableSoils: ['black', 'red', 'alluvial', 'clay_loam'],
    idealPhMin: 6.2,
    idealPhMax: 7.5,
    toleratedPhMin: 5.5,
    toleratedPhMax: 8.0,
    waterRequirementCategory: 'moderate',
    waterRequirementMm: { min: 600, max: 900 },
    minWaterAvailability: 'moderate',
    idealTempMin: 20,
    idealTempMax: 32,
    suitableSeasons: ['kharif', 'rabi'],
    durationDays: { min: 150, max: 210 },
    expectedYieldPerAcre: { min: 18, max: 30, unit: 'Dry Quintals' },
    estimatedCostPerAcre: { min: 55000, max: 80000 },
    potentialRevenuePerAcre: { min: 150000, max: 320000 },
    majorPestsAndDiseases: {
      en: ['Black Thrips (Thrips parvispinus)', 'Mites', 'Gemini Virus / Murda (Leaf Curl)', 'Die-back / Fruit Rot (Anthracnose)'],
      te: ['నల్ల తామర పురుగు (బ్లాక్ త్రిప్స్)', 'నల్లి / పేనుబంక', 'బొబ్బర / ముడత తెగులు', 'కొమ్మ ఎండు మరియు కాయకుళ్ళు తెగులు']
    },
    fertilizerRequirements: {
      en: 'NPK 150:60:80 kg/ha. Apply organic neem cake @ 200 kg/acre and split potash applications during fruit development.',
      te: 'ఎకరానికి 60 కిలోల నత్రజని, 24 కిలోల భాస్వరం, 32 కిలోల పొటాష్. ఎకరానికి 200 కిలోల వేపపిండి వేస్తే నేలలోని పురుగులు అదుపులో ఉంటాయి.'
    },
    sowingPeriod: {
      en: 'Nursery: July - August; Transplanting: August - September',
      te: 'నారుమడి: జూలై - ఆగస్టు; నాట్లు: ఆగస్టు - సెప్టెంబర్'
    },
    harvestPeriod: {
      en: 'December to April (Multiple pickings)',
      te: 'డిసెంబర్ నుండి ఏప్రిల్ వరకు (విడతల వారీగా కోతలు)'
    },
    importantPrecautions: {
      en: [
        'High investment & high return crop; strictly maintain integrated pest management (IPM) for Black Thrips.',
        'Use blue sticky traps (20-30/acre) and silver-black reflective plastic mulch.',
        'Ensure perfect drainage as standing water causes root wilt within 24 hours.'
      ],
      te: [
        'అధిక పెట్టుబడి, అత్యధిక ఆదాయం ఇచ్చే పంట; నల్ల తామర పురుగుపై నిరంతర నిఘా ఉంచాలి.',
        'ఎకరానికి 20-30 నీలి రంగు జిగురు అట్టలు మరియు మల్చింగ్ షీట్లు వాడటం మంచిది.',
        'నీరు నిలిస్తే వెంటనే వేరు కుళ్ళు వస్తుంది, మురుగునీటి వసతి తప్పనిసరి.'
      ]
    },
    whyThisCropSummary: {
      en: 'High-value commercial spice capable of exceptional profit for farmers with moderate irrigation and intensive care.',
      te: 'సమగ్ర సస్యరక్షణ, నీటి వసతి ఉన్న రైతులకు రికార్డు స్థాయి లాభాలు తెచ్చిపెట్టే వాణిజ్య సుగంధ పంట.'
    },
    iconName: 'Flame',
    dataSource: 'ICAR-Indian Institute of Horticultural Research (IIHR)'
  },
  {
    id: 'sugarcane',
    nameEn: 'Sugarcane',
    nameTe: 'చెరకు',
    scientificName: 'Saccharum officinarum',
    category: 'commercial',
    suitableSoils: ['alluvial', 'black', 'clay_loam'],
    idealPhMin: 6.5,
    idealPhMax: 7.5,
    toleratedPhMin: 5.5,
    toleratedPhMax: 8.5,
    waterRequirementCategory: 'very_high',
    waterRequirementMm: { min: 1500, max: 2200 },
    minWaterAvailability: 'full',
    idealTempMin: 22,
    idealTempMax: 36,
    suitableSeasons: ['any'],
    durationDays: { min: 300, max: 365 },
    expectedYieldPerAcre: { min: 35, max: 55, unit: 'Tonnes' },
    estimatedCostPerAcre: { min: 45000, max: 60000 },
    potentialRevenuePerAcre: { min: 110000, max: 175000 },
    majorPestsAndDiseases: {
      en: ['Early Shoot Borer', 'Internode Borer', 'Red Rot', 'Smut', 'Woolly Aphid'],
      te: ['మొవ్వు తొలిచే పురుగు', 'కణుపు తొలిచే పురుగు', 'ఎర్ర కుళ్ళు తెగులు (రెడ్ రాట్)', 'కాటుక తెగులు', 'తెల్ల పిండిపురుగు']
    },
    fertilizerRequirements: {
      en: 'NPK 250:100:120 kg/ha. Apply Nitrogen in splits at 30, 60, 90, and 120 days after planting. Trash mulching saves water.',
      te: 'ఎకరానికి 100 కిలోల నత్రజని, 40 కిలోల భాస్వరం, 48 కిలోల పొటాష్. 30, 60, 90, 120 రోజులకు నత్రజనిని విడతల వారీగా అందించాలి.'
    },
    sowingPeriod: {
      en: 'Main planting: January to March (Ex-seasonal: October)',
      te: 'ప్రధాన నాట్లు: జనవరి నుండి మార్చి వరకు (శరదృతువు: అక్టోబర్)'
    },
    harvestPeriod: {
      en: 'December to April (10 to 12 months after planting)',
      te: 'డిసెంబర్ నుండి ఏప్రిల్ (నాటిన 10-12 నెలలకు)'
    },
    importantPrecautions: {
      en: [
        'Requires dependable year-round water supply; do not cultivate under rain-fed or scarce water conditions.',
        'Use drip irrigation paired with fertigation to reduce water usage by 40-50%.',
        'Trash mulching between cane rows suppresses weeds and preserves critical soil moisture.'
      ],
      te: [
        'సంవత్సరం పొడవునా సమృద్ధిగా నీటి వసతి తప్పనిసరి; వర్షాధారంగా సాగు చేయరాదు.',
        'బిందు సేద్యం (డ్రిప్) వాడటం వల్ల 40-50% నీరు ఆదా అవ్వడంతో పాటు దిగుబడి పెరుగుతుంది.',
        'చెరకు పిప్పి/ఆకులను వరుసల మధ్య పరచడం వల్ల తేమ ఆవిరి కాకుండా కలుపు నివారించవచ్చు.'
      ]
    },
    whyThisCropSummary: {
      en: 'Heavy perennial cash crop for canal-fed zones with guaranteed sugar mill buyback and strong biomass yields.',
      te: 'సంవత్సరం మొత్తం సమృద్ధిగా నీరు ఉన్న ప్రాంతాలకు షుగర్ ఫ్యాక్టరీ మద్దతు ధరతో సురక్షితమైన వాణిజ్య పంట.'
    },
    iconName: 'TreePine',
    dataSource: 'ICAR-Sugarcane Breeding Institute (SBI)'
  },
  {
    id: 'pearl_millet',
    nameEn: 'Pearl Millet (Bajra / Sajjalu)',
    nameTe: 'సజ్జలు (బాజ్రా)',
    scientificName: 'Pennisetum glaucum',
    category: 'millet',
    suitableSoils: ['red', 'sandy_loam', 'laterite', 'alluvial'],
    idealPhMin: 6.0,
    idealPhMax: 8.0,
    toleratedPhMin: 5.5,
    toleratedPhMax: 8.8,
    waterRequirementCategory: 'low',
    waterRequirementMm: { min: 250, max: 400 },
    minWaterAvailability: 'rainfed',
    idealTempMin: 25,
    idealTempMax: 38,
    suitableSeasons: ['kharif', 'summer'],
    durationDays: { min: 75, max: 90 },
    expectedYieldPerAcre: { min: 10, max: 16, unit: 'Quintals' },
    estimatedCostPerAcre: { min: 8000, max: 12000 },
    potentialRevenuePerAcre: { min: 24000, max: 40000 },
    majorPestsAndDiseases: {
      en: ['Downy Mildew (Green Ear Disease)', 'Ergot', 'Shoot Fly', 'Stem Borer'],
      te: ['వెర్రికంకి తెగులు (డౌనీ మిల్డ్యూ)', 'జిగురు తెగులు (ఎర్గోట్)', 'మొవ్వు ఈగ', 'కాండం తొలిచే పురుగు']
    },
    fertilizerRequirements: {
      en: 'NPK 60:30:20 kg/ha. Highly nutrient efficient with minimal chemical requirements.',
      te: 'ఎకరానికి 24 కిలోల నత్రజని, 12 కిలోల భాస్వరం, 8 కిలోల పొటాష్. స్వల్ప ఎరువులతో అధిక దిగుబడి ఇస్తుంది.'
    },
    sowingPeriod: {
      en: 'June to July (Monsoon season)',
      te: 'జూన్ నుండి జూలై (తొలకరి వర్షాలకు)'
    },
    harvestPeriod: {
      en: 'September to October',
      te: 'సెప్టెంబర్ నుండి అక్టోబర్'
    },
    importantPrecautions: {
      en: [
        'Super climate resilient: survives heat up to 42°C and severe drought spells.',
        'Use certified hybrid seeds treated with metalaxyl against downy mildew.',
        'Harvest immediately when grains harden to prevent bird damage and shattering.'
      ],
      te: [
        'విపరీతమైన ఎండను (42°C వరకు) మరియు తీవ్రమైన కరువును తట్టుకునే అద్భుత చిరుధాన్యం.',
        'వెర్రికంకి తెగులు రాకుండా విత్తన శుద్ధి చేసిన విత్తనాలను మాత్రమే వాడాలి.',
        'గింజ గట్టిపడగానే కోత కోయాలి, పక్షుల బెడద రాకుండా జాగ్రత్త పడాలి.'
      ]
    },
    whyThisCropSummary: {
      en: 'Ultimate climate-smart super-millet with minimal water needs, thriving in poor sandy soils and hot climates.',
      te: 'తక్కువ నీటితో, తీవ్రమైన ఎండలలో కూడా తక్కువ పెట్టుబడితో పండే ఆరోగ్యకరమైన చిరుధాన్యం.'
    },
    iconName: 'Sparkle',
    dataSource: 'ICAR-Indian Institute of Millets Research (IIMR)'
  },
  {
    id: 'finger_millet',
    nameEn: 'Finger Millet (Ragi / Mandua)',
    nameTe: 'రాగులు (తైదలు / రాగి)',
    scientificName: 'Eleusine coracana',
    category: 'millet',
    suitableSoils: ['red', 'laterite', 'sandy_loam', 'alluvial'],
    idealPhMin: 5.5,
    idealPhMax: 7.5,
    toleratedPhMin: 4.8,
    toleratedPhMax: 8.0,
    waterRequirementCategory: 'low',
    waterRequirementMm: { min: 300, max: 450 },
    minWaterAvailability: 'rainfed',
    idealTempMin: 18,
    idealTempMax: 32,
    suitableSeasons: ['kharif', 'rabi'],
    durationDays: { min: 95, max: 115 },
    expectedYieldPerAcre: { min: 10, max: 15, unit: 'Quintals' },
    estimatedCostPerAcre: { min: 9000, max: 13000 },
    potentialRevenuePerAcre: { min: 32000, max: 55000 },
    majorPestsAndDiseases: {
      en: ['Blast (Pyricularia grisea)', 'Stem Borer', 'Aphids'],
      te: ['రాగి అగ్గి తెగులు (బ్లాస్ట్)', 'కాండం తొలిచే పురుగు', 'పేనుబంక']
    },
    fertilizerRequirements: {
      en: 'NPK 50:40:25 kg/ha. Highly responsive to farmyard manure (FYM) @ 5 tonnes/acre.',
      te: 'ఎకరానికి 20 కిలోల నత్రజని, 16 కిలోల భాస్వరం, 10 కిలోల పొటాష్. పశువుల ఎరువు వేస్తే మరింత చక్కటి దిగుబడి వస్తుంది.'
    },
    sowingPeriod: {
      en: 'Kharif: June - July, Rabi: Dec - Jan',
      te: 'ఖరీఫ్: జూన్ - జూలై, రబీ: డిసెంబర్ - జనవరి'
    },
    harvestPeriod: {
      en: 'Kharif: Oct - Nov, Rabi: March - April',
      te: 'ఖరీఫ్: అక్టోబర్ - నవంబర్, రబీ: మార్చి - ఏప్రిల్'
    },
    importantPrecautions: {
      en: [
        'Extremely rich in Calcium and Iron; high nutritional and growing market value.',
        'Performs best when transplanted as 21-day seedlings rather than direct broadcasting.',
        'Tolerates acidic soils where other cereals struggle.'
      ],
      te: [
        'కాల్షియం, ఐరన్ సమృద్ధిగా ఉండే పోషక ఆహారం; మార్కెట్లో మంచి గిట్టుబాటు ధర లభిస్తుంది.',
        'వెదజల్లడం కంటే 21 రోజుల నారును నాటడం ద్వారా ఎక్కువ దిగుబడి పొందవచ్చు.',
        'ఆమ్ల గుణం ఉన్న ఎర్ర నేలల్లో కూడా చక్కగా పెరుగుతుంది.'
      ]
    },
    whyThisCropSummary: {
      en: 'Nutrient-rich staple, resilient to acid soils and dry spells, commanding premium urban health market demand.',
      te: 'పోషక విలువల గని; తక్కువ వర్షపాతం మరియు ఎర్ర నేలల్లో సులభంగా పండించగలిగే అమృత పంట.'
    },
    iconName: 'Sun',
    dataSource: 'ICAR-IIMR'
  },
  {
    id: 'black_gram',
    nameEn: 'Black Gram (Urad Dal / Minumulu)',
    nameTe: 'మినుములు (ఉద్ది పప్పు)',
    scientificName: 'Vigna mungo',
    category: 'pulse',
    suitableSoils: ['black', 'alluvial', 'clay_loam'],
    idealPhMin: 6.0,
    idealPhMax: 7.5,
    toleratedPhMin: 5.5,
    toleratedPhMax: 8.0,
    waterRequirementCategory: 'low',
    waterRequirementMm: { min: 250, max: 400 },
    minWaterAvailability: 'rainfed',
    idealTempMin: 22,
    idealTempMax: 34,
    suitableSeasons: ['kharif', 'rabi', 'summer'],
    durationDays: { min: 70, max: 85 },
    expectedYieldPerAcre: { min: 5, max: 8, unit: 'Quintals' },
    estimatedCostPerAcre: { min: 8000, max: 12000 },
    potentialRevenuePerAcre: { min: 35000, max: 60000 },
    majorPestsAndDiseases: {
      en: ['Yellow Mosaic Virus (YMV)', 'Powdery Mildew', 'Whitefly (Vector)', 'Pod Borers'],
      te: ['పల్లాకు తెగులు (ఎల్లో మొజాయిక్)', 'బూడిద తెగులు', 'తెల్లదోమ', 'కాయ తొలుచు పురుగు']
    },
    fertilizerRequirements: {
      en: 'NPK 20:40:20 kg/ha basal. Foliar spray of 2% Urea or DAP at flowering boosts pod set.',
      te: 'ఎకరానికి 8 కిలోల నత్రజని, 16 కిలోల భాస్వరం. పూత దశలో 2% డీఏపీ ద్రావణం పిచికారీ చేస్తే కాయలు బాగా పడతాయి.'
    },
    sowingPeriod: {
      en: 'Kharif: June - July, Rabi: Oct - Nov, Summer: Feb',
      te: 'ఖరీఫ్: జూన్ - జూలై, రబీ: అక్టోబర్ - నవంబర్, వేసవి: ఫిబ్రవరి'
    },
    harvestPeriod: {
      en: 'Kharif: Sept, Rabi: Jan, Summer: April',
      te: 'ఖరీఫ్: సెప్టెంబర్, రబీ: జనవరి, వేసవి: ఏప్రిల్'
    },
    importantPrecautions: {
      en: [
        'Use YMV-resistant cultivars (e.g. PU-31, LBG-752, Shekhar 2).',
        'Control Whitefly vectors early using yellow sticky traps to stop viral transmission.',
        'Frequently grown as a catch crop or rice-fallow pulse utilizing residual soil moisture.'
      ],
      te: [
        'పల్లాకు తెగులును తట్టుకునే రకాలను (ఉదా: LBG-752) ఎంపిక చేసుకోవాలి.',
        'వైరస్ వ్యాపించకుండా తెల్లదోమ నివారణకు పసుపు రంగు జిగురు అట్టలు అమర్చాలి.',
        'వరి కోతల తర్వాత మాగాణి నేలల్లో మిగిలిన తేమతో సులభంగా పండించవచ్చు.'
      ]
    },
    whyThisCropSummary: {
      en: 'Short-duration (75 days) cash pulse, excellent for crop rotation, rice-fallow, and improving soil fertility.',
      te: 'కేవలం 75-80 రోజుల్లో చేతికి వచ్చే అతి స్వల్పకాలిక లాభదాయక పప్పు పంట; నేల సారాన్ని పెంచుతుంది.'
    },
    iconName: 'Leaf',
    dataSource: 'ICAR-IIPR & ANGRAU'
  },
  {
    id: 'soybean',
    nameEn: 'Soybean',
    nameTe: 'సోయాబీన్',
    scientificName: 'Glycine max',
    category: 'oilseed',
    suitableSoils: ['black', 'alluvial', 'clay_loam'],
    idealPhMin: 6.0,
    idealPhMax: 7.5,
    toleratedPhMin: 5.5,
    toleratedPhMax: 8.0,
    waterRequirementCategory: 'moderate',
    waterRequirementMm: { min: 450, max: 650 },
    minWaterAvailability: 'limited',
    idealTempMin: 20,
    idealTempMax: 32,
    suitableSeasons: ['kharif'],
    durationDays: { min: 90, max: 110 },
    expectedYieldPerAcre: { min: 8, max: 14, unit: 'Quintals' },
    estimatedCostPerAcre: { min: 14000, max: 19000 },
    potentialRevenuePerAcre: { min: 38000, max: 65000 },
    majorPestsAndDiseases: {
      en: ['Girdle Beetle', 'Stem Fly', 'Semilooper', 'Yellow Mosaic Virus', 'Charcoal Rot'],
      te: ['రింగు పురుగు (గిర్డిల్ బీటిల్)', 'కాండం ఈగ', 'పచ్చ పురుగు', 'పల్లాకు తెగులు', 'బొగ్గు కుళ్ళు తెగులు']
    },
    fertilizerRequirements: {
      en: 'NPK 30:60:40 kg/ha. Seed inoculation with Bradyrhizobium japonicum is essential for high yield.',
      te: 'ఎకరానికి 12 కిలోల నత్రజని, 24 కిలోల భాస్వరం, 16 కిలోల పొటాష్. బ్రాడీరైజోబియంతో విత్తన శుద్ధి తప్పనిసరి.'
    },
    sowingPeriod: {
      en: 'Mid June to first week of July with monsoon showers',
      te: 'జూన్ 15 నుండి జూలై మొదటి వారం వరకు'
    },
    harvestPeriod: {
      en: 'Late September to October',
      te: 'సెప్టెంబర్ చివరి నుండి అక్టోబర్'
    },
    importantPrecautions: {
      en: [
        'Sensitive to water stagnation at germination; make broad bed and furrow (BBF) to shed excess rain.',
        'High seed protein means seeds lose viability rapidly; test germination before sowing.',
        'Harvest when 95% leaves turn yellow and drop off to avoid pod shattering.'
      ],
      te: [
        'మొలక దశలో నీరు నిలవకుండా ఎత్తుమడి బోదెల పద్ధతిలో సాగు చేయడం శ్రేయస్కరం.',
        'విత్తే ముందు మొలక శాతాన్ని తప్పనిసరిగా పరీక్షించుకోవాలి.',
        'ఆకులు రాలి కాయలు పసుపుగా మారిన వెంటనే కోత పూర్తి చేయాలి, ఆలస్యమైతే కాయలు పగులుతాయి.'
      ]
    },
    whyThisCropSummary: {
      en: 'High protein and oil content, thrives in deep black soils, and acts as a superb soil enriching rotation crop.',
      te: 'నల్లరేగడి నేలల్లో అద్భుతంగా పండే నూనె & మాంసకృత్తుల పంట; నేల సారాన్ని ఇనుమడింపజేస్తుంది.'
    },
    iconName: 'ShieldCheck',
    dataSource: 'ICAR-Indian Institute of Soybean Research (IISR)'
  },
  {
    id: 'tomato',
    nameEn: 'Tomato',
    nameTe: 'టమాటా',
    scientificName: 'Solanum lycopersicum',
    category: 'vegetable',
    suitableSoils: ['red', 'alluvial', 'sandy_loam', 'black'],
    idealPhMin: 6.0,
    idealPhMax: 7.0,
    toleratedPhMin: 5.5,
    toleratedPhMax: 7.8,
    waterRequirementCategory: 'moderate',
    waterRequirementMm: { min: 500, max: 750 },
    minWaterAvailability: 'moderate',
    idealTempMin: 18,
    idealTempMax: 30,
    suitableSeasons: ['kharif', 'rabi', 'summer'],
    durationDays: { min: 100, max: 135 },
    expectedYieldPerAcre: { min: 120, max: 200, unit: 'Quintals' },
    estimatedCostPerAcre: { min: 35000, max: 50000 },
    potentialRevenuePerAcre: { min: 80000, max: 220000 },
    majorPestsAndDiseases: {
      en: ['Tomato Leaf Curl Virus (ToLCV)', 'Fruit Borer (Helicoverpa)', 'Early Blight', 'Bacterial Wilt'],
      te: ['ఆకుముడత తెగులు (వైరస్)', 'కాయ తొలుచు పురుగు', 'ఆకు ఎండు తెగులు (బ్లైట్)', 'బ్యాక్టీరియా ఎండు తెగులు']
    },
    fertilizerRequirements: {
      en: 'NPK 150:100:100 kg/ha. Apply Calcium Nitrate and Boron sprays to prevent blossom end rot.',
      te: 'ఎకరానికి 60 కిలోల నత్రజని, 40 కిలోల భాస్వరం, 40 కిలోల పొటాష్. కాయ చివర కుళ్ళు రాకుండా కాల్షియం, బోరాన్ పిచికారీ చేయాలి.'
    },
    sowingPeriod: {
      en: 'Year-round under irrigation: June-July, Oct-Nov, Jan-Feb',
      te: 'నీటి వసతి ఉంటే ఏడాది పొడవునా: జూన్-జూలై, అక్టోబర్-నవంబర్, జనవరి-ఫిబ్రవరి'
    },
    harvestPeriod: {
      en: 'Starts 65-75 days after transplanting, continues for 6-8 weeks',
      te: 'నాటిన 65-75 రోజుల నుండి మొదలై 6-8 వారాల పాటు కోతలు'
    },
    importantPrecautions: {
      en: [
        'Staking with bamboo sticks or trellis wire prevents ground rotting and improves fruit grade by 40%.',
        'Extreme summer temperatures (>36°C) cause flower drop; provide partial shade or micro-sprinklers.',
        'Market price fluctuations can be high; plan staggered plantings.'
      ],
      te: [
        'వెదురు బొంగులు లేదా తీగలతో ఊతం (స్టేకింగ్) ఇస్తే కాయలు పాడవకుండా నాణ్యత పెరుగుతుంది.',
        'ఎండ తీవ్రత 36°C దాటితే పూత రాలిపోతుంది, తగినంత తేమను కాపాడాలి.',
        'మార్కెట్ ధరల్లో హెచ్చుతగ్గులు ఉంటాయి కాబట్టి దశలవారీగా కోతలు ఉండేలా ప్రణాళిక చేసుకోవాలి.'
      ]
    },
    whyThisCropSummary: {
      en: 'Quick turnover, high yield per acre, suited to vegetable farmers with drip irrigation and proximity to markets.',
      te: 'స్వల్ప కాలంలో ఎకరానికి భారీ పరిమాణంలో దిగుబడి మరియు నిరంతర నగదు రాబడి ఇచ్చే కూరగాయ పంట.'
    },
    iconName: 'Apple',
    dataSource: 'ICAR-IIHR'
  },
  {
    id: 'onion',
    nameEn: 'Onion',
    nameTe: 'ఉల్లిపాయ',
    scientificName: 'Allium cepa',
    category: 'vegetable',
    suitableSoils: ['alluvial', 'red', 'clay_loam', 'black'],
    idealPhMin: 6.0,
    idealPhMax: 7.2,
    toleratedPhMin: 5.5,
    toleratedPhMax: 7.8,
    waterRequirementCategory: 'moderate',
    waterRequirementMm: { min: 400, max: 600 },
    minWaterAvailability: 'moderate',
    idealTempMin: 15,
    idealTempMax: 30,
    suitableSeasons: ['kharif', 'rabi'],
    durationDays: { min: 110, max: 130 },
    expectedYieldPerAcre: { min: 80, max: 140, unit: 'Quintals' },
    estimatedCostPerAcre: { min: 30000, max: 42000 },
    potentialRevenuePerAcre: { min: 75000, max: 190000 },
    majorPestsAndDiseases: {
      en: ['Thrips (Thrips tabaci)', 'Purple Blotch (Alternaria porri)', 'Basal Rot', 'Stemphylium Blight'],
      te: ['తామర పురుగులు (త్రిప్స్)', 'ఊదా మచ్చ తెగులు (పర్పుల్ బ్లాచ్)', 'గిలక కుళ్ళు తెగులు', 'ఆకుమచ్చ']
    },
    fertilizerRequirements: {
      en: 'NPK 100:50:50 kg/ha. Apply Sulphur @ 15 kg/acre for bulb pungency, firmness, and long shelf life.',
      te: 'ఎకరానికి 40 కిలోల నత్రజని, 20 కిలోల భాస్వరం, 20 కిలోల పొటాష్. నిల్వ సామర్థ్యం పెరగడానికి ఎకరానికి 15 కిలోల గంధకం (సల్ఫర్) వేయాలి.'
    },
    sowingPeriod: {
      en: 'Kharif: May-June (Nursery), Rabi: Oct-Nov (Nursery)',
      te: 'ఖరీఫ్: మే-జూన్ (నారుమడి), రబీ: అక్టోబర్-నవంబర్ (నారుమడి)'
    },
    harvestPeriod: {
      en: 'Kharif: Oct-Nov, Rabi: March-April',
      te: 'ఖరీఫ్: అక్టోబర్-నవంబర్, రబీ: మార్చి-ఏప్రిల్'
    },
    importantPrecautions: {
      en: [
        'Shallow root system requires frequent light irrigations; water stress causes split bulbs.',
        'Stop irrigation 15 days before harvest to allow neck fall and field curing.',
        'Thorough field curing in shade is essential to prevent post-harvest rot in storage.'
      ],
      te: [
        'వేర్లు పైపైనే ఉంటాయి కాబట్టి తక్కువ మోతాదులో తరచుగా తడులు ఇవ్వాలి; నీటి కొరత వస్తే పాయలు చీలిపోతాయి.',
        'కోతకు 15 రోజుల ముందు నీరు కట్టడం ఆపాలి.',
        'కోసిన తర్వాత నీడలో ఆరబెట్టడం వల్ల నిల్వలో ఉల్లి కుళ్ళిపోకుండా ఉంటుంది.'
      ]
    },
    whyThisCropSummary: {
      en: 'High consumer demand staple bulb crop yielding rewarding returns during favorable market cycles in Rabi/Kharif.',
      te: 'నిత్యం డిమాండ్ ఉండే నిత్యావసర పంట; రబీలో సాగు చేసి నిల్వ ఉంచితే గొప్ప లాభాలు పొందవచ్చు.'
    },
    iconName: 'Layers',
    dataSource: 'ICAR-Directorate of Onion and Garlic Research (DOGR)'
  },
  {
    id: 'turmeric',
    nameEn: 'Turmeric (Golden Spice)',
    nameTe: 'పసుపు',
    scientificName: 'Curcuma longa',
    category: 'commercial',
    suitableSoils: ['alluvial', 'red', 'clay_loam'],
    idealPhMin: 5.5,
    idealPhMax: 7.2,
    toleratedPhMin: 5.0,
    toleratedPhMax: 7.8,
    waterRequirementCategory: 'high',
    waterRequirementMm: { min: 800, max: 1200 },
    minWaterAvailability: 'full',
    idealTempMin: 20,
    idealTempMax: 35,
    suitableSeasons: ['kharif'],
    durationDays: { min: 210, max: 270 },
    expectedYieldPerAcre: { min: 20, max: 32, unit: 'Cured Quintals' },
    estimatedCostPerAcre: { min: 60000, max: 85000 },
    potentialRevenuePerAcre: { min: 160000, max: 320000 },
    majorPestsAndDiseases: {
      en: ['Rhizome Rot (Pythium)', 'Leaf Spot (Colletotrichum)', 'Shoot Borer'],
      te: ['దుంప కుళ్ళు తెగులు', 'ఆకుమచ్చ తెగులు', 'దుంప తొలిచే పురుగు']
    },
    fertilizerRequirements: {
      en: 'NPK 60:50:120 kg/ha. Needs heavy farmyard manure (10 tonnes/acre) and green leaf mulching.',
      te: 'ఎకరానికి 24 కిలోల నత్రజని, 20 కిలోల భాస్వరం, 48 కిలోల పొటాష్. ఎకరానికి 10 టన్నుల పశువుల ఎరువు మరియు ఆకులతో మల్చింగ్ ముఖ్యం.'
    },
    sowingPeriod: {
      en: 'May to June with pre-monsoon showers',
      te: 'మే నుండి జూన్ వరకు (తొలి వర్షాలతో)'
    },
    harvestPeriod: {
      en: 'January to March',
      te: 'జనవరి నుండి మార్చి'
    },
    importantPrecautions: {
      en: [
        'Plant on ridges and furrows; flat beds cause devastating rhizome rot during monsoons.',
        'Mulch heavily with green leaves (5 tonnes/acre) immediately after planting to preserve moisture and suppress weeds.',
        'Treat mother seed rhizomes with metalaxyl or Trichoderma before planting.'
      ],
      te: [
        'బోదెలపై నాటాలి; చదునైన నేలలో నీరు నిలిస్తే దుంప కుళ్ళిపోయి తీవ్ర నష్టం వాటిల్లుతుంది.',
        'నాటిన వెంటనే పచ్చి ఆకులతో మల్చింగ్ చేస్తే తేమ నిలిచి కలుపు అదుపులో ఉంటుంది.',
        'నాటే ముందు విత్తన దుంపలను తప్పనిసరిగా శుద్ధి చేసుకోవాలి.'
      ]
    },
    whyThisCropSummary: {
      en: 'Premium medicinal cash crop with immense export value, best suited to rich loams with assured irrigation.',
      te: 'అంతర్జాతీయ మార్కెట్లో విలువైన సుగంధ ద్రవ్య పంట; నీటి పారుదల వసతి ఉన్న భూముల్లో శాశ్వత సంపద.'
    },
    iconName: 'Sparkles',
    dataSource: 'ICAR-Indian Institute of Spices Research (IISR)'
  },
  {
    id: 'wheat',
    nameEn: 'Wheat',
    nameTe: 'గోధుమ',
    scientificName: 'Triticum aestivum',
    category: 'cereal',
    suitableSoils: ['alluvial', 'clay_loam', 'black'],
    idealPhMin: 6.0,
    idealPhMax: 7.5,
    toleratedPhMin: 5.5,
    toleratedPhMax: 8.2,
    waterRequirementCategory: 'moderate',
    waterRequirementMm: { min: 450, max: 650 },
    minWaterAvailability: 'moderate',
    idealTempMin: 12,
    idealTempMax: 25,
    suitableSeasons: ['rabi'],
    durationDays: { min: 110, max: 135 },
    expectedYieldPerAcre: { min: 18, max: 26, unit: 'Quintals' },
    estimatedCostPerAcre: { min: 14000, max: 19000 },
    potentialRevenuePerAcre: { min: 40000, max: 62000 },
    majorPestsAndDiseases: {
      en: ['Yellow Rust / Brown Rust', 'Karnal Bunt', 'Powdery Mildew', 'Aphids', 'Termites'],
      te: ['పసుపు / గోధుమ రంగు తుప్పు తెగులు', 'కర్నాల్ బంట్', 'బూడిద తెగులు', 'పేనుబంక', 'చెదపురుగులు']
    },
    fertilizerRequirements: {
      en: 'NPK 120:60:40 kg/ha. Apply one-third Nitrogen + full PK basal; balance N at Crown Root Initiation (CRI) and Tillering.',
      te: 'ఎకరానికి 48 కిలోల నత్రజని, 24 కిలోల భాస్వరం, 16 కిలోల పొటాష్. కిరీటం వేర్లు ఏర్పడే (CRI) దశలో మొదటి తడి మరియు నత్రజని ముఖ్యం.'
    },
    sowingPeriod: {
      en: 'First fortnight of November (optimal 18-22°C soil temp)',
      te: 'నవంబర్ మొదటి పక్షం (శీతాకాలం ప్రారంభంలో)'
    },
    harvestPeriod: {
      en: 'March to April',
      te: 'మార్చి నుండి ఏప్రిల్'
    },
    importantPrecautions: {
      en: [
        'Requires cool winter growing temperatures; late sowing beyond Nov 25 suffers terminal heat stress.',
        'CRI stage (21 days after sowing) is the single most critical irrigation; failure cuts yield by 35%.',
        'Avoid excessive early irrigation which promotes lodging.'
      ],
      te: [
        'శీతాకాలంలో చల్లని వాతావరణం ముఖ్యం; ఆలస్యంగా విత్తితే వేసవి వేడికి గింజ తాలు అవుతుంది.',
        'నాటిన 21 రోజులకు (కిరీటం వేర్ల దశ) మొదటి తడి తప్పనిసరిగా ఇవ్వాలి.',
        'పంట ఒరిగిపోకుండా చివరి దశల్లో బలమైన గాలులప్పుడు నీరు పెట్టకూడదు.'
      ]
    },
    whyThisCropSummary: {
      en: 'Premier winter staple grain with guaranteed government MSP procurement and reliable productivity in loamy soils.',
      te: 'శీతాకాలంలో నమ్మకమైన కనీస మద్దతు ధర (MSP) మరియు స్థిరమైన దిగుబడినిచ్చే ప్రధాన ఆహార పంట.'
    },
    iconName: 'Wheat',
    dataSource: 'ICAR-Indian Institute of Wheat and Barley Research (IIWBR)'
  }
];
