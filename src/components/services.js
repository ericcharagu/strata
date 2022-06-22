import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import "./services.css";
function Services() {
  return (
    <div className="container-fluid">
      <a className="contactBtn" href="" type="button">
        Get in Touch
      </a>

      <CardGroup>
        {" "}
        <Card>
          <Card.Img src="../images/sdark1.png" style={{ height: "500px" }} />
          <Card.ImgOverlay>
            <Card.Title> INTERIOR DESIGN</Card.Title>
          </Card.ImgOverlay>
        </Card>
        <Card>
          <Card.Img src="../images/sdark1.png" style={{ height: "500px" }} />
          <Card.ImgOverlay>
            <Card.Title> SCHEMATIC DESIGN</Card.Title>
          </Card.ImgOverlay>
        </Card>
        <Card>
          <Card.Img src="../images/sdark1.png" style={{ height: "500px" }} />
          <Card.ImgOverlay>
            <Card.Title> SUSTAINABLE DESIGN</Card.Title>
          </Card.ImgOverlay>
        </Card>
      </CardGroup>
    </div>
  );
}

export default Services;
