import { useState, useCallback, useMemo, useEffect, useRef } from "react";
import { Chord } from "tonal";
import * as Tone from "tone";
import { TRIAD } from "../constants/configs";

export function usePiano() {
  const sampler = useRef<Tone.Sampler | null>(null);
  const [pressedKeys, setPressedKeys] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    sampler.current = new Tone.Sampler({
      urls: {
        A0: "A0.mp3",
        C1: "C1.mp3",
        "D#1": "Ds1.mp3",
        "F#1": "Fs1.mp3",
        A1: "A1.mp3",
        C2: "C2.mp3",
        "D#2": "Ds2.mp3",
        "F#2": "Fs2.mp3",
        A2: "A2.mp3",
        C3: "C3.mp3",
        "D#3": "Ds3.mp3",
        "F#3": "Fs3.mp3",
        A3: "A3.mp3",
        C4: "C4.mp3",
        "D#4": "Ds4.mp3",
        "F#4": "Fs4.mp3",
        A4: "A4.mp3",
        C5: "C5.mp3",
        "D#5": "Ds5.mp3",
        "F#5": "Fs5.mp3",
        A5: "A5.mp3",
        C6: "C6.mp3",
        "D#6": "Ds6.mp3",
        "F#6": "Fs6.mp3",
        A6: "A6.mp3",
        C7: "C7.mp3",
        "D#7": "Ds7.mp3",
        "F#7": "Fs7.mp3",
        A7: "A7.mp3",
        C8: "C8.mp3",
      },
      release: 1,
      baseUrl: "https://tonejs.github.io/audio/salamander/",
      onload: () => {
        setIsLoaded(true); // 2. Tell the UI we are ready
      },
    }).toDestination();

    return () => {
      sampler.current?.dispose();
    };
  }, []);

  const playNote = async (note: string) => {
    if (!sampler.current || !isLoaded) return;

    if (Tone.context.state !== "running") {
      await Tone.start();
    }

    sampler.current.triggerAttackRelease(note, "8n");
  };

  const handlePressKey = useCallback(async (note: string) => {
    await playNote(note);

    setPressedKeys((prev) => {
      if (prev.includes(note)) return prev.filter((n) => n !== note);
      return [...prev, note];
    });
  }, [isLoaded]);

  const playChord = useCallback(
    async (e?: React.MouseEvent<HTMLButtonElement>, notes?: string[]) => {
      if (!sampler.current || !isLoaded) return;

      if (Tone.context.state !== "running") {
        await Tone.start();
      }

      const notesToPlay = notes || pressedKeys;
      sampler.current.triggerAttackRelease(notesToPlay, "1n");
    },
    [isLoaded, pressedKeys]
  );

  const chords = useMemo(() => {
    if (pressedKeys.length < TRIAD) {
      return []
    };

    return Chord.detect(pressedKeys.map((key) => key.replace(/[0-9]/g, "")));
  }, [pressedKeys]);

  const clearChord = useCallback(() => {
    setPressedKeys([]);
  }, []);

  return { pressedKeys, chords, handlePressKey, isLoaded, playChord, clearChord };
}