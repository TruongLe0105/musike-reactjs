import React from "react";
import FormFourCard from "../FormFourCard";
import HeaderFourCard from "../HeaderFourCard";

const list = [
  {
    img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/avatars/2/3/d/a/23daad169c81ca520c879126667207d1.jpg",
    title: "Nhạc Mới Mỗi Ngày",
  },
  {
    img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/avatars/6/4/1/9/64190f5f2e6a8a3832dcf8cdf3477af3.jpg",
    title: "Artist's Story",
  },
  {
    img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/avatars/a/5/1/e/a51e13ca5c908dd9201a109575f15311.jpg",
    title: "Wazzup",
  },
  {
    img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/avatars/f/b/5/c/fb5cbbc66d4cb773958d7d5a6b42f254.jpg",
    title: "Chạm X Sao",
  },
];

function OneAirRadio() {
  return (
    <div className="wrapper-want-listen wrapper-oneair">
      <HeaderFourCard
        topic="NGHE LẠI"
        title="One Air"
        img="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/8/5/4/0/854010f76bddeefd5f13305a1d6cc8be.jpg"
      />
      <FormFourCard data={list} none_icon={true} />
    </div>
  );
}

export default OneAirRadio;
