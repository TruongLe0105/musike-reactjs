import React, { useEffect, useState } from 'react';
import { HeartButton, LyricsButton, OptionButton } from '../Button';

function DetailGenres({ data }) {
    const [active, setActive] = useState();
    const [tickSquare, setTickSquare] = useState(false);
    const [listPlay, setListPlay] = useState([]);
    const [empty, setEmpty] = useState(false);
    const [list, setList] = useState([]);

    // useEffect(() => {
    //     if (listPlay.length > 0) {
    //         setEmpty(false);
    //     } else {
    //         setEmpty(true);
    //     }
    // }, [listPlay?.length]);

    //functions

    const tickSquareSelect = (item, index) => {
        setActive(index);
        list.push(item?.song);
        // setList(newList);
        // setListPlay([...listPlay, item]);
        // console.log('listPlay', listPlay);
        setTickSquare(!tickSquare);
    };

    console.log("list", list);

    //Components
    const HeaderDetail = () => {
        return (
            <div className="header-detail-page">
                <div className="wrapper-banner-detail">
                    <img src={data?.banner} alt="img" className="banner-detail" />
                    <i className="fa-solid fa-play" />
                </div>
                <div className="wrapper-content-detail">
                    <div className="title-detail">{data?.title}</div>
                    <div style={{ margin: "5px 0" }}>Cập nhật: {data?.update}</div>
                    <a
                        style={{ margin: "5px 0" }}
                        href="/#"
                        className="link-detail"
                    >
                        {data?.singers}
                    </a>
                    <div style={{ margin: "5px 0" }}>{data?.like}</div>
                    <div>
                        <div className="button-group-detail">
                            <i className="fa-solid fa-play" />
                            <div>PHÁT NGẪU NHIÊN</div>
                        </div>
                        <div className="wrapper_icon icon-group-detail">
                            <div className="border-icon">
                                <HeartButton />
                            </div>
                            <div className="border-icon">
                                <OptionButton />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };

    const ListItem = () => {
        return (
            <div className="right-component">
                <div style={{
                    marginBottom: "2rem"
                }}>
                    <span
                        style={{
                            color: "rgba(255,255, 255, 0.7)",
                        }}
                    >Lời tựa </span>
                    {data?.preface}</div>
                <div className="title-header-detail">
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            width: "50%",
                        }}
                    >
                        <i className="fa-solid fa-play"
                            style={{
                                marginRight: "1rem"
                            }}
                        />
                        {
                            tickSquare ? (
                                <div></div>
                            ) :
                                <div>BÀI HÁT</div>
                        }
                    </div>
                    <div
                        style={{
                            width: "30%"
                        }}
                    >ALBUM</div>
                    <div
                        style={{
                            width: "20%",
                            textAlign: "right"
                        }}
                    >THỜI GIAN</div>
                </div>
                <div>
                    {data?.list.map((item, index) => (
                        <div
                            key={index}
                            className="item-row"
                        >
                            <div className="first-content">
                                <div className="wrapper-img-row">
                                    <img
                                        src={item.img}
                                        alt="img"
                                        className="img-item-row"
                                    />
                                    <i className="fa-solid fa-play" />
                                </div>
                                <div>
                                    <div className="song">{item.song}</div>
                                    <a href="/#" className="link-detail">{item.singer}</a>
                                </div>
                            </div>
                            <div
                                className="link-detail"
                                style={{
                                    width: "30%",
                                    textAlign: "left",
                                }}
                            >{item.album}</div>
                            <div
                                className="icons-visible-condition">
                                {
                                    tickSquare ?
                                        <i
                                            onClick={() => tickSquareSelect(item, index)}
                                            className="fa-solid fa-square-check"></i> :
                                        <i
                                            onClick={() => tickSquareSelect(item, index)}
                                            className="fa-solid fa-square"></i>
                                }
                                <div className="wrapper_icon wrapper-icon-hover">
                                    <LyricsButton />
                                    <HeartButton />
                                    <OptionButton />
                                </div>
                            </div>
                            <div className="icons-hide-condition">
                                <i className="fa-solid fa-music" />
                                <div
                                >{item.time}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    return (
        <div className="component-detail-page">
            <HeaderDetail />
            <ListItem />
            <div
                className="footer-detail"
            >
                <div>{data?.list.length} bài hát</div>
                <i style={{ fontSize: "3px", margin: "0 1rem" }} className="fa-sharp fa-solid fa-circle"></i>
                <div>1 giờ 12 phút</div>
            </div>
        </div>
    )
}

export default DetailGenres;