import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./store/data";

export default function App() {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        img={item.coverImg}
        rating={item.stats.rating}
        count={item.stats.reviewCount}
        country={item.location}
        hotel={item.title}
        fee={item.price}
      />
    );
  });

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="card--list">{cards}</div>
    </div>
  );
}
