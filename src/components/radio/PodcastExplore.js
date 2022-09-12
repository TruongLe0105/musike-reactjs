import React from "react";

const data = [
  {
    img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/avatars/f/8/4/c/f84c36fa27e1243a86d48ec87bab01d0.jpg",
    title: "Đắp Chăn Nằm Nghe Tun Kể",
  },
  {
    img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/6/7/8/4/678408238d07e2012027a96bff12d196.jpg",
    title: "XONE with Stars",
  },
  {
    img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/avatars/b/0/d/d/b0dd70786bab81645d73e3b20002117d.jpg",
    title: "How2Money x Doctor Housing",
  },
  {
    img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/avatars/0/d/b/1/0db18352212495c489e270b229a79216.jpg",
    title: "HIEU.TV",
  },
];

function PodcastExplore() {
  return (
    <div className="wrapper-want-listen wrapper-podcast">
      <div className="title-explore">Có Thể Bạn Muốn Nghe</div>
      <div className="wrapper-four-card">
        {data.map((item, index) => (
          <div className="wrapper-item-card" key={index}>
            <div className="item-card">
              <div className="wrapper-img">
                <img
                  src={item.img}
                  alt={item.title}
                  className="img"
                  style={{ opacity: 1 }}
                />
              </div>
            </div>
            <a href="#" className="title-card" title={item.title}>
              {item.title}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PodcastExplore;
