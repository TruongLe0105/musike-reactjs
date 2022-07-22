import React, { useEffect, useState } from "react";
import logo from "../assets/Images/logo.png";
import group from "../assets/Images/group.png";
import styled from "styled-components";
import { Box } from "@mui/material";

const BUTTON = [
  {
    title: "Explore NFT Music",
    icon: <i className="fa-solid fa-music"></i>,
    action: false,
  },
  {
    title: "My NFT collection",
    icon: <i className="fa-solid fa-list"></i>,
  },
  {
    title: "HOT collection",
    icon: <i className="fa-solid fa-fire"></i>,
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

function Menu() {
  const [clicked, setClicked] = useState(0);

  const Button = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 4rem;
    font-size: 2rem;
    width: 100%;
    color: white;
    cursor: pointer;
    background-color: transparent;
  `;

  const ItemFooter = styled(Box)`
    display: flex;
    margin-left: 3rem;
    font-size: 1.6rem;
  `;

  const Title = styled.p`
    margin-left: 2rem;
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

  const titleFooter = {
    textTransform: "uppercase",
    opacity: 0.5,
    marginTop: "2rem",
    marginLeft: "4rem",
  };

  const ImageLogo = {
    marginLeft: "5rem",
    marginTop: "2rem",
  };

  const ImageGroup = {
    marginLeft: "3rem",
  };
  const handleClick = (index) => {
    setClicked(index);
  };

  return (
    <Box sx={wrapperMenu}>
      <Box sx={ImageLogo}>
        <img src={logo} />
      </Box>
      {BUTTON.map((item, index) => (
        <Box key={index}>
          <Button
            onClick={(index) => handleClick(index)}
            // sx={{ backgroundColor: index === indexBtn ? "gray" : "white" }}
          >
            {item.icon}
            <Title>{item.title}</Title>
          </Button>
          {index === 4 && <Box sx={titleFooter}>upload music</Box>}
        </Box>
      ))}

      <Box sx={ImageGroup}>
        <img src={group} />
      </Box>
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
    </Box>
  );
}

export default Menu;
