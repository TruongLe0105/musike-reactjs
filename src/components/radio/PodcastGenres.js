import React from "react";

const data = [
  {
    image: "https://photo-resize-zmp3.zmdcdn.me/w320_r16x9_webp/banner/2/8/7/0/28700b2057fd36c92742b3015b263b7d.jpg",
  },
  {
    image: "https://photo-resize-zmp3.zmdcdn.me/w320_r16x9_webp/banner/a/f/6/5/af6588f6d58fbfbb68f4231441801c15.jpg",
  },
  {
    image: "https://photo-resize-zmp3.zmdcdn.me/w320_r16x9_webp/banner/8/6/7/1/8671a1447b5088d30c8dce06a3b2e24c.jpg",
  },
  {
    image: "https://photo-resize-zmp3.zmdcdn.me/w320_r16x9_webp/banner/a/1/1/0/a110a3cf4fee745f20be4b04d9fbfa4a.jpg",
  },
];

function PodcastGenres() {
  return (
    <div className="wrapper-want-listen wrapper-podcast-genres">
      <div className="title-explore" style={{ margin: 0 }}>
        Thể Loại Podcast
      </div>
      <div className="wrapper-four-card">
        {data.map((item, index) => (
          <div key={index} className="img-podcast-genres">
            <img src={item?.image} alt="img" className="img" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PodcastGenres;
