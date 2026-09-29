import React from 'react';
import { CropInfo, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { 
  X, 
  Sprout, 
  Droplets, 
  Calendar, 
  ShieldAlert, 
  Coins, 
  FileText, 
  Award,
  Layers,
  Thermometer,
  Printer
} from 'lucide-react';

interface CropDetailModalProps {
  crop: CropInfo | null;
  onClose: () => void;
  lang: Language;
}

export const CropDetailModal: React.FC<CropDetailModalProps> = ({
  crop,
  onClose,
  lang
}) => {
  if (!crop) return null;
  const t = TRANSLATIONS[lang];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="relative bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-stone-200 shadow-2xl space-y-6 p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-start justify-between pb-4 border-b border-stone-200">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center justify-center text-2xl font-bold">
              🌿
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900">
                {lang === 'te' ? crop.nameTe : crop.nameEn}
              </h2>
              <p className="text-xs text-stone-500 italic">
                {crop.scientificName} · {crop.category.toUpperCase()}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="p-2 text-stone-500 hover:text-stone-800 hover:bg-stone-100 rounded-lg transition-colors hidden sm:block"
              title="Print Agronomic Advisory"
            >
              <Printer className="w-5 h-5" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-stone-400 hover:text-stone-800 hover:bg-stone-100 rounded-lg transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Quick Agronomic Badges Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
            <span className="text-stone-500 block mb-0.5">{t.growingDuration}</span>
            <span className="font-bold text-stone-900">{crop.durationDays.min}-{crop.durationDays.max} days</span>
          </div>

          <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
            <span className="text-stone-500 block mb-0.5">{t.waterNeeded}</span>
            <span className="font-bold text-stone-900">{crop.waterRequirementMm.min}-{crop.waterRequirementMm.max} mm</span>
          </div>

          <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
            <span className="text-stone-500 block mb-0.5">{t.expectedYield}</span>
            <span className="font-bold text-emerald-700">{crop.expectedYieldPerAcre.min}-{crop.expectedYieldPerAcre.max} {crop.expectedYieldPerAcre.unit}/ac</span>
          </div>

          <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
            <span className="text-stone-500 block mb-0.5">{lang === 'te' ? 'ఆదర్శ ఉష్ణోగ్రత' : 'Ideal Temp'}</span>
            <span className="font-bold text-amber-700">{crop.idealTempMin}°C - {crop.idealTempMax}°C</span>
          </div>
        </div>

        {/* Suitable Soils & pH */}
        <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-stone-700 flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-emerald-600" />
            <span>{lang === 'te' ? 'నేల రకాలు & pH పరిమితులు' : 'Soil Types & pH Ranges'}</span>
          </h3>
          <div className="text-xs text-stone-800 flex flex-wrap gap-2">
            {crop.suitableSoils.map((s, idx) => (
              <span key={idx} className="bg-white border border-stone-300 px-2.5 py-1 rounded-md capitalize font-medium">
                {s.replace('_', ' ')}
              </span>
            ))}
          </div>
          <p className="text-xs text-stone-600">
            {lang === 'te' 
              ? `ఆదర్శ నేల pH: ${crop.idealPhMin} నుండి ${crop.idealPhMax} (తట్టుకునే గరిష్ట పరిమితి: ${crop.toleratedPhMin} - ${crop.toleratedPhMax})`
              : `Optimal soil pH: ${crop.idealPhMin} - ${crop.idealPhMax} (Tolerates ${crop.toleratedPhMin} - ${crop.toleratedPhMax})`}
          </p>
        </div>

        {/* Season & Calendar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/70">
            <h4 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-emerald-600" />
              <span>{t.sowingWindow}</span>
            </h4>
            <p className="text-stone-700">
              {lang === 'te' ? crop.sowingPeriod.te : crop.sowingPeriod.en}
            </p>
          </div>

          <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/70">
            <h4 className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-amber-600" />
              <span>{t.harvestWindow}</span>
            </h4>
            <p className="text-stone-700">
              {lang === 'te' ? crop.harvestPeriod.te : crop.harvestPeriod.en}
            </p>
          </div>
        </div>

        {/* Fertilizer Schedule */}
        <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/50 space-y-1.5">
          <h4 className="text-xs font-bold text-emerald-900 flex items-center gap-1.5">
            <Coins className="w-4 h-4 text-emerald-700" />
            <span>{t.fertilizers}</span>
          </h4>
          <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed">
            {lang === 'te' ? crop.fertilizerRequirements.te : crop.fertilizerRequirements.en}
          </p>
        </div>

        {/* Major Pests & Integrated Pest Management */}
        <div className="p-4 rounded-xl border border-rose-200 bg-rose-50/40 space-y-2">
          <h4 className="text-xs font-bold text-rose-900 flex items-center gap-1.5">
            <ShieldAlert className="w-4 h-4 text-rose-600" />
            <span>{t.pestsAndDiseases}</span>
          </h4>
          <ul className="list-disc list-inside text-xs sm:text-sm text-rose-950 space-y-1">
            {(lang === 'te' ? crop.majorPestsAndDiseases.te : crop.majorPestsAndDiseases.en).map((p, idx) => (
              <li key={idx}>{p}</li>
            ))}
          </ul>
        </div>

        {/* Important Precautions */}
        <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/40 space-y-2">
          <h4 className="text-xs font-bold text-amber-900">
            {t.precautions}
          </h4>
          <ul className="list-disc list-inside text-xs sm:text-sm text-amber-950 space-y-1.5 leading-relaxed">
            {(lang === 'te' ? crop.importantPrecautions.te : crop.importantPrecautions.en).map((prec, idx) => (
              <li key={idx}>{prec}</li>
            ))}
          </ul>
        </div>

        {/* ICAR Data Citation & Disclaimer */}
        <div className="pt-3 border-t border-stone-200 flex flex-col sm:flex-row justify-between items-start sm:items-center text-[11px] text-stone-500 gap-2">
          <div className="flex items-center gap-1.5">
            <Award className="w-4 h-4 text-emerald-600" />
            <span>Source: {crop.dataSource}</span>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-stone-900 text-white font-semibold text-xs hover:bg-stone-800 transition-colors ml-auto sm:ml-0"
          >
            {lang === 'te' ? 'మూసివేయి' : 'Close Details'}
          </button>
        </div>

      </div>
    </div>
  );
};
