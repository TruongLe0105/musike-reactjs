import React, { useEffect, useRef, useState } from "react";
import ModalSong from "../../modals/explore/ModalSong";

const list = [
  {
    img: "https://photo-zmp3.zmdcdn.me/banner/6/5/7/3/6573c97764d2474df1eae0a4efe802dd.jpg",
    isModal: false,
  },
  {
    img: "https://photo-zmp3.zmdcdn.me/banner/6/4/e/9/64e943b8f6adadd7c4ccf697d213a978.jpg",
    isModal: false,
  },
  {
    img: "https://photo-zmp3.zmdcdn.me/banner/4/2/1/1/4211c700bbc7b4cf1095a084afa15d6b.jpg",
    song: "mọi chuyện đều là lỗi do anh",
    singer: "Khang Ziet",
    isModal: true,
  },
  {
    img: "https://photo-zmp3.zmdcdn.me/banner/3/e/b/e/3ebe83e18621265ce1a9bf42ca4e3a21.jpg",
    isModal: false,
  },
  {
    img: "http://cdn101.picsart.com/208783124002202.jpg",
    song: "Ahihi do ngok",
    singer: "Khang Viet",
    isModal: true,
  },
];

function BannerExplore() {
  const [openModal, setOpenModal] = useState(false);
  const [banners, setBanners] = useState(list.slice(0, 3));
  const [firstIndex, setFirstIndex] = useState(1);
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
    console.log("navigate");
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
                <img src={item.img} alt="img" className="img" />
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
            <div onClick={handleNavigate} className="banner-img">
              <img src={item.img} alt="img" className="img" />
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
