import React from "react";

const listSong = [
  {
    img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/b/9/4/fb94844bebd26a78cdcb9d4d72b1381b.jpg",
    singer: "Dinh Dung, ...",
    song: "Nhin ve phia em",
  },
  {
    img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/c/0/5/9/c0593c7f74b47c91ad95ed2311ab2614.jpg",
    singer: "Khang Viet",
    song: "Em nen dung lai",
  },
  {
    img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/a/e/5/5/ae5508b3140865732fad562ac7d4153b.jpg",
    singer: "Nal, CT",
    song: "Dang Do",
  },
];

const listBanner = [
  "https://zmp3-static.zmdcdn.me/skins/zmp3-v5.2/images/web_song_usuk.jpg",
  "https://zmp3-static.zmdcdn.me/skins/zmp3-v5.2/images/web_song_kpop.jpg",
  "https://zmp3-static.zmdcdn.me/skins/zmp3-v5.2/images/song-vn-2x.jpg",
];

function ZingChart() {
  return (
    <div className="wrapper-zing-chart">
      <div className="img-bg">
        <img
          src="https://thumbs.dreamstime.com/b/listen-to-music-clipping-path-xxl-1899245.jpg"
          alt="img"
        />
      </div>
      <div className="zing-chart">
        <div className="item-zing-img">
          <div className="header-zing">
            <div className="title-zing">#zingchart</div>
            <div className="icon-zing">
              <i className="fa-solid fa-play" />
            </div>
          </div>
          <div className="wrapper-img-zing">
            {listSong.map((item, index) => (
              <div className="img-item-zing" key={index}>
                <div className="index">{index}</div>
                <div className="wrapper-item-left">
                  <div className="img-zing">
                    <div className="bg-top" />
                    <img src={item.img} alt="img" className="img" />
                    <i className="fa-solid fa-play" />
                  </div>
                  <div className="content-zing">
                    <div className="song">{item.song}</div>
                    <div className="singer">{item.singer}</div>
                  </div>
                </div>
                <div className="percent">100%</div>
              </div>
            ))}
            <div className="btn-zing">Xem them</div>
          </div>
        </div>
        <div></div>
      </div>
      <div className="wrapper-zing-banner">
        {listBanner.map((item, index) => (
          <div key={index} className="img-banner-zing">
            <img src={item} alt="img" className="img" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ZingChart;
