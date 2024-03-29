import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./projects.css";
import { FaArrowRight } from "react-icons/fa";
import { projectsData } from "./projectsData";
import { Card, Table, CardGroup, Row } from "react-bootstrap";

function Projects() {
  return (
    <div className="container-fluid py-2" id="projectlDiv">
      <div className="d-flex flex-row flex-nowrap">
        {projectsData.map((val) => (
          <Card className="card bg-secondary" key={val.id} id="projectCard">
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
        ))}
      </div>
      <div className="btn btn-outline-dark btn-sm" id="readBtn">
        <a className="allLink" href="/all-projects">
          View All
        </a>{" "}
        <FaArrowRight />
      </div>
    </div>
  );
}

export default Projects;
