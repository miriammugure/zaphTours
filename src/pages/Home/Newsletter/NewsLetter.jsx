import React from "react";
import wave from "../../../assets/wave.svg";
import "./NewsLetter.css";
function NewsLetter() {
  return (
    <div>
      <div className="newsLetter">
        <legend>get newsletter here:</legend>
        <form action="">
          <input type="text" />
          <button type="button">subscribe</button>
        </form>
      </div>
    </div>
  );
}

export default NewsLetter;
