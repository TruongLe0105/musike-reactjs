import React from "react";
import FormFourCard from "../FormFourCard";

const list = [
  {
    img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/0/9/a/6/09a67821361aadba6226104e0fc4728d.jpg",
    title: "Nhạc Phim Âu Mỹ Bất Hủ",
    singer: "Celine Dion, Whitney Houston, Elton John...",
  },
  {
    img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/6/1/2/1/6121a5abd4726bfa37686ec90be2694d.jpg",
    title: "Nhạc Phim Cung Đấu Hay Nhất",
    singer: "Luc Hổ Diêu Bối Na, Quan Cúc Anh",
  },
  {
    img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/2/b/1/8/2b18e75cc9e06df7a191be1cd19c0760.jpg",
    title: "Nhạc Phim Âu My Vui Nhộn",
    singer: "Britney Spears, Jutin Timberlake, Adam Levine...",
  },
  {
    img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/a/a/f/7/aaf756250f94cb8989c650d010fdf20f.jpg",
    title: "Nhạc Phim Hoa Ngữ Bất Hủ",
    singer: "Triệu Vy, Cổ Cự Cơ, Lâm Tâm Như...",
  },
];

function MusicFilm() {
  return (
    <div className="wrapper-want-listen parent-four-card">
      <div className="title-explore">Nhạc Phim</div>
      <div className="all-in">
        <div className="title-parent-four-card">Tất Cả</div>
        <i className="fa-solid fa-chevron-right"></i>
      </div>
      <FormFourCard data={list} />
    </div>
  );
}

export default MusicFilm;
