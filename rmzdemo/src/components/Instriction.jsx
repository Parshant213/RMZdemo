import React from "react";
import { Stack } from "react-bootstrap";
import co2Image from '../assets/logos/co2.webp';
import pm25 from '../assets/logos/pm2.5.webp';
import pm10 from '../assets/logos/pm10.webp';
import voc from '../assets/logos/voc.webp';
import temp from '../assets/logos/temp.webp';
import hum from '../assets/logos/hum.webp';
import aqi from '../assets/logos/aqi.webp';
const parameters = [
  
  { image: pm25,
    info: "Particulate Matter  PM2.5 describes fine inhalable particles, with diameters that are generally 2.5 micrometers and smaller."
  },
  {
    image: pm10,
    info: "PM10 are very small particles found in dust and smoke. They have a diameter of 10 micrometres (0.01 mm) or smaller."
  },
  {
    image: temp,
    info: "Room temperature, colloquially, denotes the range of air temperatures most people find comfortable indoors while dressed in typical clothing.",
  },
  {
    image: hum,
    info: "Humidity is the concentration of water vapor present in the air. Water vapor, the gaseous state of water, is generally invisible to the human eye.",
  },
  {
    image: co2Image,
    info: "Carbon dioxide (CO2) is a colorless, odorless gas that is formed during respiration, combustion, and organic decomposition.The CO2 level is measured as a percentage of a volume of air.",
  },
  {
    image: voc,
    info: "Volatile organic compounds, or VOCs, are gases that are emitted into the air from products or processes.",
  },
  { image: aqi,
    info: "Think of the AQI as a yardstick that runs from 0 to 500. The higher the AQI value, the greater the level of air pollution and the greater the health concern. ",
  },
];
function Instruction() {
  return <Stack gap={5} className='col-md-5 mb-5 mx-auto col-9 mt-12'>
     {parameters.map((item)=>{
        return<div style={{display:'flex'}}>
        <img src={item.image} style={{
            width: '6rem',
            height:'6rem',
            borderRadius:'50%',
           marginRight:'1rem'
        }}/>
        <div style={{display:'flex', alignItems:
          "center" , fontWeight:'bold',fontSize:'1.2rem'
        }} key={item.info}>{item.info}</div>
        </div> 
    })}
  </Stack>;
}

export default Instruction;
