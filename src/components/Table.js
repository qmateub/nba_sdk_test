import React from "react"
import nba from "nba.js"
import { methodParser } from "../utils/methodParser"


const Table = ({ onApiCall }) => {

  const handleOnClick = (event, target) => {
    console.log(event, target);
  }

  const getMethods = () => {
    let keys = Object.keys(nba.stats);
    return keys.map((key, index) => {
      return (
        <a
          className="dropdown-item"
          href="#"
          key={index + key}
          onClick={(e) => {
            onApiCall(e, key)
          }}
          >
          {methodParser(key)}
        </a>
      )
    })
  }

  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Methods
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {getMethods()}
      </div>
    </div>
  );
};

export default Table
