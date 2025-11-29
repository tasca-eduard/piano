import { memo } from "react";

type KeyProps = {
  note: string;
  sharp: boolean;
  isPressed: boolean;
  onPress: () => void;
  disabled: boolean;
};

function Key({ note, sharp, isPressed, onPress, disabled }: KeyProps) {
  return (
    <div className={`key ${sharp ? "sharp" : ""}`}>
      <button
        className={`note ${isPressed ? "active" : ""} ${
          disabled ? "disabled" : ""
        }`}
        onClick={onPress}
        disabled={disabled}
      >
        {note.replace(/[0-9]/g, "")}
      </button>
    </div>
  );
}

export default memo(Key);
