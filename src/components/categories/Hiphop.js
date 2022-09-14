import React from "react";
import FormFourCard from "../FormFourCard";

const list = [
  {
    img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/b/4/e/5/b4e5ab6571f7e57e72680edd9e711903.jpg",
    title: "Twelve Carat Toothache",
    singer: "Post Malone",
  },
  {
    img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/4/c/4/9/4c4923a1556b854ef607bfe6bb63cfab.jpg",
    title: "Hot Rhythmic",
    singer: "Lil Nas X, Latto, Doja Cat...",
  },
  {
    img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/2/c/0/8/2c080b5c631cd2d8b74dcce2f531555c.jpg",
    title: "Hip-Hop Nổi Bật",
    singer: "Lil Nas X, Jack Harlow, Kendrick Lamar...",
  },
  {
    img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/8/c/5/38c59549cebcd47edfbbe50dd6d6bf04.jpg",
    title: "Just Melodic Rap",
    singer: "Juice Wrld, Travis Scott, Drake...",
  },
];

function Hiphop() {
  return (
    <div className="wrapper-want-listen parent-four-card">
      <div className="title-explore">Hip-Hop</div>
      <div className="all-in">
        <div className="title-parent-four-card">Tất Cả</div>
        <i className="fa-solid fa-chevron-right"></i>
      </div>
      <FormFourCard data={list} />
    </div>
  );
}

export default Hiphop;
