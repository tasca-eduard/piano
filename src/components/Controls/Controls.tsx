import React from "react";
import Button from "../Button/Button";
import { TRIAD } from "../../constants/configs";

type Props = {
  playChord: () => void;
  handleSaveChord: () => void;
  clearChord: () => void;
  chords: string[];
  pressedKeys: string[];
};

function Controls({
  playChord,
  handleSaveChord,
  clearChord,
  chords,
  pressedKeys,
}: Props) {
  return (
    <div className="controls">
      <Button
        onClick={playChord}
        disabled={chords.length === 0 || pressedKeys.length < TRIAD}
      >
        Play Chord
      </Button>
      <Button
        onClick={handleSaveChord}
        disabled={chords.length === 0 || pressedKeys.length < TRIAD}
      >
        Save Chord
      </Button>
      <Button
        onClick={clearChord}
        disabled={chords.length === 0 || pressedKeys.length < TRIAD}
      >
        Delete Chord
      </Button>
    </div>
  );
}

export default Controls;
