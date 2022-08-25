import React from "react";
import listGenres from "../../middleware/GenresListImage";

const {
  pop,
  asiaop,
  blues,
  country,
  eastern,
  soul,
  folk,
  hiphop,
  jazz,
  latin,
  popular,
  rb,
  rock,
  traditional,
} = listGenres;

const LIST = [
  {
    title: "Pop",
    img: "https://photo-playlist-zmp3.zmdcdn.me/v2/mixartist?src=HavwqN7EzbiAH2wA9yxoIL53SyWdpF8SKK5jo6pFeK03GJt6QSoZ4WOGQvfipgCRLnCzdZt1yXrG13RTRisqJqD3OeiuakveBZO2aKuYVG&cv=1&size=thumb/240_240",
  },
  {
    title: "Music of Asiaop",
    img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/9/8/0/f/980fe220bd14602b466aeca6c0f8ba97.jpg",
  },
  {
    title: "Blues",
    img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/6/0/6/4/606430a29783ea7f864de569bb8a45d0.jpg",
  },
  {
    title: "Country",
    img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/e/d/2/5/ed251cf560be4747e7737b535c357f07.jpg",
  },
  {
    title: "Soul music",
    img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/charts_cover/bxh-song-viet-nam-tuan.0.1.jpg",
  },
  {
    title: "Folk music",
    img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/7/2/b/4/72b446de1eabf96117d4a5894083a4a2.jpg",
  },
  {
    title: "Jazz",
    img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/9/8/0/f/980fe220bd14602b466aeca6c0f8ba97.jpg",
  },
];

function RecentlyExplore() {
  return (
    <div className="wrapper-recently-explore">
      <div className="title-recently">Gan day</div>
      <div className="wrapper-content-recently">
        {LIST.map((item, index) => (
          <div key={index} className="wrapper-item-recently">
            <div className="image">
              <img src={item.img} alt={item.title} />
            </div>
            <div className="title-song">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentlyExplore;
