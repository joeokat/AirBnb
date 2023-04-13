import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

import imga from "./assets/imga.jpg";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card
        img={imga}
        rating="5.0"
        count="6"
        country="GH"
        hotel="JoeOkat Guest House"
        fee="From ȼ800"
      />
    </div>
  );
}
