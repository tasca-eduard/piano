import React from 'react';

interface SavedChordsProps {
  savedChords: string[][];
  onPlayAll: () => void;
  onClearAll: () => void;
}

function SavedChords({ savedChords, onPlayAll, onClearAll }: SavedChordsProps) {
  return (
    <div className="offcanvas open">
      <div className="saved-chords">
        <h2>Saved Chords</h2>
        <div>
          <button className="btn-primary" onClick={onPlayAll} disabled={savedChords.length === 0}>
            Play All
          </button>
          <button className="btn-primary" onClick={onClearAll} disabled={savedChords.length === 0}>
            Clear All
          </button>
        </div>
        <ul>
          {savedChords.map((chord, index) => (
            <li key={index}>
              {chord.join(' - ')}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SavedChords;
