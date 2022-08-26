import React, { useEffect, useState } from "react";
import "../components/css/mainFooter.css";
import { useDispatch, useSelector } from "react-redux";
import { getInfoModalNextSong } from "../modals/ModalSlice";
import { formatTime } from "../utils/Format";
import PublicComponent from "./PublicComponent";
import {
  HeartButton,
  LyricsButton,
  OptionButton,
  RepeatButton,
  ShuffleButton,
  UploadButton,
} from "./Button";

function FooterMusic({
  setActive,
  setIsPlay,
  setAudioPlaying,
  setIsAutoPlay,
  isAutoPlay,
  audioPlaying,
  active,
  listMusic,
  isPlay,
}) {
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [muted, setMuted] = useState(false);
  const [value, setValue] = useState(0);
  const [volume, setVolume] = useState(100);
  const [currentTime, setCurrentTime] = useState(0);
  const dispatch = useDispatch();
  const { openModalNextSong } = useSelector((state) => state.modal);

  const handleClickShowList = (e) => {
    e.stopPropagation();
    dispatch(getInfoModalNextSong(!openModalNextSong));
  };

  const audio = document.getElementById("audio");
  const sliders = document.getElementById("progress_bar");
  const volumeProgress = document.getElementById("volume");

  //Bắt time thay đổi khi play music
  const timeProgress = () => {
    audio?.addEventListener("timeupdate", () => {
      let timeRunning = Math.round(audio?.currentTime);
      setCurrentTime(timeRunning);
    });
  };

  //Function

  //Auto cập nhật chiều dài time bar
  const playingMusic = () => {
    if (audioPlaying) {
      if (isPlay) {
        audio?.play();
        const timeSong = listMusic[active]?.time;
        let newValue = Math.round((currentTime * 100) / timeSong);
        sliders.style.background = `linear-gradient(to right, #fff ${newValue}%,  #333 ${newValue}%)`;
        setValue(newValue);
      } else {
        audio.pause();
      }
    }
  };

  //Tự động chuyển bài
  const autoNextSong = () => {
    audio?.addEventListener("ended", () => {
      if (shuffle) {
        const random = Math.floor(Math.random() * listMusic?.length);
        setActive(random);
        setAudioPlaying(listMusic[random]);
      } else {
        nextMusic();
      }
    });
  };

  //Change time và chiều dài time bar
  const handleChangeValue = (e) => {
    let newValue = e.target.value;
    let newTime = (newValue * listMusic[active]?.time) / 100;
    newTime = Math.round(newTime);
    sliders.style.background = `linear-gradient(to right, #fff ${newValue}%,  #333 ${newValue}%)`;
    setCurrentTime(newTime);
    setValue(newValue);
    audio.currentTime = newTime;
  };

  //Bắt event change volume
  const handleVolume = () => {
    if (audio) {
      if (muted) {
        audio.muted = true;
        setVolume(0);
        volumeProgress.style.background = `linear-gradient(to right, #fff ${0}%,  #333 ${0}%)`;
      } else {
        audio.muted = false;
        setVolume(100);
        volumeProgress.style.background = `linear-gradient(to right, #fff ${100}%,  #333 ${100}%)`;
      }
    }
  };

  //Change volume
  const handleChangeVolume = (e) => {
    const newVolume = e.target.value;
    audio.volume = newVolume / 100;
    audio.volume === 0 ? setMuted(true) : setMuted(false);
    setVolume(newVolume);
    volumeProgress.style.background = `linear-gradient(to right, #fff ${newVolume}%,  #333 ${newVolume}%)`;
  };

  useEffect(() => {
    timeProgress();
    autoNextSong();
    playingMusic();
    // volumeProgress && handleChangeVolume();
  }, [isPlay, active, shuffle, currentTime, volume]);

  useEffect(() => {
    handleVolume();
  }, [audio, muted]);

  useEffect(() => {
    autoNextSong();
  }, [isAutoPlay]);

  //Action
  const playMusic = () => {
    setAudioPlaying(listMusic[active]);
    setIsPlay(true);
    audio.play();
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
    if (active < listMusic.length - 1 && isAutoPlay) {
      const newActive = active + 1;
      setActive(newActive);
      setAudioPlaying(listMusic[newActive]);
      setIsPlay(true);
    } else {
      setActive(active);
      setIsPlay(false);
    }
  };

  const handleClickVolume = () => {
    if (muted) {
      setMuted(false);
      audio.volume = 1;
    } else {
      setMuted(true);
      audio.volume = 0;
    }
  };

  //Components
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
            <div
              style={{
                alignSelf: "flex-start",
                color: "white",
                marginBottom: "0.5rem",
              }}
            >
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
          <HeartButton />
          <OptionButton />
        </div>
      </div>
      <div className="wrapper_footer_center">
        <div className="wrapper_list_icon">
          <ShuffleButton shuffle={shuffle} setShuffle={setShuffle} />
          <i
            style={{
              cursor: active === 0 && "not-allowed",
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
          <RepeatButton repeat={repeat} setRepeat={setRepeat} />
        </div>
        <div className="wrapper_progress_bar">
          <div className="content_progress_bar">{formatTime(currentTime)}</div>
          <input
            type="range"
            id="progress_bar"
            className="progress_bar"
            value={value}
            min="0"
            max="100"
            onChange={handleChangeValue}
          />
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
        <LyricsButton />
        <UploadButton />
        <div className="wrapper_bar_volume">
          <i
            style={{ display: muted && "none" }}
            onClick={() => setMuted(true)}
            className="fa-solid fa-volume-high"
          ></i>
          <i
            style={{ display: !muted && "none" }}
            onClick={handleClickVolume}
            className="fa-solid fa-volume-xmark"
          ></i>
          <div className="progress_bar_volume">
            <input
              id="volume"
              className="progress_volume_isMuted"
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={handleChangeVolume}
            />
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
