import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { Row, Col, Card, Stack, Carousel, Spinner } from "react-bootstrap";
import moment from "moment-timezone";
import Instruction from "../components/Instriction";
import Aqi from "../components/Aqi";
import Co2 from "../components/Co2";
import Pm25 from "../components/Pm25";
import Temp from "../components/Temp";
import "./style.css";
import Pm10 from "../components/Pm10";
import Hum from "../components/Hum";
import Voc from "../components/Voc";

function MainPage() {
  let data = useLoaderData();
  if(data?.space_id === 'a1c2f4e9-2002-4259-971c-9e49badf89e8'){
    data.space_name = 'T30 Ground Floor';
  }
  let entries = Object.entries(data);
  let [logo, setLogo] = useState(
    "https://rmz-images.s3.ap-south-1.amazonaws.com/logo/RMZ_Corp_Logo.png"
  );
  const customerName = window.location.href.split("/")[4];
  let dataEnteries = Object.entries(entries[0][1].inside);

  let dataEnteriesOut = Object.entries(entries[0][1].outside);
  const [seconds, setSeconds] = useState(0);
  const [count, setCount] = useState(0);
  const [spaceId, setSpaceId] = useState(entries[1][1]);
  const [spaceName, setspaceName] = useState(entries[2][1]);
  const [pm25, setPm25] = useState(dataEnteries[1][1]);
  const [pm10, setPm10] = useState(dataEnteries[2][1]);
  const [co2, setCo2] = useState(dataEnteries[3][1]);
  const [voc, setVoc] = useState(dataEnteries[4][1]);
  const [temp, setTemp] = useState(parseInt(dataEnteries[5][1]));
  const [hum, setHum] = useState(dataEnteries[6][1]);
  const [aqi, setAqi] = useState(dataEnteries[7][1]);
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

  const [outpm25, setOutPm25] = useState(dataEnteriesOut[1][1]);
  const [outpm10, setOutPm10] = useState(dataEnteriesOut[2][1]);
  const [outco2, setOutCo2] = useState(dataEnteriesOut[3][1]);
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
  const [propertyName, setPropertyName] = useState("");

  const fetchData = async () => {
    if (customerName == "rmz-milenia") {
      setPropertyName("The Millenia");
    } else if (customerName == "rmz-prestige") {
      setPropertyName("Prestige RMZ Startech");
    } else if (customerName == "rmz-infinity-bgrl") {
      setPropertyName("RMZ Infinity");
    } else if (customerName == "rmz-gurgaon") {
      setPropertyName("RMZ Infinity");
    } else if (customerName == "rmz-one") {
      setPropertyName("RMZ OPM");
    } else if (customerName == "rmz-pune") {
      setPropertyName("RMZ Westend Pune");
    } else if (customerName == "rmz-hyd") {
      setPropertyName("RMZ Hyderabad");
    }
    else if(customerName == "rmz-nexity-hyd"){
         setPropertyName("RMZ Nexity Hyderabad");}
    try {
      const requestOptions = {
        headers: {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImJiOTMwYWY4LWViMmMtNDQ0YS04ZmM5LWJiZjVmYWViNjUzMSIsImlhdCI6MTgwMzM4ODQ3N30.7CcBQO8wj8Xax8cKhUVOVikS-EUKrhZGnz_-1pGFSGs",
        },
      };
      const responseData = await fetch(
        `https://api.getclairco.com/v1/customer/space_data?space_id=${spaceId}`,
        requestOptions
      );
      const data = await responseData.json();
      let entries = Object.entries(data);
      let dataEnteries = Object.entries(entries[0][1].inside);
      let dataEnteriesOut = Object.entries(entries[0][1].outside);

      const indoor_pm25 = parseInt(dataEnteries[1][1]);
      const outdoor_pm25 = parseInt(dataEnteriesOut[1][1]);

      const indoor_pm10 = parseInt(dataEnteries[2][1]);
      const outdoor_pm10 = parseInt(dataEnteriesOut[2][1]);

      const indoor_co2 = parseInt(dataEnteries[3][1]);
      const outdoor_co2 = parseInt(dataEnteriesOut[3][1]);

      const indoor_voc = parseInt(dataEnteries[4][1]);

      const indoor_temp = parseInt(dataEnteries[5][1]);

      const indoor_hum = parseInt(dataEnteries[6][1]);

      const indoor_aqi = parseInt(dataEnteries[7][1]);

      setPm25(parseInt(dataEnteries[1][1]));
      setPm10(parseInt(dataEnteries[2][1]));
      setCo2(parseInt(dataEnteries[3][1]));
      setVoc(parseInt(dataEnteries[4][1]));
      setTemp(parseInt(dataEnteries[5][1]));
      setHum(parseInt(dataEnteries[6][1]));
      setAqi(parseInt(dataEnteries[7][1]));

      setOutPm25(parseInt(dataEnteriesOut[1][1]));
      setOutPm10(parseInt(dataEnteriesOut[2][1]));
      setOutCo2(parseInt(dataEnteriesOut[3][1]));
      setOutVoc(parseInt(dataEnteriesOut[6][1]));
      setOutTemp(parseInt(dataEnteriesOut[4][1]));
      setOutHum(parseInt(dataEnteriesOut[5][1]));

      if (indoor_pm25 <= 12) {
        setPm25ColorAndQuality(["#39c904",'Good']);
      } else if (13 <= indoor_pm25 && indoor_pm25 <= 35) {
        setPm25ColorAndQuality(["#e6e205",'Moderate']);
      } else if (36 <= indoor_pm25 && indoor_pm25 <= 55) {
        setPm25ColorAndQuality(["#ff7e00","Poor"]);
      } else if (56 <= indoor_pm25 && indoor_pm25 <= 150) {
        setPm25ColorAndQuality(["#f5051d","Unhealthy"]);
      } else if (151 <= indoor_pm25 && indoor_pm25 <= 250) {
        setPm25ColorAndQuality(["#8f3f97","Severe"]);
      } else if (outdoor_pm25 > 250) {
        setPm25ColorAndQuality(["#7e0023","Hazardous"]);
      }

      if (outdoor_pm25 <= 12) {
        setOutPm25ColorAndQuality(["#39c904",'Good']);
      } else if (13 <= outdoor_pm25 && outdoor_pm25 <= 35) {
        setOutPm25ColorAndQuality(["#e6e205",'Moderate']);
      } else if (36 <= outdoor_pm25 && outdoor_pm25 <= 55) {
        setOutPm25ColorAndQuality(["#ff7e00","Poor"]);
      } else if (56 <= outdoor_pm25 && outdoor_pm25 <= 150) {
        setOutPm25ColorAndQuality(["#f5051d","Unhealthy"]);
      } else if (151 <= outdoor_pm25 && outdoor_pm25 <= 250) {
        setOutPm25ColorAndQuality(["#8f3f97","Severe"]);
      } else if (outdoor_pm25 > 250) {
        setOutPm25ColorAndQuality(["#7e0023","Hazardous"]);
      }

      if (indoor_pm10 <= 54) {
        setPm10ColorAndQuality(["#39c904",'Good']);
      } else if (55 <= indoor_pm10 && indoor_pm10 <= 154) {
        setPm10ColorAndQuality(["#e6e205",'Moderate']);
      } else if (155 <= indoor_pm10 && indoor_pm10 <= 254) {
        setPm10ColorAndQuality(["#ff7e00","Poor"]);
      } else if (255 <= indoor_pm10 && indoor_pm10 <= 354) {
        setPm10ColorAndQuality(["#f5051d","Unhealthy"]);
      } else if (355 <= indoor_pm10 && indoor_pm10 <= 424) {
        setPm10ColorAndQuality(["#8f3f97","Severe"]);
      } else if (indoor_pm10 > 425) {
        setPm10ColorAndQuality(["#7e0023","Hazardous"]);
      }

      if (outdoor_pm10 <= 54) {
        setOutPm10ColorAndQuality(["#39c904",'Good']);
      } else if (55 <= outdoor_pm10 && outdoor_pm10 <= 154) {
        setOutPm10ColorAndQuality(["#e6e205",'Moderate']);
      } else if (155 <= outdoor_pm10 && outdoor_pm10 <= 254) {
        setOutPm10ColorAndQuality(["#ff7e00","Poor"]);
      } else if (255 <= outdoor_pm10 && outdoor_pm10 <= 354) {
        setOutPm10ColorAndQuality(["#f5051d","Unhealthy"]);
      } else if (355 <= outdoor_pm10 && outdoor_pm10 <= 424) {
        setOutPm10ColorAndQuality(["#8f3f97","Severe"]);
      } else if (outdoor_pm10 > 425) {
        setOutPm10ColorAndQuality(["#7e0023","Hazardous"]);
      }

      if (indoor_co2 <= 750) {
        setCo2ColorAndQuality(["#39c904",'Good']);
      } else if (751 <= indoor_co2 && indoor_co2 <= 841) {
        setCo2ColorAndQuality(["#e6e205",'Moderate']);
      } else if (842 <= indoor_co2 && indoor_co2 <= 900) {
        setCo2ColorAndQuality(["#ff7e00","Poor"]);
      } else if (901 <= indoor_co2 && indoor_co2 <= 1500) {
        setCo2ColorAndQuality(["#f5051d","Unhealthy"]);
      } else if (1510 <= indoor_co2 && indoor_co2 <= 2500) {
        setCo2ColorAndQuality(["#8f3f97","Severe"]);
      } else if (indoor_co2 > 2500) {
        setCo2ColorAndQuality(["#7e0023","Hazardous"]);
      }

      if (outdoor_co2 <= 750) {
        setOutCo2ColorAndQuality(["#39c904",'Good']);
      } else if (751 <= outdoor_co2 && outdoor_co2 <= 841) {
        setOutCo2ColorAndQuality(["#e6e205",'Moderate']);
      } else if (842 <= outdoor_co2 && outdoor_co2 <= 900) {
        setOutCo2ColorAndQuality(["#ff7e00","Poor"]);
      } else if (901 <= outdoor_co2 && outdoor_co2 <= 1500) {
        setOutCo2ColorAndQuality(["#f5051d","Unhealthy"]);
      } else if (1510 <= outdoor_co2 && outdoor_co2 <= 2500) {
        setOutCo2ColorAndQuality(["#8f3f97","Severe"]);
      } else if (outdoor_co2 > 2500) {
        setOutCo2ColorAndQuality(["#7e0023","Hazardous"]);
      }

      if (indoor_voc <= 40) {
        setVocColorAndQuality(["#39c904",'Good']);
      } else if (indoor_voc >= 41 && indoor_voc <= 100) {
        setVocColorAndQuality(["#e6e205",'Moderate']);
      } else if (indoor_voc >= 101 && indoor_voc <= 300) {
        setVocColorAndQuality(["#ff7e00","Poor"]);
      } else {
        setVocColorAndQuality(["#f5051d","Unhealthy"]);
      }
      
      if(indoor_temp <=10){
        setTempColorAndQuality(["#008eff",'Too Cold']);
      }else if(indoor_temp >=11 && indoor_temp <=20){
        setTempColorAndQuality(["#09e9ff",'Cold']);
      }
      else if(indoor_temp >=21 && indoor_temp <=25){
        setTempColorAndQuality(["#39c904",'Optimal']);
      }
      else if(indoor_temp >25 && indoor_temp <=30){
        setTempColorAndQuality(["#f4b436",'Hot']);
      }else if(indoor_temp > 30){
        setTempColorAndQuality(["#f44336",'Too Hot']);
      }


      if(indoor_hum < 20){
        setHumColorAndQuality(["#f98224",'Too Dry']);
      }
      else if(indoor_hum >=21 && indoor_hum<=40){
        setHumColorAndQuality(["#a4dbef",'Dry']);
      }
      else if(indoor_hum > 40 && indoor_hum <=60){
        setHumColorAndQuality(["#00ff9a",'Optimal']);
      }
      else if (indoor_hum >60 && indoor_hum <=100){
        setHumColorAndQuality(["#008eff",'Too Humid']);
      }

      if(indoor_aqi <=50 ){
          setAqiColorAndQuality(["#39c904",'Good'])
      }
      else if(indoor_aqi >=51 && indoor_aqi <=100){
        setAqiColorAndQuality(["#e6e205",'Moderate'])
      }
      else if(indoor_aqi >=101 && indoor_aqi <=150){
        setAqiColorAndQuality(["#ff7e00","Poor"])
      } 
      else if(indoor_aqi >=151 && indoor_aqi <=200){
        setAqiColorAndQuality(["#f5051d","Unhealthy"])
      }
      else if(indoor_aqi >=201 && indoor_aqi<=300){
        setAqiColorAndQuality(["#8f3f97","Severe"])
      }
      else if(indoor_aqi >=301){
        setAqiColorAndQuality(["#7e0023","Hazardous"])
      }
      let outdoor_temp = parseInt(dataEnteriesOut[4][1]);
      // aqicn_values.temp == "NA" ? "NA" : parseInt(aqicn_values.temp);
      let outdoor_hum = parseInt(dataEnteriesOut[5][1]);
      // aqicn_values.hum == "NA" ? "NA" : parseInt(aqicn_values.hum);

      // setting the state of outdoor temp

      if (outdoor_temp == "NA") setOutTemp("NA");
      else setOutTemp(parseInt(outdoor_temp));

      // setting the state of outdoor hum

      if (outdoor_hum == "NA") setOutHum("NA");
      else setOutHum(parseInt(outdoor_hum));

      // color coding for outdoor temp

      if(outdoor_temp <=10){
        setOutTempColorAndQuality(["#008eff",'Too Cold']);
      }else if(outdoor_temp  >=11 && outdoor_temp   <=20){
        setOutTempColorAndQuality(["#09e9ff",'Cold']);
      }
      else if(outdoor_temp   >=21 && outdoor_temp   <=25){
        setOutTempColorAndQuality(["#39c904",'Optimal']);
      }
      else if(outdoor_temp >25 && outdoor_temp  <=30){
        setOutTempColorAndQuality(["#f4b436",'Hot']);
      }else if(outdoor_temp > 30){
        setOutTempColorAndQuality(["#f44336",'Too Hot']);
      }

      // color coding for outdoor hum

      if (outdoor_hum == "NA") setOutHumColorAndQuality("bg-na");
     
      if(outdoor_hum < 20){
        setOutHumColorAndQuality(["#f98224",'Too Dry']);
      }
      else if(outdoor_hum  >=21 && outdoor_hum <=40){
        setOutHumColorAndQuality(["#a4dbef",'Dry']);
      }
      else if(outdoor_hum > 40 && outdoor_hum  <=60){
        setOutHumColorAndQuality(["#00ff9a",'Optimal']);
      }
      else if (outdoor_hum >60 && outdoor_hum <=100){
        setOutHumColorAndQuality(["#008eff",'Too Humid']);
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

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="container-fluid">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Card style={{ border: "none" }}>
          <Card.Img
            variant="top"
            src={logo}
            style={{ height: "15rem", width: "15rem" }}
          />
        </Card>
        <Card style={{ border: "none"}}>
          <Card.Body className="pr-0 pt-5">
            <Card.Title style={{fontWeight:'bold'}}>{propertyName}</Card.Title>
            <Card.Subtitle>{spaceName.replace('lobby','')}</Card.Subtitle>
            <Card.Text>
              Time: {moment.tz("Asia/Kolkata").format("LT")}
              <br />
              Date: {moment().format("ll")}
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
        <Carousel>
            <Carousel.Item>
                <Instruction/>
            </Carousel.Item>
            <Carousel.Item style={{fontSize:'1.2rem' , fontWeight:'bold' ,width:'100%'}}>
                <Pm25  colour={[pm25Color[0],outpm25Color[0]]} status={[pm25Color[1],outpm25Color[1]]} value={[pm25,outpm25]}/>
            </Carousel.Item >
            <Carousel.Item style={{fontSize:'1.2rem' , fontWeight:'bold'}}>
                <Pm10 colour={[pm10Color[0],outpm10Color[0]]} status={[pm10Color[1],outpm10Color[1]]} value={[pm10,outpm10]}/>
            </Carousel.Item >
            <Carousel.Item style={{fontSize:'1.2rem' , fontWeight:'bold'}}>
                <Temp colour={[tempColor[0],outtempColor[0]]} status={[tempColor[1],outtempColor[1]]} value={[temp,outtemp]}/>
            </Carousel.Item>
            <Carousel.Item style={{fontSize:'1.2rem' , fontWeight:'bold'}}>
                <Hum colour={[humColor[0],humColor[0]]} status={[humColor[1],humColor[1]]} value={[hum,outhum]}/>
            </Carousel.Item>
            <Carousel.Item style={{fontSize:'1.2rem' , fontWeight:'bold'}}>
                <Co2 colour={[co2Color[0],outco2Color[0]]} status={[co2Color[1],outco2Color[1]]} value={[co2,outco2]}/>
            </Carousel.Item>
            <Carousel.Item style={{fontSize:'1.2rem' , fontWeight:'bold'}}>
                <Voc colour={[vocColor[0]]} status={[vocColor[1]]} value={[voc,outvoc]}/>
            </Carousel.Item>
            <Carousel.Item style={{fontSize:'1.2rem' , fontWeight:'bold'}}>
                <Aqi colour={[aqiColor[0]]} status={[aqiColor[1]]} value={[aqi]}/>
            </Carousel.Item>
        </Carousel>
        
    </div>
  );
}

export default MainPage;
