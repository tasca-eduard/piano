import React from 'react';

interface SavedChordsProps {
  savedChords: string[][];
  onPlayAll: () => void;
  onClearAll: () => void;
}

function SavedChords({ savedChords, onPlayAll, onClearAll }: SavedChordsProps) {
  return (
    <div className="saved-chords">
      <h2>Saved Chords</h2>
      <div className="saved-chords__buttons">
        <button onClick={onPlayAll} disabled={savedChords.length === 0}>
          Play All
        </button>
        <button onClick={onClearAll} disabled={savedChords.length === 0}>
          Clear All
        </button>
      </div>
      <ul className="saved-chords__list">
        {savedChords.map((chord, index) => (
          <li key={index} className="saved-chords__list-item">
            {chord.join(' - ')}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SavedChords;
