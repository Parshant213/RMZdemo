import React from 'react';
import Scale from './Scale';
import Reading from './Reading';
import { Stack } from 'react-bootstrap';
import good from "../assets/images/good.webp";
import modrate from "../assets/images/modrate.webp";
import poor from "../assets/images/poor.webp";
import sever from "../assets/images/sever.webp";
import unhealthy from "../assets/images/unhealthy.webp";
import hazard from "../assets/images/hazard.webp";

function Aqi({colour=[],status=[],value=[]}){
    const array = [{
        param: {key:'Aqi',range:'0-50'},
        quality:'Good',
        colour:'#39c904',
        image:good
    },
    {
        param: {key:'Aqi',range:'51-100'},
        quality:'Moderate',
        colour:'#e6e205',
        image:modrate
    },
    {
        param: {key:'Aqi',range:'101-150'},
        quality: 'Poor',
        colour:'#ff7e00',
        image:unhealthy
    },
    {
        param: {key:'Aqi',range:'151-200'},
        quality: 'Unhealthy',
        colour:'#f5051d',
        image:poor
    },
    {
        param: {key:'Aqi',range:'201-300'},
        quality: 'Severe',
        colour:'#8f3f97',
        image:sever
    },
    {
        param: {key:'Aqi',range:'301-500'},
        quality: 'Hazardous',
        colour:'#7e0023',
        image:hazard
    }
]

const readings = [{
    colour:colour,key:'AQI',value:value,status:status
}]
    return(
     <Stack className="col-md-7 mb-5 mx-auto col-9 mt-13" 
     direction='horizontal'
     >
       <Reading parameters={readings}/>
       <Scale heading='AIR QUALITY INDEX (AQI)' rangeArray={array} />
    </Stack>
    );
}

export default Aqi;