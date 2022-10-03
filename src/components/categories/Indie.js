import React from "react";
import FormFourCard from "../FormFourCard";

const list = [
  {
    image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/1/f/4/b/1f4b795019a5f4c464923e6f297a1e95.jpg",
    title: "Indie Việt",
    singer: "buitruonglinh, Thịnh Suy, Chillies...",
  },
  {
    image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/b/4/7/a/b47ae2e4200b3ed2026722c33ca495fa.jpg",
    title: "Indie Việt Tháng 9/2022",
    singer: "Phạm Nguyễn Ngọc, KoQuet, buitruonglinh...",
  },
  {
    image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/a/0/f/2/a0f22b2de7a06d4abdb0b90b8d3befb9.jpg",
    title: "Indie Việt Kết Hợp",
    singer: "Madihu, Thái Đình, Phạm Nguyễn Ngọc...",
  },
  {
    image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/1/e/0/a/1e0ab531df9182dbe434b9797d624551.jpg",
    title: "Anh EM Ban Nhac Indie Việt",
    singer: "Ngot, The FLob, Meow Lac...",
  },
];

function Indie({ data }) {
  return (
    <div className="wrapper-want-listen parent-four-card">
      <div className="title-explore">Indie</div>
      <div className="all-in">
        <div className="title-parent-four-card">Tất Cả</div>
        <i className="fa-solid fa-chevron-right"></i>
      </div>
      <FormFourCard data={data} />
    </div>
  );
}

export default Indie;
