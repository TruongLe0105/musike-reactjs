import React, { useState } from "react";
import Menu from '../components/Menu.js';
import { Icon, Title } from "../components/styled/MainHeaderStyled.js";
import '../components/css/mainHeader.css';
import avatar from '../assets/Images/logo.png';
import NextSong from "../components/NextSong.js";
import NextPrevPage from "../components/NextPrevPage.js";
import PublicComponent from "../components/PublicComponent.js";

function MainHeader() {

  const handleChangeInput = (e) => {
    console.log("Input", e.target.value);
  }

  return (
    <>
      <Menu
      />
      <div className="containerStyle">
        <div className="wrapperHeaderLeft">
          <div className="wrapperTitle">
            <div style={{ marginRight: "2rem", cursor: "pointer" }}>
              <i className="fa-solid fa-arrow-left"></i>
            </div>
            <div style={{ cursor: "pointer" }}>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
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
              <i className="fa-solid fa-angle-down">
              </i>
            </div>
          </div>
          <div className="wrapper_icon_right_menu">
            <Icon>
              <i className="fa-solid fa-comment-dots">
                <PublicComponent under={true} title="Tin nhắn" width="10rem" />
              </i>
            </Icon>
            <Icon>
              <i className="fa-solid fa-gear">
                <PublicComponent under={true} title="Cài đặt" width="10rem" />
              </i>
            </Icon>
          </div>
        </div>
      </div>
      <NextSong />
    </>
  );
}

export default MainHeader;
