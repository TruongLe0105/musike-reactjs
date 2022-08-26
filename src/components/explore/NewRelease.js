import React, { useState } from "react";
import SingerList from "../../middleware/NextSongListImage";
import { sliceTextExplore } from "../../utils/Format";
import { OptionButton } from "../Button";

const { bieber, rising, davis, madness, mode, moonlight, adele } = SingerList;

const LIST = [
  {
    song: "Cao oc tren con duong dai gi do",
    singer: "KoQuet",
    image: bieber,
    update: "Hom nay",
  },
  {
    song: "Hen em kiep sau",
    singer: "For5",
    image: rising,
    update: "Hom qua",
  },
  {
    song: "Congrat",
    singer: "Lany",
    image: davis,
    update: "2 ngay truoc",
  },
  {
    song: "Uoc gi",
    singer: "KoQuet",
    image: madness,
    update: "3 ngay truoc",
  },
  {
    song: "Gap lai co ta con dau dau",
    singer: "KoQuet",
    image: mode,
    update: "Hom nay",
  },
  {
    song: "hen",
    singer: "KoQuet",
    image: moonlight,
    update: "Hom nay",
  },
  {
    song: "hen",
    singer: "KoQuet",
    image: adele,
    update: "Hom nay",
  },
  {
    song: "hen",
    singer: "KoQuet",
    image: moonlight,
    update: "Hom nay",
  },
  {
    song: "hen",
    singer: "KoQuet",
    image: mode,
    update: "Hom nay",
  },
  {
    song: "hen",
    singer: "KoQuet",
    image: madness,
    update: "Hom nay",
  },
  {
    song: "hen",
    singer: "KoQuet",
    image: bieber,
    update: "Hom nay",
  },
  {
    song: "hen",
    singer: "KoQuet",
    image: mode,
    update: "Hom nay",
  },
];

function NewRelease() {
  const [active, setActive] = useState("song");
  const handleClickActive = (title) => {
    console.log("first", title);
    setActive(title);
  };
  return (
    <div className="container-release">
      <div className="release-title">New Release</div>
      <div className="wrapper-content-release">
        <div className="wrapper-item-release">
          <div
            onClick={() => handleClickActive("song")}
            className="item-release"
            style={{
              backgroundColor: active === "song" ? "red" : "transparent",
            }}
          >
            Song
          </div>
          <div
            onClick={() => handleClickActive("album")}
            className="item-release"
            style={{
              backgroundColor: active === "album" ? "red" : "transparent",
            }}
          >
            Album
          </div>
          <div className="wrapper-item-right-release">
            <div>All</div>
            <i className="fa-solid fa-chevron-right"></i>
          </div>
        </div>
      </div>
      <div className="wrapper-card-release">
        {LIST.map((item, index) => (
          <div key={index} className="item-card-release">
            <div className="image-card-release">
              <img src={item.image} alt={item.singer} />
              <i className="fa-solid fa-play"></i>
            </div>
            <div className="wrapper-content-card-release">
              <div className="title-song-release">
                {sliceTextExplore(item.song)}
              </div>
              <div className="title-singer-release">
                {sliceTextExplore(item.singer)}
              </div>
              <div className="title-update-release">{item.update}</div>
            </div>
            <div className="wrapper_icon icon-release">
              <OptionButton />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewRelease;
