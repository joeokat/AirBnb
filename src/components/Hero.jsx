import React from "react";
import hero from "../assets/hero.png";
import Greetings from "./Greetings";

export default function Hero() {
  return (
    <section className="hero">
      <img src={hero} alt="hero" className="hero--image" />
      <div className="greeting--bold">
        <Greetings />
      </div>
      <h1 className="hero--header">Welcome to Nhyira Foundation</h1>
      <p className="hero--text">
        Participate in unique live changing programmes led by our Foundation and
        Fleet Labs Ghana.
      </p>
    </section>
  );
}
