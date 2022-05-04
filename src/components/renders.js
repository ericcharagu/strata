import React from "react";
import "./render.css";
import { Card, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Renders() {
  return (
    <div className="container-fluid" id="rendersDiv">
      <Table responsive id="rendersTable">
        <thead>
          <Link to="/visuals">
            <Button variant="/primary" style={{ float: "right" }}>
              Back
            </Button>
          </Link>
        </thead>
        <tbody className="rendersBody">
          <tr className="rendersTr">
            <td className="rendersOptions">
              <Card className="bg-dark text-white" id="rendersCard">
                <Card.Img src="images/bstock.jpg" id="cardImage" />
                <Card.ImgOverlay>
                  <Card.Title>1</Card.Title>
                </Card.ImgOverlay>
              </Card>
            </td>
            <td className="rendersOptions">
              <Card className="bg-dark text-white" id="rendersCard">
                <Card.Img src="images/bstock.jpg" id="cardImage" />
                <Card.ImgOverlay>
                  <Card.Title>2</Card.Title>
                </Card.ImgOverlay>
              </Card>
            </td>
          </tr>
        </tbody>
        <Card></Card>
      </Table>
    </div>
  );
}

export default Renders;
