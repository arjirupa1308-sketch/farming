import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { 
  Building2, 
  PhoneCall, 
  ExternalLink, 
  ShieldCheck, 
  Coins, 
  FileCheck, 
  GraduationCap,
  HeartHandshake
} from 'lucide-react';

interface GovernmentResourcesViewProps {
  lang: Language;
}

export const GovernmentResourcesView: React.FC<GovernmentResourcesViewProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  const schemes = [
    {
      nameEn: 'PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)',
      nameTe: 'పీఎం-కిసాన్ (రైతు సమ్మాన్ నిధి)',
      descEn: 'Income support of ₹6,000 per year in three equal installments to all landholding farmer families across India.',
      descTe: 'అర్హులైన రైతు కుటుంబాలకు ఏటా ₹6,000 రూపాయల ఆర్థిక సహాయం మూడు విడతలలో నేరుగా బ్యాంకు ఖాతాల్లో జమ.',
      beneficiary: 'All landholding farmers',
      link: 'https://pmkisan.gov.in/'
    },
    {
      nameEn: 'Pradhan Mantri Fasal Bima Yojana (PMFBY)',
      nameTe: 'ప్రధాన మంత్రి ఫసల్ బీమా యోజన (పంటల బీమా)',
      descEn: 'Comprehensive crop insurance covering non-preventable natural risks from pre-sowing to post-harvest stages at nominal premium rates (2% Kharif, 1.5% Rabi).',
      descTe: 'రైతులకు అతి తక్కువ ప్రీమియంతో (ఖరీఫ్ 2%, రబీ 1.5%) సమగ్ర పంట బీమా రక్షణ.',
      beneficiary: 'Kharif, Rabi & Commercial crop growers',
      link: 'https://pmfby.gov.in/'
    },
    {
      nameEn: 'Soil Health Card Scheme',
      nameTe: 'సాయిల్ హెల్త్ కార్డ్ పథకం (నేల ఆరోగ్య కార్డు)',
      descEn: 'Issues free diagnostic soil test cards assessing 12 parameters (N, P, K, S, Zn, Fe, Cu, Mn, Bo, pH, EC, OC) along with customized fertilizer dosages.',
      descTe: '12 రకాల నేల పోషకాలను పరీక్షించి ఎరువుల వినియోగంపై శాస్త్రీయ సిఫార్సు కార్డు ఉచితంగా అందజేత.',
      beneficiary: 'Every agricultural field in India',
      link: 'https://soilhealth.dac.gov.in/'
    },
    {
      nameEn: 'Pradhan Mantri Krishi Sinchayee Yojana (PMKSY - Micro Irrigation)',
      nameTe: 'సూక్ష్మ సేద్య పథకం (డ్రిప్ & స్ప్రింక్లర్ సబ్సిడీ)',
      descEn: 'Subsidy up to 70% - 90% for small and marginal farmers for installing water-saving Drip and Sprinkler irrigation systems.',
      descTe: 'చిన్న, సన్నకారు రైతులకు బిందు మరియు తుంపర సేద్య పరికరాలపై 70% నుండి 90% వరకు రాయితీ.',
      beneficiary: 'Small, marginal & commercial farmers',
      link: 'https://pmksy.gov.in/'
    },
    {
      nameEn: 'Rythu Bharosa / Rythu Bandhu Assistance',
      nameTe: 'రైతు భరోసా / రైతు బంధు (రాష్ట్రాల పెట్టుబడి సహాయం)',
      descEn: 'Direct investment support per acre per season for seeds, fertilizers, and farm labor provided by State Governments.',
      descTe: 'విత్తనాలు, ఎరువుల పెట్టుబడి కోసం రాష్ట్ర ప్రభుత్వాల ద్వారా అందించే ప్రత్యక్ష నగదు బదిలీ పథకం.',
      beneficiary: 'State resident cultivators and tenant farmers',
      link: 'https://rythubharosa.ap.gov.in/'
    }
  ];

  const helplines = [
    {
      titleEn: 'Kisan Call Center (KCC) National Helpline',
      titleTe: 'కిసాన్ కాల్ సెంటర్ జాతీయ ఉచిత హెల్ప్‌లైన్',
      number: '1800-180-1551',
      timingsEn: '6:00 AM to 10:00 PM (All 365 Days, in 22 languages)',
      timingsTe: 'ఉదయం 6 నుండి రాత్రి 10 వరకు (అన్ని రోజులు, తెలుగులో కూడా)'
    },
    {
      titleEn: 'Kisan Suvidha & Agmarket Toll-Free',
      titleTe: 'వ్యవసాయ మార్కెట్ ధరల సహాయ కేంద్రం',
      number: '1800-180-1551',
      timingsEn: 'Mandatory minimum support prices and live mandi rates',
      timingsTe: 'మార్కెట్ ధరలు మరియు కనీస మద్దతు ధరల సమాచారం'
    }
  ];

  const universities = [
    { name: 'ANGRAU (Acharya N.G. Ranga Agricultural University)', location: 'Lam, Guntur, AP', url: 'https://angrau.ac.in' },
    { name: 'PJTSAU (Professor Jayashankar Telangana State Ag. University)', location: 'Rajendranagar, Hyderabad, TS', url: 'https://pjtsau.edu.in' },
    { name: 'ICAR - Indian Agricultural Research Institute (IARI)', location: 'Pusa, New Delhi', url: 'https://iari.res.in' },
    { name: 'Dr. YSR Horticultural University', location: 'Venkataramannagudem, AP', url: 'https://drysrhu.ap.gov.in' }
  ];

  return (
    <div className="space-y-8">
      
      {/* Title */}
      <div className="bg-white rounded-xl p-6 border border-stone-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
            {lang === 'te' ? 'రైతు సంక్షేమ పథకాలు & వ్యవసాయ వనరులు' : 'Government Schemes & Farmer Helplines'}
          </h2>
          <p className="text-sm text-stone-600 mt-1">
            {lang === 'te' 
              ? 'కేంద్ర, రాష్ట్ర ప్రభుత్వాల సబ్సిడీలు, పంట బీమా మరియు శాస్త్రీయ వ్యవసాయ సలహా కేంద్రాల సమాచారం.'
              : 'Verified government subsidies, crop insurance, and Krishi Vigyan Kendra extension links.'}
          </p>
        </div>
      </div>

      {/* Helplines Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {helplines.map((hl, idx) => (
          <div key={idx} className="bg-emerald-900 text-white rounded-xl p-5 border border-emerald-800 shadow-sm flex items-start gap-4">
            <div className="p-3 bg-emerald-800 rounded-lg text-emerald-300 shrink-0">
              <PhoneCall className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-base">
                {lang === 'te' ? hl.titleTe : hl.titleEn}
              </h4>
              <div className="text-2xl font-black text-emerald-300 mt-1 tracking-wider">
                {hl.number}
              </div>
              <p className="text-xs text-emerald-200/80 mt-1">
                {lang === 'te' ? hl.timingsTe : hl.timingsEn}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Government Schemes List */}
      <div className="bg-white rounded-xl p-6 border border-stone-200 shadow-sm space-y-4">
        <h3 className="font-bold text-stone-900 text-lg flex items-center gap-2">
          <Building2 className="w-5 h-5 text-emerald-600" />
          <span>{lang === 'te' ? 'ప్రధాన రైతు పథకాలు' : 'Flagship Agricultural Welfare Schemes'}</span>
        </h3>

        <div className="space-y-4">
          {schemes.map((scheme, idx) => (
            <div key={idx} className="p-4 rounded-xl border border-stone-200 hover:border-emerald-300 bg-stone-50/50 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h4 className="font-bold text-stone-900 text-base">
                  {lang === 'te' ? scheme.nameTe : scheme.nameEn}
                </h4>
                <a
                  href={scheme.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 hover:text-emerald-800"
                >
                  <span>Official Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                {lang === 'te' ? scheme.descTe : scheme.descEn}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Universities and Research Centers */}
      <div className="bg-white rounded-xl p-6 border border-stone-200 shadow-sm space-y-4">
        <h3 className="font-bold text-stone-900 text-lg flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-emerald-600" />
          <span>{lang === 'te' ? 'వ్యవసాయ విశ్వవిద్యాలయాలు & పరిశోధనా సంస్థలు' : 'Agricultural Universities & Extension'}</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {universities.map((uni, idx) => (
            <div key={idx} className="p-3.5 rounded-lg border border-stone-200 hover:border-emerald-400 bg-white transition-colors">
              <h4 className="font-bold text-stone-900 text-xs sm:text-sm">{uni.name}</h4>
              <p className="text-xs text-stone-500 mt-0.5">{uni.location}</p>
              <a 
                href={uni.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xs text-emerald-700 hover:underline mt-1.5 inline-flex items-center gap-1 font-medium"
              >
                <span>Visit Extension Portal</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
