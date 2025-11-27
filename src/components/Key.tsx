import { memo } from "react";

type KeyProps = {
  note: string;
  sharp: boolean;
  isPressed: boolean;
  onPress: () => void;
};

function Key({ note, sharp, isPressed, onPress }: KeyProps) {
  return (
    <div className={`key ${sharp ? "sharp" : ""}`}>
      <button
        className={`note ${isPressed ? "active" : ""}`}
        onClick={onPress}
      >
        {note.replace(/[0-9]/g, "")}
      </button>
    </div>
  );
}

export default memo(Key);
