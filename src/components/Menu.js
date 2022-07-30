import React, { useState } from "react";
import logo from "../assets/Images/logo.png";
import newLogo from "../assets/Images/newLogo.png";
import group from "../assets/Images/group.png";
import styled from "styled-components";
import { Box, Button } from "@mui/material";
import { ItemFooter, ItemMenu, Title, TitleFooter } from "./styled/MenuStyled";
import '../components/css/menu.css';

const ButtonList = [
  {
    title: "Explore NFT Music",
    icon: <i className="fa-solid fa-music"></i>,
  },
  {
    title: "My NFT collection",
    icon: <i className="fa-solid fa-list"></i>,
  },
  {
    title: "HOT collection",
    icon: < i className="fa-solid fa-fire" ></i >
  },
  {
    title: "Albums",
    icon: <i className="fa-solid fa-compact-disc"></i>,
  },
  {
    title: "Artists",
    icon: <i className="fa-solid fa-microphone"></i>,
  },
  {
    title: "Upload",
    icon: <i className="fa-solid fa-arrow-up-from-bracket"></i>,
  },
  {
    title: "Create NFT Music",
    icon: <i className="fa-regular fa-square-plus"></i>,
  },
];

const Menu = ({ disabled, setDisabled, setActive }) => {
  const [zoomInScreen, setZoomInScreen] = useState(false);
  const [clicked, setClicked] = useState(0);


  const handleClick = (index) => {
    setDisabled(false);
    setActive(false);
    setClicked(index);
  };

  let a = window.screen.width

  console.log('Screen', a);

  return (
    <>
      <div className="wrapper_menu_clicked">
        <div className="new_logo">
          <img src={newLogo} alt="Musike" />
        </div>
        {ButtonList.map((item, index) => (
          <div key={index} className="item_clicked">
            {item.icon}
          </div>
        ))}
        <div className="icon_arrow">
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </div>
      {/* {zoomInScreen && ( */}
      <div className="wrapperMenu">
        <div className="image_logo">
          <img src={logo} alt="Musike" />
        </div>
        {ButtonList.map((item, index) => (
          <div key={index}>
            <ItemMenu
              style={{
                backgroundColor:
                  index === clicked && disabled === false
                    ? "rgba(255, 255, 255, 0.2)"
                    : "transparent",
                opacity: index === clicked && 1,
              }}
              onClick={() => handleClick(index)}
            >
              <div className="wrapper_icon_menu">
                {item.icon}
              </div>
              <Title>{item.title}</Title>
              {index === clicked && disabled === false && (
                <div className="line" />
              )}
            </ItemMenu>
            {index === 4 && <div className="footer">upload music</div>}
          </div>
        ))}
        <div className="wrapperImg">
          <img src={group} alt="group" className="imageGroup" />
        </div>
        <ItemFooter>
          <TitleFooter>Mining time</TitleFooter>
          <div>24:00:00</div>
        </ItemFooter>
        <ItemFooter>
          <TitleFooter>Earn today</TitleFooter>
          <div>0.000</div>
        </ItemFooter>
        {/* <ItemFooter>
          <TitleFooter>Today earned</TitleFooter>
          <p>07.2975 Musike</p>
        </ItemFooter> */}
      </div>
      {/* )} */}
      <div className="footer_menu">
        here
      </div>
    </>
  );
}

export default Menu;
