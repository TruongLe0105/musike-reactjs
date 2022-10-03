import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalSong from "../../modals/explore/ModalSong";

const list = [
  {
    image: "https://photo-zmp3.zmdcdn.me/banner/6/9/c/c/69cc57b2dd854ce2db7020197073cf51.jpg",
    isModal: false,
    route: "Chi-Co-The-La-BLACKPINK-BLACKPINK",
  },
  {
    image: "https://photo-zmp3.zmdcdn.me/banner/f/8/3/b/f83b9292bf41a3533d9e1793670f8829.jpg",
    song: "Thế Giới Trong Em",
    singer: "Hương Ly",
    isModal: true,
  },
  {
    image: "https://photo-zmp3.zmdcdn.me/banner/9/e/f/e/9efe7dea13aa3ac9e95e968513169f0d.jpg",
    song: "Giáng Thế",
    singer: "Phát Huy T4",
    isModal: true,
  },
  {
    image: "https://photo-zmp3.zmdcdn.me/banner/a/6/4/8/a6480aa703cff5161709dff3353104b3.jpg",
    isModal: false,
    route: "EDM-now",
  },
  {
    image: "https://photo-resize-zmp3.zmdcdn.me/w600_r300x169_webp/thumb_video/1/5/0/c/150c5e9c3780177b3f5f34d24d3903e4.jpg",
    song: "Đánh Mất Em",
    singer: "Quang Đăng Trần",
    isModal: true,
  },
];

function BannerExplore() {
  const [openModal, setOpenModal] = useState(false);
  const [banners, setBanners] = useState(list.slice(0, 3));
  const [firstIndex, setFirstIndex] = useState(1);

  const navigate = useNavigate();

  const bannerIdRef = useRef(null);
  const totalBanner = list?.length;

  const myAnimation = () => {
    bannerIdRef.current = setInterval(() => {
      let secondIndex = firstIndex + 3;
      let newBanners = list.slice(firstIndex, secondIndex);
      let newIndex = secondIndex < totalBanner ? firstIndex + 1 : 0;

      setFirstIndex(newIndex);
      setBanners(newBanners);
    }, 4000);
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

  const handleOpenModal = (item) => {
    setOpenModal(true);
  };

  const handleNavigate = (item) => {
    console.log("navigate", item.route);
    navigate(`/album/${item.route}`);
  };

  useEffect(() => {
    !openModal && myAnimation();
    return () => clearInterval(bannerIdRef.current);
  }, [firstIndex, openModal]);

  return (
    <div className="wrapper-banner-modal">
      <div onClick={handlePrevBanner} className="chevron chevron-left">
        <i className="fa-solid fa-chevron-left"></i>
      </div>
      {banners?.map((item, index) => (
        <div className="banner-item" key={index}>
          {item.isModal ? (
            <div>
              <div onClick={() => handleOpenModal(item)} className="banner-img">
                <img src={item?.image} alt="img" className="img" />
              </div>
              {openModal && (
                <ModalSong
                  item={item}
                  setOpenModal={setOpenModal}
                  openModal={openModal}
                />
              )}
            </div>
          ) : (
            <div onClick={() => handleNavigate(item)} className="banner-img">
              <img src={item?.image} alt="img" className="img" />
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

export default BannerExplore;
