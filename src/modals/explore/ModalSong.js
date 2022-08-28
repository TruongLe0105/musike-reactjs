import React, { useEffect } from "react";
import "../../components/css/explore.css";

function ModalSong({ item, setOpenModal, openModal }) {
  const handleClickClose = () => {
    setOpenModal(false);
  };

  return (
    <div className="wrapper-modal-song">
      <div className="modal-song">
        <div className="wrapper-header-modal-song">
          <div className="title-header-modal-song">
            Bạn có muốn phát bài hát này? Danh sách phát hiện tại sẽ bị thay
            thế.
          </div>
          <div className="wrapper-content-modal-song">
            <div className="img-modal-song">
              <img src={item.img} alt={item.singer} className="img" />
            </div>
            <div className="song">{item.song}</div>
            <div className="singer">{item.singer}</div>
          </div>
        </div>
        <div className="wrapper-play">
          <i className="fa-solid fa-play"></i>
          <div>phát bài hát</div>
        </div>
        <div className="add-song">thêm vào danh sách phát</div>
        <div className="close-modal" onClick={handleClickClose}>bỏ qua</div>
      </div>
    </div>
  );
}

export default ModalSong;
