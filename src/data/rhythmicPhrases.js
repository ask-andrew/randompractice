// Each rhythmic phrase includes a text description and an notationSpec for abcjs.
// L:1/4 sets the default note length to a quarter note.
// In percussion clef, 'B' is typically used for the middle line.
// Durations: B4 (whole), B2 (half), B (quarter), B/2 (eighth), B/4 (sixteenth)
// Rests: z4, z2, z, z/2, z/4

export const rhythmicPhrases = [
  // 1 Measure examples (assuming M:4/4, L:1/4 in header)
  { id: "rp001", text: "Whole note on beat 1.", measureLength: 1, notationSpec: "B4" }, // B on middle line, whole note
  { id: "rp002", text: "Half note on beat 1, half note on beat 3.", measureLength: 1, notationSpec: "B2 B2" },
  { id: "rp003", text: "Quarter notes on all four beats.", measureLength: 1, notationSpec: "B B B B" },
  { id: "rp004", text: "Eighth notes on all beats and off-beats.", measureLength: 1, notationSpec: "B/2B/2 B/2B/2 B/2B/2 B/2B/2" }, // Can also be written B/ B/ B/ B/ B/ B/ B/ B/ if L:1/8
  { id: "rp005", text: "Dotted quarter followed by an eighth note, twice.", measureLength: 1, notationSpec: "B3/2B/2 B3/2B/2" }, // B3/2 is dotted quarter
  { id: "rp006", text: "Quarter note, two eighth notes, quarter note, two eighth notes.", measureLength: 1, notationSpec: "B B/2B/2 B B/2B/2" },
  { id: "rp007", text: "Start on the 'and' of beat 1 with an eighth, then quarter notes on 2, 3, 4.", measureLength: 1, notationSpec: "z/2 B/2 B B B" },
  { id: "rp008", text: "Only play on the offbeats (ands of 1, 2, 3, 4).", measureLength: 1, notationSpec: "z/2 B/2 z/2 B/2 z/2 B/2 z/2 B/2" },
  { id: "rp009", text: "Syncopated: Eighth rest, eighth note, quarter note, eighth rest, eighth note, quarter note.", measureLength: 1, notationSpec: "z/2 B/2 B z/2 B/2 B" },
  { id: "rp010", text: "Charleston rhythm: Dotted quarter on 1, eighth on 'and' of 2.", measureLength: 1, notationSpec: "B3/2 B/2 z2" }, // z2 is a half rest to fill the bar

  // 2 Measure examples
  // Note: abcjs handles measures with '|'. The measureLength property is for filtering.
  // The notationSpec should contain the full multi-measure ABC string.
  { id: "rp011", text: "Measure 1: Whole note. Measure 2: Four quarter notes.", measureLength: 2, notationSpec: "B4 | B B B B" },
  { id: "rp012", text: "Measure 1: Half note, quarter rest, quarter note. Measure 2: Quarter note, half note, quarter rest.", measureLength: 2, notationSpec: "B2 z B | B B2 z" },
  { id: "rp013", text: "Son Clave 3-2 (common 2-measure pattern).", measureLength: 2, notationSpec: "B B z B | z B B z" }, // Example, actual clave can vary
  { id: "rp014", text: "Call and response: Simple phrase in M1, varied in M2.", measureLength: 2, notationSpec: "B B z2 | B/2B/2 B/2B/2 z2" }, // Example
  { id: "rp015", text: "Increasing density: Quarter notes in M1, eighth notes in M2.", measureLength: 2, notationSpec: "B B B B | B/2B/2 B/2B/2 B/2B/2 B/2B/2" },

  // 4 Measure examples
  { id: "rp016", text: "Standard 4-bar blues phrase rhythm (long-short-short-long).", measureLength: 4, notationSpec: "B2 B B | B B B B | B/2B/2 B/2B/2 B B | B4" }, // Example
  { id: "rp017", text: "Build intensity over 4 measures.", measureLength: 4, notationSpec: "B4 | B2 B2 | B B B B | B/2B/2 B/2B/2 B/2B/2 B/2B/2" },
  { id: "rp018", text: "Repeat a 1-measure rhythmic motif four times.", measureLength: 4, notationSpec: "B B/2B/2 z B | B B/2B/2 z B | B B/2B/2 z B | B B/2B/2 z B" },
  { id: "rp019", text: "Simple syncopation repeated.", measureLength: 4, notationSpec: "z/2 B/2 B z/2 B/2 B | z/2 B/2 B z/2 B/2 B | z/2 B/2 B z/2 B/2 B | z/2 B/2 B z/2 B/2 B" },
  { id: "rp020", text: "Long tones in M1 & 3, activity in M2 & 4.", measureLength: 4, notationSpec: "B4 | B/2B/2 B/2B/2 B/2B/2 B/2B/2 | B4 | B B B B" }
];

export const getRandomRhythmicPhrase = (measureLength = null) => {
  let availablePhrases = rhythmicPhrases;
  if (measureLength) {
    const filtered = rhythmicPhrases.filter(p => p.measureLength === parseInt(measureLength));
    if (filtered.length > 0) {
      availablePhrases = filtered;
    }
    // If no phrases match the exact length, could fall back to all phrases or a default length.
    // For now, if filter results in empty, it will pick from all (as availablePhrases won't be updated).
    // This might be desired, or we might want to ensure strict matching.
    // Given current data, it should always find something for 1, 2, or 4.
  }
  
  const phraseData = availablePhrases[Math.floor(Math.random() * availablePhrases.length)];
  return phraseData; // Returns the object { id, text, measureLength, notationSpec }
};
