import React from 'react';
import { CropInfo, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { CROPS_DATABASE } from '../data/crops';
import { 
  Layers, 
  X, 
  Droplets, 
  Clock, 
  Coins, 
  TrendingUp, 
  Check, 
  Plus,
  Trash2,
  Sprout
} from 'lucide-react';

interface CropComparisonViewProps {
  comparedCropIds: string[];
  onRemoveCrop: (cropId: string) => void;
  onAddCrop: (cropId: string) => void;
  onClearAll: () => void;
  lang: Language;
}

export const CropComparisonView: React.FC<CropComparisonViewProps> = ({
  comparedCropIds,
  onRemoveCrop,
  onAddCrop,
  onClearAll,
  lang
}) => {
  const t = TRANSLATIONS[lang];
  const comparedCrops = CROPS_DATABASE.filter(c => comparedCropIds.includes(c.id));
  const availableCrops = CROPS_DATABASE.filter(c => !comparedCropIds.includes(c.id));

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="bg-white rounded-xl p-6 border border-stone-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
            {t.comparisonTitle}
          </h2>
          <p className="text-sm text-stone-600 mt-1">
            {t.comparisonSubtitle}
          </p>
        </div>

        {comparedCrops.length > 0 && (
          <button
            onClick={onClearAll}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 rounded-md transition-colors self-start sm:self-auto"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>{t.clearComparison}</span>
          </button>
        )}
      </div>

      {/* If no crops selected */}
      {comparedCrops.length === 0 ? (
        <div className="bg-white rounded-2xl border border-dashed border-stone-300 p-8 sm:p-12 text-center space-y-4">
          <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-700 mx-auto flex items-center justify-center text-2xl">
            🌱
          </div>
          <div>
            <h3 className="text-lg font-bold text-stone-900">
              {lang === 'te' ? 'పోల్చడానికి ఎటువంటి పంటలు ఎంపిక చేయబడలేదు' : 'No crops currently selected for comparison'}
            </h3>
            <p className="text-sm text-stone-600 max-w-md mx-auto mt-1">
              {t.selectCropsToCompare}
            </p>
          </div>

          <div className="pt-2 flex flex-wrap justify-center gap-2 max-w-xl mx-auto">
            {CROPS_DATABASE.slice(0, 6).map(crop => (
              <button
                key={crop.id}
                onClick={() => onAddCrop(crop.id)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-stone-100 hover:bg-emerald-50 hover:text-emerald-800 hover:border-emerald-300 border border-stone-200 rounded-lg text-xs font-medium text-stone-800 transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>{lang === 'te' ? crop.nameTe : crop.nameEn}</span>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          
          {/* Quick Add Bar if less than 4 crops */}
          {comparedCrops.length < 4 && (
            <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 flex flex-wrap items-center gap-3">
              <span className="text-xs font-bold text-stone-700">
                {lang === 'te' ? 'మరిన్ని పంటలను జోడించండి (గరిష్టంగా 4):' : 'Add another crop (Up to 4):'}
              </span>
              <div className="flex flex-wrap gap-2">
                {availableCrops.slice(0, 5).map(crop => (
                  <button
                    key={crop.id}
                    onClick={() => onAddCrop(crop.id)}
                    className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium bg-white hover:bg-emerald-50 hover:border-emerald-400 border border-stone-300 rounded text-stone-700 transition-colors"
                  >
                    <Plus className="w-3 h-3 text-emerald-600" />
                    <span>{lang === 'te' ? crop.nameTe : crop.nameEn}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Side by Side Comparative Matrix Table */}
          <div className="overflow-x-auto bg-white rounded-2xl border border-stone-200 shadow-sm">
            <table className="w-full text-left text-sm border-collapse min-w-[650px]">
              
              {/* Table Header: Crop Names */}
              <thead>
                <tr className="bg-stone-100 border-b border-stone-200">
                  <th className="p-4 text-xs font-bold uppercase tracking-wider text-stone-600 w-1/4">
                    {lang === 'te' ? 'తులనాత్మక లక్షణాలు' : 'Evaluation Parameters'}
                  </th>
                  {comparedCrops.map(crop => (
                    <th key={crop.id} className="p-4 text-stone-900 border-l border-stone-200 relative">
                      <div className="flex justify-between items-start gap-2">
                        <div>
                          <div className="font-extrabold text-base text-stone-900">
                            {lang === 'te' ? crop.nameTe : crop.nameEn}
                          </div>
                          <span className="text-[11px] font-normal text-stone-500 italic block mt-0.5">
                            {crop.scientificName}
                          </span>
                        </div>
                        <button
                          onClick={() => onRemoveCrop(crop.id)}
                          className="p-1 text-stone-400 hover:text-rose-600 rounded hover:bg-stone-200/60 transition-colors"
                          title="Remove from comparison"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="divide-y divide-stone-200 text-xs sm:text-sm text-stone-800">
                
                {/* Water Requirement */}
                <tr>
                  <td className="p-4 font-semibold text-stone-700 bg-stone-50/50">
                    <div className="flex items-center gap-1.5">
                      <Droplets className="w-4 h-4 text-sky-600" />
                      <span>{t.waterNeeded}</span>
                    </div>
                  </td>
                  {comparedCrops.map(crop => (
                    <td key={crop.id} className="p-4 border-l border-stone-200">
                      <span className="font-bold capitalize">{crop.waterRequirementCategory}</span>
                      <div className="text-xs text-stone-500 mt-0.5">
                        {crop.waterRequirementMm.min} - {crop.waterRequirementMm.max} mm
                      </div>
                    </td>
                  ))}
                </tr>

                {/* Growing Duration */}
                <tr>
                  <td className="p-4 font-semibold text-stone-700 bg-stone-50/50">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-amber-600" />
                      <span>{t.growingDuration}</span>
                    </div>
                  </td>
                  {comparedCrops.map(crop => (
                    <td key={crop.id} className="p-4 border-l border-stone-200 font-medium">
                      {crop.durationDays.min} - {crop.durationDays.max} {lang === 'te' ? 'రోజులు' : 'Days'}
                    </td>
                  ))}
                </tr>

                {/* Estimated Input Cost / Acre */}
                <tr>
                  <td className="p-4 font-semibold text-stone-700 bg-stone-50/50">
                    <div className="flex items-center gap-1.5">
                      <Coins className="w-4 h-4 text-stone-600" />
                      <span>{t.estCost}</span>
                    </div>
                  </td>
                  {comparedCrops.map(crop => (
                    <td key={crop.id} className="p-4 border-l border-stone-200 font-semibold text-stone-800">
                      ₹{crop.estimatedCostPerAcre.min.toLocaleString('en-IN')} - ₹{crop.estimatedCostPerAcre.max.toLocaleString('en-IN')}
                    </td>
                  ))}
                </tr>

                {/* Expected Yield */}
                <tr>
                  <td className="p-4 font-semibold text-stone-700 bg-stone-50/50">
                    <div className="flex items-center gap-1.5">
                      <Sprout className="w-4 h-4 text-emerald-600" />
                      <span>{t.expectedYield}</span>
                    </div>
                  </td>
                  {comparedCrops.map(crop => (
                    <td key={crop.id} className="p-4 border-l border-stone-200 font-bold text-emerald-800">
                      {crop.expectedYieldPerAcre.min} - {crop.expectedYieldPerAcre.max} {crop.expectedYieldPerAcre.unit}/ac
                    </td>
                  ))}
                </tr>

                {/* Potential Revenue */}
                <tr>
                  <td className="p-4 font-semibold text-stone-700 bg-stone-50/50">
                    <div className="flex items-center gap-1.5">
                      <TrendingUp className="w-4 h-4 text-emerald-600" />
                      <span>{t.potRevenue}</span>
                    </div>
                  </td>
                  {comparedCrops.map(crop => (
                    <td key={crop.id} className="p-4 border-l border-stone-200 font-bold text-emerald-700">
                      ₹{crop.potentialRevenuePerAcre.min.toLocaleString('en-IN')} - ₹{crop.potentialRevenuePerAcre.max.toLocaleString('en-IN')}
                    </td>
                  ))}
                </tr>

                {/* Net Profit Range */}
                <tr>
                  <td className="p-4 font-semibold text-stone-700 bg-stone-50/50">
                    <div className="flex items-center gap-1.5">
                      <Coins className="w-4 h-4 text-emerald-700" />
                      <span>{t.estProfit}</span>
                    </div>
                  </td>
                  {comparedCrops.map(crop => {
                    const profitMin = crop.potentialRevenuePerAcre.min - crop.estimatedCostPerAcre.max;
                    const profitMax = crop.potentialRevenuePerAcre.max - crop.estimatedCostPerAcre.min;
                    return (
                      <td key={crop.id} className="p-4 border-l border-stone-200 font-extrabold text-emerald-900 bg-emerald-50/30">
                        ₹{profitMin.toLocaleString('en-IN')} - ₹{profitMax.toLocaleString('en-IN')}
                      </td>
                    );
                  })}
                </tr>

                {/* Suitable Soil */}
                <tr>
                  <td className="p-4 font-semibold text-stone-700 bg-stone-50/50">
                    <span>{t.soilTypeLabel}</span>
                  </td>
                  {comparedCrops.map(crop => (
                    <td key={crop.id} className="p-4 border-l border-stone-200 capitalize">
                      {crop.suitableSoils.map(s => s.replace('_', ' ')).join(', ')}
                    </td>
                  ))}
                </tr>

                {/* Climate & Temperature */}
                <tr>
                  <td className="p-4 font-semibold text-stone-700 bg-stone-50/50">
                    <span>{lang === 'te' ? 'ఆదర్శ ఉష్ణోగ్రత' : 'Ideal Temperature'}</span>
                  </td>
                  {comparedCrops.map(crop => (
                    <td key={crop.id} className="p-4 border-l border-stone-200">
                      {crop.idealTempMin}°C - {crop.idealTempMax}°C
                    </td>
                  ))}
                </tr>

                {/* Major Pest Risk */}
                <tr>
                  <td className="p-4 font-semibold text-stone-700 bg-stone-50/50">
                    <span>{t.pestsAndDiseases}</span>
                  </td>
                  {comparedCrops.map(crop => (
                    <td key={crop.id} className="p-4 border-l border-stone-200 text-stone-600">
                      {(lang === 'te' ? crop.majorPestsAndDiseases.te : crop.majorPestsAndDiseases.en).slice(0, 2).join(', ')}
                    </td>
                  ))}
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      )}

    </div>
  );
};
