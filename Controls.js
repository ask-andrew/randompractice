import React from 'react';

const Controls = ({
  onShuffleKey,
  onShuffleNote,
  onShuffleRhythm,
  onLockKey,
  onLockNote,
  onLockRhythm,
  lockedKey,
  lockedNote,
  lockedRhythm,
  onMeasureLengthChange,
  currentMeasureLength
}) => {
  return (
    <div className="controls">
      <h3>Controls:</h3>
      <div>
        <button onClick={onShuffleKey}>Shuffle Key</button>
        <button onClick={onLockKey}>
          {lockedKey ? 'Unlock Key' : 'Lock Key'}
        </button>
      </div>
      <div>
        <button onClick={onShuffleNote}>Shuffle Note Material</button>
        <button onClick={onLockNote}>
          {lockedNote ? 'Unlock Note' : 'Lock Note'}
        </button>
      </div>
      <div>
        <button onClick={onShuffleRhythm}>Shuffle Rhythm</button>
        <button onClick={onLockRhythm}>
          {lockedRhythm ? 'Unlock Rhythm' : 'Lock Rhythm'}
        </button>
      </div>
      <div>
        <label htmlFor="measureLength">Rhythm Measure Length: </label>
        <select id="measureLength" value={currentMeasureLength} onChange={onMeasureLengthChange}>
          <option value="1">1 Measure</option>
          <option value="2">2 Measures</option>
          <option value="4">4 Measures</option>
        </select>
      </div>
    </div>
  );
};

export default Controls;
