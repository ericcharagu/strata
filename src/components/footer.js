import React from "react";
import { Row, Card } from "react-bootstrap";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./footer.css";

function Footer() {
  return (
    <div className="container-fluid" id="footerDiv">
      <Row>
        <div className="col-6">
          <Card className="card bg-secondary" id="footerCard">
            <Card.Title style={{ color: "rgb(184, 150, 65)" }}>
              {/* <img src="../logodark.png" /> */}
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
          <h5>archcompanyl@dummy.com</h5>
          <h5>Tel: +234823823321</h5>
          <ul className="contactList">
            <li>
              <a href="#">
                <span>
                  {" "}
                  <FaLinkedin className="iconFa" />
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
          <p>ALL RIGHTS RESERVED.Created by ME</p>
        </div>
      </Row>
    </div>
  );
}

export default Footer;
