
const tone = (symbol, pitch, note, sign=undefined, weird=false) => {
  return {
    symbol: symbol,
    pitch: pitch,
    note: note,
    sign: sign,
    weird: weird
  };
};
const Tones = {
  C_FLAT:  tone("Cb",  7, "C", "b", true),
  C:       tone("C",   8, "C"),
  C_SHARP: tone("C#",  9, "C", "#"),

  D_FLAT:  tone("Db",  9, "D", "b"),
  D:       tone("D",  10, "D"),
  D_SHARP: tone("D#", 11, "D", "#"),

  E_FLAT:  tone("Eb", 11, "E", "b"),
  E:       tone("E",   0, "E"),
  E_SHARP: tone("E#",  1, "E", "#", true),

  F_FLAT:  tone("Fb",  0, "F", "b", true),
  F:       tone("F",   1, "F"),
  F_SHARP: tone("F#",  2, "F", "#"),

  G_FLAT:  tone("Gb",  2, "G", "b"),
  G:       tone("G",   3, "G"),
  G_SHARP: tone("G#",  4, "G", "#"),

  A_FLAT:  tone("Ab",  5, "A", "b"),
  A:       tone("A",   5, "A"),
  A_SHARP: tone("A#",  6, "A", "#", true),

  B_FLAT:  tone("Bb",  6, "B", "b"),
  B:       tone("B",   7, "B"),
  B_SHARP: tone("B#",  8, "B", "#", true),

}

export default Tones;