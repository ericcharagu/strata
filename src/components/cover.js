import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./cover.css";
import Model from "./projects";
import About from "./about";
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
      <div
        className="container-fluid"
        style={{ margin: "auto", padding: "30px" }}
      >
        <About />
      </div>
      {/*  <div className="card" id="app_section">
        <img
          className="card-img"
          style={{ height: "80%", width: "90%" }}
          alt="alt-Text"
          responsive
          src="images/app_dummy.png"
        />
        <div className="card-img-overlay">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
        </div>
      </div> */}
      <div>
        <h4 style={{ float: "center", paddingBottom: "50px" , fontVariant:"small-caps"}}>
          FEATURED PROJECTS
        </h4>
        <Model style={{ paddingTop: "10px" }} />
      </div>
    </div>
  );
}

export default Cover;
