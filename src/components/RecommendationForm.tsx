import React, { useState } from 'react';
import { 
  MapPin, 
  CloudSun, 
  Layers, 
  Droplets, 
  SlidersHorizontal, 
  Navigation, 
  RotateCcw, 
  Sparkles,
  Info,
  Check
} from 'lucide-react';
import { 
  FarmerInputForm, 
  Language, 
  SoilType, 
  Season, 
  WaterAvailability, 
  WaterSource,
  CropDurationPreference,
  BudgetLevel,
  RiskPreference
} from '../types';
import { TRANSLATIONS } from '../data/translations';
import { fetchLiveWeather } from '../services/weatherService';

interface RecommendationFormProps {
  formData: FarmerInputForm;
  setFormData: React.Dispatch<React.SetStateAction<FarmerInputForm>>;
  onSubmit: () => void;
  lang: Language;
}

export const RecommendationForm: React.FC<RecommendationFormProps> = ({
  formData,
  setFormData,
  onSubmit,
  lang
}) => {
  const t = TRANSLATIONS[lang];
  const [loadingGps, setLoadingGps] = useState(false);
  const [loadingWeather, setLoadingWeather] = useState(false);
  const [weatherNotice, setWeatherNotice] = useState<string | null>(null);

  // GPS auto-detection
  const handleDetectLocation = () => {
    if (!navigator.geolocation) {
      alert(lang === 'te' ? 'మీ బ్రౌజర్ GPS ని సపోర్ట్ చేయదు.' : 'Geolocation is not supported by your browser.');
      return;
    }
    setLoadingGps(true);
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const lat = parseFloat(pos.coords.latitude.toFixed(4));
        const lon = parseFloat(pos.coords.longitude.toFixed(4));
        
        setFormData(prev => ({
          ...prev,
          location: {
            ...prev.location,
            latitude: lat,
            longitude: lon,
            village: prev.location.village || 'Auto-Detected GPS'
          }
        }));

        // Fetch live weather for these detected coordinates
        try {
          setLoadingWeather(true);
          const weather = await fetchLiveWeather(lat, lon);
          setFormData(prev => ({
            ...prev,
            climate: {
              ...prev.climate,
              temperature: weather.temperature,
              humidity: weather.humidity,
              rainfallMm: weather.rainfall || prev.climate.rainfallMm
            }
          }));
          setWeatherNotice(
            lang === 'te' 
              ? `వాతావరణం అప్‌డేట్ చేయబడింది: ${weather.temperature}°C, ${weather.condition}`
              : `Live weather synchronized: ${weather.temperature}°C, ${weather.condition}`
          );
        } catch (e) {
          console.error(e);
        } finally {
          setLoadingWeather(false);
          setLoadingGps(false);
        }
      },
      (err) => {
        console.warn('GPS location error:', err);
        setLoadingGps(false);
        alert(lang === 'te' ? 'GPS అనుమతి నిరాకరించబడింది లేదా లభించలేదు.' : 'Unable to retrieve location. Please check location permissions.');
      },
      { timeout: 10000 }
    );
  };

  // Weather retrieval based on current coordinates
  const handleFetchWeather = async () => {
    setLoadingWeather(true);
    try {
      const lat = formData.location.latitude || 16.3067;
      const lon = formData.location.longitude || 80.4365;
      const weather = await fetchLiveWeather(lat, lon);
      setFormData(prev => ({
        ...prev,
        climate: {
          ...prev.climate,
          temperature: weather.temperature,
          humidity: weather.humidity,
          rainfallMm: weather.rainfall
        }
      }));
      setWeatherNotice(
        lang === 'te' 
          ? `తాజా వాతావరణం: ${weather.temperature}°C, తేమ ${weather.humidity}%, ${weather.condition}`
          : `Live weather fetched: ${weather.temperature}°C, Humidity ${weather.humidity}%, ${weather.condition}`
      );
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingWeather(false);
    }
  };

  const handleReset = () => {
    setFormData({
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
        availability: 'moderate',
        source: 'borewell'
      },
      preferences: {
        farmSizeAcres: 3,
        durationPreference: 'medium',
        budgetLevel: 'moderate',
        desiredIncomePerAcre: 60000,
        riskPreference: 'moderate'
      }
    });
    setWeatherNotice(null);
  };

  return (
    <div className="bg-white rounded-xl border border-stone-200 shadow-sm p-5 sm:p-8 space-y-8">
      
      {/* Form Header */}
      <div className="border-b border-stone-200 pb-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
            {lang === 'te' ? 'రైతు భూమి సమాచార నమోదు' : 'Land & Farming Parameters Form'}
          </h2>
          <p className="text-sm text-stone-600 mt-1">
            {lang === 'te' 
              ? 'సరైన పంట సిఫార్సుల కోసం మీ నేల, వాతావరణం మరియు నీటి వివరాలను ఎంటర్ చేయండి.'
              : 'Enter your field details to generate agronomic suitability rankings.'}
          </p>
        </div>
        
        <button
          type="button"
          onClick={handleReset}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-600 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-md transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>{t.resetBtn}</span>
        </button>
      </div>

      <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }} className="space-y-8">
        
        {/* Section 1: Location */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-stone-900 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-emerald-600" />
              <span>{t.step1Title}</span>
            </h3>
            
            <button
              type="button"
              onClick={handleDetectLocation}
              disabled={loadingGps}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-3 py-1.5 rounded-md transition-colors disabled:opacity-50"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>{loadingGps ? (lang === 'te' ? 'గుర్తిస్తోంది...' : 'Detecting...') : t.detectGpsBtn}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1.5">
                {t.stateLabel}
              </label>
              <select
                value={formData.location.state}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  location: { ...prev.location, state: e.target.value }
                }))}
                className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded-lg text-stone-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              >
                <option value="Andhra Pradesh">Andhra Pradesh (ఆంధ్రప్రదేశ్)</option>
                <option value="Telangana">Telangana (తెలంగాణ)</option>
                <option value="Karnataka">Karnataka (కర్ణాటక)</option>
                <option value="Tamil Nadu">Tamil Nadu (తమిళనాడు)</option>
                <option value="Maharashtra">Maharashtra (మహారాష్ట్ర)</option>
                <option value="Punjab">Punjab (పంజాబ్)</option>
                <option value="Haryana">Haryana (హర్యానా)</option>
                <option value="Uttar Pradesh">Uttar Pradesh (ఉత్తర ప్రదేశ్)</option>
                <option value="Madhya Pradesh">Madhya Pradesh (మధ్యప్రదేశ్)</option>
                <option value="Gujarat">Gujarat (గుజరాత్)</option>
                <option value="Odisha">Odisha (ఒడిశా)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1.5">
                {t.districtLabel}
              </label>
              <input
                type="text"
                value={formData.location.district}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  location: { ...prev.location, district: e.target.value }
                }))}
                placeholder="e.g. Guntur, Warangal, Anantapur"
                className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded-lg text-stone-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1.5">
                {t.villageLabel}
              </label>
              <input
                type="text"
                value={formData.location.village}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  location: { ...prev.location, village: e.target.value }
                }))}
                placeholder="e.g. Prathipadu / Mandalam"
                className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded-lg text-stone-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Climate & Season */}
        <div className="space-y-4 pt-4 border-t border-stone-200">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-stone-900 flex items-center gap-2">
              <CloudSun className="w-5 h-5 text-amber-600" />
              <span>{t.step2Title}</span>
            </h3>

            <button
              type="button"
              onClick={handleFetchWeather}
              disabled={loadingWeather}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-800 hover:text-amber-900 bg-amber-50 hover:bg-amber-100 border border-amber-200 px-3 py-1.5 rounded-md transition-colors disabled:opacity-50"
            >
              <CloudSun className="w-3.5 h-3.5" />
              <span>{loadingWeather ? (lang === 'te' ? 'తీసుకుంటోంది...' : 'Fetching...') : t.autoWeatherBtn}</span>
            </button>
          </div>

          {weatherNotice && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-xs text-emerald-800 flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{weatherNotice}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1.5">
                {t.seasonLabel}
              </label>
              <select
                value={formData.climate.season}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  climate: { ...prev.climate, season: e.target.value as Season }
                }))}
                className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded-lg text-stone-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              >
                <option value="kharif">{t.kharif}</option>
                <option value="rabi">{t.rabi}</option>
                <option value="summer">{t.summer}</option>
                <option value="any">{t.any}</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1.5">
                {t.tempLabel}
              </label>
              <div className="relative">
                <input
                  type="number"
                  min="10"
                  max="48"
                  value={formData.climate.temperature}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    climate: { ...prev.climate, temperature: Number(e.target.value) }
                  }))}
                  className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded-lg text-stone-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
                <span className="absolute right-3 top-2.5 text-xs text-stone-400">°C</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1.5">
                {t.rainfallLabel}
              </label>
              <select
                value={formData.climate.rainfallLevel}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  climate: { ...prev.climate, rainfallLevel: e.target.value as 'low' | 'moderate' | 'high' }
                }))}
                className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded-lg text-stone-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              >
                <option value="low">{lang === 'te' ? 'స్వల్ప వర్షం (< 500 మి.మీ)' : 'Low (< 500 mm)'}</option>
                <option value="moderate">{lang === 'te' ? 'మధ్యస్థ వర్షం (500 - 900 మి.మీ)' : 'Moderate (500 - 900 mm)'}</option>
                <option value="high">{lang === 'te' ? 'భారీ వర్షం (> 900 మి.మీ)' : 'High (> 900 mm)'}</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1.5">
                {t.humidityLabel}
              </label>
              <div className="relative">
                <input
                  type="number"
                  min="15"
                  max="99"
                  value={formData.climate.humidity}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    climate: { ...prev.climate, humidity: Number(e.target.value) }
                  }))}
                  className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded-lg text-stone-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
                <span className="absolute right-3 top-2.5 text-xs text-stone-400">%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Soil Information */}
        <div className="space-y-4 pt-4 border-t border-stone-200">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-stone-900 flex items-center gap-2">
              <Layers className="w-5 h-5 text-amber-700" />
              <span>{t.step3Title}</span>
            </h3>
            <span className="text-xs text-stone-500">
              {lang === 'te' ? 'తెలియకపోతే "నాకు తెలియదు" ఎంచుకోండి' : "Use 'I don't know' if untested"}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1.5">
                {t.soilTypeLabel}
              </label>
              <select
                value={formData.soil.soilType}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  soil: { ...prev.soil, soilType: e.target.value as SoilType }
                }))}
                className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded-lg text-stone-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              >
                <option value="red">{t.red}</option>
                <option value="black">{t.black}</option>
                <option value="alluvial">{t.alluvial}</option>
                <option value="sandy_loam">{t.sandy_loam}</option>
                <option value="clay_loam">{t.clay_loam}</option>
                <option value="laterite">{t.laterite}</option>
                <option value="saline_alkaline">{t.saline_alkaline}</option>
              </select>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-medium text-stone-700">
                  {t.soilPhLabel} ({formData.soil.phUnknown ? (lang === 'te' ? 'తెలియదు' : 'Unknown') : formData.soil.ph})
                </label>
                <label className="flex items-center gap-1.5 text-xs text-stone-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.soil.phUnknown}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      soil: { ...prev.soil, phUnknown: e.target.checked }
                    }))}
                    className="rounded text-emerald-600 focus:ring-emerald-500"
                  />
                  <span>{t.iDontKnow}</span>
                </label>
              </div>

              {!formData.soil.phUnknown ? (
                <div className="space-y-1">
                  <input
                    type="range"
                    min="4.5"
                    max="9.0"
                    step="0.1"
                    value={formData.soil.ph}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      soil: { ...prev.soil, ph: parseFloat(e.target.value) }
                    }))}
                    className="w-full accent-emerald-600"
                  />
                  <div className="flex justify-between text-[10px] text-stone-400">
                    <span>4.5 ({lang === 'te' ? 'ఆమ్లం' : 'Acidic'})</span>
                    <span className="font-semibold text-emerald-700">6.5 - 7.5 ({lang === 'te' ? 'తటస్థం' : 'Neutral'})</span>
                    <span>9.0 ({lang === 'te' ? 'క్షారం' : 'Alkaline'})</span>
                  </div>
                </div>
              ) : (
                <div className="px-3 py-2 bg-stone-100 rounded-lg text-xs text-stone-500 italic">
                  {lang === 'te' ? 'ప్రామాణిక తటస్థ pH (6.8) ఆధారంగా లెక్కించబడుతుంది.' : 'Standard neutral pH (6.8) will be assumed.'}
                </div>
              )}
            </div>
          </div>

          {/* Soil Nutrients NPK + Organic Matter */}
          <div className="p-4 bg-stone-50 rounded-lg border border-stone-200">
            <div className="text-xs font-semibold text-stone-700 mb-3 flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-stone-500" />
              <span>{lang === 'te' ? 'నేల పోషకాల వివరాలు (సారవంతత)' : 'Nutrient Availability (Soil Health Card)'}</span>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div>
                <label className="block text-[11px] font-medium text-stone-600 mb-1">{t.nitrogenLabel}</label>
                <select
                  value={formData.soil.nitrogen}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    soil: { ...prev.soil, nitrogen: e.target.value as any }
                  }))}
                  className="w-full px-2.5 py-1.5 text-xs bg-white border border-stone-300 rounded text-stone-800"
                >
                  <option value="medium">{lang === 'te' ? 'మధ్యస్థం (సాధారణ)' : 'Medium (Default)'}</option>
                  <option value="low">{lang === 'te' ? 'తక్కువ (లోపం)' : 'Low'}</option>
                  <option value="high">{lang === 'te' ? 'ఎక్కువ' : 'High'}</option>
                  <option value="unknown">{lang === 'te' ? 'తెలియదు' : 'Unknown'}</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-medium text-stone-600 mb-1">{t.phosphorusLabel}</label>
                <select
                  value={formData.soil.phosphorus}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    soil: { ...prev.soil, phosphorus: e.target.value as any }
                  }))}
                  className="w-full px-2.5 py-1.5 text-xs bg-white border border-stone-300 rounded text-stone-800"
                >
                  <option value="medium">{lang === 'te' ? 'మధ్యస్థం (సాధారణ)' : 'Medium (Default)'}</option>
                  <option value="low">{lang === 'te' ? 'తక్కువ' : 'Low'}</option>
                  <option value="high">{lang === 'te' ? 'ఎక్కువ' : 'High'}</option>
                  <option value="unknown">{lang === 'te' ? 'తెలియదు' : 'Unknown'}</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-medium text-stone-600 mb-1">{t.potassiumLabel}</label>
                <select
                  value={formData.soil.potassium}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    soil: { ...prev.soil, potassium: e.target.value as any }
                  }))}
                  className="w-full px-2.5 py-1.5 text-xs bg-white border border-stone-300 rounded text-stone-800"
                >
                  <option value="medium">{lang === 'te' ? 'మధ్యస్థం (సాధారణ)' : 'Medium (Default)'}</option>
                  <option value="low">{lang === 'te' ? 'తక్కువ' : 'Low'}</option>
                  <option value="high">{lang === 'te' ? 'ఎక్కువ' : 'High'}</option>
                  <option value="unknown">{lang === 'te' ? 'తెలియదు' : 'Unknown'}</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-medium text-stone-600 mb-1">{t.organicMatterLabel}</label>
                <select
                  value={formData.soil.organicMatter}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    soil: { ...prev.soil, organicMatter: e.target.value as any }
                  }))}
                  className="w-full px-2.5 py-1.5 text-xs bg-white border border-stone-300 rounded text-stone-800"
                >
                  <option value="medium">{lang === 'te' ? 'మధ్యస్థం (0.5-0.75%)' : 'Medium (Default)'}</option>
                  <option value="low">{lang === 'te' ? 'తక్కువ (< 0.5%)' : 'Low (< 0.5%)'}</option>
                  <option value="high">{lang === 'te' ? 'ఎక్కువ (> 0.75%)' : 'High (> 0.75%)'}</option>
                  <option value="unknown">{lang === 'te' ? 'తెలియదు' : 'Unknown'}</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Water Availability (Strict filtering) */}
        <div className="space-y-4 pt-4 border-t border-stone-200">
          <div>
            <h3 className="text-base font-semibold text-stone-900 flex items-center gap-2">
              <Droplets className="w-5 h-5 text-sky-600" />
              <span>{t.step4Title}</span>
            </h3>
            <p className="text-xs text-stone-500 mt-0.5">
              {lang === 'te' 
                ? 'ముఖ్యమైనది: నీటి కొరత ఉంటే ఎక్కువ నీరు అవసరమయ్యే పంటలను సిఫార్సు చేయము.'
                : 'Deficit-water safeguard: crops requiring excess water will be penalized or flagged.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1.5">
                {t.waterAvailabilityLabel}
              </label>
              <select
                value={formData.water.availability}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  water: { ...prev.water, availability: e.target.value as WaterAvailability }
                }))}
                className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded-lg text-stone-900 font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              >
                <option value="rainfed">{t.rainfed}</option>
                <option value="limited">{t.limited}</option>
                <option value="moderate">{t.moderate}</option>
                <option value="full">{t.full}</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1.5">
                {t.waterSourceLabel}
              </label>
              <select
                value={formData.water.source}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  water: { ...prev.water, source: e.target.value as WaterSource }
                }))}
                className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded-lg text-stone-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              >
                <option value="borewell">{t.borewell}</option>
                <option value="canal">{t.canal}</option>
                <option value="rain">{t.rain}</option>
                <option value="drip_sprinkler">{t.drip_sprinkler}</option>
                <option value="river">{t.river}</option>
                <option value="farm_pond">{t.farm_pond}</option>
              </select>
            </div>
          </div>
        </div>

        {/* Section 5: Farmer Preferences */}
        <div className="space-y-4 pt-4 border-t border-stone-200">
          <h3 className="text-base font-semibold text-stone-900 flex items-center gap-2">
            <SlidersHorizontal className="w-5 h-5 text-emerald-700" />
            <span>{t.step5Title}</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1.5">
                {t.farmSizeLabel}
              </label>
              <input
                type="number"
                min="0.5"
                max="100"
                step="0.5"
                value={formData.preferences.farmSizeAcres}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  preferences: { ...prev.preferences, farmSizeAcres: parseFloat(e.target.value) || 1 }
                }))}
                className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded-lg text-stone-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1.5">
                {t.durationPrefLabel}
              </label>
              <select
                value={formData.preferences.durationPreference}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  preferences: { ...prev.preferences, durationPreference: e.target.value as CropDurationPreference }
                }))}
                className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded-lg text-stone-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              >
                <option value="medium">{t.medium}</option>
                <option value="short">{t.short}</option>
                <option value="long">{t.long}</option>
                <option value="any">{t.any}</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1.5">
                {t.budgetLabel}
              </label>
              <select
                value={formData.preferences.budgetLevel}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  preferences: { ...prev.preferences, budgetLevel: e.target.value as BudgetLevel }
                }))}
                className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded-lg text-stone-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              >
                <option value="moderate">{t.mediumRisk}</option>
                <option value="low">{t.low}</option>
                <option value="high">{t.high}</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1.5">
                {t.riskLabel}
              </label>
              <select
                value={formData.preferences.riskPreference}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  preferences: { ...prev.preferences, riskPreference: e.target.value as RiskPreference }
                }))}
                className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded-lg text-stone-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              >
                <option value="moderate">{t.mediumRisk}</option>
                <option value="low">{lang === 'te' ? 'తక్కువ రిస్క్ (ఆహార పంటలు)' : 'Low (Staple/Safe)'}</option>
                <option value="high">{lang === 'te' ? 'అధిక లాభం (వాణిజ్య పంటలు)' : 'High Return (Commercial)'}</option>
              </select>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-500">
            {lang === 'te' 
              ? 'సిఫార్సులు ICAR అగ్రోనమీ ప్రమాణాల ప్రకారం లెక్కించబడతాయి.'
              : 'Suitability will be evaluated according to ICAR scientific agronomic thresholds.'}
          </p>
          <button
            type="submit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-base rounded-lg shadow-md shadow-emerald-950/20 transition-all hover:translate-y-[-1px] focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <Sparkles className="w-5 h-5 text-emerald-200" />
            <span>{t.calculateBtn}</span>
          </button>
        </div>

      </form>
    </div>
  );
};
