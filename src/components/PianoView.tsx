import React, { useState } from "react";
import { createPortal } from "react-dom";
import * as Tone from "tone";
import Screen from "./Screen";
import Piano from "./Piano";
import { usePiano } from "../hooks/usePiano";
import SavedChords from "./SavedChords";
import Controls from "./Controls/Controls";
import Button from "./Button/Button";

type Status = "initial" | "loading" | "ready";

function PianoView() {
  const [status, setStatus] = useState<Status>("initial");
  const { pressedKeys, chords, handlePressKey, playChord, clearChord } =
    usePiano();
  const [savedChords, setSavedChords] = useState<
    { name: string; notes: string[] }[]
  >([]);

  const handleStartAudio = async () => {
    setStatus("loading");
    await Tone.start();
    await Tone.loaded();
    setStatus("ready");
  };

  const handleSaveChord = () => {
    if (pressedKeys.length > 0 && chords.length > 0) {
      setSavedChords([...savedChords, { name: chords[0], notes: pressedKeys }]);
    }
  };

  const handlePlayAllChords = () => {
    let delay = 0;
    savedChords.forEach((chord) => {
      setTimeout(() => {
        playChord(undefined, chord.notes);
      }, delay);
      delay += 1000;
    });
  };

  const handleClearAllChords = () => {
    setSavedChords([]);
  };

  return (
    <div className="piano-container">
      {status !== "ready" && (
        <div className="start-button-container">
          <Button onClick={handleStartAudio} disabled={status === "loading"}>
            {status === "loading" ? "Loading..." : "Start"}
          </Button>
        </div>
      )}
      <div className="piano-component">
        <Screen chords={chords} pressedKeys={pressedKeys} />
        <Piano
          onPressKey={handlePressKey}
          pressedKeys={pressedKeys}
          isAudioReady={status === "ready"}
        />
        <div className="screen-bottom">
          <small>
            Not every set of random notes can form a "traditional" chord. Learn
            more at:{" "}
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
      <Controls
        playChord={playChord}
        handleSaveChord={handleSaveChord}
        clearChord={clearChord}
        chords={chords}
        pressedKeys={pressedKeys}
      />
      {createPortal(
        <SavedChords
          savedChords={savedChords}
          onPlayAll={handlePlayAllChords}
          onClearAll={handleClearAllChords}
        />,
        document.getElementById("saved-chords-root") as HTMLElement
      )}
    </div>
  );
}

export default PianoView;
