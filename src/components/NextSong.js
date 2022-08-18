import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../components/css/nextsong.css';

import SingerList from '../middleware/NextSongListImage';
import { getInfoModalNextSong } from '../modals/ModalSlice';
import { getListMusic, playMusic } from '../modals/MusicSlice';
import { formatTime, sliceText } from '../utils/Format';
import FooterMusic from './FooterMusic';
import HeaderNextSong from './HeaderNextSong';
import { clickOutSideMenu } from './help/ClickOutside';

const {
    bieber,
    rising,
    davis,
    madness,
    mode,
    moonlight,
    adele
} = SingerList;

const LIST = [
    {
        song: "Mistletoe",
        singer: "Justin Bieber",
        time: "3.54",
        img: bieber,
    },
    {
        song: "Ease On Me",
        singer: "Abele",
        time: "3.54",
        img: adele,
    },
    {
        song: "Moonlight",
        singer: "Public Library Community",
        time: "3.54",
        img: moonlight,
    },
    {
        song: "SICKO MODE",
        singer: "Travis Scott ft.Drake",
        time: "3.54",
        img: davis,
    },
    {
        song: "Get Lost",
        singer: "Justin Bieber",
        time: "3.54",
        img: bieber,
    },
    {
        song: "Midsummer Madness",
        singer: "Vincent Fable",
        time: "3.54",
        img: madness,
    },
    {
        song: "I Feel Good",
        singer: "88rising",
        time: "3.54",
        img: rising,
    },
    {
        song: "SICKO MODE",
        singer: "Justin Bieber",
        time: "3.54",
        img: mode,
    },
    {
        song: "Midsummer Madness",
        singer: "Justin Bieber",
        time: "3.54",
        img: madness,
    },
    {
        song: "Midsummer Madness",
        singer: "Justin Bieber",
        time: "3.54",
        img: madness,
    },
    {
        song: "Midsummer Madness",
        singer: "Justin Bieber",
        time: "3.54",
        img: madness,
    },
    {
        song: "Midsummer Madness",
        singer: "Justin Bieber",
        time: "3.54",
        img: madness,
    },
    {
        song: "Midsummer Madness",
        singer: "Justin Bieber",
        time: "3.54",
        img: madness,
    },
    {
        song: "Midsummer Madness",
        singer: "Justin Bieber",
        time: "3.54",
        img: madness,
    },
    {
        song: "Midsummer Madness",
        singer: "Justin Bieber",
        time: "3.54",
        img: madness,
    },
    {
        song: "Midsummer Madness",
        singer: "Justin Bieber",
        time: "3.54",
        img: madness,
    },
    {
        song: "Midsummer Madness",
        singer: "Justin Bieber",
        time: "3.54",
        img: madness,
    },
    {
        song: "Midsummer Madness",
        singer: "Justin Bieber",
        time: "3.54",
        img: madness,
    },
    {
        song: "Midsummer Madness",
        singer: "Justin Bieber",
        time: "3.54",
        img: madness,
    },
    {
        song: "Midsummer Madness",
        singer: "Justin Bieber",
        time: "3.54",
        img: madness,
    },
    {
        song: "Midsummer Madness",
        singer: "Justin Bieber",
        time: "3.54",
        img: madness,
    },
    {
        song: "Midsummer Madness",
        singer: "Justin Bieber",
        time: "3.54",
        img: madness,
    },
    {
        song: "Midsummer Madness",
        singer: "Justin Bieber",
        time: "3.54",
        img: madness,
    },
]

function NextSong() {
    const { listMusic } = useSelector(state => state.listMusic);
    const [isAutoPlay, setIsAutoPlay] = useState(true);
    const [active, setActive] = useState(0);
    const [hover, setHover] = useState();
    const [render, setRender] = useState(true);
    const [isPlay, setIsPlay] = useState(false);
    const [audioPlaying, setAudioPlaying] = useState();
    const [duration, setDuration] = useState();
    const [mouseOver, setMouseOver] = useState(false);

    const dispatch = useDispatch();

    const { openModalNextSong } = useSelector(state => state.modal);

    const eventBlurHideScroll = () => {
        const item = document.getElementById("flatList");
        item.addEventListener("mouseover", () => {
            item.classList.add("flatList");
            item.classList.remove("scroll_bar_y_nextsong");
        })
        item.addEventListener("mouseleave", () => {
            setTimeout(() => {
                item.classList.remove("flatList");
                item.classList.add("scroll_bar_y_nextsong");
            }, 1000)
        })
    }

    const toggleModalNextSong = () => {
        const item = document.getElementById("container");
        if (!openModalNextSong) {
            item.classList.add("new_container");
            item.classList.remove("container");
            !render && item.classList.add("animation_container");
        }
        else {
            setRender(false);
            item.classList.add("container")
            item.classList.remove("new_container")
            !render && item.classList.remove("animation_container")
        }
    };

    const clickOutsideModalNextSong = () => {
        const item = document.getElementById("container");
        return document.addEventListener("click", (e) => {
            const clickOutside = !item.contains(e.target);
            if (clickOutside) {
                dispatch(getInfoModalNextSong(false));
            }
        })
    };

    useEffect(() => {
        toggleModalNextSong();
        eventBlurHideScroll();
        clickOutsideModalNextSong();
    }, [openModalNextSong]);

    useEffect(() => {
        dispatch(getListMusic());
    }, []);

    const handleDoubleClickActive = (e, index, item) => {
        e.stopPropagation();
        setActive(index);
        setAudioPlaying(item.audio);
        isPlay && active === index ? setIsPlay(false) : setIsPlay(true);
    };

    const handleToggleMusic = (e, index, item) => {
        e.stopPropagation();
        setActive(index);
        setAudioPlaying(item.audio);
        isPlay && active === index ? setIsPlay(false) : setIsPlay(true);
    };

    const onMouseOverItem = (index) => {
        setHover(index);
    };

    const onMouseDownItem = (index) => {
        setHover(null);
    };

    return (
        <>
            <div id="container">
                <div className='wrapperHeader'>
                    <div className='titleHeader'>Next Song</div>
                    <HeaderNextSong
                        isAutoPlay={isAutoPlay}
                        setIsAutoPlay={setIsAutoPlay}
                    />
                </div>
                <div id='flatList' className='flatList'>
                    {listMusic.length > 0 && listMusic.map((item, index) => (
                        <div
                            onDoubleClick={(e) => handleDoubleClickActive(e, index, item)}
                            onMouseOver={() => onMouseOverItem(index)}
                            onMouseDown={() => onMouseDownItem(index)}
                            className='wrapperItemNextSong' key={index}
                            style={{
                                backgroundColor: active === index && "red",
                            }}

                        >
                            <div className='itemLeft'>
                                <div className='wrapperImageSinger'>
                                    <i onClick={(e) => handleToggleMusic(e, index, item)} className="play-icon fa-solid fa-play"
                                        style={{
                                            display: active === index && "none",
                                            opacity: active === index && 1,
                                        }}></i>
                                    <img style={{
                                        opacity: active === index && 1,
                                    }} className='imageSinger' src={item.image} alt={item.song} />
                                </div>
                                <div className='contentItem'>
                                    <div className='nameOfSong'>{sliceText(item?.song, index, hover)}</div>
                                    <div className='nameOfSinger'>{sliceText(item?.singer, index, hover)}</div>
                                </div>
                            </div>
                            <div className='itemRight'>
                                <div className='timeSong'>{formatTime(item.time)}</div>
                                <i className="fa-solid fa-ellipsis"></i>
                            </div>
                        </div>
                    ))}
                </div>
                <FooterMusic
                    setActive={setActive}
                    active={active}
                    listMusic={listMusic}
                    setIsPlay={setIsPlay}
                    isPlay={isPlay}
                    setAudioPlaying={setAudioPlaying}
                    audioPlaying={audioPlaying}
                    setDuration={setDuration}
                    duration={duration}
                />
            </div>
        </>
    )
}

export default NextSong;