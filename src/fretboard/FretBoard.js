import React from "react";
import String from "./String";
import INTERVAL from "./Intervals";
import Scales from "./Scales";
import Tones from "./Tones";

const DIATONIC = [Tones.C, Tones.D, Tones.E, Tones.F, Tones.G, Tones.A, Tones.B,
  Tones.C_FLAT, Tones.D_FLAT, Tones.E_FLAT, Tones.F_FLAT, Tones.G_FLAT, Tones.A_FLAT, Tones.B_FLAT,
  Tones.C_SHARP, Tones.D_SHARP, Tones.E_SHARP, Tones.F_SHARP, Tones.G_SHARP, Tones.A_SHARP, Tones.B_SHARP];

const ALL_INTERVALS = [
  INTERVAL.P1, INTERVAL.m2, INTERVAL.M2, INTERVAL.m3, INTERVAL.M3, INTERVAL.P4,
  INTERVAL.A4, INTERVAL.d5, INTERVAL.P5, INTERVAL.A5, INTERVAL.m6, INTERVAL.M6,
  INTERVAL.d7, INTERVAL.m7, INTERVAL.M7, INTERVAL.P8, INTERVAL.m9, INTERVAL.M9,
  INTERVAL.A9, INTERVAL.P11, INTERVAL.A11, INTERVAL.m13, INTERVAL.M13
]

class FretBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rootNote: undefined,
      intervals: []
    };
  }

  changeTones(value) {
    if (!value) return;
    let values = value.split(" ");
    if (values.length == null) return;
    // root note
    const tone = DIATONIC.find(tone => tone.symbol === values[0]);
    if (!tone) return;

    // intervals
    let intervals = [INTERVAL.P1];
    const intervalSymbols = values.slice(1);

    intervalSymbols.forEach((symbol) => {
      let interval = ALL_INTERVALS.find((item) => item.symbol === symbol );
      if (interval) {
        intervals.push(interval);
      }
    });

    const newState = {
      rootNote: tone,
      intervals: intervals,
    };
    this.setState(newState);
  }

  findIntervalForPitch(pitch) {
    if (!this.state.rootNote) return;
    let relativePitch = (pitch + 12 - this.state.rootNote.pitch) % 12
    return this.state.intervals.find(interval => interval.pitch === relativePitch);
  }

  render() {
    return (
      <div className="chordinator-app">
        <div className="chordinator-panel">
          <h2>Fretboard</h2>
          <String offset={24} analyzer={(pitch) => this.findIntervalForPitch(pitch)}/>
          <String offset={19} analyzer={(pitch) => this.findIntervalForPitch(pitch)}/>
          <String offset={15} analyzer={(pitch) => this.findIntervalForPitch(pitch)}/>
          <String offset={10} analyzer={(pitch) => this.findIntervalForPitch(pitch)}/>
          <String offset={5} analyzer={(pitch) => this.findIntervalForPitch(pitch)}/>
          <String offset={0} analyzer={(pitch) => this.findIntervalForPitch(pitch)}/>
          <h2>Notes</h2>
          <div>
            <input type="text" size={30} onChange={(e) => this.changeTones(e.target.value)}></input>
          </div>
        </div>
      </div>

    );
  }
}

export default FretBoard;