import React, { useState } from "react";
import { servicesData } from "./servicedata";
import { Carousel, Card } from "react-bootstrap";
import "./services.css";
function Services() {
  const [isMoreInfo, setMoreInfo] = useState(false);

  return (
    <div className="container-fluid" id="serviceDiv">
      <Carousel
        fade
        className="serviceCarousel"
        controls="false"
        indicators="false"
        direction="vertical"
      >
        <Carousel.Item>
          {servicesData.map((data, key) => {
            <Card className="bg-dark text-white" id="serviceCard" key={key}>
              <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Subtitle>{data.desc}</Card.Subtitle>
                <Card.Text>{data.all}</Card.Text>
              </Card.Body>
            </Card>;
          })}
        </Carousel.Item>
      </Carousel>

      <a className="contactBtn" type="button">
        Get in Touch
      </a>
    </div>
  );
}

export default Services;
