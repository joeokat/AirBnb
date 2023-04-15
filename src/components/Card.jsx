import React from "react";

import star from "../assets/star.svg";

export default function Card(props) {
  let chipText;
  if (props.item.openSpots === 0) {
    chipText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    chipText = "ONLINE";
  }

  return (
    <div className="card">
      {chipText && <div className="card--chip">{chipText}</div>}
      <img src={props.item.coverImg} alt="" className="card--image" />
      <div className="card--stats">
        <img src={star} alt="star" className="card--star" />
        <span>{props.item.stats.rating}</span>
        <span className="gray"> ({props.item.stats.reviewCount}) • </span>
        <span className="gray">{props.item.location}</span>
      </div>
      <p className="card--title">{props.item.title}</p>
      <p>
        <span className="card--price">from ȼ{props.item.price}</span> / person
      </p>
    </div>
  );
}
