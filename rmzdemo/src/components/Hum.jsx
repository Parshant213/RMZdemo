import React from "react";
import { Stack } from "react-bootstrap";
import Reading from "./Reading";
import Scale from "./Scale";
import tooDry from "../assets/images/hum/tooDry.webp";
import Dry from "../assets/images/hum/Dry.webp";
import optimal from "../assets/images/hum/optimal.webp";
import tooHumid from "../assets/images/hum/tooHumid.webp";
function Hum({colour=[],status=[],value=[]}){
  const array = [
    {
      param: { key: "Hum.", range: "< 20" },
      
      quality: "Too Dry",
      colour: "#f98224",
      image:tooDry
    },
    {
      param: { key: "Hum.", range: "21-40" },
      quality: "Dry",
      colour: "#a4dbef",
      image: Dry,
    },
    {
      param: { key: "Hum.", range: "41-60" },
    
      quality: "Optimal",
      colour: "#00ff9a",
      image:optimal
    },
    {
      param: { key: "Hum.", range: "61-100" },
      
      quality: "Too Humid",
      colour: "#008eff",
      image:tooHumid
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
        <Stack className="col-md-7 mb-5 mx-auto col-9 mt-12.5"  gap={3}
        >
          <Reading parameters={readings} />
          <Scale
            heading="Humidity (Hum.) is measured in percentage (%)"
            rangeArray={array}
          />
        </Stack>
      );
}

export default Hum;