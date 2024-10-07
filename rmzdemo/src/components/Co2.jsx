import React from "react";
import { Stack } from "react-bootstrap";
import Reading from "./Reading";
import Scale from "./Scale";
import good from "../assets/images/good.webp";
import modrate from "../assets/images/modrate.webp";
import poor from "../assets/images/poor.webp";
import sever from "../assets/images/sever.webp";
import unhealthy from "../assets/images/unhealthy.webp";
import hazard from "../assets/images/hazard.webp";
function Co2({colour=[],status=[],value=[]}) {
  const array = [
    {
      param: { key: "CO₂", range: "< 750" },
      
      quality: "Good",
      colour: "#39c904",
      image:good
    },
    {
      param: { key: "Co2", range: "751-840" },
      quality: "Moderate",
      colour: "#e6e205",
      image: modrate,
    },
    {
      param: { key: "CO₂", range: "841-900" },
    
      quality: "Poor",
      colour: "#ff7e00",
      image:poor
    },
    {
      param: { key: "CO₂", range: "901-1500" },
      
      quality: "Unhealthy",
      colour: "#f5051d",
      image:unhealthy
    },
    {
      param: { key: "CO₂", range: "1500-2500" },
    
      quality: "Severe",
      colour: "#8f3f97",
      image:sever
    },
    {
      param: { key: "CO₂", range: "> 2500" },

      quality: "Hazardous",
      colour: "#7e0023",
      image:hazard
    },
  ];

  const readings = [
    {
      colour: colour[0],
      key: "CO₂ Inside",
      value: value[0] + ' PPM',
      status: status[0],
    },
    {
        colour: colour[1],
        key: "CO₂ Outside",
        value: value[1] + ' PPM',
        status: status[1],
      },
  ];
  return (
    <Stack className="col-md-7 mb-5 mx-auto col-9 mt-12"  gap={3}
    >
      <Reading parameters={readings} />
      <Scale
        heading="Carbon Dioxide (CO₂) is measured in PPM"
        rangeArray={array}
      />
    </Stack>
  );
}

export default Co2;