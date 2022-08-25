import React, { useEffect } from "react";
import "../../components/css/explore.css";

function ModalSong({ item, setOpenModal, openModal }) {
  const handleClickClose = () => {
    setOpenModal(false);
  };

  return (
    <div className="wrapper-modal-song">
      <div className="modal-song">
        <i onClick={handleClickClose} className="fa-solid fa-xmark"></i>
        <div>
          <div>
            Bạn có muốn phát bài hát này? Danh sách phát hiện tại sẽ bị thay
            thế.
          </div>
          <img src={item.img} alt={item.singer} />
          <div>{item.song}</div>
          <div>{item.singer}</div>
        </div>
        <div>
          <div>
            <i className="fa-solid fa-play"></i>
            <div>phat bai hat</div>
          </div>
          <div>them vao danh sach phat</div>
          <div>bo qua</div>
        </div>
      </div>
    </div>
  );
}

export default ModalSong;
