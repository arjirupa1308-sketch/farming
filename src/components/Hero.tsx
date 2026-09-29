import React from 'react';
import { 
  ArrowRight, 
  TestTube2, 
  Droplets, 
  Sun, 
  CloudRain, 
  Layers, 
  CheckCircle2, 
  ShieldCheck, 
  Award,
  ChevronRight,
  TrendingUp,
  MapPin
} from 'lucide-react';
import { Language, FarmerInputForm } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { FARMER_PRESETS, FarmerPreset } from '../data/presets';

interface HeroProps {
  lang: Language;
  onFindCrop: () => void;
  onCheckSoil: () => void;
  onSelectPreset: (preset: FarmerPreset) => void;
}

export const Hero: React.FC<HeroProps> = ({
  lang,
  onFindCrop,
  onCheckSoil,
  onSelectPreset
}) => {
  const t = TRANSLATIONS[lang];

  return (
    <section className="relative overflow-hidden bg-stone-900 text-stone-100 py-12 md:py-20 border-b border-stone-800">
      {/* Background radial gradient accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-950/60 via-stone-900 to-stone-950 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading, Subtitle & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
              <Award className="w-4 h-4 text-emerald-400" />
              <span>{t.heroBadge}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {t.heroTitle}
            </h1>

            <p className="text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl">
              {t.heroSubtitle}
            </p>

            {/* Main Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={onFindCrop}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-base shadow-lg shadow-emerald-950/50 transition-all hover:translate-y-[-1px] focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-stone-900"
              >
                <span>{t.findCropBtn}</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={onCheckSoil}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 font-medium text-base border border-stone-700 transition-colors focus:outline-none focus:ring-2 focus:ring-stone-500"
              >
                <TestTube2 className="w-5 h-5 text-amber-400" />
                <span>{t.checkSoilBtn}</span>
              </button>
            </div>

            {/* Trust points */}
            <div className="pt-4 grid grid-cols-3 gap-4 border-t border-stone-800/80 text-xs sm:text-sm text-stone-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{lang === 'te' ? 'నీటి కొరత రక్షణ' : 'Deficit Water Protection'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{lang === 'te' ? 'నేల ఆరోగ్య కార్డు విశ్లేషణ' : 'Soil Health Analysis'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{lang === 'te' ? 'ప్రత్యక్ష వాతావరణం' : 'Live Micro-Weather'}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Agricultural Farmland & Farmer Rich Graphic Composition */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-stone-800/90 border border-stone-700/80 p-5 sm:p-6 shadow-2xl backdrop-blur-sm">
              
              {/* Graphic Banner: Farmland, Soil, Climate, Crops */}
              <div className="relative h-48 sm:h-56 rounded-xl overflow-hidden bg-gradient-to-b from-sky-900/60 via-emerald-950/70 to-stone-950 flex flex-col justify-between p-4 border border-stone-700">
                {/* Sun & Cloud / Climate Elements */}
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-1.5 bg-stone-900/80 px-2.5 py-1 rounded text-xs text-sky-200 border border-stone-700/60">
                    <Sun className="w-3.5 h-3.5 text-amber-400" />
                    <span>28°C · Moderate Rain</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-stone-900/80 px-2.5 py-1 rounded text-xs text-emerald-300 border border-stone-700/60">
                    <Droplets className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{lang === 'te' ? 'బోరుబావి వసతి' : 'Borewell Irrigated'}</span>
                  </div>
                </div>

                {/* Agricultural Land Layer Representation */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-[11px] text-stone-300 font-medium">
                    <span>🌾 {lang === 'te' ? 'పంట శ్రేణి' : 'Crop Canopy'}</span>
                    <span className="text-emerald-400 font-semibold">{lang === 'te' ? '94% అనుకూలం' : '94% Match'}</span>
                  </div>
                  {/* Soil layers */}
                  <div className="h-6 rounded bg-gradient-to-r from-amber-800 to-amber-900 border border-amber-700/50 flex items-center px-2 text-[10px] text-amber-100 font-mono">
                    {lang === 'te' ? 'ఎర్ర నేల (pH 6.8 · NPK సమతుల్యం)' : 'Red Soil (pH 6.8 · Balanced NPK)'}
                  </div>
                  <div className="h-4 rounded bg-stone-950 border border-stone-800 flex items-center px-2 text-[9px] text-stone-400 font-mono">
                    {lang === 'te' ? 'తేమ నిల్వ పొర (Subsoil Moisture)' : 'Subsoil Moisture Retention'}
                  </div>
                </div>
              </div>

              {/* Quick sample recommendation card preview */}
              <div className="mt-4 pt-3 border-t border-stone-700/70">
                <div className="flex items-center justify-between">
                  <div className="text-xs text-stone-400">
                    {lang === 'te' ? 'తాజా విశ్లేషణ ఫలితం:' : 'Live Diagnostic Example:'}
                  </div>
                  <span className="text-xs text-emerald-400 font-medium">Kharif Season</span>
                </div>
                <div className="mt-2 flex items-center justify-between bg-stone-900/90 rounded-lg p-3 border border-stone-700/60">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded bg-emerald-900/50 border border-emerald-600/40 flex items-center justify-center text-lg">
                      🥜
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        {lang === 'te' ? 'వేరుశెనగ (పల్లీ)' : 'Groundnut (Peanut)'}
                      </h4>
                      <div className="text-[11px] text-stone-400 flex items-center gap-2">
                        <span>105 {lang === 'te' ? 'రోజులు' : 'Days'}</span>
                        <span>·</span>
                        <span>₹50,000 - ₹80,000/ac</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={onFindCrop}
                    className="text-xs bg-emerald-700 hover:bg-emerald-600 text-white font-medium px-3 py-1.5 rounded transition-colors"
                  >
                    {lang === 'te' ? 'వివరాలు' : 'Analyze'}
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Realistic Presets Strip */}
        <div className="mt-12 pt-8 border-t border-stone-800">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-400 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>{t.quickPresetsTitle}</span>
            </h3>
            <span className="text-xs text-stone-500 hidden sm:inline">
              {lang === 'te' ? 'ఒక్క క్లిక్‌తో తనిఖీ చేయండి' : 'Click to load field parameters'}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {FARMER_PRESETS.map((preset) => (
              <button
                key={preset.id}
                onClick={() => onSelectPreset(preset)}
                className="p-3.5 rounded-lg bg-stone-800/80 hover:bg-stone-800 hover:border-emerald-500 border border-stone-700 text-left transition-all group focus:outline-none focus:ring-1 focus:ring-emerald-400"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <h4 className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors line-clamp-1">
                    {lang === 'te' ? preset.titleTe : preset.titleEn}
                  </h4>
                  <ChevronRight className="w-4 h-4 text-stone-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-transform shrink-0" />
                </div>
                <p className="text-xs text-stone-400 line-clamp-2 leading-relaxed">
                  {lang === 'te' ? preset.descriptionTe : preset.descriptionEn}
                </p>
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
