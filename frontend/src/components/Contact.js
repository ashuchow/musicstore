import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { DropdownButton, Button } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";

function Product() {
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");
  const [date, setDate] = useState("");
  const handleSelect = (e) => {
    //console.log(e);
    setArrival(e);
  };
  const handleSelectD = (e) => {
    //console.log(e);
    setDeparture(e);
  };
  const handleSelectDate = (e) => {
    //console.log(e);
    setDate(e.target.value);
  };
  return (
    <div>
      <div className = "header">
        <h1>Search Flights</h1>
      </div>
      <div className="flex-container">
        <div className="flex-child arrival">
          <DropdownButton
            id="dropdown-basic-button"
            title="From:"
            onSelect={handleSelect}
          >
            <Dropdown.Item eventKey="">Western</Dropdown.Item>
            <Dropdown.Item eventKey="BOM">Indian Classical</Dropdown.Item>
            <Dropdown.Item eventKey="CCU">Kol</Dropdown.Item>
            <Dropdown.Item eventKey="BLR">Bengaluru</Dropdown.Item>
            <Dropdown.Item eventKey="LUH">Ludhiana</Dropdown.Item>
            <Dropdown.Item eventKey="MAA">Chennai</Dropdown.Item>
          </DropdownButton>
          <p>Arrival city: {arrival}</p>
        </div>
        <div className="flex-child destination">
          <DropdownButton
            id="dropdown-basic-button"
            title="To:"
            onSelect={handleSelectD}
          >
            <Dropdown.Item eventKey="DEL">New Delhi</Dropdown.Item>
            <Dropdown.Item eventKey="BOM">Mumbai</Dropdown.Item>
            <Dropdown.Item eventKey="CCU">Kolkata</Dropdown.Item>
            <Dropdown.Item eventKey="BLR">Bengaluru</Dropdown.Item>
            <Dropdown.Item eventKey="LUH">Ludhiana</Dropdown.Item>
            <Dropdown.Item eventKey="MAA">Chennai</Dropdown.Item>
          </DropdownButton>
          <p>Departure city : {departure}</p>
        </div>
        <p>Date of departure: </p>
        <input type="text" name="date" value={date} onChange={handleSelectDate}></input>
      </div>
      <div>

        <Link
          to={{
            pathname: "/rf",
            data: { arrival: arrival, departure: departure, date: date },
          }}
          className="nav-link"
        >
          <Button>Show results</Button>
        </Link>
      </div>
    </div>
  );
}

export default Product;