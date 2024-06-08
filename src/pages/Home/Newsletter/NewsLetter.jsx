import React from "react";
import wave from "../../../assets/wave.svg";
import "./NewsLetter.css";

function NewsLetter() {
  return (
    <div>
      <div className="newsLetter">
        <legend>get newsletter here:</legend>
        <div className="newsletter">
          <form action="" className="news">
            <input type="text" placeholder="johndoe@example.com" />
            <button type="button">subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
