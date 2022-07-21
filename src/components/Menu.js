import React from "react";
import logo from "../assets/Images/logo.png";
import group from "../assets/Images/group.png";
import styled from "styled-components";

const ItemMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  margin-left: 40px;
`;

const ItemFooter = styled.div`
  display: flex;
  margin-left: 30px;
  font-size: 16px;
`;

const Title = styled.p`
  margin-left: 20px;
  font-size: 20px;
`;

const TitleFooter = styled.p`
  margin-right: 30px;
`;

function Menu() {
  const wrapperMenu = {
    position: "fixed",
    width: "18%",
    height: "100%",
    backgroundColor: "black",
    color: "white",
  };

  const titleFooter = {
    textTransform: "uppercase",
    opacity: 0.5,
    marginTop: 20,
    marginLeft: 40,
  };

  const ImageLogo = {
    marginLeft: 50,
    marginTop: 20,
  };

  const ImageGroup = {
    marginLeft: 30,
  };

  return (
    <div style={wrapperMenu}>
      <div style={ImageLogo}>
        <img src={logo} />
      </div>
      <ItemMenu>
        <i class="fa-solid fa-music"></i>
        <Title>Explore NFT Music</Title>
      </ItemMenu>
      <ItemMenu>
        <i class="fa-solid fa-list"></i>
        <Title>My NFT collection</Title>
      </ItemMenu>
      <ItemMenu>
        <i class="fa-solid fa-fire"></i>
        <Title>HOT collection</Title>
      </ItemMenu>
      <ItemMenu>
        <i class="fa-solid fa-compact-disc"></i>
        <Title>Albums</Title>
      </ItemMenu>
      <ItemMenu>
        <i class="fa-solid fa-microphone"></i>
        <Title>Artists</Title>
      </ItemMenu>
      <div style={titleFooter}>upload music</div>
      <ItemMenu>
        <i class="fa-solid fa-arrow-up-from-bracket"></i>
        <Title>Upload</Title>
      </ItemMenu>
      <ItemMenu>
        <i class="fa-regular fa-square-plus"></i>
        <Title>Create NFT Music</Title>
      </ItemMenu>
      <div style={ImageGroup}>
        <img src={group} />
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
