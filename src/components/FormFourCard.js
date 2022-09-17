import React from "react";
import { HeartButton, OptionButton } from "./Button";

function FormFourCard({ data, none_icon, more_card }) {
  return (
    <div className="wrapper-four-card">
      {data.map(({ img, title, singer }, index) => (
        <div
          className="wrapper-item-card"
          key={index}
          style={{
            marginBottom: more_card && "3rem"
          }}
        >
          {img && <div className="item-card">
            <div className="wrapper-img">
              <img
                src={img}
                alt={title}
                className="img"
                style={{ opacity: none_icon && 1 }}
              />
            </div>
            {!none_icon && (
              <div className="wrapper_icon wrapper-icon">
                <HeartButton />
                <i className="fa-solid fa-play"></i>
                <OptionButton />
              </div>
            )}
          </div>}
          {title && (
            <a href="/#" className="title-card" title={title}>
              {title}
            </a>
          )}
          {singer && (
            <a href="/#" className="singer link" title={singer}>
              {singer}
            </a>
          )}
        </div>
      ))}
    </div>
  );
}

export default FormFourCard;
