import INTERVAL from "./Intervals" ;

const I = INTERVAL;
const Scales = {
  LYDIAN: [ I.P1, I.M2, I.M3, I.A4, I.P5, I.M6, I.M7 ],
  IONIAN: [ I.P1, I.M2, I.M3, I.P4, I.P5, I.M6, I.M7 ],
  MIXOLYDIAN: [ I.P1, I.M2, I.M3, I.P4, I.P5, I.M6, I.m7 ],
  DORIAN: [ I.P1, I.M2, I.m3, I.P4, I.P5, I.M6, I.m7 ],
  AEOLIAN: [ I.P1, I.M2, I.m3, I.P4, I.P5, I.m6, I.m7 ],
  PHYGRIAN: [ I.P1, I.m2, I.m3, I.P4, I.P5, I.m6, I.m7 ],
  LOCRIAN: [ I.P1, I.m2, I.m3, I.P4, I.d5, I.m6, I.m7 ],

  LYDIAN_b7: [ I.P1, I.M2, I.M3, I.A4, I.P5, I.M6, I.m7 ],
  MIXOLYDIAN_b9_b13: [ I.P1, I.m9, I.M3, I.P4, I.P5, I.m13, I.m7 ],
  LOCRIAN_n13: [ I.P1, I.m2, I.m3, I.P4, I.d5, I.M13, I.m7 ],

};

export default Scales;