import React from "react";
import Fret from "./Fret";

const NUMBER_OF_FRETS = 15;

class String extends React.Component {

  /**
   * props:
   * - offset : int
   * - analyzer : (pitch:int) => { pitch:int, symbol:string }
   * @param props
   */

  render() {
    const pitches = [];
    for (let i=0; i < NUMBER_OF_FRETS; i++) {
      pitches.push( this.props.offset + i);
    }
    return (
      <div className='string'>
        {pitches.map((pitch, index) =>
          <Fret pitch={pitch} analyzer={this.props.analyzer}/>
        )}
      </div>
    );
  }
}

export default String;