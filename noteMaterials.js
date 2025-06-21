export const noteMaterials = [
  // Scales
  "Major Scale",
  "Natural Minor Scale",
  "Harmonic Minor Scale",
  "Melodic Minor Scale (ascending)",
  "Dorian Mode",
  "Mixolydian Mode",
  "Lydian Mode",
  "Phrygian Mode",
  "Locrian Mode",
  "Major Pentatonic Scale",
  "Minor Pentatonic Scale",
  "Blues Scale",
  "Bebop Major Scale",
  "Bebop Dominant Scale",
  "Bebop Minor Scale",
  "Whole Tone Scale",
  "Diminished Scale (WH)",
  "Diminished Scale (HW)",
  
  // Arpeggios
  "Major Triad Arpeggio (1-3-5)",
  "Minor Triad Arpeggio (1-b3-5)",
  "Diminished Triad Arpeggio (1-b3-b5)",
  "Augmented Triad Arpeggio (1-3-#5)",
  "Major 7th Arpeggio (1-3-5-7)",
  "Minor 7th Arpeggio (1-b3-5-b7)",
  "Dominant 7th Arpeggio (1-3-5-b7)",
  "Minor 7th b5 Arpeggio (Half-diminished) (1-b3-b5-b7)",
  "Diminished 7th Arpeggio (1-b3-b5-bb7)",
  "Major 6th Arpeggio (1-3-5-6)",
  "Minor 6th Arpeggio (1-b3-5-6)",

  // Patterns & Fragments
  "1-2-3-5 pattern (Major key context)",
  "3-5-7-9 pattern over ii-V-I (e.g., Dm7: F-A-C-E; G7: B-D-F-A; Cmaj7: E-G-B-D)",
  "Enclosure pattern around chord tones (e.g., chromatic below, diatonic above)",
  "Voice-leading fragment: 7th of V7 resolving to 3rd of Imaj7",
  "Voice-leading fragment: b3rd of iim7b5 to 7th of V7alt to 3rd of iminMaj7",
  "Sequence a short melodic idea (e.g., 3-note pattern up/down diatonic steps)",
  "Practice scale in 3rds",
  "Practice scale in 4ths",
  "Practice arpeggios with inversions",
  "Motif: Short, memorable melodic phrase (user defined or simple examples)"
];

export const getRandomNoteMaterial = () => {
  return noteMaterials[Math.floor(Math.random() * noteMaterials.length)];
};
