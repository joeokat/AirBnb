import React from "react";

import star from "../assets/star.png";

export default function Card(props) {
  return (
    <section>
      <div className="card">
        <img src={props.img} alt="" className="card--image" />
        <div className="card--info">
          <img src={star} alt="star" className="card--star" />
          <span>{props.rating}</span>
          <span className="gray"> ({props.count}) • </span>
          <span className="gray">{props.country}</span>
        </div>
        <p>{props.hotel}</p>
        <p>
          <span className="bold">{props.fee}</span> / person
        </p>
      </div>
    </section>
  );
}
