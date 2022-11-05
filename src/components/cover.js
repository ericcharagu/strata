import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./cover.css";
import Model from "./projects";
import About from "./about";
import Services from "./services";

import Contact from "./contact";
import coverPhoto from "../img/dummy.jpg";

import { Carousel, Button, Row, Col } from "react-bootstrap";
function Cover() {
  function openModal() {}
  return (
    <div className="container-fluid" id="coverDiv">
      <div
        className="container-fluid"
        id="homeCover"
        style={{ backgroundImage: "url(" + coverPhoto + ")" }}
      />
      <div className="row" style={{ margin: "auto", paddingTop: "19px" }}>
        <h4 style={{ float: "center" }}>ABOUT US</h4>
        <About />
      </div>
      {/*       <div className="row">
        <h4 style={{ float: "center" }}>SERVICES</h4>
        <Services />
      </div> */}
      <div>
        <h4 style={{ float: "center", paddingTop: "10px" }}>
          FEATURED PROJECTS
        </h4>
        <Model />
      </div>

      <div className="row" style={{ paddingTop: "10px" }}>
        <h4 style={{ float: "center" }}>Get in touch</h4>
        <Contact />
      </div>
    </div>
  );
}

export default Cover;
