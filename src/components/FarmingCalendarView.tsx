import React, { useState } from 'react';
import { CropInfo, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { CROPS_DATABASE } from '../data/crops';
import { 
  Calendar as CalendarIcon, 
  Sprout, 
  Droplets, 
  Coins, 
  ShieldAlert, 
  CheckCircle2, 
  ChevronRight,
  Clock
} from 'lucide-react';

interface FarmingCalendarViewProps {
  lang: Language;
}

export const FarmingCalendarView: React.FC<FarmingCalendarViewProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const [selectedCropId, setSelectedCropId] = useState<string>('groundnut');

  const selectedCrop = CROPS_DATABASE.find(c => c.id === selectedCropId) || CROPS_DATABASE[0];

  // Stage timeline generator based on crop duration
  const durationAvg = Math.round((selectedCrop.durationDays.min + selectedCrop.durationDays.max) / 2);

  const stages = [
    {
      stageEn: 'Stage 1: Land Preparation & Basal Sowing',
      stageTe: 'దశ 1: భూమి తయారీ & విత్తడం',
      days: `Days 0 - 15`,
      category: 'sowing',
      tasksEn: [
        'Deep summer ploughing followed by 2 harrowing passes.',
        'Apply Farmyard Manure (FYM) @ 4-5 tonnes/acre.',
        'Basal fertilizer application (Full Phosphorus, Potash + 1/3rd Nitrogen).',
        'Certified seed treatment with Rhizobium or Trichoderma.'
      ],
      tasksTe: [
        'వేసవి లోతు దుక్కులు చేసి ఎకరానికి 4-5 టన్నుల పశువుల ఎరువు వేయాలి.',
        'ఆఖరి దుక్కిలో సింగిల్ సూపర్ ఫాస్ఫేట్ మరియు పొటాష్ ఎరువులు వేయాలి.',
        'విత్తన శుద్ధి తప్పనిసరిగా చేసుకోవాలి.'
      ]
    },
    {
      stageEn: 'Stage 2: Vegetative Growth & 1st Irrigation',
      stageTe: 'దశ 2: శాఖీయ ఎదుగుదల & మొదటి తడి',
      days: `Days 20 - 40`,
      category: 'irrigation',
      tasksEn: [
        'First protective irrigation / life irrigation if rain ceases.',
        'First mechanical weeding or hand hoeing at 20-25 days.',
        'Top-dressing with 1st split of Nitrogen (Urea).',
        'Install yellow / blue sticky traps for early sucking pests.'
      ],
      tasksTe: [
        'మొలక వచ్చిన 20-25 రోజులకు మొదటి కలుపు తీయడం.',
        'మొదటి విడత నత్రజని (యూరియా) అందించడం.',
        'రసం పీల్చే పురుగుల నివారణకు జిగురు అట్టలు ఏర్పాటు చేయడం.'
      ]
    },
    {
      stageEn: 'Stage 3: Flowering & Critical Nutrient Top-Dressing',
      stageTe: 'దశ 3: పూత దశ & పోషకాల యాజమాన్యం',
      days: `Days 45 - 65`,
      category: 'fertilization',
      tasksEn: [
        'Critical moisture sensitive stage: strictly avoid moisture stress.',
        'Foliar spray of 19:19:19 or Boron/Zinc micronutrients to prevent flower drop.',
        'Apply Gypsum or secondary amendments if recommended for pods/bolls.'
      ],
      tasksTe: [
        'పూత దశలో బెట్ట రాకుండా తగినంత తేమను కాపాడాలి.',
        'పూత రాలకుండా 19:19:19 లేదా బోరాన్ ద్రావణం పిచికారీ చేయాలి.',
        'కాయలు బాగా నిండటానికి పోషకాలను అందించాలి.'
      ]
    },
    {
      stageEn: 'Stage 4: Fruit / Pod Development & Pest Vigilance',
      stageTe: 'దశ 4: కాయ ఊరే దశ & పురుగుల నిఘా',
      days: `Days 70 - 95`,
      category: 'pest',
      tasksEn: [
        'Inspect weekly for pod borer, bollworm, or fungal blight.',
        'Apply targeted biocontrol (NPV, Neem oil 1500ppm) or specific agrochemicals if threshold exceeded.',
        'Maintain light soil moisture; avoid water stagnation.'
      ],
      tasksTe: [
        'కాయ తొలిచే పురుగు మరియు ఆకుమచ్చ తెగులుపై నిఘా ఉంచాలి.',
        'వేప నూనె లేదా సిఫార్సు చేసిన మందులను పిచికారీ చేయాలి.',
        'నీరు నిలవకుండా మురుగునీటి పారుదల చూసుకోవాలి.'
      ]
    },
    {
      stageEn: 'Stage 5: Physiological Maturity & Harvesting',
      stageTe: 'దశ 5: పంట కోత & భద్రపరచడం',
      days: `Days ${durationAvg - 15} - ${durationAvg}`,
      category: 'harvest',
      tasksEn: [
        'Stop irrigation 10-15 days prior to harvest to allow uniform drying.',
        'Harvest on bright sunny days at optimal grain moisture (14-16%).',
        'Sun dry grains thoroughly before bagging and storage.'
      ],
      tasksTe: [
        'కోతకు 10-15 రోజుల ముందు నీరు కట్టడం ఆపివేయాలి.',
        'ఎండ ఉన్న రోజులలో కోత కోసి సరైన తేమ శాతానికి ఎండబెట్టాలి.',
        'గింజలను గాలి చొరబడని బస్తాలలో నిల్వ చేయాలి.'
      ]
    }
  ];

  return (
    <div className="space-y-8">
      
      {/* Title */}
      <div className="bg-white rounded-xl p-6 border border-stone-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
            {t.calendarTitle}
          </h2>
          <p className="text-sm text-stone-600 mt-1">
            {t.calendarSubtitle}
          </p>
        </div>

        {/* Crop Selector */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-stone-600">
            {lang === 'te' ? 'పంట ఎంచుకోండి:' : 'Select Crop:'}
          </span>
          <select
            value={selectedCropId}
            onChange={(e) => setSelectedCropId(e.target.value)}
            className="px-3.5 py-2 text-xs font-semibold bg-stone-50 border border-stone-300 rounded-lg text-stone-800 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
          >
            {CROPS_DATABASE.map(c => (
              <option key={c.id} value={c.id}>
                {lang === 'te' ? c.nameTe : c.nameEn}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Selected Crop Summary strip */}
      <div className="bg-gradient-to-r from-emerald-900 to-stone-900 text-white rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
            {lang === 'te' ? 'ఎంపిక చేసిన పంట క్యాలెండర్' : 'Lifecycle Operational Schedule'}
          </span>
          <h3 className="text-2xl font-black text-white mt-1">
            {lang === 'te' ? selectedCrop.nameTe : selectedCrop.nameEn}
          </h3>
          <p className="text-xs text-stone-300 mt-0.5">
            {selectedCrop.durationDays.min} - {selectedCrop.durationDays.max} {lang === 'te' ? 'రోజుల పంట చక్రం' : 'days total crop duration'} · {lang === 'te' ? selectedCrop.sowingPeriod.te : selectedCrop.sowingPeriod.en}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="px-4 py-2 bg-stone-800/80 rounded-xl border border-stone-700 text-xs">
            <span className="text-stone-400 block">{t.sowingWindow}</span>
            <span className="font-bold text-white">{lang === 'te' ? selectedCrop.sowingPeriod.te.split(',')[0] : selectedCrop.sowingPeriod.en.split(',')[0]}</span>
          </div>
          <div className="px-4 py-2 bg-stone-800/80 rounded-xl border border-stone-700 text-xs">
            <span className="text-stone-400 block">{t.harvestWindow}</span>
            <span className="font-bold text-white">{lang === 'te' ? selectedCrop.harvestPeriod.te.split(',')[0] : selectedCrop.harvestPeriod.en.split(',')[0]}</span>
          </div>
        </div>
      </div>

      {/* Lifecycle Stages Step by Step */}
      <div className="space-y-4">
        {stages.map((stage, idx) => {
          return (
            <div 
              key={idx}
              className="bg-white rounded-xl border border-stone-200 p-5 sm:p-6 shadow-sm hover:border-emerald-300 transition-all space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-stone-100">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 font-extrabold flex items-center justify-center text-sm border border-emerald-200">
                    {idx + 1}
                  </div>
                  <h4 className="font-bold text-stone-900 text-base">
                    {lang === 'te' ? stage.stageTe : stage.stageEn}
                  </h4>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded bg-stone-100 text-stone-700 font-mono self-start sm:self-auto">
                  <Clock className="w-3.5 h-3.5 text-stone-500" />
                  <span>{stage.days}</span>
                </div>
              </div>

              {/* Tasks List */}
              <ul className="space-y-2 text-xs sm:text-sm text-stone-700 pt-1">
                {(lang === 'te' ? stage.tasksTe : stage.tasksEn).map((task, tIdx) => (
                  <li key={tIdx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

    </div>
  );
};
