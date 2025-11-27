import { memo } from "react";
import { octave } from "../constants/configs";
import Key from "./Key";

type KeyType = {
  note: string;
  sharp: boolean;
};

type PianoProps = {
  onPressKey: (note: string) => void;
  pressedKeys: string[];
};

const notes: KeyType[] = [
  ...octave,
  ...octave,
  ...octave,
  ...octave.slice(0, 4),
];

function Piano({ onPressKey, pressedKeys }: PianoProps) {
  return (
    <>
      {notes.map((key, index) => {
        const octave = Math.floor(index / 12) + 3;
        const note = key.note + octave;
        return (
          <Key
            key={index}
            note={note}
            sharp={key.sharp}
            isPressed={pressedKeys.includes(note)}
            onPress={() => onPressKey(note)}
          />
        );
      })}
    </>
  );
}

export default memo(Piano);
