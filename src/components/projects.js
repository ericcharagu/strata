import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./projects.css";
import { FaArrowRight } from "react-icons/fa";

import { Card, Table, CardGroup, Row } from "react-bootstrap";

function Model() {
  const people = [
    {
      image: process.env.PUBLIC_URL + "images/karen_fin.png",
      name: "Bulding A",
      type: "Residential",
      acerage: "1/4",
      id: 1,
      description:
        "The model architecture expresses complementary features of a villa, made up of calm, quiet areas designed for family life, as well as reception areas, which are open and welcoming.",
    },
    {
      image: process.env.PUBLIC_URL + "images/karen_fin.png",
      name: "Building B",
      type: "Commercial",
      acerage: "1",
      id: 2,
      description:
        "The model architecture expresses complementary features of a villa, made up of calm, quiet areas designed for family life, as well as reception areas, which are open and welcoming.",
    },
    {
      image: process.env.PUBLIC_URL + "images/karen_fin.png",
      name: "Building C",
      type: "Mixed Development",
      acerage: "1/2",
      id: 3,
      description:
        "The model architecture expresses complementary features of a villa, made up of calm, quiet areas designed for family life, as well as reception areas, which are open and welcoming.",
    },
  ];
  const [items] = useState(people);

  return (
    <div className="container-fluid" id="modelDiv">
      {items.map((val) => (
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
                    <li> {val.type}</li>

                    <li>{val.description}</li>
                  </ul>
                  <div className="btn btn-outline-dark btn-sm" id="readBtn">
                    Read More <FaArrowRight />
                  </div>
                </Card.Text>
              </Card.Body>
            </Row>
          </Card>
        </CardGroup>
      ))}
    </div>
  );
}

export default Model;
