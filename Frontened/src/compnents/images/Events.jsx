import React from "react";
import "../index.css";
import Edata from "./Edata";

function Events({ content }) {
  return (
    <>
      <div id="Events" className="EventsHeading">
        <h1>OUR PAST EVENTS</h1>
      </div>

      <div className="EventsContent">{content}</div>
      <div className="AllCards">
        {Edata.map((val, idx) => (
          <div className="Card">
            {/* <img src={props.imgsrc} alt = "my pic" className = "card-image"/> */}
            {/* {console.log(props)} */}
            <img src={val.imgsrc} alt="my pic" className="card-image" />
            <h3 className="title">{val.title}</h3>
          </div>
        ))}
      </div>
    </>
  );
}
export default Events;
// export {EventsHeading};
