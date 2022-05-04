import React from "react";
import "./visual.css";
import { Card, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function Visual() {
  return (
    <div>
      <Table responsive id="visualTable">
        <thead></thead>
        <tbody className="visualBody">
          <tr className="visualTr">
            <td className="visualOptions">
              <Link to="/renders">
                <Card className="bg-dark text-white" id="visualCards">
                  <Card.Img src="images/sdark1.png" alt="Card image" />
                  <Card.ImgOverlay>
                    <Card.Title>Visualisations</Card.Title>
                  </Card.ImgOverlay>
                </Card>
              </Link>
            </td>
            <td className="visualOptions">
              <Link to="/archmodels">
                <Card className="bg-dark text-white" id="visualCards">
                  <Card.Img src="images/sdark1.png" alt="Card image" />
                  <Card.ImgOverlay>
                    <Card.Title>Architechural Models</Card.Title>
                  </Card.ImgOverlay>
                </Card>
              </Link>
            </td>
          </tr>
        </tbody>
        <Card></Card>
      </Table>
    </div>
  );
}

export default Visual;
