import React from 'react';
import FormFourCard from '../FormFourCard';

const list = [
    {
        img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/1/0/2/b/102b88eaa17035b6c1247910d24a0054.jpg",
        title: "Top 100 Nhạc Phim Hoa Ngữ Hay Nhất",
        singer: "Cheng Xiao, Xu Kai, Angela Zhang...",
    },
    {
        img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/1/d/1/9/1d19047de6252c181c11970ca8a91a86.jpg",
        title: "Top 100 Nhạc Phim Hàn Quốc Hay Nhất",
        singer: "Jo Jung Suk, Gaho, DAVICHI...",
    },
    {
        img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/8/b/f/a/8bfaeb3f9508550126393e28944318c1.jpg",
        title: "Top 100 Nhạc Phim Hoa Hay Nhất",
        singer: "A Nhũng, Mộng Nhiên, Danh Quyết...",
    },
    {
        img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/a/2/0/2/a202beeb7558f2e67f1bb7cf6514975c.jpg",
        title: "Top 100 Nhạc Nhật Bản Hay Nhất",
        singer: "Kénhi YoneZu, YOASOBI, FLOW...",
    },
    {
        img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/2/5/4/6/2546e0e43244cb690c675da9c1780511.jpg",
        title: "Top 100 Nhạc Hàn Quốc Hay Nhất",
        singer: "BLACKPINK, IVE, NewJeans...",
    },
]

function AsiaMusic() {
    return (
        <div className="wrapper-want-listen" style={{ marginTop: "1rem" }}>
            <div className="title-explore">Nhạc Châu Á</div>
            <FormFourCard data={list} more_card={true} />
        </div>
    )
};

export default AsiaMusic;