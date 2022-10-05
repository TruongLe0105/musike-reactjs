import React from "react";
import FormFourCard from "../FormFourCard";

function GeneralComponent({ data, title }) {
  return (
    <div className="wrapper-want-listen parent-four-card">
      <div className="title-explore">{title}</div>
      <div className="all-in">
        <div className="title-parent-four-card">Tất Cả</div>
        <i className="fa-solid fa-chevron-right"></i>
      </div>
      <FormFourCard data={data} />
    </div>
  );
}

export default GeneralComponent;
