import React from "react";

import "./Home.css";
import { MainSection } from "./MainSection";
import { NavBar } from "./NavBar";

export const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <MainSection />
    </div>
  );
};
