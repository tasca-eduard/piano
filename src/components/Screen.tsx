import { memo } from "react";
import ScreenMessage from "./ScreenMessage";

type ScreenProps = {
  chords: string[];
  pressedKeys: string[];
};

function Screen({ chords, pressedKeys }: ScreenProps) {
  return (
    <div className="screen-top">
      <ScreenMessage chords={chords} pressedKeysCount={pressedKeys.length} />
    </div>
  );
}

export default memo(Screen);
