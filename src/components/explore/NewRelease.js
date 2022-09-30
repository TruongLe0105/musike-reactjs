import React, { useEffect, useState } from "react";
import SingerList from "../../middleware/NextSongListImage";
import { sliceText } from "../../utils/Format";
import { OptionButton } from "../Button";

const { bieber, rising, davis, madness, mode, moonlight, adele } = SingerList;

const listSong = [
  {
    image: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/2/2/7/5/2275dda526935755fc51b587e08e1d7e.jpg",
    song: "Nhìn Về Phía Em",
    singer: "Đình Dũng, Minh Vương M4U, ACV",
    update: "2 ngày trước",
  },
  {
    image: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/b/0/c/8/b0c8399ab4bf53e7eb1285ee1e8aaa32.jpg",
    song: "Em Nên Dừng Lại",
    singer: "Khang Việt",
    update: "2 ngày trước",
  },
  {
    image: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/1/e/4/c/1e4cbb712a766f626e10bfebf5383591.jpg",
    song: "Dang Dở",
    singer: "Nal",
    update: "2 ngày trước",
  },
  {
    image: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/7/1/a/d/71adfd9bf22ced6fbe5f36806fd2d030.jpg",
    song: "Người Đáng Thương Là Anh",
    singer: "Only C",
    update: "2 ngày trước",
  },
  {
    image: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/6/6/6/6/6666a578871d82ca07115a59557bee58.jpg",
    song: "Chia Tay Là Giải Pháp",
    singer: "Hương Ly, LY.M",
    update: "2 ngày trước",
  },
  {
    image: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/3/5/5/c/355c9290d8b91bcf9f843b792fa05e8f.jpg",
    song: "As It Was",
    singer: "Harry Styles",
    update: "2 ngày trước",
  },
  {
    image: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/a/5/d/4/a5d4060bfab1b686699f7d195f7ef820.jpg",
    song: "BREAK MY SOUL",
    singer: "Beyoncé",
    update: "2 ngày trước",
  },
  {
    image: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/1/0/1/d/101d2a6f56e5a93411f517b22667b3cb.jpg",
    song: "Running Up That Hill (A Deal With God)",
    singer: "Kate Bush",
    update: "2 ngày trước",
  },
  {
    image: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/2/8/e/8/28e86a86ff85e7f5651fb4a4dbd095d5.jpg",
    song: "Bad Habit",
    singer: "Steve Lacy",
    update: "2 ngày trước",
  },
  {
    image: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/1/c/b/5/1cb5a096eb37d863d5c510ced988d10c.jpg",
    song: "Sunroof",
    singer: "Nicky Youre, Dazy",
    update: "2 ngày trước",
  },
  {
    image: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/d/0/4/7/d047219f93a47e5341c07d37212e2258.jpg",
    song: "Attention",
    singer: "NewJeans",
    update: "2 ngày trước",
  },
  {
    image: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/d/c/6/c/dc6c1b9c8765379715fe6511018167b3.jpg",
    song: "Pink Venom",
    singer: "BLACKPINK",
    update: "2 ngày trước",
  },
];

const listAlbum = [
  {
    song: "Circle Of Love (EP)",
    singer: "TiA",
    image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/4/9/0/f/490f5fc395380a2d7a8525a8b7c39b90.jpg",
    update: "Hôm nay",
  },
  {
    song: "Queen Radio: Volume 1",
    singer: "Nicky Minaj",
    image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp…over/c/3/3/6/c3368c43cc75a76602cb1a551c5b0ce8.jpg",
    update: "Hôm qua",
  },
  {
    song: "XOXO",
    singer: "CNCO",
    image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/0/e/3/f0e38a48fafc8172d0485fa19a079f0d.jpg",
    update: "2 ngày trước",
  },
  {
    song: "GOD DID",
    singer: "DJ Khaled",
    image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/e/6/5/3e65d4651929e77de5d9e15ebc1d5a8b.jpg",
    update: "3 ngày trước",
  },
  {
    song: "In Loving Memory",
    singer: "BlackBear",
    image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/6/4/5/b/645b80bad3b7eff94a3b2faa904844a9.jpg",
    update: "Hôm nay",
  },
  {
    song: "Vote For 5ive (Live Band)",
    singer: "KoQuet",
    image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/0/f/0/8/0f088de4a998066fe449b7b1493f6f31.jpg",
    update: "Hôm nay",
  },
  {
    song: "Yên (EP)",
    singer: "Hoàng Dũng",
    image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/0/3/6/4/0364c8e28ebb8a7b5f136e41e68cde06.jpg",
    update: "Hôm nay",
  },
  {
    song: "THE LAST LADYKILLAH (EP)",
    singer: "LK",
    image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/6/6/1/3661fef82985df24ce709c62607520e2.jpg",
    update: "Hôm nay",
  },
  {
    song: "After LIKE (EP)",
    singer: "IVE",
    image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/b/2/8/0/b28051f4e2140d95b9cac5ccb0d739e9.jpg",
    update: "Hôm nay",
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
              <a
                href="/#"
                className="title-singer-release link-detail"
              >
                {sliceText(item.singer, index, hover, 15)}
              </a>
              <div className="title-update-release">{item.update}</div>
            </div>
            <div className="wrapper_icon icon-release">
              <OptionButton />
            </div>
          </div>
        ))}
      </div>
    );
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
                <a href="/#" className="link-detail title-singer-release">
                  {sliceText(item.singer, index, hover, 15)}
                </a>
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
