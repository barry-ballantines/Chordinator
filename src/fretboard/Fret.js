import React from "react";

/**
 * props:
 * - pitch: int
 * - analyzer: (int) => { pitch, symbol }
 */
function Fret(props) {
  const interval = (!props.analyzer)
    ? ""
    : props.analyzer(props.pitch);

  return (
    <button className="fret">
      {(!interval) ? "" : interval.symbol}
    </button>
  );
}
export default Fret;