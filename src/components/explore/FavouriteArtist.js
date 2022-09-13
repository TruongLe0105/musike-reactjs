import React from "react";
import FormFourCard from "../FormFourCard";

function FavouriteArtist() {
  const list = [
    {
      img: "https://avatar-ex-swe.nixcdn.com/singer/avatar/2019/07/22/f/e/a/2/1563758181487_600.jpg",
      singer: "JustaTee",
      listImg: [
        "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/covers/3/4/34b2e5792d3f467216560a317a6ff7f2_1460691568.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/9/d/5/c/9d5c56a277a06a48ec7956a4fd17e4c1.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/0/3/a/c/03ac82cbf720ea5d24129dc5a2bb5bbe.jpg",
      ],
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhbKsuEy-j3ZOMwHLW9e9aiBsBZq1R5KVj_g&usqp=CAU",
      singer: "Trinh thag binh",
      listImg: [
        "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/4/d/b/d/4dbd67a17030e72c036a9f98bd7ca325.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/7/4/9/b/749ba06d29317d07bdbd2617808b8a7f.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/covers/c/a/ca79cd05ebbc2de2536374d3a710df85_1356577120.jpg",
      ],
    },
    {
      img: "https://image.thanhnien.vn/w660/Uploaded/2022/mftum/2021_05_25/anhchupmanhinh2021-05-25luc180229_emcg.png",
      singer: "Chi Dan",
      listImg: [
        "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/2/9/1/b/291b5a81f266d588cf4344766676a140.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/covers/0/8/08a11249f52a266fb8a8b6802650d017_1408435289.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/avatars/0/5/054188d065af18577d13b30eaaa0bb4d_1464761489.jpg",
      ],
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4X1nz98pAl7bK-S88_GD9zsvHm_lJ_hVbag&usqp=CAU",
      singer: "MIN",
      listImg: [
        "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/2/7/d/9/27d9bf0671538484ddc719c125cba369.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/0/3/a/c/03ac82cbf720ea5d24129dc5a2bb5bbe.jpg",
        "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/0/3/a/c/03ac82cbf720ea5d24129dc5a2bb5bbe.jpg",
      ],
    },
  ];
  return (
    <div className="wrapper-want-listen">
      <div className="title-explore">Nghệ Sĩ Yêu Thích</div>
      <div className="wrapper-four-card">
        {list.map((item, index) => (
          <div key={index} className="wrapper-item-card">
            {/* <div className="bg-full-img" /> */}
            <div className="item-card item-favourite">
              <div className="wrapper-img">
                <img src={item.img} alt={item.singer} className="img" />
              </div>
              <div className="wrapper_icon wrapper-icon">
                <i className="fa-solid fa-play"></i>
              </div>
              <div className="img-group">
                <img src={item.listImg[0]} alt="img" className="img-inside" />
                <img src={item.listImg[1]} alt="img" className="img-inside" />
                <img src={item.listImg[2]} alt="img" className="img-inside" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavouriteArtist;
