import React from 'react';
import { 
  FarmerInputForm, 
  Language, 
  CropInfo, 
  CropRecommendationResult,
  WeatherData,
  AgroAlert
} from '../types';
import { TRANSLATIONS } from '../data/translations';
import { CROPS_DATABASE } from '../data/crops';
import { 
  User, 
  MapPin, 
  CloudSun, 
  Droplets, 
  Layers, 
  Bookmark, 
  ArrowRight, 
  AlertTriangle, 
  CheckCircle2, 
  Calendar,
  Sparkles,
  ChevronRight
} from 'lucide-react';

interface FarmerDashboardViewProps {
  formData: FarmerInputForm;
  savedCropIds: string[];
  recommendations: CropRecommendationResult[];
  weather: WeatherData | null;
  alerts: AgroAlert[];
  lang: Language;
  onNavigateTab: (tab: string) => void;
  onSelectCrop: (crop: CropInfo) => void;
}

export const FarmerDashboardView: React.FC<FarmerDashboardViewProps> = ({
  formData,
  savedCropIds,
  recommendations,
  weather,
  alerts,
  lang,
  onNavigateTab,
  onSelectCrop
}) => {
  const t = TRANSLATIONS[lang];
  const savedCrops = CROPS_DATABASE.filter(c => savedCropIds.includes(c.id));
  const topRecommended = recommendations.slice(0, 3);

  return (
    <div className="space-y-8">
      
      {/* Title */}
      <div className="bg-white rounded-xl p-6 border border-stone-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
            {t.dashboardTitle}
          </h2>
          <p className="text-sm text-stone-600 mt-1">
            {t.dashboardSubtitle}
          </p>
        </div>

        <button
          onClick={() => onNavigateTab('recommendation')}
          className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors self-start md:self-auto"
        >
          <Sparkles className="w-4 h-4" />
          <span>{lang === 'te' ? 'కొత్త భూమి విశ్లేషణ' : 'New Land Analysis'}</span>
        </button>
      </div>

      {/* Grid of Key Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1: My Land & Location Profile */}
        <div className="bg-white rounded-xl p-5 border border-stone-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-stone-100">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-emerald-600" />
              <h3 className="font-bold text-stone-900 text-sm">{t.myLandProfile}</h3>
            </div>
            <button 
              onClick={() => onNavigateTab('recommendation')}
              className="text-xs text-emerald-700 hover:text-emerald-800 font-medium"
            >
              Edit
            </button>
          </div>

          <div className="space-y-2.5 text-xs">
            <div className="flex justify-between py-1 border-b border-stone-100">
              <span className="text-stone-500">{t.stateLabel}</span>
              <span className="font-semibold text-stone-800">{formData.location.state}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-stone-100">
              <span className="text-stone-500">{t.districtLabel}</span>
              <span className="font-semibold text-stone-800">{formData.location.district || 'Guntur'}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-stone-100">
              <span className="text-stone-500">{t.soilTypeLabel}</span>
              <span className="font-semibold text-stone-800 capitalize">{formData.soil.soilType.replace('_', ' ')}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-stone-100">
              <span className="text-stone-500">{t.waterAvailabilityLabel}</span>
              <span className="font-semibold text-stone-800 capitalize">{formData.water.availability} ({formData.water.source})</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-stone-500">{t.farmSizeLabel}</span>
              <span className="font-semibold text-stone-800">{formData.preferences.farmSizeAcres} Acres</span>
            </div>
          </div>
        </div>

        {/* Card 2: Current Micro-Weather & Spray Window */}
        <div className="bg-white rounded-xl p-5 border border-stone-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-stone-100">
            <div className="flex items-center gap-2">
              <CloudSun className="w-5 h-5 text-amber-600" />
              <h3 className="font-bold text-stone-900 text-sm">
                {lang === 'te' ? 'స్థానిక వాతావరణం' : 'Local Weather Status'}
              </h3>
            </div>
            <button 
              onClick={() => onNavigateTab('weather')}
              className="text-xs text-amber-700 hover:text-amber-800 font-medium"
            >
              {lang === 'te' ? 'మరిన్ని' : 'Details'}
            </button>
          </div>

          {weather ? (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-3xl font-black text-stone-900">{weather.temperature}°C</span>
                  <p className="text-xs text-stone-500">{weather.condition}</p>
                </div>
                <div className="text-right text-xs text-stone-600">
                  <div>💧 {weather.humidity}% humidity</div>
                  <div>💨 {weather.windSpeed} km/h wind</div>
                </div>
              </div>
              <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200/60 text-xs text-emerald-900">
                {lang === 'te' ? weather.agriculturalAdvisory.te : weather.agriculturalAdvisory.en}
              </div>
            </div>
          ) : (
            <div className="text-xs text-stone-500 py-4 text-center">Loading weather...</div>
          )}
        </div>

        {/* Card 3: Active Agro-Alerts */}
        <div className="bg-white rounded-xl p-5 border border-stone-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-stone-100">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-rose-600" />
              <h3 className="font-bold text-stone-900 text-sm">{t.activeAlerts}</h3>
            </div>
            <span className="text-xs font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded-full">
              {alerts.length} Active
            </span>
          </div>

          <div className="space-y-2.5">
            {alerts.slice(0, 2).map(alert => (
              <div key={alert.id} className="p-3 rounded-lg bg-stone-50 border border-stone-200/80 text-xs space-y-1">
                <span className="font-bold text-stone-900 block">
                  {lang === 'te' ? alert.titleTe : alert.titleEn}
                </span>
                <p className="text-stone-600 line-clamp-2">
                  {lang === 'te' ? alert.descriptionTe : alert.descriptionEn}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Top Recommended Crops for This Land */}
      <div className="bg-white rounded-xl p-6 border border-stone-200 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-emerald-600" />
            <span>{lang === 'te' ? 'మీ భూమికి టాప్ సిఫార్సులు' : 'Top Crop Matches for Your Land'}</span>
          </h3>
          <button
            onClick={() => onNavigateTab('recommendation')}
            className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
          >
            <span>{lang === 'te' ? 'అన్నీ చూడండి' : 'View Full Ranking'}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {topRecommended.map((item, idx) => (
            <div 
              key={item.crop.id}
              onClick={() => onSelectCrop(item.crop)}
              className="p-4 rounded-xl border border-stone-200 hover:border-emerald-400 hover:shadow-md transition-all cursor-pointer group bg-stone-50/50 flex flex-col justify-between space-y-3"
            >
              <div>
                <div className="flex justify-between items-start">
                  <span className="text-2xl">🌱</span>
                  <span className="text-xs font-extrabold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                    {item.suitabilityScore}% Match
                  </span>
                </div>
                <h4 className="font-bold text-stone-900 text-base mt-2 group-hover:text-emerald-700 transition-colors">
                  {lang === 'te' ? item.crop.nameTe : item.crop.nameEn}
                </h4>
                <p className="text-xs text-stone-500 mt-0.5 line-clamp-2">
                  {lang === 'te' ? item.whyThisCrop.te : item.whyThisCrop.en}
                </p>
              </div>

              <div className="pt-2 border-t border-stone-200 flex justify-between items-center text-xs">
                <span className="text-stone-600 font-medium">
                  {item.crop.durationDays.min}-{item.crop.durationDays.max} days
                </span>
                <span className="font-bold text-emerald-700">
                  ₹{item.financialSummary.profitMin.toLocaleString('en-IN')} - ₹{item.financialSummary.profitMax.toLocaleString('en-IN')}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Saved Crops Shelf */}
      <div className="bg-white rounded-xl p-6 border border-stone-200 shadow-sm space-y-4">
        <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
          <Bookmark className="w-5 h-5 text-amber-600" />
          <span>{t.mySavedCrops} ({savedCrops.length})</span>
        </h3>

        {savedCrops.length === 0 ? (
          <div className="p-8 text-center bg-stone-50 rounded-xl border border-dashed border-stone-300">
            <p className="text-xs sm:text-sm text-stone-500">
              {lang === 'te' 
                ? 'మీరు ఇంకా ఎటువంటి పంటలను సేవ్ చేసుకోలేదు. సిఫార్సుల పేజీలో "నా పంటలలో సేవ్ చేయండి" క్లిక్ చేయండి.'
                : "You haven't saved any crops yet. Click 'Save to My Crops' on any recommendation card."}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {savedCrops.map(crop => (
              <div 
                key={crop.id}
                onClick={() => onSelectCrop(crop)}
                className="p-3.5 rounded-lg border border-stone-200 hover:border-emerald-400 bg-white cursor-pointer transition-all flex items-center justify-between group"
              >
                <div>
                  <h4 className="text-sm font-bold text-stone-900 group-hover:text-emerald-700">
                    {lang === 'te' ? crop.nameTe : crop.nameEn}
                  </h4>
                  <span className="text-xs text-stone-500 capitalize">{crop.category}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};
