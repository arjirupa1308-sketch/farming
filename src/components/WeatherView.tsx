import React, { useState, useEffect } from 'react';
import { Language, WeatherData } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { fetchLiveWeather } from '../services/weatherService';
import { 
  CloudSun, 
  Droplets, 
  Wind, 
  Thermometer, 
  MapPin, 
  RotateCw, 
  CheckCircle2, 
  AlertCircle,
  Calendar,
  CloudRain,
  Sun
} from 'lucide-react';

interface WeatherViewProps {
  lang: Language;
}

const DISTRICT_COORDS = [
  { nameEn: 'Guntur, Andhra Pradesh', nameTe: 'గుంటూరు, ఆంధ్రప్రదేశ్', lat: 16.3067, lon: 80.4365 },
  { nameEn: 'Warangal, Telangana', nameTe: 'వరంగల్, తెలంగాణ', lat: 18.0001, lon: 79.5882 },
  { nameEn: 'Anantapur, Andhra Pradesh', nameTe: 'అనంతపురం, ఆంధ్రప్రదేశ్', lat: 14.6819, lon: 77.6006 },
  { nameEn: 'Krishna (Vijayawada), AP', nameTe: 'కృష్ణా (విజయవాడ), ఆం.ప్ర.', lat: 16.5062, lon: 80.6480 },
  { nameEn: 'Kurnool, Andhra Pradesh', nameTe: 'కర్నూలు, ఆంధ్రప్రదేశ్', lat: 15.8281, lon: 78.0373 },
  { nameEn: 'Pune, Maharashtra', nameTe: 'పూణే, మహారాష్ట్ర', lat: 18.5204, lon: 73.8567 },
  { nameEn: 'Ludhiana, Punjab', nameTe: 'లూధియానా, పంజాబ్', lat: 30.9010, lon: 75.8573 }
];

export const WeatherView: React.FC<WeatherViewProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const [selectedHub, setSelectedHub] = useState(0);
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  const loadWeather = async (lat: number, lon: number) => {
    setLoading(true);
    try {
      const data = await fetchLiveWeather(lat, lon);
      setWeather(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadWeather(DISTRICT_COORDS[selectedHub].lat, DISTRICT_COORDS[selectedHub].lon);
  }, [selectedHub]);

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="bg-white rounded-xl p-6 border border-stone-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
            {t.weatherTitle}
          </h2>
          <p className="text-sm text-stone-600 mt-1">
            {t.weatherSubtitle}
          </p>
        </div>

        {/* District Selector */}
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
          <select
            value={selectedHub}
            onChange={(e) => setSelectedHub(Number(e.target.value))}
            className="px-3 py-2 text-xs font-semibold bg-stone-50 border border-stone-300 rounded-lg text-stone-800 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
          >
            {DISTRICT_COORDS.map((hub, idx) => (
              <option key={idx} value={idx}>
                {lang === 'te' ? hub.nameTe : hub.nameEn}
              </option>
            ))}
          </select>
          <button
            onClick={() => loadWeather(DISTRICT_COORDS[selectedHub].lat, DISTRICT_COORDS[selectedHub].lon)}
            className="p-2 text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors"
            title="Refresh weather"
          >
            <RotateCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </div>

      {weather && (
        <div className="space-y-6">
          
          {/* Main Weather Card */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Current Conditions Card */}
            <div className="md:col-span-7 bg-gradient-to-br from-stone-900 via-stone-900 to-emerald-950 text-white rounded-2xl p-6 sm:p-8 shadow-md border border-stone-800 space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    {lang === 'te' ? 'ప్రత్యక్ష వాతావరణం' : 'Live Micro-Climate'}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                    {lang === 'te' ? DISTRICT_COORDS[selectedHub].nameTe : DISTRICT_COORDS[selectedHub].nameEn}
                  </h3>
                  <p className="text-stone-400 text-xs mt-0.5">
                    {weather.condition}
                  </p>
                </div>
                <div className="text-4xl sm:text-5xl">
                  {weather.temperature > 32 ? '☀️' : weather.rainfall > 0 ? '🌧️' : '⛅'}
                </div>
              </div>

              {/* Temperature display */}
              <div className="flex items-baseline gap-2">
                <span className="text-5xl sm:text-6xl font-black text-white tracking-tight">
                  {weather.temperature}°
                </span>
                <span className="text-xl text-stone-400 font-light">C</span>
              </div>

              {/* Weather Stats Bar */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-stone-800 text-xs">
                <div className="p-3 bg-stone-800/80 rounded-xl border border-stone-700/60">
                  <div className="flex items-center gap-1.5 text-stone-400 mb-1">
                    <Droplets className="w-3.5 h-3.5 text-sky-400" />
                    <span>{t.currentHumidity}</span>
                  </div>
                  <span className="text-base font-bold text-white">{weather.humidity}%</span>
                </div>

                <div className="p-3 bg-stone-800/80 rounded-xl border border-stone-700/60">
                  <div className="flex items-center gap-1.5 text-stone-400 mb-1">
                    <Wind className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{t.currentWind}</span>
                  </div>
                  <span className="text-base font-bold text-white">{weather.windSpeed} km/h</span>
                </div>

                <div className="p-3 bg-stone-800/80 rounded-xl border border-stone-700/60">
                  <div className="flex items-center gap-1.5 text-stone-400 mb-1">
                    <CloudRain className="w-3.5 h-3.5 text-sky-300" />
                    <span>Rainfall</span>
                  </div>
                  <span className="text-base font-bold text-white">{weather.rainfall} mm</span>
                </div>
              </div>
            </div>

            {/* Spray Window & Agronomic Operations Card */}
            <div className="md:col-span-5 bg-white rounded-2xl p-6 border border-stone-200 shadow-sm flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center gap-2 pb-3 border-b border-stone-100">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <h3 className="font-bold text-stone-900 text-base">
                    {t.sprayWindowAdvisory}
                  </h3>
                </div>

                <div className="mt-4 p-4 rounded-xl bg-emerald-50 border border-emerald-200/80 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-900">
                    <Sun className="w-4 h-4 text-emerald-700" />
                    <span>{lang === 'te' ? 'నేటి వ్యవసాయ సూచన' : 'Agronomist Field Advisory'}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed">
                    {lang === 'te' ? weather.agriculturalAdvisory.te : weather.agriculturalAdvisory.en}
                  </p>
                </div>
              </div>

              {/* Spray condition checklist */}
              <div className="space-y-2 text-xs text-stone-700">
                <div className="flex items-center justify-between p-2 rounded bg-stone-50 border border-stone-200/60">
                  <span>{lang === 'te' ? 'గాలి వేగం (పిచికారీకి < 15 km/h)' : 'Drift Risk (Wind < 15 km/h)'}</span>
                  <span className={`font-bold ${weather.windSpeed < 15 ? 'text-emerald-700' : 'text-rose-600'}`}>
                    {weather.windSpeed < 15 ? (lang === 'te' ? 'అనుకూలం' : 'Safe') : (lang === 'te' ? 'వాయిదా వేయండి' : 'High Drift')}
                  </span>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-stone-50 border border-stone-200/60">
                  <span>{lang === 'te' ? 'వర్షం వచ్చే అవకాశం' : 'Precipitation Probability'}</span>
                  <span className="font-bold text-stone-800">
                    {weather.forecast[0]?.rainProb || 15}%
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* 7-Day Forecast Row */}
          <div className="bg-white rounded-xl p-6 border border-stone-200 shadow-sm space-y-4">
            <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
              <Calendar className="w-5 h-5 text-emerald-600" />
              <span>{t.sevenDayForecast}</span>
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
              {weather.forecast.map((day, idx) => (
                <div 
                  key={idx}
                  className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/80 text-center space-y-2 hover:bg-emerald-50/50 hover:border-emerald-300 transition-colors"
                >
                  <span className="text-xs font-bold text-stone-800 block">
                    {day.day}
                  </span>
                  <div className="text-2xl">
                    {day.rainProb > 40 ? '🌧️' : day.tempMax > 33 ? '☀️' : '⛅'}
                  </div>
                  <div className="text-xs font-semibold text-stone-900">
                    {day.tempMax}° / <span className="text-stone-500 font-normal">{day.tempMin}°</span>
                  </div>
                  <div className="text-[11px] text-sky-700 font-medium">
                    💧 {day.rainProb}% rain
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

    </div>
  );
};
