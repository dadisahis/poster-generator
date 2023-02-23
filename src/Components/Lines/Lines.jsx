import React from "react";
import "./lines.scss";

function Lines({ flip, backgroundColor }) {
  return (
    <div
      className="lines"
      style={{
        transform: flip ? `rotate(180deg)` : `rotate(0)`,
      }}
    >
      <div className="line_one" style={{ backgroundColor: backgroundColor }} />
      <div className="line_two" style={{ backgroundColor: backgroundColor }} />
    </div>
  );
}

export default Lines;
