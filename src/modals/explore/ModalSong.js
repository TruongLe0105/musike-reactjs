import React from "react";

function ModalSong(item) {
  return (
    <div className="wrapper-modal-song">
      <div className="modal-song">
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
            <icon />
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
