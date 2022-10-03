import React from 'react';
import FormFourCard from '../FormFourCard';

function TrendingCorner() {
    const list = [
        {
            image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/1/6/e/9/16e90ab989f377a898f28b21f219f3af.jpg",
            title: "2022 Best New Tracks",
            singer: "Đón trend mỗi ngày cùng bài hát mới & chất nhất năm"
        },
        {
            image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/5/5/4/c/554cfe2abcaacc460a992c207d62f6ae.jpg",
            title: "Free To Be Me",
            singer: "Tự tin là chính bạn!"
        },
        {
            image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/0/f/5/8/0f58a29b5d328b1959afc7b953bb6316.jpg",
            title: "EDM Universe",
            singer: "Zẩy hết mình ngày cuối tuần"
        },
        {
            image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/7/0/7/2/7072751339a7539288ec67481243fa6a.jpg",
            title: "Top Hits 2021",
            singer: "Top Hits đỉnh cao không thể bỏ lỡ"
        },
    ]
    return (
        <div className="wrapper-want-listen">
            <div className="title-explore">Xone'sCorner</div>
            <FormFourCard data={list} />
        </div>
    )
};

export default TrendingCorner;