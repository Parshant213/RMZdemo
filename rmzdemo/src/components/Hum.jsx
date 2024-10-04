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
function Hum({colour=[],status=[],value=[]}){
  const array = [
    {
      param: { key: "Hum", range: "< 20" },
      
      quality: "Too Dry",
      colour: "#f98224",
      image:good
    },
    {
      param: { key: "Hum", range: "21-40" },
      quality: "Dry",
      colour: "#a4dbef",
      image: modrate,
    },
    {
      param: { key: "Hum", range: "41-60" },
    
      quality: "Optimal",
      colour: "#00ff9a",
      image:poor
    },
    {
      param: { key: "Hum", range: "61-100" },
      
      quality: "Too Humid",
      colour: "#008eff",
      image:unhealthy
    },
  ];
  const readings = [
    {
      colour: colour[0],
      key: "Hum. In",
      value: value[0] + '%',
      status: status[0],
    },
    {
        colour: colour[1],
        key: "Hum. Out",
        value: value[1] + '%',
        status: status[1],
      },
  ];
    return (
        <Stack className="col-md-7 mb-5 mx-auto col-9 mt-13" 
        direction='horizontal'
        >
          <Reading parameters={readings} />
          <Scale
            heading="Humidity is measured in percentage (%)"
            rangeArray={array}
          />
        </Stack>
      );
}

export default Hum;