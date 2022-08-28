import React from 'react';
import FormFourCard from '../FormFourCard';

function TopHundred() {
    const list = [
        {
            img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/9/8/6/398641e9e2d8c6a7ab61dbfca309d623.jpg",
            title: "Top 100 nhac V-Pop hay nhất",
            singer: "Jack - J97, Miu Lê, Khang Việt..."
        },
        {
            img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/9/7/f/397fa7870c36a3114115b743f20d0b27.jpg",
            title: "Top 100 nhạc rap việt hay nhất",
            singer: "Lill Wuyn, Binz, Rhymastic..."
        },
        {
            img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/b/8/0/0/b800a8b039fd00210f54e58b3309b46f.jpg",
            title: "Top 100 nhạc dance việt hay nhất",
            singer: "CUKAK, Phát Hồ, Đình Long..."
        },
        {
            img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/6/0/6/4/606430a29783ea7f864de569bb8a45d0.jpg",
            title: "Top 100 pop âu mỹ hay nhất",
            singer: "Adele, The Kid LAROI, Justin Bieber..."
        },
    ]
    return (
        <div className="wrapper-want-listen">
            <div className="title-explore">Top 100</div>
            <FormFourCard data={list} />
        </div>
    )
}

export default TopHundred;