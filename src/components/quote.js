import React, { useEffect, useState, useReducer } from "react";
import { useParams, useNavigate } from "react-router-dom";
import coverPhoto from "../img/dw.png";
import axios from "axios";
import { NumericFormat } from "react-number-format";
import logo from "../img/sdark.png";
import "./quote.css";
import { BuildingQuote } from "./quoteData";
import { CloseButton, Image } from "react-bootstrap";

function QuoteGen() {
  const [buildings, setBuildings] = useState([]);
  const [showOutput, setShowOutput] = useState(false);
  const [cost, setCost] = useState(0);
  const [fee, setFee] = useState(0);
  const [filteredData, setFilteredData] = useState([]);
  const [region, setRegion] = useState([]);
  const residentOptions = [""];
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {});

  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    const filterData = (buildingDetails, userSelection) => {
      const filteredDataDummy = buildings.filter(
        (item) => item.type == buildingDetails && item.region == userSelection
      );

      setFilteredData(filteredDataDummy);
      filteredDataDummy.map((data) => {
        console.log(data.name);
      });
    };
    if (inputs.bType === "residential") {
      alert()
    }

    filterData(inputs.bType, inputs.region);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    async function getBuildings() {
      const id = params.name;
      const response = await fetch(`http://localhost:5000/get-quote`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      setBuildings(await response.json());
    }

    getBuildings();

    const getPrice = (buildingName) => {
      const filterPriceData = filteredData.filter(
        (item) => item.name == buildingName
      );
      filterPriceData.map((buildingPrice) => {
        setCost(buildingPrice.price);
      });
    };

    getPrice(inputs.building);
    console.log(cost);
    setShowOutput(true);
    console.log(inputs);
    let costPerSqm = parseFloat(cost);
    let actualSize = parseFloat(inputs.size);
    const options = { maximumFractionDigits: 2 };
    /*  setCost(Intl.NumberFormat("en-US", options).format(actualSize * 41600)); */
    setFee(
      Intl.NumberFormat("en-US", options).format(actualSize * costPerSqm * 0.01)
    );
  };

  return (
    <div className="container-fluid" id="quoteDiv">
      <form onSubmit={handleSubmit} id="quoteForm">
        <span>
          <Image src={logo} style={{ height: "150px" }} fluid roundedCircle />
        </span>{" "}
        <h4
          style={{
            color: " rgb(184, 150, 65)",
            textTransform: "uppercase",
            padding: "15px",
          }}
        >
          Fee Generator
        </h4>
        <p style={{ color: "black" }}>
          This tool calculates the retainer fee for Strata Design Studios based
          on the Governmenet of Kenya's defined rates
        </p>
        <div className="input-group">
          <label>
            Region:
            <select
              name="region"
              key={inputs.region}
              value={inputs.region || ""}
              onChange={handleChange}
            >
              <option value="nairobi">Nairobi</option>
              <option value="coast">Coast</option>
              <option value="western">Western</option>
            </select>
          </label>{" "}
        </div>
        <div className="input-group">
          <label>
            Building Type:{" "}
            <select
              name="bType"
              onChange={handleChange}
              value={inputs.bType || ""}
            >
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
              <option value="business">Business Park</option>
              <option value="industrial">Industrial Projects</option>
            </select>
          </label>
        </div>
        <div className="input-group">
          <label>
            Building:{" "}
            <select
              name="building"
              value={inputs.building || ""}
              onChange={handleChange}
            >
              {filteredData.map((item) => (
                <option key={item.name} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
          </label>{" "}
          <div className="input-group">
            <label>
              Size (sqm):
              <NumericFormat
                name="size"
                onChange={handleChange}
                value={inputs.size || ""}
                allowLeadingZeros
                thousandSeparator=","
              />
            </label>{" "}
          </div>
        </div>
        <button id="feeBtn" className="btn btn-info" onClick={handleSubmit}>
          Get Fee
        </button>
        {showOutput && (
          <div className="output-group">
            <CloseButton
              onClick={() => {
                setShowOutput(false);
              }}
            />
            <label>
              Retainer fee:
              <h5 disabled>Ksh. {fee}</h5>
            </label>
          </div>
        )}
      </form>
    </div>
  );
}

export default QuoteGen;
