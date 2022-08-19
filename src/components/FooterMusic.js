import React, { useEffect, useState } from "react";
import "../components/css/mainFooter.css";
import Singer from "../assets/Images/singer/adele.png";
import { useDispatch, useSelector } from "react-redux";
import { getInfoModalNextSong } from "../modals/ModalSlice";
import { formatTime } from "../utils/Format";

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
  const [currentTime, setCurrentTime] = useState("0");
  const dispatch = useDispatch();
  const { openModalNextSong } = useSelector((state) => state.modal);

  const handleClickShowList = (e) => {
    e.stopPropagation();
    dispatch(getInfoModalNextSong(!openModalNextSong));
  };

  const audio = document.getElementById("audio");

  const autoNextSong = () => {
    audio?.addEventListener("ended", () => {
      if (!repeat) {
        nextMusic();
        audio.loop = false;
      } else {
        audio.loop = true;
      }
    })
  }

  const timeProgress = () => {
    audio?.addEventListener("timeupdate", () => {
      let timeRunning = Math.floor(audio?.currentTime);
      setCurrentTime(timeRunning);
    })
  };


  const playingMusic = () => {
    const progress = document.getElementById("progress");
    if (audioPlaying) {
      if (isPlay) {
        audio.play();
        progress.style.animationDuration = audio?.duration;
      } else {
        audio.pause();
      }
    }
  }

  useEffect(() => {
    playingMusic();
    timeProgress();
    autoNextSong();
  }, [isPlay, active, repeat]);

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
    } else {
      console.log("prev not");
    }
  };
  const nextMusic = () => {
    if (active < listMusic.length - 1) {
      const newActive = active + 1;
      setActive(newActive);
      setAudioPlaying(listMusic[newActive]);
      console.log("here")
    } else {
      console.log("next not");
    }
  };

  const shuffleMusic = () => {
    setShuffle(!shuffle);
    if (shuffle) {
      const random = Math.floor(Math.random() * listMusic.length);
      setActive(random);
      setAudioPlaying(listMusic[random]);
    };
  }
  const repeatMusic = () => {
    setRepeat(!repeat);
    if (repeat) {
      audio.loop = true;
    } else {
      console.log("first")
      audio.loop = false;
    }
  };

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
          <i className="fa-solid fa-heart"></i>
          <i className="fa-solid fa-ellipsis"></i>
        </div>
      </div>
      <div className="wrapper_footer_center">
        <div className="wrapper_list_icon">
          <i style={{ color: shuffle && "red" }} onClick={shuffleMusic} className="fa-solid fa-shuffle"></i>
          <i onClick={prevMusic} className="fa-solid fa-arrow-left"></i>
          <div id="toggleMusic" className="wrapper_icon_play">
            {isPlay ? (
              <i onClick={pauseMusic} className="fa-solid fa-pause"></i>
            ) : (
              <i onClick={playMusic} className="fa-solid fa-play"></i>
            )}
          </div>
          <audio loop={false} id="audio" src={listMusic[active]?.audio}></audio>
          <i onClick={nextMusic} className="fa-solid fa-arrow-right"></i>
          <i
            style={{ color: repeat && "red" }}
            onClick={repeatMusic}
            className="fa-solid fa-repeat"
          ></i>
        </div>
        <div className="wrapper_progress_bar">
          <div className="content_progress_bar">{formatTime(currentTime)}</div>
          <div className="progress_bar">
            <div id="progress" className="running_progress" />
          </div>
          <div className="content_progress_bar">
            {formatTime(listMusic[active]?.time)}
          </div>
        </div>
      </div>
      <div className="wrapper_footer_right">
        <div className="wrapper_mv_content">
          <div className="mv_content">MV</div>
        </div>
        <i className="fa-solid fa-microphone"></i>
        <i className="fa-solid fa-cloud-arrow-down"></i>
        <div className="wrapper_bar_volume">
          <i className="fa-solid fa-volume-high"></i>
          <div className="progress_bar_volume" />
        </div>
        <div
          onClick={(e) => handleClickShowList(e)}
          style={{
            backgroundColor: openModalNextSong && "red",
          }}
          className="show_list_song"
        >
          <i className="fa-solid fa-sliders"></i>
        </div>
      </div>
    </div>
  );
}

export default FooterMusic;
