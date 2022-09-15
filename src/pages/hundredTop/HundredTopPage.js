import React from "react";
import "../../components/css/hundredTop.css";
import FormingShare from "../../components/hundredTop/FormingShare";

function HundredTopPage() {
  return (
    <div className="wrapper-hundred-top">
      <div className="img-parent">
        <img
          src="https://photo-zmp3.zadn.vn/covers/3/1/310b98ade43043a069c3d3e9ee0c5766_1515485837.jpg"
          alt="img"
          className="img"
        />
      </div>
      <div className="bg-top" />
      <FormingShare />
    </div>
  );
}

export default HundredTopPage;
