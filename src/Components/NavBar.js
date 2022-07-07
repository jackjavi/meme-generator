import React from "react";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <div className="nav">
      <div className="nav-left">
        <img
          className="meme-logo"
          src="./Assets/meme-logo.jpg"
          alt="meme-logo"
        />
        <div className="meme-title">Meme Generator</div>
      </div>
      <div className="nav-right">
        <p className="description">
          <span className="desc">Jack React Project. </span>
          <span className="desc-date">[Apr 24 19:09, 2022]</span>
        </p>
      </div>
    </div>
  );
};
