import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./model.css";
import { FaListUl } from "react-icons/fa";
import { FiGrid } from "react-icons/fi";
import {
  Card,
  Button,
  Dropdown,
  Row,
  Table,
  Col,
  Image,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";

function Model() {
  function openModal() {
    console.log("clicked");
  }
  const people = [
    {
      image: "bstock.jpg",
      name: "Alan Turing",
      type: "Residential",
      acerage: "040-123456",
      id: 1,
    },
    {
      name: "Ada Lovelace",
      type: "Commercial",
      acerage: "39-44-5323523",
      id: 2,
    },
    {
      name: "Barbara Liskov",
      type: "Mixed Development",
      acerage: "12-43-234345",
      id: 3,
    },
    {
      name: "Mary Poppendieck",
      type: "Residential",
      acerage: "39-23-6423122",
      id: 4,
    },
  ];
  const [items, setItems] = useState(people);

  const filterItem = (gen) => {
    const updatedItem = people.filter((curElem) => {
      return curElem.type === gen;
    });
    setItems(updatedItem);
  };

  return (
    <div className="container-fluid" id="modelDiv">
      {/*   <Row className="optionsRow">
        <ListGroup horizontal style={{ float: "right" }}>
          <ListGroup.Item>
            <select
              style={{ padding: "5px" }}
              onChange={(e) => filterItem(e.target.value)}
            >
              <option>All</option>
              <option>Residential</option>
              <option>Commercial</option>
              <option>Mixed Use</option>
              <option>Hospitality</option>
              <option>Conceptual</option>
            </select>
          </ListGroup.Item>
          <ListGroup.Item>
            <FaListUl />
          </ListGroup.Item>
          <ListGroup.Item>
            <FiGrid />
          </ListGroup.Item>
          <ListGroup.Item>
            <Link to="/visuals">
              <Button variant="/primary" style={{ float: "right" }}>
                Back
              </Button>
            </Link>
          </ListGroup.Item>
        </ListGroup>
      </Row> */}

      {/*  {items.map((val) => (
        <ul
          className="filteredDiv"
          key={val.id}
          style={{ margin: "40px", padding: "10px", listStyle: "none" }}
        >
          <li>{`Name: ${val.name}`}</li>
          <li>{`Type: ${val.type}`}</li>
          <li>{`Acerage: ${val.acerage}`}</li>
        </ul>

         <Card>
                <Card.Body>
                  <ul
                    className="filteredDiv"
                    key={val.id}
                    style={{
                      margin: "40px",
                      padding: "10px",
                      listStyle: "none",
                    }}
                  >
                    <li>{`Name: ${val.name}`}</li>
                    <li>{`Type: ${val.type}`}</li>
                    <li>{`Acerage: ${val.acerage}`}</li>
                  </ul>
                  <Card.Link onClick={openModal}>Open</Card.Link>
                </Card.Body>
              </Card>
      ))} */}
      {items.map((val) => (
        <Table responsive className="outputTable" key={val.id}>
          <tbody>
            <tr>
              <td>
                <img responsive src="./images/karen_fin.png" />
              </td>
              <td>
                <ul
                  className="filteredDiv"
                  key={val.id}
                  style={{ margin: "40px", padding: "10px", listStyle: "none" }}
                >
                  <li>{`Name: ${val.name}`}</li>
                  <li>{`Type: ${val.type}`}</li>
                  <li>{`Acerage: ${val.acerage}`}</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </Table>
      ))}
    </div>
  );
}

export default Model;
