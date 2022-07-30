import React, { useState } from 'react';
import '../components/css/nextsong.css';

import SingerList from '../middleware/NextSongListImage';

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
]

function NextSong() {
    const [isAutoPlay, setIsAutoPlay] = useState(true);

    return (
        <div className='container'>
            <div className='wrapperHeader'>
                <div className='titleHeader'>Next Song</div>
                <div className="wrapperHeaderTitleRight">
                    <div className='content_autoplay'>Autoplay</div>
                    <div className="wrapperToggleBtn">
                        {isAutoPlay ? (
                            <>
                                <div className='turnOn'>On</div>
                                <div className='circleRed' />
                            </>
                        ) : (
                            <>
                                <div className='circleBlack' />
                                <div className='turnOff'>Off</div>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <div className='flatList'>
                {LIST.map((item, index) => (
                    <div className='wrapperItemNextSong' key={index}>
                        <div className='itemLeft'>
                            <div className='wrapperImageSinger'>
                                <img className='imageSinger' src={item.img} alt={item.song} />
                            </div>
                            <div className='contentItem'>
                                <div className='nameOfSong'>{item.song}</div>
                                <div>{item.singer}</div>
                            </div>
                        </div>
                        <div className='itemRight'>
                            <div className='timeSong'>{item.time}</div>
                            <i className="fa-solid fa-ellipsis"></i>                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NextSong;