import React from "react";
import { useSelector } from "react-redux";

const list = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMpqXw5iaGaVzqT9SJT-zTdCGbPLl8npA0TQ&usqp=CAU",
    title: "CÀ PHÊ",
    banners: [
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/2/1/a/3/21a3f531321095bf9ef815bb00a26b27.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/2/c/c/32cc55e88eaed622d81072a3f0e89ceb.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/4/5/d/0/45d0623a95d382c0287038631e561965.jpg",
    ],
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlBWPUbxxJhagPTPztMYKZ94E-eisIAhbwSg&usqp=CAU",
    title: "SPA - YOGA",
    banners: [
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/6/7/0/f/670f2846fbafcd6cac859fc35debaa98.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/f/0/c/ff0c7e32e0e2cb133839ab14cda1f377.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/e/6/4/d/e64de85e8c9283de2d19c80631f7bbbb.jpg",
    ],
  },
  {
    img: "https://res.cloudinary.com/deg3ts6ui/image/upload/v1663128657/sheog9n3gisie55qgynv.jpg",
    title: "DRIVING",
    banners: [
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/b/f/9/3/bf93f8be9b1c0eccf8ed4e3302469cf8.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/4/2/1/9/4219d11c50c6e608a78642eefd78f473.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/5/1/f/4/51f46215a19e197dd9c2ee8cd866e292.jpg",
    ],
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQrqF_iw-G-uwrugUogK5DHxo-49OOX8-Rog&usqp=CAU",
    title: "WORKOUT",
    banners: [
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/1/2/5/f125ea6135af87b56dc10d3125fa68cd.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/4/a/7/b/4a7b7a5e95463973edc800dcc51ffda2.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/e/3/3/c/e33c610b13a496e649e2df6f11e58c92.jpg",
    ],
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW4C0yJg3vYMxjz6xx4P3Olb7bxUxQ5fo8YA&usqp=CAU",
    title: "TẬP TRUNG",
    banners: [
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/8/f/a/38fa3aa5236ba7b1a1efb1f446ef0370.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/5/c/2/6/5c268eb2511045a2a52c336bbda20514.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/c/0/5/3c05212cdf8e866f312b762dc3ccb3e3.jpg",
    ],
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS90m87Ou9m5Pkvi-UXjKvMVO1Fs7467lwVkg&usqp=CAU",
    title: "GIAI ĐIỆU BUỒN",
    banners: [
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/a/b/d/6/abd6bf7472c7cd6c9b36f10eda5af0a8.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/a/4/b/3/a4b379990f1d48c01857c93e8f86be88.jpg",
      "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/d/d/1/2/dd125d6dce76835f6d85f754ec9ae705.jpg",
    ],
  },
];


function MoodAndAction({ data }) {
  return (
    <div className="wrapper-mood-action">
      <div
        className="title-explore"
        style={{ margin: 0, marginBottom: "2rem" }}
      >
        Tâm Trạng Và Hoạt Động
      </div>
      <div className="wrapper-card-mood">
        {data?.map((item, index) => (
          <div key={index} className="wrapper-item-mood">
            <img src={item?.image} alt="img" className="img-bigest" />
            <div className="title-mood">{item?.title}</div>
            <div className="wrapper-img-smaller">
              <img src={item?.banner_first} alt="img" className="img" />
              <img src={item?.banner_second} alt="img" className="img" />
              <img src={item?.banner_third} alt="img" className="img" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoodAndAction;
