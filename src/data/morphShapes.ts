// Formen für <MorphShape>, im Koordinatensystem der viewBox 0 0 100 100.
// Eigene Formen genauso anlegen: als <path> exportieren (Figma/Illustrator),
// gleiche viewBox. Kreise/Rechtecke vorher in Pfade umwandeln.
export const MORPH_SHAPES = {
  raute: "M50,1l49,49L50,99L1,50L50,1z",
  blitz: "M47.1,0.8 73.3,0.8 61.9,37.2 77.1,37.2 30.7,99.4 45.8,51.9 29,51.9z",
  dokument: "M15.5,1 H64 L84.5,21.5 V99 H15.5 Z",
} as const;
