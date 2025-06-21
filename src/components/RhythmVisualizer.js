import React, { useEffect, useRef } from 'react';
import abcjs from 'abcjs';

const RhythmVisualizer = ({ abcString, measureLength }) => { // Renamed rhythmData to abcString
  const visualizerRef = useRef(null);
  const uniqueDivId = useRef(`abc-notation-${Math.random().toString(36).substring(7)}`).current;

  useEffect(() => {
    if (visualizerRef.current && abcString) {
      // Clear previous rendering - abcjs handles this by rendering to a specific div ID.
      // Ensure the target div exists
      if (!document.getElementById(uniqueDivId)) {
        visualizerRef.current.innerHTML = `<div id="${uniqueDivId}"></div>`;
      } else {
        // If div already exists, clear it before rendering again
        document.getElementById(uniqueDivId).innerHTML = '';
      }
      
      // Basic parameters for abcjs rendering
      // Using a single B note on the middle line for rhythm display.
      // The actual note doesn't matter, only its duration.
      const fullAbcString = `X:1\nM:4/4\nL:1/4\nK:C clef=perc\n${abcString}`;
      
      abcjs.renderAbc(uniqueDivId, fullAbcString, {
        responsive: "resize", // Make the notation responsive
        staffwidth: visualizerRef.current.offsetWidth * 0.9, // Adjust width if needed
        scale: 1.2, // Adjust scale if needed
      });

    } else if (visualizerRef.current) {
      // Clear if no abcString
      visualizerRef.current.innerHTML = '<p>No rhythm to display.</p>';
    }
  }, [abcString, uniqueDivId]); // Removed measureLength from deps as it's implicit in abcString

  if (!abcString && !visualizerRef.current) { // Initial render case before ref is set
    return (
      <div className="rhythm-visualizer">
        <h4>Rhythm Notation:</h4>
        <div ref={visualizerRef} id="rhythm-notation-container-parent">
          <p>Loading rhythm display...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="rhythm-visualizer">
      <h4>Rhythm Notation:</h4>
      {/* The div below is the direct parent, the one with uniqueDivId is created inside by useEffect */}
      <div ref={visualizerRef} id="rhythm-notation-container-parent">
         {/* abcjs will render into a div with uniqueDivId inside here */}
         {!abcString && <p>Select a rhythm to see notation.</p>}
      </div>
    </div>
  );
};

export default RhythmVisualizer;
