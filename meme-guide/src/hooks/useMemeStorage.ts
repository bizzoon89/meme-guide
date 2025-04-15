import { useEffect, useState } from 'react';
import { IMeme, defaultMemes } from '../data/memes';

const LOCAL_KEY = 'memeData';

export function useMemeStorage() {
  const [memes, setMemes] = useState<IMeme[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) setMemes(parsed);
        else setMemes(defaultMemes);
      } catch {
        setMemes(defaultMemes);
      }
    } else {
      setMemes(defaultMemes);
    }
  }, []);

  const saveMemes = (updated: IMeme[]) => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(updated));
    setMemes(updated);
  };

  return {
    memes,
    setMemes: saveMemes,
  };
}
