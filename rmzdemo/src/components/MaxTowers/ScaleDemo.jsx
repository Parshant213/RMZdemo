import React from "react";
import { Stack } from "react-bootstrap";

function ScaleDemo({ heading, rangeArray }) {
  return (
    <Stack gap={0.5} 
    >
      <div
        style={{
          display: "flex",
          
          justifyContent: "center",
          fontWeight: "bold",
          alignItems: "center",
          width:"50%"
        }}
      >
      {/* <div style={{textAlign:"center"}}>{heading}</div> */}
      
      {rangeArray.map((item) => {
        const colour = item?.colour;
        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent:"center",
              width: "100%",
              // height: "5rem",
              fontWeight:"bold",
             // border: "1px solid #ccc",
             color:"black",
              backgroundColor:colour,
              borderRadius: "1.5rem",
              // marginTop:'1.3rem',
            }}
          >
            <div style={{height:'2rem' ,width:'11.5rem',display: "flex",
              justifyContent: "center",}}>
                {item?.param?.key} {item?.param?.range}
            </div>
            <img
              src={item?.image}
              style={{
                width: "5rem",
                height: "5rem",
                borderRadius: "50%",
                
              }}
            />
            <div style={{height:'2rem' ,width:'9rem' , display: "flex",
              justifyContent: "center",}}>{item?.quality}</div>
          </div>
        );
      })}
      </div>
    </Stack>
  );
}

export default ScaleDemo;