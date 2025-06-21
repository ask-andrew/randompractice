import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import PromptDisplay from './components/PromptDisplay';
import Controls from './components/Controls';
import RhythmVisualizer from './components/RhythmVisualizer'; // Will be used now

import { getRandomKey } from './data/keys';
import { getRandomNoteMaterial } from './data/noteMaterials';
import { getRandomRhythmicPhrase } from './data/rhythmicPhrases';

function App() {
  const [currentKey, setCurrentKey] = useState('');
  const [currentNoteMaterial, setCurrentNoteMaterial] = useState('');
  const [currentRhythm, setCurrentRhythm] = useState(null); // { id, text, measureLength, notationSpec }
  const [currentMeasureLength, setCurrentMeasureLength] = useState("1"); // Default to 1 measure

  const [lockedKey, setLockedKey] = useState(false);
  const [lockedNoteMaterial, setLockedNoteMaterial] = useState(false);
  const [lockedRhythm, setLockedRhythm] = useState(false);

  const generatePrompt = useCallback(() => {
    if (!lockedKey) {
      setCurrentKey(getRandomKey());
    }
    if (!lockedNoteMaterial) {
      setCurrentNoteMaterial(getRandomNoteMaterial());
    }
    if (!lockedRhythm) {
      // Pass currentMeasureLength to get a rhythm of the appropriate length
      setCurrentRhythm(getRandomRhythmicPhrase(parseInt(currentMeasureLength)));
    }
  }, [lockedKey, lockedNoteMaterial, lockedRhythm, currentMeasureLength]);

  // Generate initial prompt on mount
  useEffect(() => {
    generatePrompt();
  }, [generatePrompt]);

  const handleShuffleKey = () => {
    if (!lockedKey) setCurrentKey(getRandomKey());
  };

  const handleShuffleNote = () => {
    if (!lockedNoteMaterial) setCurrentNoteMaterial(getRandomNoteMaterial());
  };

  const handleShuffleRhythm = () => {
    if (!lockedRhythm) setCurrentRhythm(getRandomRhythmicPhrase(parseInt(currentMeasureLength)));
  };

  const handleMeasureLengthChange = (event) => {
    const newLength = event.target.value;
    setCurrentMeasureLength(newLength);
    // If rhythm is not locked, regenerate it with the new length
    if (!lockedRhythm) {
      setCurrentRhythm(getRandomRhythmicPhrase(parseInt(newLength)));
    }
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>🎷 Saxophone Practice Prompts 🎶</h1>
      </header>
      <main>
        <Controls
          onShuffleKey={handleShuffleKey}
          onShuffleNote={handleShuffleNote}
          onShuffleRhythm={handleShuffleRhythm}
          onLockKey={() => setLockedKey(!lockedKey)}
          onLockNote={() => setLockedNoteMaterial(!lockedNoteMaterial)}
          onLockRhythm={() => setLockedRhythm(!lockedRhythm)}
          lockedKey={lockedKey}
          lockedNote={lockedNoteMaterial}
          lockedRhythm={lockedRhythm}
          onMeasureLengthChange={handleMeasureLengthChange}
          currentMeasureLength={currentMeasureLength}
        />
        <PromptDisplay
          keyName={currentKey}
          noteMaterial={currentNoteMaterial}
          rhythmText={currentRhythm ? currentRhythm.text : 'N/A'}
        />
        <RhythmVisualizer 
          abcString={currentRhythm ? currentRhythm.notationSpec : null}
          // measureLength is implicitly handled by the abcString for abcjs for rendering,
          // but might be useful if visualizer needed to adjust display based on it.
          // For now, the abcString itself contains the full multi-measure notation if applicable.
          measureLength={currentRhythm ? currentRhythm.measureLength : parseInt(currentMeasureLength)}
        />
      </main>
    </div>
  );
}

export default App;
