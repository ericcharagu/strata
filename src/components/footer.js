import React from "react";
import { Row, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
// import { ReactComponent as LogoMenu } from "../img/strata.svg";
import "./footer.css";

function Footer() {
  return (
    <div className="container-fluid" id="footerDiv">
      <Row>
        <div className="col-6">
          <Card
            className="card bg-secondary"
            style={{ border: "None", padding: "20px" }}
          >
            <Card.Title style={{ float: "left" }}>
              <img src="../images/logo.png" />
              Strata Designs
            </Card.Title>
            <Card.Body>
              The company principle of Architecture-Studio is the collective
              conception. From the very beginning, the practice has believed in
              the virtues of exchange, crossing ideas, common effort, shared
              knowledge and enthusiasm. Green designs to help cut costs and save
              the planet
            </Card.Body>
          </Card>
        </div>
        <div className="col-6" id="infoFooter">
          <h6>CONTACT US</h6>
          <h5>strataemail@dummy.com</h5>
          <h5>Tel: +234823823321</h5>
          <ul className="contactList">
            <li>
              <a href="#">
                <span>
                  {" "}
                  <FaFacebook className="iconFa" />
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>
                  {" "}
                  <FaTwitter className="iconFa" />
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>
                  <FaInstagram className="iconFa" />
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="row" id="createrFooter">
          <p>STRATA (C) 2022. ALL RIGHTS RESERVED.Created by ME</p>
        </div>
      </Row>
    </div>
  );
}

export default Footer;
