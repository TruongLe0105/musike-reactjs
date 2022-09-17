import React from 'react';
import { sliceTextRankWeek } from '../../utils/Format';
import { LyricsButton, OptionButton } from '../Button';
import "../../components/css/explore.css";

const rankWeek = {
  VN: [
    {
      img: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/2/2/7/5/2275dda526935755fc51b587e08e1d7e.jpg",
      title: "Nhìn Về Phía Em",
      singer: "Đình Dũng, Minh Vương M4U, ACV",
      time: "05:30",
    },
    {
      img: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/b/0/c/8/b0c8399ab4bf53e7eb1285ee1e8aaa32.jpg",
      title: "Em Nên Dừng Lại",
      singer: "Khang Việt",
      time: "05:30",
    },
    {
      img: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/1/e/4/c/1e4cbb712a766f626e10bfebf5383591.jpg",
      title: "Dang Dở",
      singer: "Nal",
      time: "05:30",
    },
    {
      img: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/7/1/a/d/71adfd9bf22ced6fbe5f36806fd2d030.jpg",
      title: "Người Đáng Thương Là Anh",
      singer: "Only C",
      time: "05:30",
    },
    {
      img: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/6/6/6/6/6666a578871d82ca07115a59557bee58.jpg",
      title: "Chia Tay Là Giải Pháp",
      singer: "Hương Ly, LY.M",
      time: "05:30",
    },
  ],
  US_UK: [
    {
      img: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/3/5/5/c/355c9290d8b91bcf9f843b792fa05e8f.jpg",
      title: "As It Was",
      singer: "Harry Styles",
      time: "05:30",
    },
    {
      img: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/a/5/d/4/a5d4060bfab1b686699f7d195f7ef820.jpg",
      title: "BREAK MY SOUL",
      singer: "Beyoncé",
      time: "05:30",
    },
    {
      img: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/1/0/1/d/101d2a6f56e5a93411f517b22667b3cb.jpg",
      title: "Running Up That Hill (A Deal With God)",
      singer: "Kate Bush",
      time: "05:30",
    },
    {
      img: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/2/8/e/8/28e86a86ff85e7f5651fb4a4dbd095d5.jpg",
      title: "Bad Habit",
      singer: "Steve Lacy",
      time: "05:30",
    },
    {
      img: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/1/c/b/5/1cb5a096eb37d863d5c510ced988d10c.jpg",
      title: "Sunroof",
      singer: "Nicky Youre, Dazy",
      time: "05:30",
    },
  ],
  K_POP: [
    {
      img: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/d/0/4/7/d047219f93a47e5341c07d37212e2258.jpg",
      title: "Attention",
      singer: "NewJeans",
      time: "05:30",
    },
    {
      img: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/d/c/6/c/dc6c1b9c8765379715fe6511018167b3.jpg",
      title: "Pink Venom",
      singer: "BLACKPINK",
      time: "05:30",
    },
    {
      img: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/b/a/f/f/bafffae35decca90612096d860318fc3.jpg",
      title: "Hype Boy",
      singer: "NewJeans",
      time: "05:30",
    },
    {
      img: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/b/2/8/0/b28051f4e2140d95b9cac5ccb0d739e9.jpg",
      title: "After Like",
      singer: "Ive",
      time: "05:30",
    },
    {
      img: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/3/7/b/a/37ba4863a63cac65b2b0abf3c11ab125.jpg",
      title: "FOREVER 1",
      singer: "SNSD",
      time: "05:30",
    },
  ],
};

function TopWeekRank() {
  const RankWeek = ({ data, title }) => {
    return (
      <div className="rank-week-card">
        <div className="title-country">{title}</div>
        <div>
          {data.map((item, index) => (
            <div key={index} className="wrapper-item-week">
              <div className="index">{index + 1}</div>
              <div className="strikethrough">_</div>
              <div className="content-left">
                <div className="wrapper-img wrapper-img-week">
                  <img src={item.img} alt="zing-chart" className="img" />
                  <div className="bg-black" />
                  <i className="fa-solid fa-play" />
                </div>
                <div>
                  <div className="title-content">
                    {sliceTextRankWeek(item.title)}
                  </div>
                  <a href="/#" className="link">{sliceTextRankWeek(item.singer)}</a>
                </div>
              </div>
              <div className="time">{item.time}</div>
              <div className="wrapper_icon icon-group">
                <LyricsButton />
                <OptionButton />
              </div>
            </div>
          ))}
        </div>
        <div className="btn-week-rank">Xem Tất Cả</div>
      </div>
    );
  };

  return (
    <div className="bg-zing-chart">
      <div className="img-bg">
        <img
          src="https://thumbs.dreamstime.com/b/listen-to-music-clipping-path-xxl-1899245.jpg"
          alt="img"
          className="img"
        />
      </div>
      <div className="wrapper-rank-week">
        <div className="title-week-rank">Bảng Xếp Hạng Tuần</div>
        <div className="rank-week">
          <RankWeek data={rankWeek.VN} title="Việt Nam" />
          <RankWeek data={rankWeek.US_UK} title="US-UK" />
          <RankWeek data={rankWeek.K_POP} title="K-POP" />
        </div>
      </div>
    </div>
  );
}

export default TopWeekRank