import React from "react";
import FormFourCard from "../FormFourCard";

const list = [
  {
    img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/8/9/a/f89a0a64438a7f1f0c548e77be676bd2.jpg",
    title: "EDM Now",
    singer: "Alan Walker, Lost Frequencies, twocolors...",
  },
  {
    img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/d/2/1/3d21739be702017b25c50651eb5cc70e.jpg",
    title: "Today's EDM Hits",
    singer: "The Chansmokers, Alan Walker, Alesso...",
  },
  {
    img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/8/3/6/1/8361592b9657517cc974b08560d53533.jpg",
    title: "Dance Pop",
    singer: "Rita Ora, Selena Gomez, Katy Perry...",
  },
  {
    img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/5/1/5/3/51538ab5b46988dc94e10705fb5d974c.jpg",
    title: "Dance Rewind",
    singer: "Avicii, The Chansmokers, Calvin Harris...",
  },
];

function Edm() {
  return (
    <div className="wrapper-want-listen parent-four-card">
      <div className="title-explore">EDM</div>
      <div className="all-in">
        <div className="title-parent-four-card">Tất Cả</div>
        <i className="fa-solid fa-chevron-right"></i>
      </div>
      <FormFourCard data={list} />
    </div>
  );
}

export default Edm;
