import { Row, Col, Card, Stack, Carousel, Spinner } from "react-bootstrap";


import demobuilding from "../assets/images/demo/demobuilding.jpg";
import demo from "../assets/images/demo/demo.png";

import React, { useState, useEffect, useParams } from "react";
import { useLoaderData } from "react-router-dom";
import moment from "moment-timezone";
import axios from "axios";
// import Pm25demon from "../componepmnts/Pm25demon";

import Pm25demon from "../components/MaxTowers/Pm25demon";
import Pm10demo from "../components/MaxTowers/Pm10demo";
import "./style.css";


const maxestates_sites_coordinates = {
  maxTower: {
    lat: 28.6245479,
    long: 77.3577104,
  },
};
const MAX = () => {

  const sensorName = window.location.href.split("/")[6];  
  console.log(sensorName)

  const [pm25, setPm25] = useState("NA");
  const [pm10, setPm10] = useState("NA");
 
  const [pm25Color, setPm25ColorAndQuality] = useState([]);
  const [pm10Color, setPm10ColorAndQuality] = useState([]);


  const [outpm25, setOutPm25] = useState("NA");
  const [outpm10, setOutPm10] = useState("NA");


  const [outpm25Color, setOutPm25ColorAndQuality] = useState([]);
  const [outpm10Color, setOutPm10ColorAndQuality] = useState([]);
 

  const fetchData = async () => {
    try {
      const requestOptions = {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRjZTcwYjFiYjVhM2M1ZTBmMmEzNDc3IiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20ifSwiaWF0IjoxNzMxODcyMDUzfQ.9t4vX_lC9aVD9wSpTsxBHxpCmGbe17h_5webTp7BvNM",
        },
      };
      const url = `/api/v1/devices/sens-data?sensorName=${sensorName}&timeFrameInHours=1&deviceTypeId=6690ef7fdeb2b486e92011aa`;
      const responseData = await fetch(url, requestOptions);

      let indoorData = await responseData.json() || [];
    if(indoorData || indoorData?.length !== 0){
      indoorData?.sort((a, b) => b.timestamp - a.timestamp);}

      const { lat, long } = maxestates_sites_coordinates.maxTower;
      const outdoorUrl = `https://api.waqi.info/feed/geo:${lat};${long}/?token=30b48b3e1940060cdcdfb029a46979b9f0deb88e`;
      const {
        data: {
          data: {
            iaqi: { pm25, pm10, co2 },
          },
        },
      } = await axios.get(outdoorUrl);

      const indoor_pm25 = indoorData[0]["PM25"] || indoorData[0]["PM2_5"] || "NA";
      const outdoor_pm25 = pm25?.v || "NA";

      const indoor_pm10 = indoorData[0]["PM10"] || "NA";
      const outdoor_pm10 = pm10?.v || "NA";
     
      setPm25(indoor_pm25);
      setPm10(indoor_pm10);
    
      setOutPm25(outdoor_pm25);
      setOutPm10(outdoor_pm10);
      
     
      if (indoor_pm25 <= 12) {
        setPm25ColorAndQuality(["#39c904", "Good"]);
      } else if (13 <= indoor_pm25 && indoor_pm25 <= 35) {
        setPm25ColorAndQuality(["#e6e205", "Moderate"]);
      } else if (36 <= indoor_pm25 && indoor_pm25 <= 55) {
        setPm25ColorAndQuality(["#ff7e00", "Poor"]);
      } else if (56 <= indoor_pm25 && indoor_pm25 <= 150) {
        setPm25ColorAndQuality(["#f5051d", "Unhealthy"]);
      } else if (151 <= indoor_pm25 && indoor_pm25 <= 250) {
        setPm25ColorAndQuality(["#8f3f97", "Severe"]);
      } else if (outdoor_pm25 > 250) {
        setPm25ColorAndQuality(["#7e0023", "Hazardous"]);
      }

      if (outdoor_pm25 <= 12) {
        setOutPm25ColorAndQuality(["#39c904", "Good"]);
      } else if (13 <= outdoor_pm25 && outdoor_pm25 <= 35) {
        setOutPm25ColorAndQuality(["#e6e205", "Moderate"]);
      } else if (36 <= outdoor_pm25 && outdoor_pm25 <= 55) {
        setOutPm25ColorAndQuality(["#ff7e00", "Poor"]);
      } else if (56 <= outdoor_pm25 && outdoor_pm25 <= 150) {
        setOutPm25ColorAndQuality(["#f5051d", "Unhealthy"]);
      } else if (151 <= outdoor_pm25 && outdoor_pm25 <= 250) {
        setOutPm25ColorAndQuality(["#8f3f97", "Severe"]);
      } else if (outdoor_pm25 > 250) {
        setOutPm25ColorAndQuality(["#7e0023", "Hazardous"]);
      }

      if (indoor_pm10 <= 54) {
        setPm10ColorAndQuality(["#39c904", "Good"]);
      } else if (55 <= indoor_pm10 && indoor_pm10 <= 154) {
        setPm10ColorAndQuality(["#e6e205", "Moderate"]);
      } else if (155 <= indoor_pm10 && indoor_pm10 <= 254) {
        setPm10ColorAndQuality(["#ff7e00", "Poor"]);
      } else if (255 <= indoor_pm10 && indoor_pm10 <= 354) {
        setPm10ColorAndQuality(["#f5051d", "Unhealthy"]);
      } else if (355 <= indoor_pm10 && indoor_pm10 <= 424) {
        setPm10ColorAndQuality(["#8f3f97", "Severe"]);
      } else if (indoor_pm10 > 425) {
        setPm10ColorAndQuality(["#7e0023", "Hazardous"]);
      }

      if (outdoor_pm10 <= 54) {
        setOutPm10ColorAndQuality(["#39c904", "Good"]);
      } else if (55 <= outdoor_pm10 && outdoor_pm10 <= 154) {
        setOutPm10ColorAndQuality(["#e6e205", "Moderate"]);
      } else if (155 <= outdoor_pm10 && outdoor_pm10 <= 254) {
        setOutPm10ColorAndQuality(["#ff7e00", "Poor"]);
      } else if (255 <= outdoor_pm10 && outdoor_pm10 <= 354) {
        setOutPm10ColorAndQuality(["#f5051d", "Unhealthy"]);
      } else if (355 <= outdoor_pm10 && outdoor_pm10 <= 424) {
        setOutPm10ColorAndQuality(["#8f3f97", "Severe"]);
      } else if (outdoor_pm10 > 425) {
        setOutPm10ColorAndQuality(["#7e0023", "Hazardous"]);
      }
   
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();

     const interval = setInterval(() => {
       fetchData();
     }, 10 * 60 * 1000);

     return () => clearInterval(interval);
  }, []);


  
  return (
   
    <> 

  <div
    style={{
      height: "50vh",
      backgroundColor: "white",
     fontFamily: "monospace",
      justifyContent: "center",
      alignItems: "center",
      
    }}
  >
    <div style={{ border: "none", background: "transparent" ,justifyContent:"center" , marginLeft:"30%",marginRight:"50%"}}>
        <img
          variant="top"
          src={demo}
          style={{
            height: "9rem",
            width: "20rem",
            background: "transparent",
          }}
        />
      </div>
  <div
        style={{
          marginTop: "0.5rem",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          className="text-center display-5 px-2"
          style={{
            color: "white",
            backgroundColor: "#050b7a",
            fontWeight: "bold",
            margin: "1rem",
          }}
        >
          {moment().format("LL")}
        </div>
        <div
          className="text-center display-5 px-2"
          style={{
            color: "orange",
            fontWeight: "bold",
            margin:"2rem"
          }}
        >
          <div>AIR QUALITY MEASURED TODAY</div>
        </div>
      </div>
  </div>

  <div
  style={{
    height: "60vh", // Takes 60% of viewport height
    width: "100vw", // Full viewport width
    backgroundColor: "white", // Light gray background for contrast
    display: "flex",
    justifyContent: "center",
    alignItems: "center", // Center the box vertically and horizontally
  }}
>
  <div
    style={{
      height: "50vh", // Adjust the height of the box
      width: "90vw", // Adjust the width of the box
      backgroundImage: `url(${demobuilding})`,
      backgroundSize: "cover", // Ensures the image covers the box
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      border: "5px solid white", // White border for the box
      borderRadius: "10px", // Optional: Rounded corners for the box
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Optional: Adds shadow for depth
      margintop:"2rem"
    }}
  ></div>
</div>

  <Carousel
    style={{
      position: "absolute", // Overlapping behavior
      top: "0", // Start from top
      left: "0",
      width: "100%", // Full width
      zIndex: "10", // Ensure it overlaps above other elements
      marginTop:"25rem",
      fontFamily: "monospace"
    }}
  >
    <Carousel.Item
      style={{
        fontSize: "1.2rem",
        fontWeight: "bold",
        position: "relative", // For contained layout
      }}
    >
      
      <Pm25demon
        colour={[pm25Color[0], outpm25Color[0]]}
        status={[pm25Color[1], outpm25Color[1]]}
        value={[pm25, outpm25]}
      />
    </Carousel.Item>
    <Carousel.Item
      style={{
        fontSize: "1.2rem",
        fontWeight: "bold",
        position: "relative", // For contained layout
      }}
    >
      <Pm10demo colour={[pm10Color[0],outpm10Color[0]]} status={[pm10Color[1],outpm10Color[1]]} value={[pm10,outpm10]}/>
    </Carousel.Item>
  </Carousel>
</>

        
    // </div>
  );
};

export default MAX;

