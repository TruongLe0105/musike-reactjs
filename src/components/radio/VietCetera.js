import React from "react";
import FormFourCard from "../FormFourCard";
import HeaderFourCard from "../HeaderFourCard";

const list = [
  {
    img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/avatars/7/4/0/4/74044ca53f3dc2deecaeafbdb1431e84.jpg",
    title: "Lắp Ráp",
  },
  {
    img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/avatars/b/a/b/5/bab5d17e815685dcc9cdbafee776eb3b.jpg",
    title: "Dế mèn du ký",
  },
  {
    img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/avatars/d/f/4/d/df4dee2ffd04216b5507cbc63d40c84c.jpg",
    title: "Gen Z Truyền",
  },
  {
    img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/avatars/5/3/9/c/539c20fc3f3455d7443f0b1cf2e45836.jpg",
    title: "Cast Camp 2022",
  },
];

function Vietcetera() {
  return (
    <div className="wrapper-want-listen wrapper-vietcetera">
      <HeaderFourCard
        topic="PODCAST"
        title="Vietcetera"
        img="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/d/c/5/b/dc5b49e6cb115ee1d3fa0bf749a2efd1.jpg"
      />
      <FormFourCard data={list} none_icon={true} />
    </div>
  );
}

export default Vietcetera;
