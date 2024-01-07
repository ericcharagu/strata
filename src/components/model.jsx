import React, { useState } from "react";
import "./projects.css";
import { FaArrowRight } from "react-icons/fa";
import { Card, Table, CardGroup, Row } from "react-bootstrap";
import { modelData } from "./modelData";
function Models() {
  return (
    <div className="container-fluid" id="projectDiv">
      {modelData.map((val) => (
        <CardGroup>
          <Card
            className="card bg-secondary"
            style={{ border: "None" }}
            key={val.id}
            id="projectCard"
          >
            <Row>
              <Card.Img
                className="col-5"
                style={{
                  height: "260px",
                  width: "390px",
                  margin: "auto",
                }}
                src={val.image}
                id="cardImage"
              />
              <Card.Body className="col-5" style={{ display: "grid" }}>
                <Card.Text>
                  <ul className="projectDetails">
                    <li>
                      <h3>{val.name}</h3>
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Row>
          </Card>
        </CardGroup>
      ))}
      <div className="btn btn-outline-dark btn-sm" id="readBtn">
        <a className="allLink" href="/archmodels">
          View All
        </a>{" "}
        <FaArrowRight />
      </div>
    </div>
  );
}

export default Models;
