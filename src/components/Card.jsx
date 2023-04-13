import React from "react";

import star from "../assets/star.png";

export default function Card(props) {
  return (
    <section>
      <div className="card">
        <img src={`../assets/${props.img}`} alt="" className="card--image" />
        <div className="card--stats">
          <img src={star} alt="star" className="card--star" />
          <span>{props.rating}</span>
          <span className="gray"> ({props.count}) • </span>
          <span className="gray">{props.country}</span>
        </div>
        <p className="card--title">{props.hotel}</p>
        <p>
          <span className="card--price">from ȼ{props.fee}</span> / person
        </p>
      </div>
    </section>
  );
}
