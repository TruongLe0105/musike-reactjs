import React, { useState } from "react";
import logo from "../assets/Images/logo.png";
import group from "../assets/Images/group.png";
import styled from "styled-components";
import { Box } from "@mui/material";

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
    icon: <i class="fa-solid fa-microphone"></i>,
  },
  {
    title: "Upload",
    icon: <i class="fa-solid fa-arrow-up-from-bracket"></i>,
  },
  {
    title: "Albums",
    icon: <i className="fa-solid fa-compact-disc"></i>,
  },
  {
    title: "Create NFT Music",
    icon: <i class="fa-regular fa-square-plus"></i>,
  },
];

function Menu({ disabled, setDisabled, setActive }) {
  const [clicked, setClicked] = useState(0);

  const ItemMenu = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 2rem;
    cursor: pointer;
    color: white;
    font-size: 2rem;
    position: relative;
    :hover {
      opacity: 0.7;
    }
  `;

  const ItemFooter = styled.div`
    display: flex;
    margin-left: 3rem;
  `;

  const Title = styled.p`
    margin-left: 2rem;
    font-size: 1.6rem;
  `;

  const TitleFooter = styled.p`
    margin-right: 3rem;
  `;

  const wrapperMenu = {
    position: "fixed",
    width: "20%",
    height: "100%",
    backgroundColor: "black",
    color: "white",
    fontSize: "1.6rem",
  };

  const footer = {
    textTransform: "uppercase",
    opacity: 0.5,
    fontSize: "1.6rem",
    margin: "1rem",
    marginLeft: "4rem",
  };

  const imageLogo = {
    marginLeft: "3rem",
    marginTop: "2rem",
  };

  const imageGroup = {
    marginLeft: "2rem",
    width: "10rem",
    height: "10rem",
    alignItems: "center",
  };

  const line = {
    position: "absolute",
    height: "100%",
    width: "0.3rem",
    right: 0,
    backgroundColor: "red",
  };

  const handleClick = (index) => {
    setDisabled(false);
    setActive(false);
    setClicked(index);
  };

  return (
    <div style={wrapperMenu}>
      <div style={imageLogo}>
        <img src={logo} alt="Musike" />
      </div>

      {ButtonList.map((item, index) => (
        <>
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
            {item.icon}
            <Title>{item.title}</Title>
            {index === clicked && disabled === false && <div style={line} />}
          </ItemMenu>
          {index === 4 && <div style={footer}>upload music</div>}
        </>
      ))}
      <div style={imageGroup}>
        <img src={group} alt="group" width="100%" height="100%" />
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
