import React, { useState } from "react";
import logo from "../assets/Images/logo.png";
import group from "../assets/Images/group.png";
import styled from "styled-components";
import { Box } from "@mui/material";
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
    title: "Albums",
    icon: <i className="fa-solid fa-compact-disc"></i>,
  },
  {
    title: "Create NFT Music",
    icon: <i className="fa-regular fa-square-plus"></i>,
  },
];

const Menu = ({ disabled, setDisabled, setActive }) => {
  const [clicked, setClicked] = useState(0);


  const handleClick = (index) => {
    setDisabled(false);
    setActive(false);
    setClicked(index);
  };

  return (
    <div className="wrapperMenu">
      <div className="imageLogo">
        <img src={logo} alt="Musike" />
      </div>

      {ButtonList.map((item, index) => (
        <div key={index}>
          <ItemMenu
            key={index}
            style={{
              backgroundColor:
                index === clicked && disabled === false
                  ? "rgba(255, 255, 255, 0.2)"
                  : "transparent",
              opacity: index === clicked && 1,
            }}
            onClick={() => handleClick(index)}
          >
            {item.icon}
            <Title>{item.title}</Title>
            {index === clicked && disabled === false && <div className="line" />}
          </ItemMenu>
          {index === 4 && <div className="footer">upload music</div>}
        </div>
      ))}
      <div className="wrapperImg">
        <img src={group} alt="group" className="imageGroup" />
      </div>
      <ItemFooter>
        <TitleFooter>Mining time</TitleFooter>
        <p>24:00:00</p>
      </ItemFooter>
      <ItemFooter>
        <TitleFooter>Earn today</TitleFooter>
        <p>0.000</p>
      </ItemFooter>
      <ItemFooter>
        <TitleFooter>Today earned</TitleFooter>
        <p>07.2975 Musike</p>
      </ItemFooter>
    </div>
  );
}

export default Menu;
