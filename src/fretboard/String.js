import React from "react";
import Fret from "./Fret";

const NUMBER_OF_FRETS = 15;

class String extends React.Component {

  /**
   * props:
   * - tune : Tone
   * - analyzer : (pitch:int) => { pitch:int, symbol:string }
   * @param props
   */

  render() {
    const pitches = [];
    for (let i=0; i < NUMBER_OF_FRETS; i++) {
      pitches.push( this.props.tune.pitch + i);
    }
    return (
      <div className='string'>
        <div className='fret-tune'>
          {this.props.tune.symbol}
        </div>
        {pitches.map((pitch, index) =>
          <Fret pitch={pitch} analyzer={this.props.analyzer}/>
        )}
      </div>
    );
  }
}

export default String;