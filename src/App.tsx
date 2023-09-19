import { octave } from "./constants/configs";

function App() {
  const notes = [
    ...octave, 
    ...octave, 
    ...octave, 
    ...octave.slice(0, 4)
  ];

  return (
    <main>
      <div className="piano-component">
          {notes.map((key, index) => {
            return (
              <div className={[
                "key", 
                key.sharp === true ? "sharp" : ""
                ].join(" ")
              }>
                <button className="note">
                  {key.note}
                </button>
              </div>
            )
          })}
      </div>
    </main>
  );
}

export default App;
