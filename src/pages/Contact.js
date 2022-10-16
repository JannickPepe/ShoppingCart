import React from "react";
import Timer from "../components/Countdown/Timer"

import "./comingsoon.css";

function Contact() {
  return (
    <div class="wrapper">
      <div class="content">
        <h1>
          Website
          <br />
          Coming Soon
        </h1>
        <br />
        <h3>
          But first hand in at:</h3>
        <Timer />
      </div>
    </div>
  );
}


export default Contact;