import React  from "react";
import './index.css';

function About({heading, title, content}){
    return(
    <>
    <div id="about" className="AboutHeading"><h1>{heading}</h1></div>
    <div className="AboutHeading2"><h2>{title}</h2></div>
    <div className="AboutContent">{content}</div>
    <button className="button">Read More</button>
    </>
    )
}
export default About;