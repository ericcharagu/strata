import React, { useState } from "react";
import "./cover.css";
import Projects from "./projects";
import About from "./about";
import Contact from "./contact";
import coverPhoto from "../img/dummy.jpg";
import Models from "./model";
import Services from "./services";

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
      <div className="row">
        <h4 style={{ float: "center" }}>SERVICES</h4>
        <Services />
      </div>
      <div className="container-fluid">
        <button className="btn">
          <h4>Projects</h4>
        </button>

        <Projects />
      </div>
      <div className="container-fluid">
        <button className="btn">
          <h4>Models</h4>
        </button>

        <Models />
      </div>

      <div className="row" style={{ paddingTop: "10px" }}>
        <h4 style={{ float: "center" }}>Get in touch</h4>
        <Contact />
      </div>
    </div>
  );
}

export default Cover;
