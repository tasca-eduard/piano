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
  isAudioReady: boolean;
};

const notes: KeyType[] = [
  ...octave,
  ...octave,
  ...octave,
  ...octave.slice(0, 3),
];

function Piano({ onPressKey, pressedKeys, isAudioReady }: PianoProps) {
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
            disabled={!isAudioReady}
          />
        );
      })}
    </>
  );
}

export default memo(Piano);
