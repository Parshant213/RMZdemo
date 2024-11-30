import React from "react";
import { Stack, Row, Col, Card } from "react-bootstrap";
import ReadingDemo from "./ReadinDemo";

function Pm25demon({ colour = [], status = [], value = [] }) {
  const readings = [
    { 
      parameter: "PM 2.5",
      colour: colour[0],
      key: "INSIDE",
      value: value[0] + " ug/m3",
      status: status[0],
    },
    { parameter:"PM 2.5",
      colour: colour[1],
      key: "OUTSIDE",
      value: value[1] + " ug/m3",
      status: status[1],
    },
  ];
  return (
    <Stack className="col-md-7 mb-5 mx-auto col-9 mt-12" gap={3}>
      <ReadingDemo parameters={readings} />
      <Row className="mt-2">
        <Col xs={4} md={4} className="legendCol">
          <Card className="bg-good text-center h5">
            Good
            <br />
            <span className="h6">
              {" "}
              0-12 µg/m<sup>3</sup>
            </span>
          </Card>
        </Col>
        <Col xs={4} md={4} className="legendCol">
          <Card className="bg-moderate text-center h5">
            Moderate
            <br />{" "}
            <span className="h6">
              13-35 µg/m<sup>3</sup>
            </span>
          </Card>
        </Col>
        <Col xs={4} md={4} className="legendCol">
          <Card className="bg-poor text-center h5">
            Poor
            <br />
            <span className="h6">
              {" "}
              36-55 µg/m<sup>3</sup>
            </span>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs={4} md={4} className="legendCol">
          <Card className="bg-unhealthy text-center text-white h5">
            Unhealthy
            <br />
            <span className="h6">
              {" "}
              56-150 µg/m<sup>3</sup>
            </span>
          </Card>
        </Col>
        <Col xs={4} md={4} className="legendCol">
          <Card className="bg-severe text-center text-white h5">
            Severe
            <br />{" "}
            <span className="h6">
              151-250 µg/m<sup>3</sup>
            </span>
          </Card>
        </Col>
        <Col xs={4} md={4} className="legendCol">
          <Card className="bg-hazardous text-center text-white h5">
            Hazardous
            <br />
            <span className="h6">
              {" "}
              250+ µg/m<sup>3</sup>
            </span>
          </Card>
        </Col>
      </Row>
    </Stack>
  );
}

export default Pm25demon;
