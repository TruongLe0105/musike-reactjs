import React from "react";

const listSong = [
  {
    image: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/2/2/7/5/2275dda526935755fc51b587e08e1d7e.jpg",
    singer: "Đình Dũng, ...",
    song: "Nhìn Về Phía Em",
    percent: "42%",
  },
  {
    image: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/b/0/c/8/b0c8399ab4bf53e7eb1285ee1e8aaa32.jpg",
    singer: "Khang việt",
    song: "Em Nên Dừng Lại",
    percent: "31%",
  },
  {
    image: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/1/e/4/c/1e4cbb712a766f626e10bfebf5383591.jpg",
    singer: "Nal, CT",
    song: "Dang Dở",
    percent: "27%",
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
                <div className="index">{index + 1}</div>
                <div className="wrapper-item-left">
                  <div className="img-zing">
                    <div className="bg-top" />
                    <img src={item?.image} alt="img" className="img" />
                    <i className="fa-solid fa-play" />
                  </div>
                  <div className="content-zing">
                    <div className="song">{item.song}</div>
                    <a
                      href="/#"
                      className="singer link"
                      title={item.singer}
                    >
                      {item.singer}
                    </a>
                  </div>
                </div>
                <div className="percent">{item.percent}</div>
              </div>
            ))}
            <div className="btn-zing">Xem thêm</div>
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
