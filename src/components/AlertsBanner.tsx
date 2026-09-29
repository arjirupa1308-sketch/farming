import React, { useState } from 'react';
import { AgroAlert, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { 
  AlertTriangle, 
  CloudRain, 
  Sun, 
  Bug, 
  Droplets, 
  X,
  ChevronRight
} from 'lucide-react';

interface AlertsBannerProps {
  alerts: AgroAlert[];
  lang: Language;
}

export const AlertsBanner: React.FC<AlertsBannerProps> = ({ alerts, lang }) => {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed || alerts.length === 0) return null;

  const currentAlert = alerts[0];

  const getIcon = (type: string) => {
    switch (type) {
      case 'rain': return <CloudRain className="w-5 h-5 text-amber-300" />;
      case 'heat': return <Sun className="w-5 h-5 text-amber-300" />;
      case 'pest': return <Bug className="w-5 h-5 text-rose-300" />;
      case 'irrigation': return <Droplets className="w-5 h-5 text-sky-300" />;
      default: return <AlertTriangle className="w-5 h-5 text-amber-300" />;
    }
  };

  return (
    <div className="bg-stone-900 border-b border-stone-800 text-stone-100 py-2.5 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 text-xs sm:text-sm">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="shrink-0 p-1 bg-stone-800 rounded-md">
            {getIcon(currentAlert.type)}
          </div>
          <div className="flex items-center gap-2 truncate">
            <span className="font-bold text-amber-400 shrink-0">
              {lang === 'te' ? currentAlert.titleTe : currentAlert.titleEn}:
            </span>
            <span className="text-stone-300 truncate">
              {lang === 'te' ? currentAlert.descriptionTe : currentAlert.descriptionEn}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <span className="hidden md:inline text-xs text-stone-400">
            {lang === 'te' ? currentAlert.actionTe : currentAlert.actionEn}
          </span>
          <button
            onClick={() => setDismissed(true)}
            className="p-1 text-stone-400 hover:text-white rounded transition-colors"
            title="Dismiss notice"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
