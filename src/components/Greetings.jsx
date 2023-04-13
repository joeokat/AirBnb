import React from "react";

export default function Greetings() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "morning";
  } else if (hours >= 12 && hours < 16) {
    timeOfDay = "afternoon";
  } else if (hours >= 16 && hours < 20) {
    timeOfDay = "evening";
  } else {
    timeOfDay = "night";
  }

  return <h1>Good {timeOfDay} Traveler!</h1>;
}
