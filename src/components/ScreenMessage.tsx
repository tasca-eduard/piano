import { memo } from "react";
import { TRIAD } from "../constants/configs";

type ScreenMessageProps = {
  chords: string[];
  pressedKeysCount: number;
};

function ScreenMessage({ chords, pressedKeysCount }: ScreenMessageProps) {
  if (chords.length > 0) {
    return (
      <>
        {chords.length === 1 ? "Variant:" : "Variants:"}
        <br />
        {chords.map((chord) => {
          return <span key={chord}> &#10074; {chord}</span>;
        })}{" "}
        &#10074;
      </>
    );
  }

  if (pressedKeysCount >= TRIAD) {
    return <p>No chord found</p>;
  }

  return <p>Press at least {TRIAD} keys to form a chord</p>;
}

export default memo(ScreenMessage);
