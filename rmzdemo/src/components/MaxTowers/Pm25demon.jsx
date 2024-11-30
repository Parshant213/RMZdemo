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
    </Stack>
  );
}

export default Pm25demon;
