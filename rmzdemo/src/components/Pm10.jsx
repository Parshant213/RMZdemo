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
function Pm10({colour=[],status=[],value=[]}) {
  const array = [
    {
      
      param: { key: "PM 10", range: "0-54" },
      quality: "Good",
      colour: "#39c904",
      image:good
    },
    {
      
      param: { key: "PM 10", range: "55-154" },
      quality: "Moderate",
      colour: "#e6e205",
      image:modrate
    },
    {
     
      param: { key: "PM 10", range: "155-254" },
      quality: "Poor",
      colour: "#ff7e00",
      image:poor
    },
    {
    
      param: { key: "PM 10", range: "255-354" },
      quality: "Unhealthy",
      colour: "#f5051d",
      image:unhealthy
    },
    {
     
      param: { key: "PM 10", range: "355-424" },
      quality: "Sever",
      colour: "#8f3f97",
      image:sever
    },
    {

      param: { key: "PM 10", range: "> 425" },
      quality: "Hazardous",
      colour: "#7e0023",
      image: hazard
    },
  ];
  const readings = [
    {
      colour: colour[0],
      key: "PM10 Inside ",
      value: value[0] + ' ug/m3',
      status: status[0],
    },
    {
      colour: colour[1],
      key: "PM10 outside ",
      value: value[1] + ' ug/m3',
      status: status[1],
    },
  ];
  return (
    <Stack className="col-md-7 mb-5 mx-auto col-9 mt-13" 
    direction='horizontal'
    gap={5}>
      <Reading parameters={readings} />
      <Scale heading="Particulate Matter (PM 10) is measured in microgram per cubic meter (ug/m3)" rangeArray={array} />
    </Stack>
  );
}

export default Pm10;
