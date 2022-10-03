import React from "react";
import HundredTopRank from "../components/zingcharts/HundredTopRank";

const list = [
  {
    image: "https://res.cloudinary.com/deg3ts6ui/image/upload/v1663121968/hym6otu3nw9f0hdvc3zl.jpg",
    title: "Cứu Vãn Kịp Không",
    singer: "Vương Anh Tú",
  },
  {
    image: "https://res.cloudinary.com/deg3ts6ui/image/upload/v1663121924/b3gtnzsmtfeewlyb3css.jpg",
    title: "LẶNG",
    singer: "Dee Trần",
  },
  {
    image: "https://res.cloudinary.com/deg3ts6ui/image/upload/v1663121889/i8knyqknlfgaeivhap0q.jpg",
    title: "THÂN PHU",
    singer: "SIN THIỆN TÂM X BÌNH BOO X YANKID X HHD",
  },
  {
    image: "https://res.cloudinary.com/deg3ts6ui/image/upload/v1663121835/cxibscfpxc34ddbfb5hv.jpg",
    title: "Em Lấy Chồng",
    singer: "Khắc Việt",
  },
  {
    image: "https://res.cloudinary.com/deg3ts6ui/image/upload/v1663121749/wxhfz1rwlzvog1rdunrm.jpg",
    title: "Kết Thúc Thật Rồi",
    singer: "Đình Nguyễn",
  },
  {
    image: "https://profiledata.net/file/img/media/video-thumb-7141585021617343770.jpeg",
    title: "Sashimi",
    singer: "Chi Pu",
  },
  {
    image: "https://media.viezone.vn/prod/2022/9/6/large_image_3d7a8743dd.png",
    title: "S.T Sơn Thạch",
    singer: "Ngày Thương Tháng Nhớ Năm Đợi",
  },
];

function NewMusic() {
  return (
    <div className="zing-chart-container" style={{ backgroundColor: "rgba(23, 23, 23, 0.91)" }}>
      <div className="bg-music-under">
        <img
          src="https://thumbs.dreamstime.com/b/listen-to-music-clipping-path-xxl-1899245.jpg"
          alt="img"
          className="img"
        />
      </div>
      <HundredTopRank data={list} title="Nhạc Mới" />
    </div>
  );
}

export default NewMusic;
