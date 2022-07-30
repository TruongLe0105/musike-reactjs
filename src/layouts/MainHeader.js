import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Menu from '../components/Menu.js';
import { Icon, Title } from "../components/styled/MainHeaderStyled.js";
import '../components/css/mainHeader.css';
import avatar from '../assets/Images/logo.png';
import NextSong from "../components/NextSong.js";

function MainHeader() {
  const [disabled, setDisabled] = useState(false);
  const [active, setActive] = useState(null);

  const handleClick = (index) => {
    setDisabled(true);
    setActive(index);
  };

  const handleChangeInput = (e) => {
    console.log("Input", e.target.value);
  }

  const TitleList = ["Free Music", "Genres", "Play list"];

  return (
    <>
      <Menu
        disabled={disabled}
        setDisabled={setDisabled}
        setActive={setActive}
      />
      <div className="containerStyle">
        <div className="wrapperHeaderLeft">
          <div className="wrapperTitle">
            {TitleList.map((title, index) => (
              <Title
                key={index}
                style={{
                  opacity: index === active && 1,
                }}
                onClick={() => handleClick(index)}
              >
                {title}
                {index === active && <div className="underline" />}
              </Title>
            ))}
          </div>
          <div className="wrapperInput">
            <input
              className="input"
              placeholder="Search"
              onChange={handleChangeInput}
            />
            <div className="iconSearch">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
        </div>
        <div className="wrapperHeaderRight">
          <div className="wrapperInfo">
            <div className="wraperAvatar">
              {/* <img src={avatar} alt="Avatar" className="avatarImg" /> */}
            </div>
            <div className="info">
              <div className="info_user">Le Minh Truong</div>
              <div>Info</div>
            </div>
            <div className="iconArrow">
              <i className="fa-solid fa-angle-down"></i>
            </div>
          </div>
          <div className="wrapper_icon_right_menu">
            <Icon>
              <i className="fa-solid fa-comment-dots"></i>
            </Icon>
            <Icon>
              <i className="fa-solid fa-gear"></i>
            </Icon>
          </div>
        </div>
      </div>
      <NextSong />
    </>
  );
}

export default MainHeader;
