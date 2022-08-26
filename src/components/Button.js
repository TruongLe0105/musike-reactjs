import PublicComponent from "./PublicComponent";
import "../components/css/mainFooter.css";
import { useEffect, useState } from "react";

export const HeartButton = ({ index }) => {
  const [isLike, setIsLike] = useState(false);
  const [active, setActive] = useState();
  const likeMusic = () => {
    setActive(index);
    setIsLike(!isLike);
  };

  return (
    <i
      onClick={likeMusic}
      className="fa-solid fa-heart"
      style={{ color: (active === index) & isLike ? "red" : "white" }}
    >
      <div className="wrapper-component-hover">
        {!isLike ? <div>Thêm vào thư viện</div> : <div>Xóa khỏi thư viện</div>}
        <div className="arrow-component" />
      </div>
    </i>
  );
};

export const OptionButton = () => {
  return (
    <i className="fa-solid fa-ellipsis">
      <PublicComponent title="Khác" width="5rem" />
    </i>
  );
};

export const LyricsButton = () => {
  return (
    <i className="fa-solid fa-microphone">
      <PublicComponent title="Xem lời bài hát" width="12rem" />
    </i>
  );
};

export const UploadButton = () => {
  return (
    <i className="fa-solid fa-cloud-arrow-down">
      <PublicComponent title="Tải xuống" width="10rem" />
    </i>
  );
};

export const ShuffleButton = ({ shuffle, setShuffle }) => {
  const shuffleMusic = () => {
    setShuffle(!shuffle);
  };
  return (
    <i
      style={{
        color: shuffle && "red",
      }}
      onClick={shuffleMusic}
      className="fa-solid fa-shuffle"
    >
      <div className="wrapper-component-hover">
        {!shuffle ? (
          <div>Bật phát ngẫu nhiên</div>
        ) : (
          <div>Tắt phát ngẫu nhiên</div>
        )}
        <div className="arrow-component" />
      </div>
    </i>
  );
};

export const RepeatButton = ({ repeat, setRepeat }) => {
  const repeatMusic = () => {
    setRepeat(!repeat);
  };

  return (
    <i
      style={{ color: repeat && "red", position: "relative" }}
      onClick={repeatMusic}
      className="fa-solid fa-repeat"
    >
      <div className="wrapper-component-hover">
        {!repeat ? (
          <div>Bật phát lại một bài</div>
        ) : (
          <div>Tắt phát lại một bài</div>
        )}
        <div className="arrow-component" />
      </div>
    </i>
  );
};
