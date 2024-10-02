// RingGaugeComponent.js
import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"; // Import default styles

function Reading({ parameters }) {
  const percentage = 100;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
    {parameters.map((item)=>{
     
        return  <div style={{}}>
        <CircularProgressbarWithChildren
          value={percentage}
          styles={buildStyles({
            pathColor: item?.colour,
            trailColor: "#d6d6d6",
            strokeLinecap: "round",
          })}
        >
          <div style={{ marginTop: -5 }}>{item.key}</div>
          <div style={{ fontWeight: "bold" }}>{item.value}</div>
          <div style={{   fontWeight:'bold'  }}>{item.status}</div>
        </CircularProgressbarWithChildren>
      </div>
    })}
    </div>
  );
}

export default Reading;
