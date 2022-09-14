import React from "react";
import FormFourCard from "../FormFourCard";

const list = [
  {
    img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/1/5/9/2/159226aaebc0421c28d4921c041dc862.jpg",
    title: "Bolero Hay Nhất",
    singer: "Phi Nhung, Mạnh Quỳnh, Như Quỳnh...",
  },
  {
    img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/d/3/3/1/d3310ad4b327ba7376372b27aceb84c0.jpg",
    title: "The Best Of Bolero",
    singer: "Chế Linh, Sơn Tuyền, Giao Linh...",
  },
  {
    img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/7/0/3/3703919ff124947c746c2c4e59571a5a.jpg",
    title: "Bolero Mới Nhất",
    singer: "Khưu Huy Vũ, Khương Hồng Loan, Mạnh Quỳnh...",
  },
  {
    img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/5/9/0/a/590a01102315b5f03c85a69ddcc369ce.jpg",
    title: "Nhạc Quê Hương Hôm Nay",
    singer: "Tố My, Khưu Huy Vũ, Lưu Ánh Loan...",
  },
];

function RomanticAndBolero() {
  return (
    <div
      className="wrapper-want-listen parent-four-card"
      style={{ marginTop: "1rem" }}
    >
      <div className="title-explore">Trữ Tình Và Bolero</div>
      <div className="all-in">
        <div className="title-parent-four-card">Tất Cả</div>
        <i className="fa-solid fa-chevron-right"></i>
      </div>
      <FormFourCard data={list} />
    </div>
  );
}

export default RomanticAndBolero;
