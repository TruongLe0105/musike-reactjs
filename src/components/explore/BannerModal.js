import React, { useEffect, useRef, useState } from "react";
import ModalSong from "../../modals/explore/ModalSong";

const list = [
  {
    img: "/static/media/pop.ac740dad02c9c16cd80f.png",
    isModal: false,
  },
  {
    img: "/static/media/hiphop.f827ba8f545bdfa25528.png",
    isModal: false,
  },
  {
    img: "/static/media/blues.f81e1088940f56cc6e16.png",
    song: "Ahihi do ngok",
    singer: "Khang Viet",
    isModal: true,
  },
  {
    img: "/static/media/pop.ac740dad02c9c16cd80f.png",
    isModal: false,
  },
  {
    img: "/static/media/r&b.424b3b1653f5a512198b.png",
    song: "Ahihi do ngok",
    singer: "Khang Viet",
    isModal: true,
  },
];

function BannerModal() {
  const [openModal, setOpenModal] = useState(false);
  const [banners, setBanners] = useState(list.slice(0, 3));
  const [firstIndex, setFirstIndex] = useState(1);
  const bannerIdRef = useRef(null);
  const totalBanner = list?.length;

  const myAnimation = () => {
    bannerIdRef.current = setInterval(() => {
      let secondIndex = firstIndex + 3;
      console.log("firstIndex:", firstIndex);
      console.log("secondIndex:", secondIndex);
      let newBanners = list.slice(firstIndex, secondIndex);
      let newIndex = secondIndex < totalBanner ? firstIndex + 1 : 0;
      setFirstIndex(newIndex);
      setBanners(newBanners);
    }, 3000);
  };

  const handlePrevBanner = () => {
    if (firstIndex > 0) {
      setFirstIndex(firstIndex - 1);
    } else {
      const newIndex = totalBanner - 3;
      setFirstIndex(newIndex);
    }
    let newBanners = list.slice(firstIndex, firstIndex + 3);
    setBanners(newBanners);
  };

  const handleNextBanner = () => {
    if (firstIndex < totalBanner - 3) {
      setFirstIndex(firstIndex + 1);
    } else {
      setFirstIndex(0);
    }
    let newBanners = list.slice(firstIndex, firstIndex + 3);
    setBanners(newBanners);
  };

  useEffect(() => {
    myAnimation();
    return () => clearInterval(bannerIdRef.current);
  }, [firstIndex]);

  return (
    <div className="wrapper-banner-modal">
      <div onClick={handlePrevBanner} className="chevron chevron-left">
        <i className="fa-solid fa-chevron-left"></i>
      </div>
      {banners?.map((item, index) => (
        <div className="banner-item" key={index}>
          {item.isModal ? (
            <div>
              <div className="banner-img">
                <img src={item.img} alt="img" width="100%" height="100%" />
              </div>
              {openModal && <ModalSong item={item} />}
            </div>
          ) : (
            <div className="banner-img">
              <img src={item.img} alt="img" width="100%" height="100%" />
            </div>
          )}
        </div>
      ))}
      <div onClick={handleNextBanner} className="chevron chevron-right">
        <i className="fa-solid fa-chevron-right"></i>
      </div>
    </div>
  );
}

export default BannerModal;
