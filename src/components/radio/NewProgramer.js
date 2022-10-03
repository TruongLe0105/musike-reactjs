import React from "react";
import FormFourCard from "../FormFourCard";

const list = [
  {
    image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/avatars/4/7/2/4/47243bd2039753b2b300fbee852991a6.jpg",
    title: "Giấc Mơ Định Cư",
  },
  {
    image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/avatars/d/2/e/b/d2ebe46e0b987694c684069fe7c06ce0.jpg",
    title: "Tỉnh Thức Ứng Dụng",
  },
  {
    image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/avatars/f/b/3/f/fb3f0cb4dfaf57a3a1bc285be042662b.jpg",
    title: "Nhà Có Hai Người",
  },
  {
    image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/avatars/4/e/5/7/4e57c7aedcb6f8e2ff5e3bd6ba21550d.jpg",
    title: "Y Radio",
  },
];

function NewProgramer() {
  return (
    <div className="wrapper-want-listen wrapper-podcast">
      <div className="title-explore">Chương Trình Mới</div>
      <FormFourCard data={list} none_icon={true} />
    </div>
  );
}

export default NewProgramer;
