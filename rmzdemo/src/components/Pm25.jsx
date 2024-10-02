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
function Pm25({ colour = [], status = [], value = [] }) {
  const array = [
    {
      param: { key:"PM" ,range: "0-12" },
      quality: "Good",
      colour: "#39c904",
      image:good
  
    },
    {
      param: { key:"PM" , range: "13-35" },
      quality: "Moderate",
      colour: "#e6e205",
      image:modrate
    },
    {
      param: {  key:"PM" ,range: "36-55" },
      quality: "Poor",
      colour: "#ff7e00",
      image:poor
    },
    {
      param: { key:"PM" , range: "56-150" },
      quality: "Unhealthy",
      colour: "#f5051d",
      image:unhealthy
    },
    {
      param: { key:"PM" , range: "151-250" },
      quality: "Sever",
      colour: "#8f3f97",
      image:sever
    },
    {
      param: { key:"PM" , range: "> 251" },
      quality: "Hazardous",
      colour: "#7e0023",
      image:hazard
    },
  ];
  const readings = [
    {
      colour: colour[0],
      key: "PM 2.5 Inside ",
      value: value[0] + " ug/m3",
      status: status[0],
    },
    {
      colour: colour[1],
      key: "PM 2.5 Outside ",
      value: value[1] + " ug/m3",
      status: status[1],
    },
  ];
  return (
    <Stack
      className="col-md-7 mb-5 mx-auto col-9 mt-13" 
      direction='horizontal'
      gap={5}
    >
      <Reading parameters={readings} />
      <Scale
        heading="Particulate Matter (Pm 2.5) is measured in microgram per cubic meter (ug/m3)"
        rangeArray={array}
      />
    </Stack>
  );
}

export default Pm25;
