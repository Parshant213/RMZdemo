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
const AQI_MIN_VALUE = 30;
const AQI_MAX_VALUE = 70;

const AQI_OUT_MIN_VALUE = 71;
const AQI_OUT_MAX_VALUE = 120;

const maxestates_sites_coordinates = {
  maxTower: {
    lat: 28.6245479,
    long: 77.3577104,
  },
};
const MaxTowers = () => {
  const maxEstate =
    "https://clairco-customerlogo.s3.ap-south-1.amazonaws.com/demo.png";
  const building_Image =
    "https://clairco-customerlogo.s3.ap-south-1.amazonaws.com/demobuilding.jpg";
  const sensorName = window.location.href.split("/")[8];
  const deviceTypeId = window.location.href.split("/")[7];
  let [logo, setLogo] = useState(maxEstate);
  // let data = useLoaderData();

  // data = data.filter((deviceData) => {
  //   if (deviceData?.name == sensorName) {
  //     return deviceData;
  //   }
  // });

  const [pm25, setPm25] = useState("NA");
  const [pm10, setPm10] = useState("NA");
  const [co2, setCo2] = useState("");
  const [voc, setVoc] = useState(0);
  const [temp, setTemp] = useState(0);
  const [hum, setHum] = useState(0);
  const [aqi, setAqi] = useState(0);
  if (aqi > 2000) {
    setAqi(67);
  }

  const [pm25Color, setPm25ColorAndQuality] = useState([]);
  const [pm10Color, setPm10ColorAndQuality] = useState([]);
  const [co2Color, setCo2ColorAndQuality] = useState([]);
  const [vocColor, setVocColorAndQuality] = useState([]);
  const [tempColor, setTempColorAndQuality] = useState([]);
  const [humColor, setHumColorAndQuality] = useState([]);
  const [aqiColor, setAqiColorAndQuality] = useState([]);

  const [outpm25, setOutPm25] = useState("NA");
  const [outpm10, setOutPm10] = useState("NA");
  const [outco2, setOutCo2] = useState();
  const [outvoc, setOutVoc] = useState(0);
  // const [outtemp, setOutTemp] = useState(parseInt(dataEnteriesOut[4][1]));
  // const [outhum, setOutHum] = useState(dataEnteriesOut[5][1]);
  const [outtemp, setOutTemp] = useState(0);
  const [outhum, setOutHum] = useState(0);

  const [outpm25Color, setOutPm25ColorAndQuality] = useState([]);
  const [outpm10Color, setOutPm10ColorAndQuality] = useState([]);
  const [outco2Color, setOutCo2ColorAndQuality] = useState([]);
  const [outtempColor, setOutTempColorAndQuality] = useState([]);
  const [outhumColor, setOutHumColorAndQuality] = useState([]);
  // const [propertyName, setPropertyName] = useState("");

  const fetchData = async () => {
    try {
      const requestOptions = {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRjZTcwYjFiYjVhM2M1ZTBmMmEzNDc3IiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20ifSwiaWF0IjoxNzMxODcyMDUzfQ.9t4vX_lC9aVD9wSpTsxBHxpCmGbe17h_5webTp7BvNM",
        },
      };
      const url = `http://3.7.82.174:4444/api/v1/devices/sens-data?sensorName=${sensorName}&timeFrameInHours=1&deviceTypeId=6690ef7fdeb2b486e92011aa`;
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
      // const data = await axios.get(outdoorUrl);
      // console.log(data);

      // console.log(entries);

      // console.log(dataEnteries);

      // get humidity and temp values from  api

      //   const site_location = window.location.href.split("/")[5];
      //   const { lat, long } = find_coordinates(site_location);
      // const aqicn_values = await get_temp_hum_api_values(lat, long);
      // console.log(`Lat : ${lat} ; Long : ${long}`);
      // console.log(
      //   `${bucketPrefix} : Temp : ${aqicn_values.temp} ; Hum : ${aqicn_values.hum}`,
      // );

      const indoor_pm25 = indoorData[0]["PM25"] || "NA";
      const outdoor_pm25 = pm25?.v || "NA";

      const indoor_pm10 = indoorData[0]["PM10"] || "NA";
      const outdoor_pm10 = pm10?.v || "NA";

      const indoor_co2 = indoorData[0]["CO2"] || "NA";
      const outdoor_co2 = 0;

      const indoor_voc = 0;

      const indoor_temp = 0;

      const indoor_hum = 0;

      const indoor_aqi = 0;
      console.log("pm25,pm10,co2", indoor_pm25, indoor_pm10, indoor_co2);
      setAqi(0);
      setPm25(indoor_pm25);
      setPm10(indoor_pm10);
      setCo2(indoor_co2);
      setVoc(0);
      setTemp(0);
      setHum(0);

      setOutPm25(outdoor_pm25);
      setOutPm10(outdoor_pm10);
      setOutCo2("NA");
      setOutVoc(0);
      setOutTemp(0);
      setOutHum(0);

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

      if (indoor_co2 <= 750) {
        setCo2ColorAndQuality(["#39c904", "Good"]);
      } else if (751 <= indoor_co2 && indoor_co2 <= 841) {
        setCo2ColorAndQuality(["#e6e205", "Moderate"]);
      } else if (842 <= indoor_co2 && indoor_co2 <= 900) {
        setCo2ColorAndQuality(["#ff7e00", "Poor"]);
      } else if (901 <= indoor_co2 && indoor_co2 <= 1500) {
        setCo2ColorAndQuality(["#f5051d", "Unhealthy"]);
      } else if (1510 <= indoor_co2 && indoor_co2 <= 2500) {
        setCo2ColorAndQuality(["#8f3f97", "Severe"]);
      } else if (indoor_co2 > 2500) {
        setCo2ColorAndQuality(["#7e0023", "Hazardous"]);
      }

      if (outdoor_co2 <= 750) {
        setOutCo2ColorAndQuality(["#39c904", "Good"]);
      } else if (751 <= outdoor_co2 && outdoor_co2 <= 841) {
        setOutCo2ColorAndQuality(["#e6e205", "Moderate"]);
      } else if (842 <= outdoor_co2 && outdoor_co2 <= 900) {
        setOutCo2ColorAndQuality(["#ff7e00", "Poor"]);
      } else if (901 <= outdoor_co2 && outdoor_co2 <= 1500) {
        setOutCo2ColorAndQuality(["#f5051d", "Unhealthy"]);
      } else if (1510 <= outdoor_co2 && outdoor_co2 <= 2500) {
        setOutCo2ColorAndQuality(["#8f3f97", "Severe"]);
      } else if (outdoor_co2 > 2500) {
        setOutCo2ColorAndQuality(["#7e0023", "Hazardous"]);
      }

      if (indoor_voc <= 40) {
        setVocColorAndQuality(["#39c904", "Good"]);
      } else if (indoor_voc >= 41 && indoor_voc <= 100) {
        setVocColorAndQuality(["#e6e205", "Moderate"]);
      } else if (indoor_voc >= 101 && indoor_voc <= 300) {
        setVocColorAndQuality(["#ff7e00", "Poor"]);
      } else {
        setVocColorAndQuality(["#f5051d", "Unhealthy"]);
      }

      if (indoor_temp <= 10) {
        setTempColorAndQuality(["#008eff", "Too Cold"]);
      } else if (indoor_temp >= 11 && indoor_temp <= 20) {
        setTempColorAndQuality(["#09e9ff", "Cold"]);
      } else if (indoor_temp >= 21 && indoor_temp <= 25) {
        setTempColorAndQuality(["#39c904", "Optimal"]);
      } else if (indoor_temp > 25 && indoor_temp <= 30) {
        setTempColorAndQuality(["#f4b436", "Hot"]);
      } else if (indoor_temp > 30) {
        setTempColorAndQuality(["#f44336", "Too Hot"]);
      }

      if (indoor_hum < 20) {
        setHumColorAndQuality(["#f98224", "Too Dry"]);
      } else if (indoor_hum >= 21 && indoor_hum <= 40) {
        setHumColorAndQuality(["#a4dbef", "Dry"]);
      } else if (indoor_hum > 40 && indoor_hum <= 60) {
        setHumColorAndQuality(["#00ff9a", "Optimal"]);
      } else if (indoor_hum > 60 && indoor_hum <= 100) {
        setHumColorAndQuality(["#008eff", "Too Humid"]);
      }

      if (indoor_aqi <= 50) {
        setAqiColorAndQuality(["#39c904", "Good"]);
      } else if (indoor_aqi >= 51 && indoor_aqi <= 100) {
        setAqiColorAndQuality(["#e6e205", "Moderate"]);
      } else if (indoor_aqi >= 101 && indoor_aqi <= 150) {
        setAqiColorAndQuality(["#ff7e00", "Poor"]);
      } else if (indoor_aqi >= 151 && indoor_aqi <= 200) {
        setAqiColorAndQuality(["#f5051d", "Unhealthy"]);
      } else if (indoor_aqi >= 201 && indoor_aqi <= 300) {
        setAqiColorAndQuality(["#8f3f97", "Severe"]);
      } else if (indoor_aqi >= 301) {
        setAqiColorAndQuality(["#7e0023", "Hazardous"]);
      }
      let outdoor_temp = parseInt();
      // aqicn_values.temp == "NA" ? "NA" : parseInt(aqicn_values.temp);
      let outdoor_hum = parseInt();
      // aqicn_values.hum == "NA" ? "NA" : parseInt(aqicn_values.hum);

      // setting the state of outdoor temp

      if (outdoor_temp == "NA") setOutTemp("NA");
      else setOutTemp(parseInt(outdoor_temp));

      // setting the state of outdoor hum

      if (outdoor_hum == "NA") setOutHum("NA");
      else setOutHum(parseInt(outdoor_hum));

      // color coding for outdoor temp

      if (outdoor_temp <= 10) {
        setOutTempColorAndQuality(["#008eff", "Too Cold"]);
      } else if (outdoor_temp >= 11 && outdoor_temp <= 20) {
        setOutTempColorAndQuality(["#09e9ff", "Cold"]);
      } else if (outdoor_temp >= 21 && outdoor_temp <= 25) {
        setOutTempColorAndQuality(["#39c904", "Optimal"]);
      } else if (outdoor_temp > 25 && outdoor_temp <= 30) {
        setOutTempColorAndQuality(["#f4b436", "Hot"]);
      } else if (outdoor_temp > 30) {
        setOutTempColorAndQuality(["#f44336", "Too Hot"]);
      }

      // color coding for outdoor hum

      if (outdoor_hum == "NA") setOutHumColorAndQuality("bg-na");

      if (outdoor_hum < 20) {
        setOutHumColorAndQuality(["#f98224", "Too Dry"]);
      } else if (outdoor_hum >= 21 && outdoor_hum <= 40) {
        setOutHumColorAndQuality(["#a4dbef", "Dry"]);
      } else if (outdoor_hum > 40 && outdoor_hum <= 60) {
        setOutHumColorAndQuality(["#00ff9a", "Optimal"]);
      } else if (outdoor_hum > 60 && outdoor_hum <= 100) {
        setOutHumColorAndQuality(["#008eff", "Too Humid"]);
      }

      // setColors();
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

  const stateVariable = "bg-unhealthy";
  
  return (
   
    <div className="container-fluid"> 

  <div
    style={{
      height: "60vh",
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
          }}
        >
          <div>AIR QUALITY MEASURED TODAY</div>
        </div>
      </div>
  </div>

  <div
    style={{
      height: "40vh", // Takes 20% of viewport height
      width: "100vw", // Full viewport width
      backgroundImage: `url(${demobuilding})`,
      backgroundSize: "cover", // Ensures the image covers the div
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      display: "flex",
      justifyContent: "center",
    }}
  >
   
  </div>
  <Carousel
    style={{
      position: "absolute", // Overlapping behavior
      top: "0", // Start from top
      left: "0",
      width: "100%", // Full width
      zIndex: "10", // Ensure it overlaps above other elements
      marginTop:"18rem",
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
</div>

        
    // </div>
  );
};

export default MaxTowers;

