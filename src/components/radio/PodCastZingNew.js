import React from "react";
import FormFourCard from "../FormFourCard";
import HeaderFourCard from "../HeaderFourCard";

const list = [
  {
    img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/avatars/b/0/d/d/b0dd70786bab81645d73e3b20002117d.jpg",
    title: "How2Money x Doctor Housing",
  },
  {
    img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/avatars/c/d/2/e/cd2ed2f2dc793fee1552dee197913051.jpg",
    title: "Hustle Muscle",
  },
  {
    img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/avatars/5/3/1/9/5319ae22366491f48f42144911590743.jpg",
    title: "The Garage",
  },
  {
    img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/avatars/c/6/3/8/c63816ebfb9576c930b45aa3647e2d88.jpg",
    title: "The Jobs",
  },
];

function PodCastZingNew() {
  return (
    <div className="wrapper-want-listen wrapper-podcast-zingnew">
      <HeaderFourCard
        topic="PODCAST"
        title="Zing News"
        img="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/c/5/0/d/c50d4d1a7b1feddf7c7421d5f059c3fa.jpg"
      />
      <FormFourCard data={list} none_icon={true} />
    </div>
  );
}

export default PodCastZingNew;
