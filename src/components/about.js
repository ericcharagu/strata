import React from "react";
import "./about.css";
import { Card, Row, Col } from "react-bootstrap";
function About() {
  return (
    <div className="container-fluid" id="conDiv">
      <Card
        className="card bg-secondary"
        style={{ margin: "auto", height: "100%", border: "None" }}
      >
        <Card.Body>
          <div className="row">
            <div className="col-6" style={{ borderRight: "1px solid" }}>
              <div className="outerB">
                <div className="innerB">
                  <h5 id="numTxt">3.5</h5>
                  <h5 id="numDesc">million shillings saved</h5>
                </div>
              </div>
            </div>
            <div className="col-6">
              <p className="aboutDesc"> ABOUT US</p>
              <h3>Sustainable buildings for sustianable...</h3>
              <p style={{padding:"10px"}}>
                Based on collective work and shared knowledge,
                Architecture-Studio aims to favour dialogue and debate, to
                transform individual knowledge into increased creative
                potential. Our Studio is a architecture practice based in
                Prague, Chech and Venice. Today, it includes 150 architects,
                urban planners, landscape and interior designers of 25 different
                nationalities. The company principle of Architecture-Studio is
                the collective conception. From the very beginning, the practice
                has believed in the virtues of exchange, crossing ideas, common
                effort, shred knowledge.
              </p>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default About;
