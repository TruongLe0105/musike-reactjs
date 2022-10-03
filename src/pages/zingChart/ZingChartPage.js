import React from 'react';
import HundredTopRank from '../../components/zingcharts/HundredTopRank';
import "../../components/css/zingchart.css";
import TopWeekRank from '../../components/zingcharts/TopWeekRank';


const topRank = [
  {
    image: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/2/2/7/5/2275dda526935755fc51b587e08e1d7e.jpg",
    title: "Nhìn Về Phía Em",
    singer: "Đình Dũng, Minh Vương M4U, ACV",
    time: "05.30",
  },
  {
    image: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/b/0/c/8/b0c8399ab4bf53e7eb1285ee1e8aaa32.jpg",
    title: "Em Nên Dừng Lại",
    singer: "Khang Việt",
    time: "05.30",
  },
  {
    image: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/1/e/4/c/1e4cbb712a766f626e10bfebf5383591.jpg",
    title: "Dang Dở",
    singer: "Nal",
    time: "05.30",
  },
  {
    image: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/5/7/e/8/57e8551b2dae93bdcc8c8fcb1efa42d2.jpg",
    title: "Mặt Mộc",
    singer: "Phạm Nguyên Ngọc, Vanh, Ân Nhi, BMZ",
    time: "05.30",
  },
  {
    image: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/7/1/a/d/71adfd9bf22ced6fbe5f36806fd2d030.jpg",
    title: "Người Đáng Thương Là Anh",
    singer: "Only C",
    time: "05.30",
  },
  {
    image: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/d/f/9/b/df9b187a2b0e565ebe5b6bd60bdef622.jpg",
    title: "Tòng Phu",
    singer: "Keyo",
    time: "05.30",
  },
  {
    image: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/d/d/a/b/ddab06b76708a0722b9a98a7fe4b2ab0.jpg",
    title: "Với Em Anh Chỉ Là",
    singer: "TLong, HOA HỒNG DẠI MUSIC",
    time: "05.30",
  },
  {
    image: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/1/b/8/9/1b8958017b04a663eb8c093905dd4d85.jpg",
    title: "Vì Mẹ Anh Bắt Chia Tay",
    singer: "Miu Lê, Karik, Châu Đăng Khoa",
    time: "05.30",
  },
  {
    image: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/8/2/c/9/82c90dc3dc049d31352c9418c7235543.jpg",
    title: "Tay Trái Chỉ Trăng",
    singer: "Dương Hoàng Yến",
    time: "05.30",
  },
  {
    image: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/8/7/7/c/877cd81f44ad324d1d215903d4c18041.jpg",
    title: "Muốn Anh Là Của Em",
    singer: "Kiều Trang, X2X, LY.M",
    time: "05.30",
  },
];

function ZingChartPage() {
  return (
    <div className="zing-chart-container">
      <HundredTopRank data={topRank} collapse={true} />
      <TopWeekRank />
    </div>
  );
}

export default ZingChartPage;