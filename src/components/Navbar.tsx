import React, { useState } from 'react';
import { 
  Sprout, 
  Globe2, 
  Menu, 
  X, 
  Layers, 
  Bookmark, 
  Volume2, 
  VolumeX,
  Sparkles
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { stopSpeaking } from '../utils/speech';

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  lang: Language;
  setLang: (lang: Language) => void;
  savedCropsCount: number;
  comparisonCount: number;
  isAudioPlaying: boolean;
  onStopAudio: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  setCurrentTab,
  lang,
  setLang,
  savedCropsCount,
  comparisonCount,
  isAudioPlaying,
  onStopAudio
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[lang];

  const navItems = [
    { id: 'home', label: t.home },
    { id: 'recommendation', label: t.recommendation },
    { id: 'soil', label: t.soilAnalysis },
    { id: 'weather', label: t.weather },
    { id: 'comparison', label: t.comparison, badge: comparisonCount },
    { id: 'calendar', label: t.calendar },
    { id: 'dashboard', label: t.dashboard, badge: savedCropsCount },
    { id: 'resources', label: t.resources },
    { id: 'about', label: t.about }
  ];

  const handleNavClick = (id: string) => {
    setCurrentTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-stone-900 text-stone-100 border-b border-stone-800 shadow-md">
      {/* Top micro bar for audio / emergency alert */}
      {isAudioPlaying && (
        <div className="bg-emerald-700 text-white px-4 py-1.5 text-xs flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Volume2 className="w-4 h-4 animate-pulse" />
            <span className="font-medium">{t.listeningNow}</span>
          </div>
          <button 
            onClick={() => {
              stopSpeaking();
              onStopAudio();
            }}
            className="flex items-center gap-1 bg-emerald-900/60 hover:bg-emerald-950 px-2.5 py-0.5 rounded text-xs text-emerald-100 transition-colors"
          >
            <VolumeX className="w-3.5 h-3.5" />
            <span>{t.stopListening}</span>
          </button>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="w-10 h-10 rounded-lg bg-emerald-600 flex items-center justify-center text-white shadow-sm group-hover:bg-emerald-500 transition-colors">
              <Sprout className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                  {lang === 'te' ? 'స్మార్ట్ పంట సలహాదారు' : 'Smart Crop Advisor'}
                </span>
              </div>
              <p className="text-xs text-stone-400 hidden sm:block">
                {lang === 'te' ? 'రైతులకు శాస్త్రీయ భూమి & పంట విజ్ఞానం' : 'Scientific Crop & Land Advisor'}
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors relative ${
                    isActive 
                      ? 'bg-stone-800 text-emerald-400 font-semibold' 
                      : 'text-stone-300 hover:text-white hover:bg-stone-800/60'
                  }`}
                >
                  <span>{item.label}</span>
                  {Boolean(item.badge && item.badge > 0) && (
                    <span className="ml-1.5 bg-emerald-600 text-white text-[11px] font-bold px-1.5 py-0.2 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right controls: Language toggle and Mobile button */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Selector */}
            <div className="flex items-center bg-stone-800 rounded-md p-0.5 border border-stone-700">
              <button
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 text-xs font-semibold rounded transition-colors ${
                  lang === 'en' 
                    ? 'bg-emerald-600 text-white shadow-sm' 
                    : 'text-stone-400 hover:text-stone-200'
                }`}
                title="Switch to English"
              >
                English
              </button>
              <button
                onClick={() => setLang('te')}
                className={`px-2.5 py-1 text-xs font-semibold rounded transition-colors ${
                  lang === 'te' 
                    ? 'bg-emerald-600 text-white shadow-sm' 
                    : 'text-stone-400 hover:text-stone-200'
                }`}
                title="తెలుగు భాషకు మారండి"
              >
                తెలుగు
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-stone-300 hover:text-white hover:bg-stone-800 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-stone-900 border-b border-stone-800 px-4 pt-2 pb-5 space-y-1">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-md text-base font-medium text-left transition-colors ${
                  isActive 
                    ? 'bg-stone-800 text-emerald-400 font-semibold' 
                    : 'text-stone-200 hover:bg-stone-800/80 hover:text-white'
                }`}
              >
                <span>{item.label}</span>
                {Boolean(item.badge && item.badge > 0) && (
                  <span className="bg-emerald-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
