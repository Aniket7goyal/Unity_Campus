import React from "react";
import "./index.css";
import ecell from "../assets/e cell logo.png";

function Heading({logo, heading, title, mainImg}) {
  return (
    <div>
      <div className="logo">
        {" "}
        <img src={logo} />
      </div>
      {/* <img className= "logo"  src={ecell}/> */}
      <div class="Heading">
        <h1>{heading}</h1>
        <h2>"{title}"</h2>
      </div>

      <img
        className="Image"
        src={mainImg}
      />
    </div>
  );
}

export default Heading;
