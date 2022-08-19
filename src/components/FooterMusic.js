import React, { useEffect, useState } from "react";
import "../components/css/mainFooter.css";
import { useDispatch, useSelector } from "react-redux";
import { getInfoModalNextSong } from "../modals/ModalSlice";
import { formatTime } from "../utils/Format";
import PublicComponent from "./PublicComponent";

function FooterMusic({
  setActive,
  setIsPlay,
  audioPlaying,
  setAudioPlaying,
  active,
  listMusic,
  isPlay,
}) {
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [muted, setMuted] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const [currentTime, setCurrentTime] = useState("0");
  const dispatch = useDispatch();
  const { openModalNextSong } = useSelector((state) => state.modal);

  const handleClickShowList = (e) => {
    e.stopPropagation();
    dispatch(getInfoModalNextSong(!openModalNextSong));
  };

  const audio = document.getElementById("audio");

  const timeProgress = () => {
    audio?.addEventListener("timeupdate", () => {
      let timeRunning = Math.floor(audio?.currentTime);
      setCurrentTime(timeRunning);
    });
  };

  //Function
  const playingMusic = () => {
    const progress = document.getElementById("progress");
    audio?.addEventListener("loadedmetadata", () => {
      if (isPlay) {
        const timeSong = listMusic[active]?.time;
        audio?.play();
        progress.style.width = (currentTime * 100) / timeSong + "%";
      } else {
        audio.pause();
      }
    });
  };

  const autoNextSong = () => {
    audio?.addEventListener("ended", () => {
      if (shuffle) {
        const random = Math.floor(Math.random() * listMusic?.length);
        console.log("shuffle", shuffle);
        console.log("random", random);
        setActive(random);
        setAudioPlaying(listMusic[random]);
      } else {
        console.log("no k nhan");
        nextMusic();
      }
    });
  };

  useEffect(() => {
    playingMusic();
    timeProgress();
    autoNextSong();
  }, [isPlay, active, shuffle, currentTime]);

  //Action
  const playMusic = () => {
    setIsPlay(true);
    audio.play();
    timeProgress();
  };

  const pauseMusic = () => {
    setIsPlay(false);
    audio.pause();
  };

  const prevMusic = () => {
    if (active > 0) {
      const newActive = active - 1;
      setActive(newActive);
      setAudioPlaying(listMusic[newActive]);
      setIsPlay(true);
    } else {
      console.log("prev not");
    }
  };
  const nextMusic = () => {
    if (active < listMusic.length - 1) {
      const newActive = active + 1;
      setActive(newActive);
      setAudioPlaying(listMusic[newActive]);
      setIsPlay(true);
      console.log("here");
    } else {
      console.log("next not");
    }
  };

  const likeMusic = () => {
    setIsLike(!isLike);
  };

  const shuffleMusic = () => {
    setShuffle(!shuffle);
  };

  const repeatMusic = () => {
    setRepeat(!repeat);
  };

  //Components
  function ShuffleComponent() {
    return (
      <div className="wrapper-component-hover">
        {!shuffle ? (
          <div>Bật phát ngẫu nhiên</div>
        ) : (
          <div>Tắt phát ngẫu nhiên</div>
        )}
        <div className="arrow-component" />
      </div>
    );
  }

  function RepeatComponent() {
    return (
      <div className="wrapper-component-hover">
        {!repeat ? (
          <div>Bật phát lại một bài</div>
        ) : (
          <div>Tắt phát lại một bài</div>
        )}
        <div className="arrow-component" />
      </div>
    );
  }

  function HeartComponent() {
    return (
      <div className="wrapper-component-hover">
        {!isLike ? <div>Thêm vào thư viện</div> : <div>Xóa khỏi thư viện</div>}
        <div className="arrow-component" />
      </div>
    );
  }

  function NextSongComponent() {
    return (
      <div className="wrapper-component-next-song">
        <div
          style={{
            position: "absolute",
            top: "1rem",
            left: "1rem",
          }}
        >
          Phát tiếp theo
        </div>
        <div className="wrapper-content-component-next-song">
          <div className="wrapper-image-component-next-song">
            <img
              src={listMusic[active + 1]?.image}
              alt="Singer"
              className="image_singer"
            />
          </div>
          <div className="wrapper-text-component-next-song">
            <div style={{ color: "white", marginBottom: "0.5rem" }}>
              {listMusic[active + 1]?.song}
            </div>
            <div style={{ alignSelf: "flex-start" }}>
              {listMusic[active + 1]?.singer}
            </div>
          </div>
        </div>
        <div className="arrow-component" />
      </div>
    );
  }

  return (
    <div className="main_footer">
      <div className="wrapper_footer_left">
        <div className="wrapper_info">
          <div className="wrapper_img_footer">
            <img
              src={listMusic[active]?.image}
              alt="Singer"
              className="image_singer"
            />
          </div>
          <div className="wrapper_content_footer">
            <div className="song_content">{listMusic[active]?.song}</div>
            <div>{listMusic[active]?.singer}</div>
          </div>
        </div>
        <div className="wrapper_icon">
          <i
            onClick={likeMusic}
            className="fa-solid fa-heart"
            style={{ color: isLike && "red" }}
          >
            <HeartComponent />
          </i>
          <i className="fa-solid fa-ellipsis">
            <PublicComponent title="Xem thêm" width="10rem" />
          </i>
        </div>
      </div>
      <div className="wrapper_footer_center">
        <div className="wrapper_list_icon">
          <i
            style={{
              color: shuffle && "red",
            }}
            onClick={shuffleMusic}
            className="fa-solid fa-shuffle"
          >
            <ShuffleComponent />
          </i>
          <i
            style={{
              cursor: active === 0 && "no-drop",
              opacity: active === 0 && 0.5,
            }}
            onClick={prevMusic}
            className="fa-solid fa-arrow-left"
          ></i>
          <div id="toggleMusic" className="wrapper_icon_play">
            {isPlay ? (
              <i onClick={pauseMusic} className="fa-solid fa-pause"></i>
            ) : (
              <i onClick={playMusic} className="fa-solid fa-play"></i>
            )}
          </div>
          <audio
            loop={repeat ? true : false}
            id="audio"
            src={listMusic[active]?.audio}
          ></audio>
          <i
            onClick={nextMusic}
            className="fa-solid fa-arrow-right"
            style={{
              cursor: active === listMusic?.length - 1 && "no-drop",
              opacity: active === listMusic?.length - 1 && 0.5,
            }}
          >
            {active !== listMusic?.length - 1 && <NextSongComponent />}
          </i>
          <i
            style={{ color: repeat && "red", position: "relative" }}
            onClick={repeatMusic}
            className="fa-solid fa-repeat"
          >
            <RepeatComponent />
          </i>
        </div>
        <div className="wrapper_progress_bar">
          <div className="content_progress_bar">{formatTime(currentTime)}</div>
          <div className="progress_bar">
            <div id="progress">
              <div className="circle_bar" />
            </div>
          </div>
          <div className="content_progress_bar">
            {formatTime(listMusic[active]?.time)}
          </div>
        </div>
      </div>
      <div className="wrapper_footer_right">
        <div className="wrapper_mv_content">
          <div className="mv_content">
            MV
            <PublicComponent title="MV" width="3.5rem" />
          </div>
        </div>
        <i className="fa-solid fa-microphone">
          <PublicComponent title="Xem lời bài hát" width="12rem" />
        </i>
        <i className="fa-solid fa-cloud-arrow-down">
          <PublicComponent title="Tải xuống" width="10rem" />
        </i>
        <div className="wrapper_bar_volume">
          <i
            style={{ display: muted && "none" }}
            onClick={() => setMuted(true)}
            className="fa-solid fa-volume-high"
          ></i>
          <i
            style={{ display: !muted && "none" }}
            onClick={() => setMuted(false)}
            className="fa-solid fa-volume-xmark"
          ></i>
          <div className="progress_bar_volume">
            <div
              style={{ display: muted && "none" }}
              className="progress_volume_isMuted"
            >
              <div className="circle_bar" />
            </div>
          </div>
        </div>
        <div style={{ width: "1px", height: "50%", backgroundColor: "gray" }} />
        <div
          onClick={(e) => handleClickShowList(e)}
          style={{
            backgroundColor: openModalNextSong && "red",
          }}
          className="show_list_song"
        >
          <i className="fa-solid fa-sliders">
            <PublicComponent title="Danh sách phát" width="14rem" menu="true" />
          </i>
        </div>
      </div>
    </div>
  );
}

export default FooterMusic;
