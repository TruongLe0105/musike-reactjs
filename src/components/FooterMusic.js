import React, { useEffect, useState } from "react";
import "../components/css/mainFooter.css";
import Singer from "../assets/Images/singer/adele.png";
import { useDispatch, useSelector } from "react-redux";
import { getInfoModalNextSong } from "../modals/ModalSlice";
import { formatTime } from "../utils/Format";

function FooterMusic({
  setActive,
  setIsPlay,
  setAudioPlaying,
  setDuration,
  duration,
  audioPlaying,
  active,
  listMusic,
  isPlay
}) {

  const dispatch = useDispatch();
  const { openModalNextSong } = useSelector(state => state.modal);

  const handleClickShowList = (e) => {
    e.stopPropagation();
    console.log(!openModalNextSong)
    dispatch(getInfoModalNextSong(!openModalNextSong));
  }

  const audio = document.getElementById("audio");
  console.log("audio", audio);

  useEffect(() => {
    if (audioPlaying) {
      if (isPlay) {
        audio.play();
      } else {
        audio.pause();
      }
    };
  }, [isPlay, active]);

  const playMusic = () => {
    setIsPlay(true);
    audio.play();
  };

  const pauseMusic = () => {
    setIsPlay(false);
    audio.pause();
  };

  return (
    <div className="main_footer">
      <div className="wrapper_footer_left">
        <div className="wrapper_info">
          <div className="wrapper_img_footer">
            <img src={listMusic[active]?.image} alt="Singer" className="image_singer" />
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
          <i className="fa-solid fa-shuffle"></i>
          <i className="fa-solid fa-arrow-left"></i>
          <div id="toggleMusic" className="wrapper_icon_play">
            {isPlay ?
              <i onClick={pauseMusic} className="fa-solid fa-pause"></i> :
              <i onClick={playMusic} className="fa-solid fa-play"></i>}
          </div>
          <audio id="audio" src={listMusic[active]?.audio}></audio>
          <i className="fa-solid fa-arrow-right"></i>
          <i className="fa-solid fa-repeat"></i>
        </div>
        <div className="wrapper_progress_bar">
          <div className="content_progress_bar">00:05</div>
          <div className="progress_bar" />
          <div className="content_progress_bar">{formatTime(listMusic[active]?.time)}</div>
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
        <div onClick={(e) => handleClickShowList(e)}
          style={{
            backgroundColor: openModalNextSong && "red"
          }}
          className="show_list_song">
          <i className="fa-solid fa-sliders"></i>
        </div>
      </div>
    </div>
  )
}

export default FooterMusic;
