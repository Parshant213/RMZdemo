// RingGaugeComponent.js
import React, { useEffect, useState } from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"; // Import default styles

function ReadingDemo({ parameters }) {
  const percentage = 100;
  const customerName = window.location.href.split("/")[5];
  const [height , setHeight] = useState(200);
  const [width , setWidth] = useState(300);
  useEffect(()=>{ 
    if(customerName === 'MaxHouseOkhla'){
      setHeight(600);
      setWidth(400)
     }
  },[]);

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
        return  <div style={{ width:width , height: height  , display:"flex",flexDirection:"column",alignItems:"center" }}>
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
