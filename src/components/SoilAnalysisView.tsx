import React, { useState } from 'react';
import { Language, SoilType, CropInfo } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { CROPS_DATABASE } from '../data/crops';
import { 
  Layers, 
  TestTube2, 
  CheckCircle2, 
  AlertTriangle, 
  Sprout, 
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Info
} from 'lucide-react';

interface SoilAnalysisViewProps {
  lang: Language;
  onSelectCrop: (crop: CropInfo) => void;
}

export const SoilAnalysisView: React.FC<SoilAnalysisViewProps> = ({
  lang,
  onSelectCrop
}) => {
  const t = TRANSLATIONS[lang];

  const [selectedSoil, setSelectedSoil] = useState<SoilType>('black');
  const [ph, setPh] = useState<number>(7.0);
  const [nitrogen, setNitrogen] = useState<'low' | 'medium' | 'high'>('medium');
  const [phosphorus, setPhosphorus] = useState<'low' | 'medium' | 'high'>('medium');
  const [potassium, setPotassium] = useState<'low' | 'medium' | 'high'>('high');
  const [organicCarbon, setOrganicCarbon] = useState<'low' | 'medium' | 'high'>('medium');

  // Soil health calculation
  let healthScore = 70;
  if (ph >= 6.5 && ph <= 7.5) healthScore += 15;
  else if (ph >= 6.0 && ph <= 8.0) healthScore += 8;
  else healthScore -= 10;

  if (nitrogen === 'medium' || nitrogen === 'high') healthScore += 5;
  if (phosphorus === 'medium' || phosphorus === 'high') healthScore += 5;
  if (potassium === 'medium' || potassium === 'high') healthScore += 5;
  if (organicCarbon === 'high') healthScore += 5;
  else if (organicCarbon === 'low') healthScore -= 5;

  healthScore = Math.min(98, Math.max(35, healthScore));

  // Determine corrective amendments
  const amendments: { en: string; te: string; type: 'urgent' | 'regular' | 'good' }[] = [];

  if (ph < 6.0) {
    amendments.push({
      en: 'Acidic Soil: Apply Agricultural Lime (Calcium Carbonate) or Dolomite @ 1 - 2 tonnes/acre during summer ploughing to neutralize acidity.',
      te: 'ఆమ్ల నేల: ఆమ్లత్వాన్ని తగ్గించడానికి వేసవి దుక్కిలో ఎకరానికి 1-2 టన్నుల వ్యవసాయ సున్నం (డోలమైట్) చల్లాలి.',
      type: 'urgent'
    });
  } else if (ph > 8.0) {
    amendments.push({
      en: 'Alkaline/Sodic Soil: Apply Agricultural Gypsum @ 500 kg - 1 tonne/acre followed by leaching to displace excess sodium ions.',
      te: 'చవుడు/క్షార నేల: అధిక సోడియంను తొలగించడానికి ఎకరానికి 500 కేజీల జిప్సం వేసి పొలంలో నీరు నిలిపి బయటకు వదలాలి.',
      type: 'urgent'
    });
  }

  if (organicCarbon === 'low') {
    amendments.push({
      en: 'Low Organic Carbon (<0.5%): Incorporate green manure crops (Dhaincha / Sunnhemp) or 5-8 tonnes of well-rotted Farmyard Manure (FYM) per acre.',
      te: 'సేంద్రీయ కర్బనం లోపం: పచ్చిరొట్ట ఎరువులైన జనుము, జీలుగ సాగు చేసి కలియదున్నాలి లేదా ఎకరానికి 6-8 టన్నుల పశువుల ఎరువు వేయాలి.',
      type: 'urgent'
    });
  } else {
    amendments.push({
      en: 'Maintain active biological fertility by adding 2 tonnes/acre vermicompost or composted coir pith annually.',
      te: 'నేలలోని సూక్ష్మజీవుల రక్షణకు ఏటా ఎకరానికి 2 టన్నుల వర్మీ కంపోస్ట్ అందించడం శ్రేయస్కరం.',
      type: 'good'
    });
  }

  if (nitrogen === 'low') {
    amendments.push({
      en: 'Nitrogen Deficient: Use Neem-coated Urea in 3 splits or introduce leguminous pulse crops (Green gram / Cowpea) in crop rotation.',
      te: 'నత్రజని లోపం: వేపపూత పూసిన యూరియాను విడతల వారీగా వాడండి మరియు పెసలు, మినుములు వంటి పప్పుధాన్యాలతో పంట మార్పిడి చేయండి.',
      type: 'regular'
    });
  }

  if (phosphorus === 'low') {
    amendments.push({
      en: 'Phosphorus Deficient: Inoculate seeds with Phosphate Solubilizing Bacteria (PSB) @ 500g/acre seed rate and apply Single Super Phosphate (SSP).',
      te: 'భాస్వరం లోపం: విత్తనాలకు ఫాస్ఫో బ్యాక్టీరియా (PSB) కల్చర్ పట్టించండి మరియు సింగిల్ సూపర్ ఫాస్ఫేట్ (SSP) ను ఎరువుగా వాడండి.',
      type: 'regular'
    });
  }

  // Find matching crops for this soil type
  const matchingCrops = CROPS_DATABASE.filter(c => c.suitableSoils.includes(selectedSoil)).slice(0, 5);

  return (
    <div className="space-y-8">
      
      {/* Title */}
      <div className="bg-white rounded-xl p-6 border border-stone-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
            {t.soilAnalysisTitle}
          </h2>
          <p className="text-sm text-stone-600 mt-1">
            {t.soilAnalysisSubtitle}
          </p>
        </div>
        <div className="bg-amber-50 text-amber-900 border border-amber-200 px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 self-start md:self-auto">
          <TestTube2 className="w-4 h-4 text-amber-700" />
          <span>{lang === 'te' ? 'నేల ఆరోగ్య కార్డ్ ప్రమాణాలు' : 'Soil Health Card Standards'}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left: Interactive Soil Health Card Tester */}
        <div className="lg:col-span-6 bg-white rounded-xl p-6 border border-stone-200 shadow-sm space-y-6">
          <div className="flex items-center gap-2 pb-3 border-b border-stone-100">
            <Layers className="w-5 h-5 text-emerald-600" />
            <h3 className="font-bold text-stone-900 text-base">
              {lang === 'te' ? 'నేల నమూనా పారామితులు' : 'Soil Test Input Parameters'}
            </h3>
          </div>

          {/* Soil Type Selection */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
              {t.soilTypeLabel}
            </label>
            <select
              value={selectedSoil}
              onChange={(e) => setSelectedSoil(e.target.value as SoilType)}
              className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-lg text-stone-900 font-medium text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            >
              <option value="black">{t.black}</option>
              <option value="red">{t.red}</option>
              <option value="alluvial">{t.alluvial}</option>
              <option value="sandy_loam">{t.sandy_loam}</option>
              <option value="clay_loam">{t.clay_loam}</option>
              <option value="laterite">{t.laterite}</option>
              <option value="saline_alkaline">{t.saline_alkaline}</option>
            </select>
          </div>

          {/* pH Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-stone-800">{t.soilPhLabel}</span>
              <span className="font-extrabold text-sm px-2.5 py-0.5 rounded bg-stone-100 text-stone-900 font-mono">
                pH {ph}
              </span>
            </div>
            <input
              type="range"
              min="4.5"
              max="9.0"
              step="0.1"
              value={ph}
              onChange={(e) => setPh(parseFloat(e.target.value))}
              className="w-full accent-emerald-600 cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-stone-500">
              <span className="text-amber-700">Acidic (&lt; 6.0)</span>
              <span className="text-emerald-700 font-bold">Neutral (6.5 - 7.5)</span>
              <span className="text-indigo-700">Alkaline (&gt; 8.0)</span>
            </div>
          </div>

          {/* Nutrient Selectors N, P, K, OC */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-stone-700">{t.nitrogenLabel}</label>
              <select
                value={nitrogen}
                onChange={(e) => setNitrogen(e.target.value as any)}
                className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded-md"
              >
                <option value="low">{lang === 'te' ? 'తక్కువ (Low)' : 'Low (<280 kg/ha)'}</option>
                <option value="medium">{lang === 'te' ? 'మధ్యస్థం (Medium)' : 'Medium (280-560 kg/ha)'}</option>
                <option value="high">{lang === 'te' ? 'అధికం (High)' : 'High (>560 kg/ha)'}</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-stone-700">{t.phosphorusLabel}</label>
              <select
                value={phosphorus}
                onChange={(e) => setPhosphorus(e.target.value as any)}
                className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded-md"
              >
                <option value="low">{lang === 'te' ? 'తక్కువ (Low)' : 'Low (<10 kg/ha)'}</option>
                <option value="medium">{lang === 'te' ? 'మధ్యస్థం (Medium)' : 'Medium (10-25 kg/ha)'}</option>
                <option value="high">{lang === 'te' ? 'అధికం (High)' : 'High (>25 kg/ha)'}</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-stone-700">{t.potassiumLabel}</label>
              <select
                value={potassium}
                onChange={(e) => setPotassium(e.target.value as any)}
                className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded-md"
              >
                <option value="low">{lang === 'te' ? 'తక్కువ (Low)' : 'Low (<120 kg/ha)'}</option>
                <option value="medium">{lang === 'te' ? 'మధ్యస్థం (Medium)' : 'Medium (120-280 kg/ha)'}</option>
                <option value="high">{lang === 'te' ? 'అధికం (High)' : 'High (>280 kg/ha)'}</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-stone-700">{t.organicMatterLabel}</label>
              <select
                value={organicCarbon}
                onChange={(e) => setOrganicCarbon(e.target.value as any)}
                className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded-md"
              >
                <option value="low">{lang === 'te' ? 'తక్కువ (< 0.5%)' : 'Low (< 0.5%)'}</option>
                <option value="medium">{lang === 'te' ? 'మధ్యస్థం (0.5 - 0.75%)' : 'Medium (0.5 - 0.75%)'}</option>
                <option value="high">{lang === 'te' ? 'అధికం (> 0.75%)' : 'High (> 0.75%)'}</option>
              </select>
            </div>
          </div>

          {/* Diagnostic Health Score Display */}
          <div className="p-4 rounded-xl bg-stone-900 text-white flex items-center justify-between">
            <div>
              <span className="text-xs text-stone-400 block">{t.soilHealthScore}</span>
              <div className="text-2xl font-black text-emerald-400 mt-0.5">
                {healthScore} / 100
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs font-bold px-3 py-1 rounded bg-stone-800 text-stone-200">
                {healthScore >= 80 ? (lang === 'te' ? 'చాలా మంచి నేల' : 'High Fertility') :
                 healthScore >= 60 ? (lang === 'te' ? 'మధ్యస్థ సారం' : 'Moderate Fertility') :
                 (lang === 'te' ? 'సవరణలు అవసరం' : 'Requires Amendments')}
              </span>
            </div>
          </div>

        </div>

        {/* Right: Amendments and Soil Compatible Crops */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Soil Recommendations & Amendments */}
          <div className="bg-white rounded-xl p-6 border border-stone-200 shadow-sm space-y-4">
            <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <span>{t.soilRecommendations}</span>
            </h3>

            <div className="space-y-3">
              {amendments.map((item, idx) => (
                <div 
                  key={idx}
                  className={`p-3.5 rounded-lg border text-xs leading-relaxed flex items-start gap-2.5 ${
                    item.type === 'urgent' 
                      ? 'bg-amber-50 border-amber-200 text-amber-900' 
                      : 'bg-stone-50 border-stone-200 text-stone-800'
                  }`}
                >
                  <AlertTriangle className={`w-4 h-4 shrink-0 mt-0.5 ${item.type === 'urgent' ? 'text-amber-600' : 'text-stone-400'}`} />
                  <div>{lang === 'te' ? item.te : item.en}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Natural Matching Crops for this Soil */}
          <div className="bg-white rounded-xl p-6 border border-stone-200 shadow-sm space-y-4">
            <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
              <Sprout className="w-5 h-5 text-emerald-600" />
              <span>{t.idealCropsForSoil}</span>
            </h3>

            <div className="space-y-2.5">
              {matchingCrops.map((crop) => (
                <div 
                  key={crop.id}
                  onClick={() => onSelectCrop(crop)}
                  className="p-3 rounded-lg border border-stone-200 hover:border-emerald-400 hover:bg-emerald-50/30 transition-all flex items-center justify-between cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">
                      {crop.category === 'cereal' ? '🌾' :
                       crop.category === 'pulse' ? '🫘' :
                       crop.category === 'oilseed' ? '🥜' : '🌱'}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-stone-900 group-hover:text-emerald-700 transition-colors">
                        {lang === 'te' ? crop.nameTe : crop.nameEn}
                      </h4>
                      <p className="text-xs text-stone-500">
                        {crop.durationDays.min}-{crop.durationDays.max} {lang === 'te' ? 'రోజులు' : 'days'} · {crop.waterRequirementCategory} water
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
