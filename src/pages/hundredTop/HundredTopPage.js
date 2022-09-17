import React from "react";
import "../../components/css/hundredTop.css";
import VietNamMusic from "../../components/hundredTop/VietNamMusic";
import OutstandingHundred from "../../components/hundredTop/OutstandingHundred";
import AsiaMusic from "../../components/hundredTop/AsiaMusic";
import UsUkMusic from "../../components/hundredTop/UsUkMusic";
import ConCertMusic from "../../components/hundredTop/ConCertMusic";

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
      <div className="wrapper-components-hundred">
        <OutstandingHundred />
        <VietNamMusic />
        <AsiaMusic />
        <UsUkMusic />
        <ConCertMusic />
      </div>
    </div>
  );
}

export default HundredTopPage;
