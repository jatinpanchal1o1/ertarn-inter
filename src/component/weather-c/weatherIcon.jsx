import React from "react";

const WeatherImg = (props) => (
  <div className="text-center py-2">
    <h1 className="font-bold text-lg">{props.day}</h1>
    <img
      className={props.classes}
      src={"/ertarn-inter/imgs/" + props.icon + ".png"}
      alt="weather"
      width={props.width}
    />
    <h1>
      <span className="text-white text-base">{props.cel}</span>
      <span> {props.far}</span>
    </h1>
  </div>
);

export default WeatherImg;
