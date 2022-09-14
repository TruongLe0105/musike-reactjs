import React from "react";
import FormFourCard from "../FormFourCard";

const list = [
  {
    img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/d/9/3/4/d93479e5b164c28fd7fb7be4a3f208b8.jpg",
    title: "Remix Việt Mới Nhất",
    singer: "Phát Hồ, Nal, 16 Typh...",
  },
  {
    img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/e/5/d/fe5dfebabeb63934a45bb8240db7e1ea.jpg",
    title: "Nhạc Trẻ Vinahouse",
    singer: "Châu Khải Phong, Phan Duy Anh, Châu Võ...",
  },
  {
    img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/d/5/7/6/d5762221d5031c280bd1b127dcd2463d.jpg",
    title: "Top Hits Remix",
    singer: "Calvin Harris, David Guetta, Alan Walker...",
  },
  {
    img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/8/f/8/7/8f87ccb13b72947a9bf831c8951f71b1.jpg",
    title: "Remix 50: Zing Choice",
    singer: "Masew, Hoaprox, K-ICM...",
  },
];

function Remix() {
  return (
    <div className="wrapper-want-listen parent-four-card">
      <div className="title-explore">Remix</div>
      <div className="all-in">
        <div className="title-parent-four-card">Tất Cả</div>
        <i className="fa-solid fa-chevron-right"></i>
      </div>
      <FormFourCard data={list} />
    </div>
  );
}

export default Remix;
