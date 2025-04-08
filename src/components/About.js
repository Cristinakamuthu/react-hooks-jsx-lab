import React from "react";
import { image } from "../data/data";

function About() {
  return <div>
    <div id="about">
      <h2>About Me</h2>
      <p>My name is Marion i love sleepinga </p>
      <img src={image}alt="I made this"></img>

    </div>
  </div>;
}

export default About;
