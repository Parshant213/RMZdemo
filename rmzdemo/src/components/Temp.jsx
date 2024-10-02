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
function Temp({colour=[],status=[],value=[]}){
  const array = [
    {
      param: { key: "Temp", range: "< 10" },
      
      quality: "To Cold",
      colour: "#008eff",
      image:good
    },
    {
      param: { key: "Temp", range: "11-20" },
      quality: "Cold",
      colour: "#09e9ff",
      image: modrate,
    },
    {
      param: { key: "Temp", range: "21-25" },
    
      quality: "Optimal",
      colour: "#39c904",
      image:poor
    },
    {
      param: { key: "Temp", range: "26-30" },
      
      quality: "Hot",
      colour: "#f4b436",
      image:unhealthy
    },
    {
      param: { key: "Temp", range: ">30" },
      
      quality: "Too Hot",
      colour: "#f44336",
      image:unhealthy
    },
  ];
  const readings = [
    {
      colour: colour[0],
      key: "Temperature Inside",
      value: value[0] + '°C',
      status: status[0],
    },
    {
        colour: colour[1],
        key: "Temperature Outside",
        value: value[1] + '°C',
      status: status[1],
      },
  ];
    return (
        <Stack className="col-md-7 mb-5 mx-auto col-9 mt-13" 
        direction='horizontal'
        gap={5}>
          <Reading parameters={readings} />
          <Scale
            heading="Temperature is measured in °C"
            rangeArray={array}
          />
        </Stack>
      );
}

export default Temp;