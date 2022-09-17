import React from 'react';
import FormFourCard from '../FormFourCard';

const list = [
    {
        img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/9/8/0/f/980fe220bd14602b466aeca6c0f8ba97.jpg",
        title: "Top 100 Bài Hát Nhạc Trẻ",
        singer: "Đình Dũng, Minh Vương M4U, Jack - J97...",
    },
    {
        img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/6/0/6/4/606430a29783ea7f864de569bb8a45d0.jpg",
        title: "Top 100 Pop Âu Mỹ Hay Nhất",
        singer: "Adele, The Kid LAROI, Justin Bieber...",
    },
    {
        img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/2/5/4/6/2546e0e43244cb690c675da9c1780511.jpg",
        title: "Top 100 Nhạc Hàn Quốc Hay Nhất",
        singer: "BLACKPINK, IVE, NewJeans...",
    },
    {
        img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/9/c/0/8/9c08ea345994e2d1b8e2c55bfe86f585.jpg",
        title: "Top 100 Nhạc Rap Việt Hay Nhất",
        singer: "Phúc Du, B Ray, Binz...",
    },
];

function OutstandingHundred() {
    return (
        <div className="wrapper-want-listen outstanding-genres">
            <div className="title-explore">Nổi Bật</div>
            <FormFourCard data={list} />
        </div>
    )
}

export default OutstandingHundred;