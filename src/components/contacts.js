import React from "react";
import "./contacts.css";
import { Card, Row, Col } from "react-bootstrap";
function Contacts() {
  return (
    <div className="container-fluid" id="conDiv">
      <Card
        className="card bg-secondary"
        style={{ margin: "auto", height: "100%", border: "None" }}
      >
        <Card.Body>
          <div className="row">
            <Col style={{ borderRight: "1px solid" }}>
              <div className="outerB">
                <div className="innerB">
                  <h5 id="numTxt">12</h5>
                  <p id="numDesc">Years of experiences</p>
                </div>
              </div>
            </Col>
            <Col>
              <p className="aboutDesc"> ABOUT US</p>
              <h3>Sustainable buildings for sustianable...</h3>
              <p>
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
            </Col>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Contacts;
