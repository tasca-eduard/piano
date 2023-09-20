import { useEffect, useState } from "react";
import { TRIAD, octave } from "./constants/configs";
import { Chord } from "tonal";

function App() {
  const notes = [
    ...octave,
    ...octave,
    ...octave,
    ...octave.slice(0, 4)
  ];

  const [pressedKeys, setPressedNotes] = useState<string[]>([]);
  const [chords, setChords] = useState<string[]>([]);

  function handlePressKey(note: string) {
    const temp = [...pressedKeys];

    if (temp.includes(note)) {
      const removedNoteIndex = temp.findIndex(n => n === note);
      temp.splice(removedNoteIndex, 1);
    } else {
      temp.push(note);
    }

    setPressedNotes(temp);
  }

  useEffect(() => {
    if (pressedKeys.length < TRIAD) {
      setChords([]);
      return;
    };

    const chords = Chord.detect(pressedKeys.map(key => key.replace(/[0-9]/g, '')));
    setChords(chords);
  }, [pressedKeys])

  return (
    <main>

      <div className="piano-component">
        <div className="screen-top">
          {chords.length > 0 ? (
              <>
                {chords.length === 1 ? "Variant:" : "Variants:"}
                <br />
                {chords.map(chord => {
                  return (
                    <span key={chord}> &#10074; {chord}</span>
                  )
                })} &#10074;
              </>
          ) : (
            pressedKeys.length >= 3 && (
              <p>No chord found</p>
            )
          )}
          {pressedKeys.length < 3 && (
            <p>Press at least 3 keys to form a chord</p>
          )}
        </div>

        {notes.map((key, index) => {
          const note = key.note + index;

          return (
            <div
              key={index}
              className={[
                "key",
                key.sharp === true ? "sharp" : "",
              ].join(" ")
              }>
              <button
                className={[
                  "note",
                  pressedKeys.includes(note) ? "active" : ""
                ].join(" ")}
                onClick={() => handlePressKey(note)}
              >
                {key.note}
              </button>
            </div>
          )
        })}
        <div className="screen-bottom">
          
          <small>Not every set of random notes can form a "traditional" chord. Learn more at: <a target="_blank" href="https://music.stackexchange.com/questions/72465/does-any-set-of-notes-qualify-as-a-chord">Does any set of notes qualify as a chord?</a></small>
        </div>
      </div>
    </main>
  );
}

export default App;
