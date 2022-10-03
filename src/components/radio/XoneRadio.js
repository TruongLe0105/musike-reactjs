import React from "react";
import FormFourCard from "../FormFourCard";
import HeaderFourCard from "../HeaderFourCard";

const list = [
  {
    image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/c/4/a/7/c4a71caee540fcabb74222728e4547ef.jpg",
    title: "DRIVEXONE",
  },
  {
    image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/7/6/c/6/76c6c02c561b6b37fe31a6084b346d5f.jpg",
    title: "INSIDE JOBS",
  },
  {
    image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/0/a/0/e/0a0edf50897f7027ed997643e803fb40.jpg",
    title: "BREAKFASTXONE",
  },
  {
    image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/6/7/8/4/678408238d07e2012027a96bff12d196.jpg",
    title: "XONE With Stars",
  },
];

function XoneRadio() {
  return (
    <div className="wrapper-want-listen wrapper-xone-radio">
      <HeaderFourCard
        topic="NGHE LẠI"
        title="XONE Radio"
        img="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/0/8/2/5/0825d8cd559dee502625a25d540c636a.jpg"
      />
      <FormFourCard data={list} none_icon={true} />
    </div>
  );
}

export default XoneRadio;
