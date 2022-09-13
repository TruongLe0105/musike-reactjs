import React from "react";

function HeaderFourCard({ topic, title, img }) {
  return (
    <div className="wrapper-header-xone">
      <div className="img-xone-radio">
        <img src={img} alt="img" className="img" />
      </div>
      <div className="content-img-xone">
        <div>{topic}</div>
        <div className="title-xone">{title}</div>
      </div>
    </div>
  );
}

export default HeaderFourCard;
