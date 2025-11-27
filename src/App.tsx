import { useState } from "react";
import * as Tone from "tone";
import Piano from "./components/Piano";
import Screen from "./components/Screen";
import { usePiano } from "./hooks/usePiano";
import { TRIAD } from "./constants/configs";
import SavedChords from "./components/SavedChords";

function App() {
  const { pressedKeys, chords, handlePressKey, loaded, playChord } = usePiano();
  const [isAudioReady, setIsAudioReady] = useState(false);
  const [savedChords, setSavedChords] = useState<string[][]>([]);

  const handleStartAudio = async () => {
    await Tone.start();
    setIsAudioReady(true);
  };

  const handleSaveChord = () => {
    if (pressedKeys.length > 0) {
      setSavedChords([...savedChords, pressedKeys]);
    }
  };

  const handlePlayAllChords = () => {
    let delay = 0;
    savedChords.forEach((chord) => {
      setTimeout(() => {
        playChord(undefined, chord);
      }, delay);
      delay += 1000;
    });
  };

  const handleClearAllChords = () => {
    setSavedChords([]);
  };

  if (!isAudioReady) {
    return (
      <main>
        <button onClick={handleStartAudio}>Start</button>
      </main>
    );
  }

  if (!loaded) {
    return (
      <main>
        <p>Loading...</p>
      </main>
    );
  }

  return (
    <main>
      <div className="piano-component">
        <Screen chords={chords} pressedKeys={pressedKeys} />
        <Piano onPressKey={handlePressKey} pressedKeys={pressedKeys} />
        <div className="controls">
          <button
            onClick={playChord}
            disabled={chords.length === 0 || pressedKeys.length < TRIAD}
          >
            Play Chord
          </button>
          <button
            onClick={handleSaveChord}
            disabled={chords.length === 0 || pressedKeys.length < TRIAD}
          >
            Save Chord
          </button>
        </div>
        <SavedChords
          savedChords={savedChords}
          onPlayAll={handlePlayAllChords}
          onClearAll={handleClearAllChords}
        />
        <div className="screen-bottom">
          <small>
            Not every set of random notes can form a "traditional" chord. Learn more at:{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://music.stackexchange.com/questions/72465/does-any-set-of-notes-qualify-as-a-chord"
            >
              Does any set of notes qualify as a chord?
            </a>
          </small>
        </div>
      </div>
    </main>
  );
}

export default App;
