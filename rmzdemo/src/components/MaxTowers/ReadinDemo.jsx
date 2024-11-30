// RingGaugeComponent.js
import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"; // Import default styles

function ReadingDemo({ parameters }) {
  const percentage = 100;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        color:"black"
      }}
    >
    {parameters.map((item)=>{
        return  <div style={{ width: 200, height: 300 , display:"flex",flexDirection:"column",alignItems:"center" }}>
        <CircularProgressbarWithChildren
          value={percentage}
          styles={buildStyles({
            pathColor: item?.colour,
            trailColor: "#d6d6d6",
            strokeLinecap: "round",
          })}
        >
          <div style={{ marginTop: -5 }}>{item.parameter}</div>
          <div style={{ fontWeight: "bold" }}>{item.value}</div>
          <div style={{   fontWeight:'bold'  }}>{item.status}</div>
        
        </CircularProgressbarWithChildren>
        <div  style={{ fontWeight: "bold" ,fontSize:"2rem" , color:"royalblue"}}>{item.key}</div>
      </div>
    })}
    </div>
  );
}

export default ReadingDemo;
