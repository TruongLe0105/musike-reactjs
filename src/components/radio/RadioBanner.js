import React, { useEffect, useState } from "react";
import "../../components/css/radio.css";

const list = [
  {
    img: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/0/4/0/9/04090b412a46d4fe3259f83da0e8b7e0.jpg",
    title: "XONE Radio",
    listener: "530 đang nghe",
  },
  {
    img: "https://avatar-ex-swe.nixcdn.com/playlist/2018/07/11/f/3/8/9/1531284472148_500.jpg",
    title: "V-Pop",
    listener: "1k đang nghe",
  },
  {
    img: "https://yt3.ggpht.com/danVRdO3nzyagiD-a0KJ4nugwYzXBhXpmqcUS0aCVV8gaM04SHitw1aeMm_eEQx7Fe-etL7p=s900-c-k-c0x00ffffff-no-rj",
    title: "Chạm",
    listener: "272 đang nghe",
  },
  {
    img: "https://i.pinimg.com/originals/68/52/58/685258a59fe86509645caa9373bb5dea.jpg",
    title: "On-Air",
    listener: "47 đang nghe",
  },
  {
    img: "https://i1.sndcdn.com/avatars-000289495193-9xhjdi-t240x240.jpg",
    title: "Bolero",
    listener: "347 đang nghe",
  },
  {
    img: "https://avatar-ex-swe.nixcdn.com/playlist/2016/12/12/a/9/d/d/1481530161430_500.jpg",
    title: "US-UK",
    listener: "200 đang nghe",
  },
  {
    img: "https://i1.sndcdn.com/avatars-000296280782-1a82nz-t500x500.jpg",
    title: "K-Pop",
    listener: "53 đang nghe",
  },
  {
    img: "https://scontent.fsgn13-4.fna.fbcdn.net/v/t1.6435-9/38521663_1744122055706826_2384949903009775616_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=9tFCC6uBnJwAX82iXnm&_nc_ht=scontent.fsgn13-4.fna&oh=00_AT8N_v8w_PHoJ6GDwAhoRsx0hBBzhLHGcdzA3vx3bAK3Gw&oe=633BFF13",
    title: "The One Radio",
    listener: "44 đang nghe",
  },
  {
    img: "https://media.istockphoto.com/photos/rear-view-of-the-man-sitting-play-acoustic-guitar-on-the-outdoor-a-picture-id1178258274?k=20&m=1178258274&s=612x612&w=0&h=Po4sW_iAcvo83LkAhX1yRC4q4o0kuhs-uvUupmelOlg=",
    title: "Acoustic",
    listener: "374 đang nghe",
  },
  {
    img: "https://thegioimay.org/wp-content/uploads/2021/05/rap-old-skool.jpg",
    title: "Rap Việt",
    listener: "242 đang nghe",
  },
];

function RadioBanner() {
  const [banners, setBanners] = useState(null);
  const [canNext, setCanNext] = useState(true);
  const [canPrev, setCanPrev] = useState(false);

  useEffect(() => {
    if (canNext) {
      setBanners(list.slice(0, 6));
    } else {
      setBanners(list.slice(4));
    }
  }, [canNext]);

  const handlePrev = () => {
    if (canPrev) {
      setCanPrev(false);
      setCanNext(true);
    }
  };

  const handleNext = () => {
    if (canNext) {
      setCanNext(false);
      setCanPrev(true);
    }
  };

  const positionIcon = {
    position: "absolute",
    top: "40%",
    zIndex: 200,
  };

  return (
    <div className="wrapper-banner-audio">
      <div className="img-bg">
        <img
          src="https://thumbs.dreamstime.com/b/listen-to-music-clipping-path-xxl-1899245.jpg"
          alt="img"
          className="img"
        />
      </div>
      <div className="banner-audio-music">
        <div className="container-banner-singer wrapper-item-audio">
          <div
            onClick={handlePrev}
            className={!canPrev ? "disable-left" : "chevron-left"}
            style={positionIcon}
          >
            <i className="fa-solid fa-chevron-left" />
          </div>
          <div
            onClick={handleNext}
            className={!canNext ? "disable-right" : "chevron-right"}
            style={positionIcon}
          >
            <i className="fa-solid fa-chevron-right" />
          </div>
          {banners?.map((item, index) => (
            <div key={index} className="banner-audio">
              <div className="wrapper-img-icon">
                <div className="img-banner-audio">
                  <img src={item.img} alt="audio" className="img" />
                </div>
                <div className="bg-black">
                  <i className="fa-solid fa-play" />
                </div>
              </div>
              <div className="wrapper-content-banner-audio">
                <div className="title-audio">{item.title}</div>
                <div>{item.listener}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RadioBanner;
