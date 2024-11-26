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
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignContent: "center",
        color:"white",
      }}
    >
    {parameters.map((item)=>{
        return  <div >
        <CircularProgressbarWithChildren
          value={percentage}
          styles={buildStyles({
            pathColor: item?.colour,
            trailColor: "#d6d6d6",
            strokeLinecap: "round",
          })}
        >
          <div style={{ marginTop: -5 ,backgroundColor:`${item.colour}`}}>{item.key}</div>
          <div style={{ fontWeight: "bold" ,backgroundColor:`${item.colour}`}}>{item.value}</div>
          {/* <div style={{   fontWeight:'bold' ,backgroundColor:`${item.colour}` }}>{item.status}</div> */}
        </CircularProgressbarWithChildren>
      </div>
    })}
    </div>
  );
}

export default Reading;
