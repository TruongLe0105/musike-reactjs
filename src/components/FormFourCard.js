import React from "react";
import { HeartButton, OptionButton } from "./Button";

function FormFourCard({ data }) {
  return (
    <div className="wrapper-four-card">
      {data.map((item, index) => (
        <div className="wrapper-item-card" key={index}>
          <div className="item-card">
            <div className="wrapper-img">
              <img src={item.img} alt={item.title} className="img" />
            </div>
            <div className="wrapper_icon wrapper-icon">
              <HeartButton />
              <i className="fa-solid fa-play"></i>
              <OptionButton />
            </div>
          </div>
          <a href="#" className="title-card" title={item.title}>
            {item.title}
          </a>
          <a href="#" className="singer" title={item.singer}>
            {item.singer}
          </a>
        </div>
      ))}
    </div>
  );
}

export default FormFourCard;
