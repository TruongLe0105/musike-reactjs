import React, { useEffect, useState } from "react";
import SingerList from "../../middleware/NextSongListImage";
import { sliceText } from "../../utils/Format";
import { OptionButton } from "../Button";

const { bieber, rising, davis, madness, mode, moonlight, adele } = SingerList;

const listSong = [
  {
    song: "Cao oc tren con duong dai gi do do do",
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

const listAlbum = [
  {
    song: "Circle of love (EP)",
    singer: "TiA",
    image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/4/9/0/f/490f5fc395380a2d7a8525a8b7c39b90.jpg",
    update: "Hom nay",
  },
  {
    song: "Queen radio: volume 1",
    singer: "Nicky Minaj",
    image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp…over/c/3/3/6/c3368c43cc75a76602cb1a551c5b0ce8.jpg",
    update: "Hom qua",
  },
  {
    song: "XOXO",
    singer: "CNCO",
    image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/0/e/3/f0e38a48fafc8172d0485fa19a079f0d.jpg",
    update: "2 ngay truoc",
  },
  {
    song: "GOD DID",
    singer: "DJ Khaled",
    image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/e/6/5/3e65d4651929e77de5d9e15ebc1d5a8b.jpg",
    update: "3 ngay truoc",
  },
  {
    song: "in loving memory",
    singer: "BlackBear",
    image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/6/4/5/b/645b80bad3b7eff94a3b2faa904844a9.jpg",
    update: "Hom nay",
  },
  {
    song: "Vote For 5ive (Live Band)",
    singer: "KoQuet",
    image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/0/f/0/8/0f088de4a998066fe449b7b1493f6f31.jpg",
    update: "Hom nay",
  },
  {
    song: "yên (EP)",
    singer: "Hoàng Dũng",
    image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/0/3/6/4/0364c8e28ebb8a7b5f136e41e68cde06.jpg",
    update: "Hom nay",
  },
  {
    song: "THE LAST LADYKILLAH (EP)",
    singer: "LK",
    image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/6/6/1/3661fef82985df24ce709c62607520e2.jpg",
    update: "Hom nay",
  },
  {
    song: "After LIKE (EP)",
    singer: "IVE",
    image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/b/2/8/0/b28051f4e2140d95b9cac5ccb0d739e9.jpg",
    update: "Hom nay",
  },
];

function NewRelease() {
  const [active, setActive] = useState("song");
  const [hover, setHover] = useState(null);

  const handleClickActive = (title) => {
    setActive(title);
  };

  const onMouseOverItem = (index) => {
    setHover(index);
  }
  const onMouseDownItem = () => {
    setHover(null);
  }

  //Components
  const Songs = () => {
    return (
      <div className="wrapper-card-release">
        {listSong.map((item, index) => (
          <div
            key={index}
            className="item-card-release"
            onMouseOver={() => onMouseOverItem(index)}
            onMouseLeave={onMouseDownItem}
          >
            <div className="image-card-release">
              <img src={item.image} alt={item.singer} className="img" />
              <i className="fa-solid fa-play"></i>
            </div>
            <div className="wrapper-content-card-release">
              <div className="title-song-release">
                {sliceText(item.song, index, hover, 15)}
              </div>
              <div className="title-singer-release">
                {sliceText(item.singer, index, hover, 15)}
              </div>
              <div className="title-update-release">{item.update}</div>
            </div>
            <div className="wrapper_icon icon-release">
              <OptionButton />
            </div>
          </div>
        ))}
      </div>
    )
  };

  const Albums = () => {
    return (
      <div className="wrapper-card-release">
        {
          listAlbum.map((item, index) => (
            <div
              key={index}
              className="item-card-release"
              onMouseOver={() => onMouseOverItem(index)}
              onMouseLeave={onMouseDownItem}
            >
              <div className="image-card-release image-card-album-release">
                <img
                  src={item.image}
                  alt={item.singer}
                  className="img-top"
                />
                <img
                  src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/album-disk.png"
                  alt=""
                  className="img-bot"
                />
                <i className="fa-solid fa-play"></i>
              </div>
              <div className="wrapper-content-card-release">
                <div className="title-song-release">
                  {sliceText(item.song, index, hover, 15)}
                </div>
                <div className="title-singer-release">
                  {sliceText(item.singer, index, hover, 15)}
                </div>
                <div className="title-update-release">{item.update}</div>
              </div>
              <div className="wrapper_icon icon-release">
                <OptionButton />
              </div>
            </div>
          ))
        }
      </div>
    )
  }

  return (
    <div className="container-release">
      <div className="title-explore">Mới Phát Hành</div>
      <div className="wrapper-content-release">
        <div className="wrapper-item-release">
          <div className="wrapper-item-right-release">
            <div>Tất cả</div>
            <i className="fa-solid fa-chevron-right"></i>
          </div>
          <div
            onClick={() => handleClickActive("song")}
            className="item-release"
            style={{
              backgroundColor: active === "song" ? "red" : "transparent",
            }}
          >
            Bài hát
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
        </div>
      </div>
      {active === "song" ? <Songs /> : <Albums />}
    </div>
  );
}

export default NewRelease;
