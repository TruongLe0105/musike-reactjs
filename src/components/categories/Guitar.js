import React from "react";
import FormFourCard from "../FormFourCard";

const list = [
  {
    img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/1/5/e/6/15e6cb3351fa9eb85004f6c70f64ca8b.jpg",
    title: "Coffee & Guitar",
    singer: "Sam Fischer, Tate McRae, Noah Cyrus...",
  },
  {
    img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/8/f/0/5/8f05816301e1ebc0cccf1b272461a12a.jpg",
    title: "Woman With Guitar",
    singer: "Avril Lavigne, Taylor Swift, Tori Kelly...",
  },
  {
    img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/6/5/8/f/658f9048e8281ab76de99a4151ec5340.jpg",
    title: "Guitar Việt",
    singer: "Đỗ Đình Phương , Võ Tá Hân",
  },
  {
    img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/8/c/6/4/8c64b4fe8bf4bc99b561fda424101bad.jpg",
    title: "Best Blues Guitar Legends",
    singer: "Jimi Hendrix, Robert Johnson, ALbert King...",
  },
];

function Guitar() {
  return (
    <div className="wrapper-want-listen parent-four-card">
      <div className="title-explore">Guitar</div>
      <div className="all-in">
        <div className="title-parent-four-card">Tất Cả</div>
        <i className="fa-solid fa-chevron-right"></i>
      </div>
      <FormFourCard data={list} />
    </div>
  );
}

export default Guitar;
