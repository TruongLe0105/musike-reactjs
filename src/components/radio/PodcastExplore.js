import React from "react";
import FormFourCard from "../FormFourCard";

const list = [
  {
    image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/avatars/f/8/4/c/f84c36fa27e1243a86d48ec87bab01d0.jpg",
    title: "Đắp Chăn Nằm Nghe Tun Kể",
  },
  {
    image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/6/7/8/4/678408238d07e2012027a96bff12d196.jpg",
    title: "XONE with Stars",
  },
  {
    image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/avatars/b/0/d/d/b0dd70786bab81645d73e3b20002117d.jpg",
    title: "How2Money x Doctor Housing",
  },
  {
    image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/avatars/0/d/b/1/0db18352212495c489e270b229a79216.jpg",
    title: "HIEU.TV",
  },
];

function PodcastExplore() {
  return (
    <div className="wrapper-want-listen wrapper-podcast">
      <div className="title-explore">Có Thể Bạn Muốn Nghe</div>
      <FormFourCard data={list} none_icon={true} />
    </div>
  );
}

export default PodcastExplore;
