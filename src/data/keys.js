export const majorKeys = [
  "C Major", "G Major", "D Major", "A Major", "E Major", "B Major", 
  "F# Major", "C# Major", 
  "F Major", "Bb Major", "Eb Major", "Ab Major", "Db Major", "Gb Major" 
  // Cb Major is B Major, F# Major is Gb Major, C# Major is Db Major - some redundancy for enharmonics if desired
  // but typically 12 unique are used. Let's stick to 12 common ones first.
];

export const minorKeys = [
  "A Minor", "E Minor", "B Minor", "F# Minor", "C# Minor", "G# Minor", 
  "D# Minor", "A# Minor",
  "D Minor", "G Minor", "C Minor", "F Minor", "Bb Minor", "Eb Minor"
  // Same enharmonic considerations as major keys.
];

export const allKeys = [
  // Unique set of 12 major and 12 minor for typical selection
  "C Major", "Db Major", "D Major", "Eb Major", "E Major", "F Major",
  "F# Major", "G Major", "Ab Major", "A Major", "Bb Major", "B Major",
  "A Minor", "Bb Minor", "B Minor", "C Minor", "C# Minor", "D Minor",
  "Eb Minor", "E Minor", "F Minor", "F# Minor", "G Minor", "G# Minor",
];

// For simplicity in the MVP, we can just use a combined list.
// The backend/AI might later distinguish for more nuanced generation.

export const getRandomKey = () => {
  return allKeys[Math.floor(Math.random() * allKeys.length)];
};
