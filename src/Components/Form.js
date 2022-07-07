import React, { useState } from "react";
import "./Form.css";
import data from "./MemesData.js";

const memeData = data.data.memes;

export const Form = () => {
  const [url, setUrl] = useState("");

  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");

  const handleClick = () => {
    const randomNum = Math.floor(Math.random() * memeData.length);
    setUrl(memeData[randomNum].url);
  };

  return (
    <div className="form">
      <fieldset className="field-set">
        <legend className="legend">
          <span className="legend-1">JUMP </span>
          <span className="legend-2">IN!</span>
        </legend>
        <div className="meme-form">
          <div className="input">
            <input
              onChange={(e) => setTopText(e.target.value)}
              type="text"
              placeholder="Top Text"
              className="setup"
            />{" "}
            <input
              onChange={(e) => setBottomText(e.target.value)}
              type="text"
              placeholder="Bottom Text"
              className="setup"
            />
          </div>
          <button onClick={handleClick} className="btn">
            click to Generate Meme
          </button>
        </div>
      </fieldset>
      <div className="my-image">
        <img src={url} npalt="meme-img" className="meme-img" alt="meme-img" />
        <span className="top-text">{topText}</span>
        <span className="bottom-text">{bottomText}</span>
      </div>
    </div>
  );
};
