import React from "react";
import FormFourCard from "../FormFourCard";

const list = [
  {
    img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/e/5/f/fe5fd487a095a8946ed424c776bec9f9.jpg",
    title: "RENAISSANCE",
    singer: "Beyonce",
  },
  {
    img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/5/a/a/c/5aaca422913548dfd2b38ada773ca2af.jpg",
    title: "Are & Be",
    singer: "Normani, Ella Mai, Beyonce...",
  },
  {
    img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/8/6/0/7/86071a5013db2462a0a5469852429a40.jpg",
    title: "Breezy",
    singer: "Chris Brown",
  },
  {
    img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/c/4/5/e/c45ea20a8dab68f107065283e64ba1b7.jpg",
    title: "Planet Her (Deluxe)",
    singer: "Doja Cat",
  },
];

function RAndB() {
  return (
    <div className="wrapper-want-listen parent-four-card">
      <div className="title-explore">{"R&B"}</div>
      <div className="all-in">
        <div className="title-parent-four-card">Tất Cả</div>
        <i className="fa-solid fa-chevron-right"></i>
      </div>
      <FormFourCard data={list} />
    </div>
  );
}

export default RAndB;
