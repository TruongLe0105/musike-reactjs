import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Menu from "../components/Menu";

function MainHeader() {
  const [disabled, setDisabled] = useState(false);
  const [active, setActive] = useState(null);

  const Title = styled.div`
    margin-right: 2rem;
    font-size: 1.5rem;
    cursor: pointer;
    position: relative;
    :hover {
      opacity: 0.7;
    }
  `;

  const Icon = styled.div`
    margin-left: 2rem;
    font-size: 2.5rem;
    cursor: pointer;
  `;

  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    height: "100%",
    marginLeft: "20%",
    color: "white",
    background: "rgba(0, 0, 0, 0.3)",
    alignItems: "center",
  };

  const wrapperHeaderLeft = {
    display: "flex",
    alignItems: "center",
    width: "60%",
  };

  const wrapperTitle = {
    display: "flex",
    justifyContent: "flex-end",
    width: "50%",
  };

  const wrapperInput = {
    width: "50%",
    textAlign: "center",
    fontSize: "1.5rem",
    position: "relative",
    maxHeight: "100%",
    height: "3rem",
  };

  const input = {
    borderRadius: "1rem",
    backgroundColor: "transparent",
    border: "1px solid gray",
    width: "80%",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: "10%",
    color: "white",
    paddingLeft: "3rem",
  };

  const iconSearch = {
    textAlign: "left",
    position: "absolute",
    left: "12%",
    top: "50%",
    transform: "translateY(-50%)",
    cursor: "pointer",
  };

  const wrapperInfo = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  };

  const info = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: "1rem",
  };

  const iconSetting = {
    cursor: "pointer",
    padding: "1rem",
  };

  const underline = {
    position: "absolute",
    bottom: "-1rem",
    width: "100%",
    height: "0.3rem",
    borderRadius: "1rem",
    backgroundColor: "red",
  };

  const handleClick = (index) => {
    setDisabled(true);
    setActive(index);
  };

  const TitleList = ["Free Music", "Genres", "Play list"];

  return (
    <>
      <Menu
        disabled={disabled}
        setDisabled={setDisabled}
        setActive={setActive}
      />
      <div style={containerStyle}>
        <div style={wrapperHeaderLeft}>
          <div style={wrapperTitle}>
            {TitleList.map((title, index) => (
              <Title
                style={{
                  opacity: index === active && 1,
                }}
                key={index}
                onClick={() => handleClick(index)}
              >
                {title}
                {index === active && <div style={underline} />}
              </Title>
            ))}
          </div>
          <div style={wrapperInput}>
            <input style={input} placeholder="Search" />
            <div style={iconSearch}>
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
        </div>
        <div style={wrapperInfo}>
          <p>Avatar</p>
          <div style={info}>
            <p style={{ marginBottom: 0 }}>Name</p>
            <p style={{ marginBottom: 0 }}>Info</p>
          </div>
        </div>
        <div style={iconSetting}>
          <i class="fa-solid fa-angle-down"></i>
        </div>
        <Icon>
          <i class="fa-solid fa-comment-dots"></i>
        </Icon>
        <Icon>
          <i class="fa-solid fa-gear"></i>
        </Icon>
      </div>
    </>
  );
}

export default MainHeader;
