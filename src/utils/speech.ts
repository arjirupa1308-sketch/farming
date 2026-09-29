import { Language } from '../types';

let currentUtterance: SpeechSynthesisUtterance | null = null;

export function speakText(
  text: string, 
  lang: Language = 'en',
  onStart?: () => void,
  onEnd?: () => void
): boolean {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    console.warn('Speech synthesis not supported on this browser.');
    return false;
  }

  // Cancel any ongoing speech
  stopSpeaking();

  const cleanText = text.replace(/[*#_~`]/g, '').trim();
  if (!cleanText) return false;

  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.rate = 0.95; // slightly slower for high farmer comprehension
  utterance.pitch = 1.0;

  // Attempt to select language voice
  const voices = window.speechSynthesis.getVoices();
  if (lang === 'te') {
    utterance.lang = 'te-IN';
    const teluguVoice = voices.find(v => v.lang.startsWith('te') || v.lang.includes('Telugu'));
    if (teluguVoice) {
      utterance.voice = teluguVoice;
    }
  } else {
    utterance.lang = 'en-IN';
    const enInVoice = voices.find(v => v.lang === 'en-IN' || v.lang.startsWith('en'));
    if (enInVoice) {
      utterance.voice = enInVoice;
    }
  }

  utterance.onstart = () => {
    if (onStart) onStart();
  };

  utterance.onend = () => {
    currentUtterance = null;
    if (onEnd) onEnd();
  };

  utterance.onerror = () => {
    currentUtterance = null;
    if (onEnd) onEnd();
  };

  currentUtterance = utterance;
  window.speechSynthesis.speak(utterance);
  return true;
}

export function stopSpeaking() {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    currentUtterance = null;
  }
}

export function isSpeaking(): boolean {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    return window.speechSynthesis.speaking;
  }
  return false;
}
