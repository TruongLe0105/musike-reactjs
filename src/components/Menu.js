import React, { useEffect, useState } from "react";
import logo from "../assets/Images/logo.png";
import newLogo from "../assets/Images/logoNew.png";
import group from "../assets/Images/group.png";
import { ItemFooter, ItemMenu, Title, TitleFooter } from "./styled/MenuStyled";
import '../components/css/menu.css';

const ButtonList = [
  {
    title: "Explore NFT Music",
    icon: <i className="fa-solid fa-music"></i>
  },
  {
    title: "My NFT collection",
    icon: <i className="fa-solid fa-list"></i>
  },
  {
    title: "HOT collection",
    icon: < i className="fa-solid fa-fire" ></i >
  },
  {
    title: "Albums",
    icon: <i className="fa-solid fa-compact-disc"></i>
  },
  {
    title: "Artists",
    icon: <i className="fa-solid fa-microphone"></i>
  },
  {
    title: "Favourite",
    icon: <i className="fa-solid fa-heart"></i>
  },
  {
    title: "Upload",
    icon: <i className="fa-solid fa-arrow-up-from-bracket"></i>
  },
  {
    title: "Create NFT Music",
    icon: <i className="fa-regular fa-square-plus"></i>
  },
];

const Menu = ({ disabled, setDisabled, setActive }) => {
  const [zoomInScreen, setZoomInScreen] = useState(false);
  const [clicked, setClicked] = useState(0);

  useEffect(() => {
    const idMenuContainerNew = document.getElementById("menu");
    document.addEventListener("click", (event) => {
      const isClickInside = idMenuContainerNew.contains(event.target);
      if (!isClickInside) {
        idMenuContainerNew.classList.remove("wrapper_menu_clicked_zoom_in");
        setZoomInScreen(false);
      }
    })
  }, [])

  const handleZoomIn = () => {
    setZoomInScreen(true);

    const idMenuContainer = document.getElementById("menu");
    idMenuContainer.classList.add("wrapper_menu_clicked_zoom_in");
  }

  const handleZoomOut = () => {
    setZoomInScreen(false);

    const idMenuContainer = document.getElementById("menu");
    idMenuContainer.classList.remove("wrapper_menu_clicked_zoom_in");
  }

  const handleClick = (index) => {
    setDisabled(false);
    setActive(false);
    setClicked(index);
  };

  return (
    <>
      <div id="menu" className="wrapper_menu_clicked">
        {!zoomInScreen ? (
          <div className="new_logo">
            <img src={newLogo} alt="Musike" className="new_logo_img" />
          </div>
        )
          : (
            <div className="title_logo_musike">
              <img src={logo} alt="" className="img_logo_musike" />
            </div>
          )
        }
        {ButtonList.map((item, index) => (
          <div
            key={index}
            className="item_clicked"
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
            <div id="title_menu_zoom_in">{item.title}

              {index === clicked && disabled === false && (
                <div className="line_menu_small" />
              )}
            </div>

          </div>

        ))}
        {zoomInScreen ?
          (
            <div onClick={handleZoomOut} className="icon_arrow_new">
              <i className="fa-solid fa-arrow-left"></i>
            </div>
          ) :
          (
            <div onClick={handleZoomIn} className="icon_arrow">
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          )
        }
      </div>
      <div className="wrapperMenu" id="menu_large">
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
      </div>
      <div className="footer_menu">
        here
      </div>
    </>
  );
}

export default Menu;
