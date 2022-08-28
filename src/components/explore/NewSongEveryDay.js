import React from 'react';
import FormFourCard from '../FormFourCard';

function NewSongEveryDay() {
    const list = [
        {
            img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/8/0/0/d/800d43029b6e8cad5f7c838afc4b0af2.jpg",
            title: "V-Pop tháng 8/2022",
            singer: "Only c, Hoàng Thùy Linh, Hoàng Dũng..."
        },
        {
            img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/d/a/e/fdae414de10e867fc85f8ee583467630.jpg",
            title: "US_UK tháng 8/2022",
            singer: "Elton John, Britney Spears, Beyoncé..."
        },
        {
            img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/d/7/0/3d700ca94ce5452b0ac5f7c8cbf2fd55.jpg",
            title: "K-Pop tháng 8/2022",
            singer: "newJeans, BLACKPINK, SNSD"
        },
        {
            img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/9/0/b/a/90bafbdc48d4f4be096a3e4aa8f45d86.jpg",
            title: "C-Pop tháng 8/2022",
            singer: "Thái Thời khôn, Thời Đại Thiếu Niên Đoàn, Dian Deng..."
        },
    ]
    return (
        <div className="wrapper-want-listen">
            <div className="title-explore">Nhạc mới mỗi ngày</div>
            <FormFourCard data={list} />
        </div>
    )
};

export default NewSongEveryDay;