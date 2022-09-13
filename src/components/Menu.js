import React, { useEffect, useState } from "react";
import logo from "../assets/Images/logo.png";
import newLogo from "../assets/Images/logoNew.png";
import group from "../assets/Images/group.png";
import { ItemFooter, ItemMenu, Title, TitleFooter } from "./styled/MenuStyled";
import '../components/css/menu.css';
import { useNavigate } from "react-router-dom";

const ButtonList = [
  {
    title: "Cá Nhân",
    icon: <i className="fa-solid fa-list"></i>,
    route: "library",
  },
  {
    title: "Khám Phá",
    icon: <i className="fa-sharp fa-solid fa-bomb"></i>,
    route: "/",
  },
  {
    title: "#zingchart",
    icon: <i className="fa-solid fa-layer-group"></i>,
    route: "zing-chart",
  },
  {
    title: "Radio",
    icon: <i className="fa-solid fa-radiation"></i>,
    route: "radio",
  },
  {
    title: "Theo Dõi",
    icon: <i className="fa-brands fa-medium"></i>,
    route: "follow",
  },
  {
    title: "Nhạc Mới",
    icon: <i className="fa-solid fa-arrow-up-from-bracket"></i>,
    route: "new-music",
  },
  {
    title: "Thể Loại",
    icon: <i className="fa-solid fa-bars-progress"></i>,
    route: "genres",
  },
  {
    title: "Top 100",
    icon: <i className="fa-sharp fa-solid fa-star"></i>,
    route: "like-list",
  },
  {
    title: "Artists",
    icon: <i className="fa-solid fa-microphone"></i>,
    route: "artists",
  },
];

const Menu = () => {
  const [zoomInScreen, setZoomInScreen] = useState(false);
  const [clicked, setClicked] = useState(1);
  const [clickFooter, setclickFooter] = useState(false);
  const navigate = useNavigate();

  const clickOutSideMenu = () => {
    const idMenuContainerNew = document.getElementById("menu");
    return document.addEventListener("click", (event) => {
      const isClickInside = idMenuContainerNew.contains(event.target);
      if (!isClickInside) {
        idMenuContainerNew.classList.remove("wrapper_menu_clicked_zoom_in");
        setZoomInScreen(false);
      }
    });
  };

  const eventBlurHideScroll = () => {
    const item = document.getElementById("scroll_view_menu");
    item.addEventListener("mouseover", () => {
      item.classList.add("menu_scroll_view");
      item.classList.remove("scroll_bar_y");
    });
    item.addEventListener("mouseleave", () => {
      setTimeout(() => {
        item.classList.remove("menu_scroll_view");
        item.classList.add("scroll_bar_y");
      }, 1000);
    });
  };

  useEffect(() => {
    clickOutSideMenu();
    eventBlurHideScroll();
  }, []);

  const handleZoomIn = () => {
    setZoomInScreen(true);

    const idMenuContainer = document.getElementById("menu");
    idMenuContainer.classList.add("wrapper_menu_clicked_zoom_in");
  };

  const handleZoomOut = () => {
    setZoomInScreen(false);

    const idMenuContainer = document.getElementById("menu");
    idMenuContainer.classList.remove("wrapper_menu_clicked_zoom_in");
  };

  const handleClick = (index, item) => {
    setClicked(index);
    setclickFooter(false);
    item.route && navigate(item.route);
  };

  const handleClickFooterBtn = () => {
    setClicked(null);
    setclickFooter(true);
  };

  const RenderListItem = () => {
    const ListMenuTop = () => {
      return ButtonList.map(
        (item, index) =>
          index < 5 && (
            <ItemMenu
              key={index}
              style={{
                backgroundColor:
                  index === clicked
                    ? "rgba(255, 255, 255, 0.2)"
                    : "transparent",
                height: "4.1rem",
                opacity: index === clicked && 1,
              }}
              onClick={() => handleClick(index, item)}
            >
              <div className="wrapper_icon_menu">{item.icon}</div>
              <Title>{item.title}</Title>
              {index === clicked && <div className="line" />}
            </ItemMenu>
          )
      );
    };

    const ListCanScroll = () => {
      return ButtonList.map(
        (item, index) =>
          index >= 5 && (
            <div key={index}>
              <ItemMenu
                style={{
                  backgroundColor:
                    index === clicked
                      ? "rgba(255, 255, 255, 0.2)"
                      : "transparent",
                  height: "4.1rem",
                  opacity: index === clicked && 1,
                }}
                onClick={() => handleClick(index, item)}
              >
                <div className="wrapper_icon_menu">{item.icon}</div>
                <Title>{item.title}</Title>
                {index === clicked && <div className="line" />}
              </ItemMenu>
            </div>
          )
      );
    };

    return (
      <>
        <div>{ListMenuTop()}</div>
        <div id="scroll_view_menu" className="scroll_bar_y">
          <div className="footer">
            <div className="line_center" />
          </div>
          <div style={{ minHeight: "36rem", marginTop: "1rem" }}>
            {ListCanScroll()}
            {/* <div className="wrapperImg">
              <img src={group} alt="group" className="imageGroup" />
            </div>
            <ItemFooter>
              <TitleFooter>Mining time</TitleFooter>
              <div style={{ fontSize: "1.3rem", paddingLeft: "3rem" }}>
                24:00:00
              </div>
            </ItemFooter>
            <ItemFooter>
              <TitleFooter>Earn today</TitleFooter>
              <div style={{ fontSize: "1.3rem", paddingLeft: "3rem" }}>
                0.000
              </div>
            </ItemFooter> */}
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div id="menu" className="wrapper_menu_clicked">
        {!zoomInScreen ? (
          <div className="new_logo">
            <img src={newLogo} alt="Musike" className="new_logo_img" />
          </div>
        ) : (
          <div className="title_logo_musike">
            <img src={logo} alt="" className="img_logo_musike" />
          </div>
        )}
        {ButtonList.map((item, index) => (
          <div
            key={index}
            className="item_clicked"
            style={{
              backgroundColor:
                index === clicked ? "rgba(255, 255, 255, 0.2)" : "transparent",
              opacity: index === clicked && 1,
            }}
            onClick={() => handleClick(index, item)}
          >
            {item.icon}
            <div id="title_menu_zoom_in">
              {item.title}

              {index === clicked && <div className="line_menu_small" />}
            </div>
          </div>
        ))}
        {zoomInScreen ? (
          <div onClick={handleZoomOut} className="icon_arrow_new">
            <i className="fa-solid fa-arrow-left"></i>
          </div>
        ) : (
          <div onClick={handleZoomIn} className="icon_arrow">
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        )}
      </div>
      <div className="wrapperMenu" id="menu_large">
        <div className="image_logo">
          <img src={logo} alt="Musike" />
        </div>
        <div className="wrapper_menu_button">
          {RenderListItem()}
          <div
            onClick={handleClickFooterBtn}
            className="button_footer_menu"
            style={{
              backgroundColor: clickFooter
                ? "rgba(255, 255, 255, 0.2)"
                : "black",
            }}
          >
            <i
              style={{ fontSize: "2rem", marginRight: "1rem" }}
              className="fa-regular fa-square-plus"
            ></i>
            <Title>Create NFT Music</Title>
            <div
              style={{ backgroundColor: clickFooter ? "red" : "transparent" }}
              className="line"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
