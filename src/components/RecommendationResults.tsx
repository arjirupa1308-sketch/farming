import React, { useState } from 'react';
import { 
  CropRecommendationResult, 
  Language, 
  CropInfo 
} from '../types';
import { TRANSLATIONS } from '../data/translations';
import { 
  Volume2, 
  VolumeX, 
  Bookmark, 
  Check, 
  ArrowRight, 
  ShieldAlert, 
  Info, 
  Droplets, 
  Calendar, 
  Coins, 
  TrendingUp, 
  Sprout, 
  FileText,
  Layers,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { speakText, stopSpeaking, isSpeaking } from '../utils/speech';

interface RecommendationResultsProps {
  results: CropRecommendationResult[];
  lang: Language;
  onSelectCropForDetail: (crop: CropInfo) => void;
  onToggleCompare: (cropId: string) => void;
  comparedCropIds: string[];
  onToggleSaveCrop: (cropId: string) => void;
  savedCropIds: string[];
  onAudioStateChange: (playing: boolean) => void;
}

export const RecommendationResults: React.FC<RecommendationResultsProps> = ({
  results,
  lang,
  onSelectCropForDetail,
  onToggleCompare,
  comparedCropIds,
  onToggleSaveCrop,
  savedCropIds,
  onAudioStateChange
}) => {
  const t = TRANSLATIONS[lang];
  const [activeSpeechCropId, setActiveSpeechCropId] = useState<string | null>(null);
  const [expandedDetailsId, setExpandedDetailsId] = useState<string | null>(null);

  const handleListen = (result: CropRecommendationResult) => {
    if (activeSpeechCropId === result.crop.id && isSpeaking()) {
      stopSpeaking();
      setActiveSpeechCropId(null);
      onAudioStateChange(false);
      return;
    }

    const cropName = lang === 'te' ? result.crop.nameTe : result.crop.nameEn;
    const whyText = lang === 'te' ? result.whyThisCrop.te : result.whyThisCrop.en;
    const precautionText = lang === 'te' 
      ? (result.crop.importantPrecautions.te[0] || '') 
      : (result.crop.importantPrecautions.en[0] || '');

    const speechScript = lang === 'te'
      ? `${cropName}. అనుకూలత శాతం: ${result.suitabilityScore} శాతం. ఈ పంట ఎందుకు?: ${whyText}. ముఖ్యమైన జాగ్రత్త: ${precautionText}`
      : `${cropName}. Suitability match: ${result.suitabilityScore} percent. Why this crop?: ${whyText}. Key precaution: ${precautionText}`;

    setActiveSpeechCropId(result.crop.id);
    onAudioStateChange(true);

    speakText(
      speechScript,
      lang,
      () => {
        setActiveSpeechCropId(result.crop.id);
        onAudioStateChange(true);
      },
      () => {
        setActiveSpeechCropId(null);
        onAudioStateChange(false);
      }
    );
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-emerald-700 bg-emerald-50 border-emerald-300';
    if (score >= 60) return 'text-amber-700 bg-amber-50 border-amber-300';
    return 'text-rose-700 bg-rose-50 border-rose-300';
  };

  const getBadgeStyle = (score: number) => {
    if (score >= 80) return 'text-emerald-800 font-bold';
    if (score >= 60) return 'text-amber-800 font-bold';
    return 'text-rose-800 font-bold';
  };

  return (
    <div className="space-y-6">
      
      {/* Results Header */}
      <div className="bg-white rounded-xl p-5 border border-stone-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
            {t.recommendationTitle}
          </h2>
          <p className="text-sm text-stone-600 mt-1">
            {t.recommendationSubtitle}
          </p>
        </div>
        <div className="text-xs text-stone-500 bg-stone-50 border border-stone-200 px-3 py-1.5 rounded-lg flex items-center gap-1.5 self-start md:self-auto">
          <Info className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{lang === 'te' ? `${results.length} పంటలు విశ్లేషించబడ్డాయి` : `${results.length} crops evaluated`}</span>
        </div>
      </div>

      {/* Safety & Accuracy Disclaimer Box */}
      <div className="bg-amber-50/90 border border-amber-200 rounded-xl p-4 sm:p-5 flex items-start gap-3.5 shadow-xs">
        <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h4 className="text-xs sm:text-sm font-bold text-amber-900">
            {t.disclaimerTitle}
          </h4>
          <p className="text-xs text-amber-800/90 leading-relaxed">
            {t.disclaimerText}
          </p>
        </div>
      </div>

      {/* Recommended Crops Cards List */}
      <div className="space-y-5">
        {results.map((result, index) => {
          const { crop, suitabilityScore, whyThisCrop, riskWarning, financialSummary } = result;
          const isCompared = comparedCropIds.includes(crop.id);
          const isSaved = savedCropIds.includes(crop.id);
          const isSpeakingThis = activeSpeechCropId === crop.id;
          const isExpanded = expandedDetailsId === crop.id;

          return (
            <div 
              key={crop.id}
              className={`bg-white rounded-xl border transition-all ${
                index === 0 
                  ? 'border-emerald-500 shadow-md ring-1 ring-emerald-500/20' 
                  : 'border-stone-200 hover:border-stone-300 shadow-sm'
              }`}
            >
              <div className="p-5 sm:p-6 space-y-5">
                
                {/* Card Top: Crop Title, Suitability Gauge & Audio Button */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-100">
                  <div className="flex items-start gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-stone-100 border border-stone-200 flex items-center justify-center text-2xl shrink-0">
                      {crop.category === 'cereal' ? '🌾' :
                       crop.category === 'pulse' ? '🫘' :
                       crop.category === 'commercial' ? '🌱' :
                       crop.category === 'oilseed' ? '🥜' :
                       crop.category === 'vegetable' ? '🍅' : '🌿'}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-stone-500">#{index + 1}</span>
                        <h3 className="text-lg sm:text-xl font-bold text-stone-900">
                          {lang === 'te' ? crop.nameTe : crop.nameEn}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-stone-500 mt-0.5">
                        <span className="italic font-serif">{crop.scientificName}</span>
                        <span>·</span>
                        <span className="capitalize">{crop.category}</span>
                      </div>
                    </div>
                  </div>

                  {/* Suitability score & Listen button */}
                  <div className="flex items-center gap-2.5 sm:self-center">
                    {/* Listen button */}
                    <button
                      onClick={() => handleListen(result)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                        isSpeakingThis 
                          ? 'bg-emerald-600 text-white border-emerald-700 animate-pulse' 
                          : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border-stone-200'
                      }`}
                      title={lang === 'te' ? 'వినండి (చదవండి)' : 'Listen aloud'}
                    >
                      {isSpeakingThis ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-emerald-600" />}
                      <span>{isSpeakingThis ? t.stopListening : t.listen}</span>
                    </button>

                    {/* Match Score */}
                    <div className={`px-3.5 py-1.5 rounded-lg border text-sm font-extrabold flex items-center gap-1.5 ${getScoreColor(suitabilityScore)}`}>
                      <span>{suitabilityScore}%</span>
                      <span className="text-[11px] font-medium hidden sm:inline">{lang === 'te' ? 'అనుకూలత' : 'Match'}</span>
                    </div>
                  </div>
                </div>

                {/* Risk Warning if water deficit */}
                {riskWarning && (
                  <div className="bg-rose-50 border border-rose-200 rounded-lg p-3 text-xs text-rose-800 flex items-start gap-2">
                    <ShieldAlert className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <span>{lang === 'te' ? riskWarning.te : riskWarning.en}</span>
                  </div>
                )}

                {/* "Why this crop?" Explanation Section */}
                <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/80">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-stone-800 mb-1.5">
                    <Sprout className="w-4 h-4 text-emerald-600" />
                    <span>{t.whyThisCropLabel}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    {lang === 'te' ? whyThisCrop.te : whyThisCrop.en}
                  </p>
                </div>

                {/* Primary Agronomic & Financial Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div className="p-3 bg-stone-50/80 rounded-lg border border-stone-200/60">
                    <span className="text-stone-500 block mb-0.5">{t.growingDuration}</span>
                    <span className="font-semibold text-stone-900">
                      {crop.durationDays.min} - {crop.durationDays.max} {lang === 'te' ? 'రోజులు' : 'Days'}
                    </span>
                  </div>

                  <div className="p-3 bg-stone-50/80 rounded-lg border border-stone-200/60">
                    <span className="text-stone-500 block mb-0.5">{t.waterNeeded}</span>
                    <span className="font-semibold text-stone-900 capitalize">
                      {crop.waterRequirementCategory} ({crop.waterRequirementMm.min}-{crop.waterRequirementMm.max} mm)
                    </span>
                  </div>

                  <div className="p-3 bg-stone-50/80 rounded-lg border border-stone-200/60">
                    <span className="text-stone-500 block mb-0.5">{t.expectedYield}</span>
                    <span className="font-semibold text-emerald-800">
                      {crop.expectedYieldPerAcre.min} - {crop.expectedYieldPerAcre.max} {crop.expectedYieldPerAcre.unit}/ac
                    </span>
                  </div>

                  <div className="p-3 bg-stone-50/80 rounded-lg border border-stone-200/60">
                    <span className="text-stone-500 block mb-0.5">{t.estProfit}</span>
                    <span className="font-semibold text-emerald-700">
                      ₹{financialSummary.profitMin.toLocaleString('en-IN')} - ₹{financialSummary.profitMax.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                {/* Sowing & Harvest calendar strip */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-stone-50/50 p-3 rounded-lg border border-stone-200/50">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-emerald-600 shrink-0" />
                    <div>
                      <span className="text-stone-500 font-medium">{t.sowingWindow}: </span>
                      <span className="text-stone-800 font-semibold">{lang === 'te' ? crop.sowingPeriod.te : crop.sowingPeriod.en}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-amber-600 shrink-0" />
                    <div>
                      <span className="text-stone-500 font-medium">{t.harvestWindow}: </span>
                      <span className="text-stone-800 font-semibold">{lang === 'te' ? crop.harvestPeriod.te : crop.harvestPeriod.en}</span>
                    </div>
                  </div>
                </div>

                {/* Collapsible Deep Details: Fertilizers, Pests, Precautions */}
                {isExpanded && (
                  <div className="space-y-4 pt-3 border-t border-stone-200 text-xs sm:text-sm animate-fadeIn">
                    
                    {/* Fertilizer & Pests */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-3.5 bg-stone-50 rounded-lg border border-stone-200">
                        <h4 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                          <Coins className="w-4 h-4 text-emerald-600" />
                          <span>{t.fertilizers}</span>
                        </h4>
                        <p className="text-stone-700 text-xs leading-relaxed">
                          {lang === 'te' ? crop.fertilizerRequirements.te : crop.fertilizerRequirements.en}
                        </p>
                      </div>

                      <div className="p-3.5 bg-stone-50 rounded-lg border border-stone-200">
                        <h4 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                          <ShieldAlert className="w-4 h-4 text-rose-600" />
                          <span>{t.pestsAndDiseases}</span>
                        </h4>
                        <ul className="list-disc list-inside text-stone-700 text-xs space-y-0.5">
                          {(lang === 'te' ? crop.majorPestsAndDiseases.te : crop.majorPestsAndDiseases.en).map((pest, pIdx) => (
                            <li key={pIdx}>{pest}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Important Field Precautions */}
                    <div className="p-3.5 bg-amber-50/50 rounded-lg border border-amber-200/60">
                      <h4 className="font-bold text-amber-950 mb-1.5">
                        {t.precautions}
                      </h4>
                      <ul className="list-disc list-inside text-amber-900 text-xs space-y-1">
                        {(lang === 'te' ? crop.importantPrecautions.te : crop.importantPrecautions.en).map((prec, prIdx) => (
                          <li key={prIdx}>{prec}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Scientific source credit */}
                    <div className="text-[11px] text-stone-400 italic">
                      Source: {crop.dataSource}
                    </div>

                  </div>
                )}

                {/* Card Action Controls */}
                <div className="pt-3 border-t border-stone-100 flex flex-wrap items-center justify-between gap-2.5">
                  <div className="flex items-center gap-2">
                    {/* Add to Compare */}
                    <button
                      onClick={() => onToggleCompare(crop.id)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                        isCompared 
                          ? 'bg-emerald-50 text-emerald-800 border-emerald-300 font-semibold' 
                          : 'bg-white hover:bg-stone-50 text-stone-700 border-stone-300'
                      }`}
                    >
                      <Layers className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{isCompared ? t.inComparison : t.addToCompare}</span>
                    </button>

                    {/* Save to My Crops */}
                    <button
                      onClick={() => onToggleSaveCrop(crop.id)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                        isSaved 
                          ? 'bg-amber-50 text-amber-800 border-amber-300 font-semibold' 
                          : 'bg-white hover:bg-stone-50 text-stone-700 border-stone-300'
                      }`}
                    >
                      <Bookmark className="w-3.5 h-3.5 text-amber-600" />
                      <span>{isSaved ? t.saved : t.saveToDashboard}</span>
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Toggle expand preview */}
                    <button
                      onClick={() => setExpandedDetailsId(isExpanded ? null : crop.id)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-stone-600 hover:text-stone-900 px-2.5 py-1.5 rounded transition-colors"
                    >
                      <span>{isExpanded ? (lang === 'te' ? 'తక్కువ చూపు' : 'Show Less') : (lang === 'te' ? 'మరిన్ని వివరాలు' : 'Quick Preview')}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>

                    {/* Full modal view */}
                    <button
                      onClick={() => onSelectCropForDetail(crop)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-lg shadow-xs transition-colors"
                    >
                      <span>{t.viewDetails}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
