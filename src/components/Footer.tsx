import React from 'react';
import { Sprout, PhoneCall, Heart, Award, ShieldAlert } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface FooterProps {
  lang: Language;
  onNavigate: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onNavigate }) => {
  const t = TRANSLATIONS[lang];

  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded bg-emerald-600 flex items-center justify-center text-white">
                <Sprout className="w-5 h-5" />
              </div>
              <span className="font-bold text-lg text-white">
                {lang === 'te' ? 'స్మార్ట్ పంట సలహాదారు' : 'Smart Crop Advisor'}
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-sm">
              {lang === 'te'
                ? 'భారతీయ రైతుల శ్రేయస్సు కోసం నేల రకం, శీతోష్ణస్థితి, నీటి లభ్యత ఆధారంగా ఖచ్చితమైన పంట సిఫార్సులను అందించే ఉచిత వేదిక.'
                : 'A free agricultural intelligence platform bridging ICAR scientific crop standards with grassroots farmers across India.'}
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
              <Award className="w-4 h-4 text-emerald-400" />
              <span>{t.heroBadge}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400">
              {lang === 'te' ? 'విభాగాలు' : 'Quick Navigation'}
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">
                  {t.home}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('recommendation')} className="hover:text-white transition-colors">
                  {t.recommendation}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('soil')} className="hover:text-white transition-colors">
                  {t.soilAnalysis}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('weather')} className="hover:text-white transition-colors">
                  {t.weather}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('comparison')} className="hover:text-white transition-colors">
                  {t.comparison}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('calendar')} className="hover:text-white transition-colors">
                  {t.calendar}
                </button>
              </li>
            </ul>
          </div>

          {/* Kisan Helpline Box */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400">
              {lang === 'te' ? 'రైతు అత్యవసర సహాయం' : 'Farmer Support Helpline'}
            </h4>
            <div className="p-4 rounded-xl bg-stone-800 border border-stone-700 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold">
                <PhoneCall className="w-4 h-4" />
                <span>Kisan Call Center (Toll-Free)</span>
              </div>
              <div className="text-2xl font-black text-white font-mono">
                1800-180-1551
              </div>
              <p className="text-[11px] text-stone-400">
                {lang === 'te' ? 'ఉదయం 6:00 నుండి రాత్రి 10:00 వరకు ఉచిత సలహాలు' : '6:00 AM - 10:00 PM, 7 days a week, in all regional languages.'}
              </p>
            </div>
          </div>

        </div>

        {/* Disclaimer line */}
        <div className="pt-6 border-t border-stone-800 text-[11px] text-stone-500 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <p>
            {lang === 'te' 
              ? 'ఈ సమాచారం మార్గదర్శకత్వం కొరకు మాత్రమే. ఫలితాలు వాతావరణం, నిర్వహణపై ఆధారపడి ఉంటాయి. KVK/AEOతో సరిచూసుకోండి.'
              : 'Guidance only. Yields and revenues vary by seed variety, weather, and farm management. Verify with local KVK / AEO.'}
          </p>
          <p>© {new Date().getFullYear()} Smart Crop Advisor. Designed for farmers.</p>
        </div>

      </div>
    </footer>
  );
};
