import { WeatherData } from '../types';

export async function fetchLiveWeather(
  latitude: number = 16.3067, 
  longitude: number = 80.4365
): Promise<WeatherData> {
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,precipitation,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=auto`;
    const response = await fetch(url, { signal: AbortSignal.timeout(6000) });
    
    if (!response.ok) {
      throw new Error('Weather API error');
    }

    const data = await response.json();
    const current = data.current || {};
    const daily = data.daily || {};

    const temp = Math.round(current.temperature_2m ?? 28);
    const humidity = Math.round(current.relative_humidity_2m ?? 65);
    const rainfall = current.precipitation ?? 0;
    const windSpeed = Math.round(current.wind_speed_10m ?? 8);
    const weatherCode = current.weather_code ?? 0;

    const forecast = (daily.time || []).slice(0, 7).map((dateStr: string, idx: number) => {
      const date = new Date(dateStr);
      const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
      return {
        day: dayName,
        tempMin: Math.round(daily.temperature_2m_min?.[idx] ?? 22),
        tempMax: Math.round(daily.temperature_2m_max?.[idx] ?? 32),
        rainProb: Math.round(daily.precipitation_probability_max?.[idx] ?? 20),
        condition: mapWeatherCodeToText(daily.weather_code?.[idx] ?? 0)
      };
    });

    // Agricultural advisory
    let advisoryEn = 'Weather conditions are favorable for regular field work and normal irrigation.';
    let advisoryTe = 'పొలం పనులు మరియు సాధారణ నీటి తడులకు వాతావరణం అనుకూలంగా ఉంది.';

    if (windSpeed > 15) {
      advisoryEn = `Wind speed is high (${windSpeed} km/h). Postpone foliar insecticide/fungicide spraying to prevent drift waste.`;
      advisoryTe = `గాలి వేగం ఎక్కువగా ఉంది (${windSpeed} km/h). మందుల పిచికారీని వాయిదా వేయడం మంచిది.`;
    } else if (humidity > 80 && temp >= 26) {
      advisoryEn = 'High humidity combined with warm temperatures creates favorable conditions for fungal blast and leaf spots. Inspect fields closely.';
      advisoryTe = 'అధిక తేమ మరియు వేడిమి వల్ల శిలీంధ్ర తెగుళ్ళు (ఆకుమచ్చ, అగ్గి తెగులు) ఆశించే అవకాశం ఉంది. నిరంతరం గమనించండి.';
    } else if (temp > 35) {
      advisoryEn = 'High daytime temperatures detected. Irrigate crops in early morning or late evening to minimize evaporation stress.';
      advisoryTe = 'ఎండ తీవ్రత ఎక్కువగా ఉంది. నీటి ఆవిరి తగ్గడానికి ఉదయాన్నే లేదా సాయంత్రం వేళల్లో మాత్రమే నీరు పెట్టండి.';
    }

    return {
      temperature: temp,
      humidity,
      rainfall,
      weatherCode,
      condition: mapWeatherCodeToText(weatherCode),
      windSpeed,
      forecast: forecast.length > 0 ? forecast : getFallbackForecast(),
      agriculturalAdvisory: {
        en: advisoryEn,
        te: advisoryTe
      }
    };
  } catch (error) {
    console.warn('Using fallback agro-weather data:', error);
    return getFallbackWeatherData(latitude, longitude);
  }
}

function mapWeatherCodeToText(code: number): string {
  if (code === 0) return 'Clear Sky';
  if (code === 1 || code === 2) return 'Partly Cloudy';
  if (code === 3) return 'Overcast';
  if (code >= 51 && code <= 67) return 'Light Rain';
  if (code >= 71 && code <= 77) return 'Cool Showers';
  if (code >= 80 && code <= 82) return 'Rain Showers';
  if (code >= 95) return 'Thunderstorm';
  return 'Clear Sky';
}

function getFallbackForecast() {
  return [
    { day: 'Today', tempMin: 22, tempMax: 32, rainProb: 15, condition: 'Partly Cloudy' },
    { day: 'Tue', tempMin: 23, tempMax: 33, rainProb: 20, condition: 'Clear Sky' },
    { day: 'Wed', tempMin: 24, tempMax: 32, rainProb: 45, condition: 'Showers' },
    { day: 'Thu', tempMin: 22, tempMax: 30, rainProb: 60, condition: 'Light Rain' },
    { day: 'Fri', tempMin: 21, tempMax: 31, rainProb: 25, condition: 'Partly Cloudy' },
    { day: 'Sat', tempMin: 22, tempMax: 33, rainProb: 10, condition: 'Sunny' },
    { day: 'Sun', tempMin: 23, tempMax: 34, rainProb: 10, condition: 'Sunny' }
  ];
}

export function getFallbackWeatherData(latitude: number, longitude: number): WeatherData {
  return {
    temperature: 28,
    humidity: 64,
    rainfall: 0,
    weatherCode: 1,
    condition: 'Partly Cloudy',
    windSpeed: 9,
    forecast: getFallbackForecast(),
    agriculturalAdvisory: {
      en: 'Favorable agricultural conditions. Morning hours are ideal for fertilizer application and weed management.',
      te: 'వ్యవసాయ పనులకు అనుకూలమైన వాతావరణం. ఉదయం వేళలు ఎరువుల యాజమాన్యం మరియు కలుపు నివారణకు శ్రేయస్కరం.'
    }
  };
}
