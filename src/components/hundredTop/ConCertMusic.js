import React from 'react';
import FormFourCard from '../FormFourCard';

const list = [
    {
        image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/0/1/d/7/01d73cf9864c88f2ff291df996420c7f.jpg",
        title: "Top 100 Nhạc Hoà Tấu Nhạc Cụ Khác Hay Nhất",
        singer: "Relax Lab, Igor Krutoy, Buddhism Crystals Music... ",
    },
    {
        image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/9/b/f/5/9bf5be05cd389e02ee0ba2972d53e92f.jpg",
        title: "Top 100 Nhạc Hoà Tấu Nhạc Cụ New Age / World Music Hay Nhất",
        singer: "Louie Ocampo, Bandari, Richard Clayderman...",
    },
    {
        image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/1/3/4/6/13463b235ea1321acb6d194fe270d518.jpg",
        title: "Top 100 Nhạc Hoà Tấu Nhạc Cụ Saxophone Hay Nhất",
        singer: "Đinh Quang Minh, Đông Hòa, Kenny G...",
    },
    {
        image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/c/3/5/5/c3551ca47f882694e9248722e4127d8e.jpg",
        title: "Top 100 Nhạc Hoà Tấu Nhạc Cụ Cello Hay Nhất",
        singer: "David Darling, ThePpiano Guys, Yo-Yo Ma...",
    },
    {
        image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/8/d/e/c/8dec1fd5142204addd3302e3e10c6e05.jpg",
        title: "Top 100 Nhạc Hoà Tấu Nhạc Cụ Violin Hay Nhất",
        singer: "Hiền Lê, Yanni, Jmi...",
    },
    {
        image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/4/9/6/5/4965f11b796243810f2d4a808b0b0e28.jpg",
        title: "Top 100 Nhạc Hoà Tấu Nhạc Cụ Guitar Hay Nhất",
        singer: "Đinh Quang Minh, Đông Hòa, Francis Goya...",
    },
    {
        image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/8/5/f/d/85fd9f4dbd3a1df69966f5260da67966.jpg",
        title: "Top 100 Nhạc Hoà Tấu Nhạc Cụ Piano Hay Nhất",
        singer: "Vũ Đặng Quốc Việt, Relax Lab, Yiruma...",
    },
    {
        image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/1/5/1/b/151b864e73216ca847eba4caa8dbb527.jpg",
        title: "Top 100 Nhạc Hòa Tấu Cổ Điển Hay Nhất",
        singer: "Contempo-Divo, Hawa...",
    },
]

function ConCertMusic() {
    return (
        <div className="wrapper-want-listen" style={{ marginTop: "1rem", marginBottom: "8rem" }}>
            <div className="title-explore">Nhạc Châu Á</div>
            <FormFourCard data={list} more_card={true} />
        </div>
    )
};

export default ConCertMusic;