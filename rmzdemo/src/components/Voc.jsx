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
function Voc({colour=[],status=[],value=[]}) {
  const array = [
    {
      param: { key: "Voc", range: "0-220" },
      quality: "Good",
      colour: "#39c904",
      image:good
    },
    {
      
      param: { key: "Voc", range: "221-660" },
      quality: "Moderate",
      colour: "#e6e205",
      image: modrate,
    },
    {
      
      param: { key: "Voc", range: "661-1430" },
      quality: "Poor",
      colour: "#ff7e00",
      image: poor
    },
    {
     
      param: { key: "Voc", range: "1431-2200" },
      quality: "Unhealthy",
      colour: "#f5051d",
      image:unhealthy
    },
    {
      
      param: { key: "Voc", range: "2201-3300" },
      quality: "Severe",
      colour: "#8f3f97",
      image:sever
    },
    {
      
      param: { key: "Voc", range: "3310-5500" },
      quality: "Hazardous",
      colour: "#7e0023",
      image:hazard
    },
  ];

  const readings = [
    {
      colour: colour[0],
      key: "VOC Inside",
      value: value[0] + 'PPB',
      status: status[0],
    },
  ];
  return (
    <Stack className="col-md-7 mb-5 mx-auto col-9 mt-13" 
    direction='horizontal'
    >
      <Reading parameters={readings} />
      <Scale
        heading="VOC is measured in PPB"
        rangeArray={array}
      />
    </Stack>
  );
}

export default Voc;