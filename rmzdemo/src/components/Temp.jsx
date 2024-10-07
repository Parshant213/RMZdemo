import React from "react";
import { Stack } from "react-bootstrap";
import Reading from "./Reading";
import Scale from "./Scale";
import tooCold from "../assets/images/tem/tooCold.webp";
import cold from "../assets/images/tem/cold.webp";
import optimal from "../assets/images/tem/optimal.webp";
import hot from "../assets/images/tem/hot.webp";
import tooHot from "../assets/images/tem/tooHot.webp";
function Temp({colour=[],status=[],value=[]}){
  const array = [
    {
      param: { key: "Temp.", range: "< 10" },
      
      quality: "Too Cold",
      colour: "#008eff",
      image:tooCold
    },
    {
      param: { key: "Temp.", range: "11-20" },
      quality: "Cold",
      colour: "#09e9ff",
      image: cold,
    },
    {
      param: { key: "Temp.", range: "21-25" },
    
      quality: "Optimal",
      colour: "#39c904",
      image:optimal
    },
    {
      param: { key: "Temp.", range: "26-30" },
      
      quality: "Hot",
      colour: "#f4b436",
      image:hot
    },
    {
      param: { key: "Temp.", range: ">30" },
      
      quality: "Too Hot",
      colour: "#f44336",
      image:tooHot
    },
  ];
  const readings = [
    {
      colour: colour[0],
      key: "Temp. In",
      value: value[0] + '°C',
      status: status[0],
    },
    {
        colour: colour[1],
        key: "Temp. Out",
        value: value[1] + '°C',
      status: status[1],
      },
  ];
    return (
        <Stack className="col-md-7 mb-5 mx-auto col-9 mt-12"  gap={3}
        >
          <Reading parameters={readings} />
          <Scale
            heading="Temperature (Temp.) is measured in °C"
            rangeArray={array}
          />
        </Stack>
      );
}

export default Temp;