/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Language, 
  FarmerInputForm, 
  CropRecommendationResult, 
  CropInfo, 
  WeatherData,
  AgroAlert 
} from './types';
import { INITIAL_FORM_STATE, FarmerPreset } from './data/presets';
import { recommendCrops } from './utils/recommendationEngine';
import { fetchLiveWeather } from './services/weatherService';
import { stopSpeaking } from './utils/speech';

// Components
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RecommendationForm } from './components/RecommendationForm';
import { RecommendationResults } from './components/RecommendationResults';
import { CropDetailModal } from './components/CropDetailModal';
import { SoilAnalysisView } from './components/SoilAnalysisView';
import { WeatherView } from './components/WeatherView';
import { CropComparisonView } from './components/CropComparisonView';
import { FarmingCalendarView } from './components/FarmingCalendarView';
import { FarmerDashboardView } from './components/FarmerDashboardView';
import { GovernmentResourcesView } from './components/GovernmentResourcesView';
import { AboutView } from './components/AboutView';
import { AlertsBanner } from './components/AlertsBanner';
import { Footer } from './components/Footer';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [formData, setFormData] = useState<FarmerInputForm>(INITIAL_FORM_STATE);
  const [recommendations, setRecommendations] = useState<CropRecommendationResult[]>([]);
  const [savedCropIds, setSavedCropIds] = useState<string[]>(['groundnut', 'maize']);
  const [comparedCropIds, setComparedCropIds] = useState<string[]>(['groundnut', 'cotton']);
  const [selectedCropForModal, setSelectedCropForModal] = useState<CropInfo | null>(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);
  const [weather, setWeather] = useState<WeatherData | null>(null);

  // Initial Agro-Alerts
  const [alerts] = useState<AgroAlert[]>([
    {
      id: 'alert-1',
      type: 'pest',
      severity: 'medium',
      titleEn: 'Pest Advisory: Black Thrips & Armyworm Vigilance',
      titleTe: 'పురుగుల హెచ్చరిక: నల్ల తామర పురుగు మరియు కత్తెర పురుగు',
      descriptionEn: 'High humidity is favoring pest proliferation in Chilli and Maize. Install blue and yellow sticky traps immediately.',
      descriptionTe: 'తేమ వాతావరణం వల్ల మిరప మరియు మొక్కజొన్నలో పురుగుల వ్యాప్తి ఎక్కువయ్యే ప్రమాదం ఉంది. జిగురు అట్టలను వెంటనే అమర్చండి.',
      actionEn: 'Field inspection recommended',
      actionTe: 'పొలంలో నిఘా ముఖ్యం',
      date: 'Today'
    },
    {
      id: 'alert-2',
      type: 'irrigation',
      severity: 'low',
      titleEn: 'Irrigation Timing Advisory',
      titleTe: 'నీటి తడుల సమయపాలన సూచన',
      descriptionEn: 'Evaporation rates are peak between 11 AM - 3 PM. Schedule drip/borewell waterings during early morning or evening hours.',
      descriptionTe: 'పగటిపూట ఎండ వేడికి నీరు ఆవిరవుతుంది. ఉదయం లేదా సాయంత్రం వేళల్లోనే నీరు కట్టండి.',
      actionEn: 'Save water and avoid plant stress',
      actionTe: 'నీటి ఆదా & పంట రక్షణ',
      date: 'Weekly'
    }
  ]);

  // Initial recommendation calculation and weather fetch
  useEffect(() => {
    const results = recommendCrops(INITIAL_FORM_STATE);
    setRecommendations(results);

    // Fetch initial weather for default coordinates
    fetchLiveWeather(INITIAL_FORM_STATE.location.latitude, INITIAL_FORM_STATE.location.longitude)
      .then(data => setWeather(data))
      .catch(err => console.warn(err));
  }, []);

  // Form submit handler
  const handleFormSubmit = () => {
    const results = recommendCrops(formData);
    setRecommendations(results);
    // Smooth scroll down to results
    const resultsElement = document.getElementById('recommendations-section');
    if (resultsElement) {
      resultsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Select Preset Handler
  const handleSelectPreset = (preset: FarmerPreset) => {
    setFormData(preset.data);
    const results = recommendCrops(preset.data);
    setRecommendations(results);
    setCurrentTab('recommendation');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Compare Toggle
  const handleToggleCompare = (cropId: string) => {
    setComparedCropIds(prev => {
      if (prev.includes(cropId)) {
        return prev.filter(id => id !== cropId);
      }
      if (prev.length >= 4) {
        alert(lang === 'te' ? 'గరిష్టంగా 4 పంటలను మాత్రమే పోల్చవచ్చు.' : 'You can compare a maximum of 4 crops side by side.');
        return prev;
      }
      return [...prev, cropId];
    });
  };

  // Save Crop Toggle
  const handleToggleSaveCrop = (cropId: string) => {
    setSavedCropIds(prev => {
      if (prev.includes(cropId)) {
        return prev.filter(id => id !== cropId);
      }
      return [...prev, cropId];
    });
  };

  // Audio Stop
  const handleStopAudio = () => {
    stopSpeaking();
    setIsAudioPlaying(false);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col font-sans selection:bg-emerald-200 selection:text-emerald-950">
      
      {/* Top Agro-Alert Banner */}
      <AlertsBanner alerts={alerts} lang={lang} />

      {/* Main App Navigation */}
      <Navbar
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        lang={lang}
        setLang={setLang}
        savedCropsCount={savedCropIds.length}
        comparisonCount={comparedCropIds.length}
        isAudioPlaying={isAudioPlaying}
        onStopAudio={handleStopAudio}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentTab === 'home' && (
          <div>
            <Hero
              lang={lang}
              onFindCrop={() => {
                setCurrentTab('recommendation');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onCheckSoil={() => {
                setCurrentTab('soil');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onSelectPreset={handleSelectPreset}
            />

            {/* Quick Teaser of Recommended Crops on Home */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
              <div className="text-center space-y-2 max-w-2xl mx-auto">
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                  {lang === 'te' ? 'శాస్త్రీయ అంచనాలు' : 'Precision Crop Science'}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
                  {lang === 'te' ? 'రైతులకు అత్యంత లాభదాయక పంటల మార్గదర్శకత్వం' : 'Scientifically Matched to Your Specific Soil & Water'}
                </h2>
                <p className="text-sm text-stone-600">
                  {lang === 'te' 
                    ? 'ఎటువంటి అదనపు ఖర్చు లేకుండా మీ నేల మరియు వర్షపాతానికి సరిపోయే పంటలను అంచనా వేయండి.'
                    : 'Prevent crop loss caused by mismatching high-water crops to dryland soil.'}
                </p>
              </div>

              {/* Form & Results Container */}
              <div className="space-y-8">
                <RecommendationForm
                  formData={formData}
                  setFormData={setFormData}
                  onSubmit={handleFormSubmit}
                  lang={lang}
                />

                <div id="recommendations-section">
                  <RecommendationResults
                    results={recommendations}
                    lang={lang}
                    onSelectCropForDetail={(crop) => setSelectedCropForModal(crop)}
                    onToggleCompare={handleToggleCompare}
                    comparedCropIds={comparedCropIds}
                    onToggleSaveCrop={handleToggleSaveCrop}
                    savedCropIds={savedCropIds}
                    onAudioStateChange={setIsAudioPlaying}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {currentTab === 'recommendation' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
            <RecommendationForm
              formData={formData}
              setFormData={setFormData}
              onSubmit={handleFormSubmit}
              lang={lang}
            />

            <div id="recommendations-section">
              <RecommendationResults
                results={recommendations}
                lang={lang}
                onSelectCropForDetail={(crop) => setSelectedCropForModal(crop)}
                onToggleCompare={handleToggleCompare}
                comparedCropIds={comparedCropIds}
                onToggleSaveCrop={handleToggleSaveCrop}
                savedCropIds={savedCropIds}
                onAudioStateChange={setIsAudioPlaying}
              />
            </div>
          </div>
        )}

        {currentTab === 'soil' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <SoilAnalysisView
              lang={lang}
              onSelectCrop={(crop) => setSelectedCropForModal(crop)}
            />
          </div>
        )}

        {currentTab === 'weather' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <WeatherView lang={lang} />
          </div>
        )}

        {currentTab === 'comparison' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <CropComparisonView
              comparedCropIds={comparedCropIds}
              onRemoveCrop={(id) => handleToggleCompare(id)}
              onAddCrop={(id) => handleToggleCompare(id)}
              onClearAll={() => setComparedCropIds([])}
              lang={lang}
            />
          </div>
        )}

        {currentTab === 'calendar' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <FarmingCalendarView lang={lang} />
          </div>
        )}

        {currentTab === 'dashboard' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <FarmerDashboardView
              formData={formData}
              savedCropIds={savedCropIds}
              recommendations={recommendations}
              weather={weather}
              alerts={alerts}
              lang={lang}
              onNavigateTab={(tab) => {
                setCurrentTab(tab);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onSelectCrop={(crop) => setSelectedCropForModal(crop)}
            />
          </div>
        )}

        {currentTab === 'resources' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <GovernmentResourcesView lang={lang} />
          </div>
        )}

        {currentTab === 'about' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <AboutView lang={lang} />
          </div>
        )}
      </main>

      {/* Full Agronomy Detail Modal */}
      <CropDetailModal
        crop={selectedCropForModal}
        onClose={() => setSelectedCropForModal(null)}
        lang={lang}
      />

      {/* Footer */}
      <Footer 
        lang={lang} 
        onNavigate={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }} 
      />

    </div>
  );
}
