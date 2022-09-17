import React from 'react';
import FormFourCard from '../FormFourCard';

const list = [
    {
        img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/e/7/f/d/e7fd4a8069cd341063b838aeaa249626.jpg",
        title: "Top 100 Nhạc EDM Việt Hay Nhất",
        singer: "Masew, Pháo, CM1X...",
    },
    {
        img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/e/e/1/a/ee1ad686c08f3a1fbbd31a03be8eb18f.jpg",
        title: "Top 100 Nhạc V-Pop Hay Nhất",
        singer: "Jack - J97, Đình Dũng, OnlyC...",
    },
    {
        img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/7/b/1/d/7b1d35be17804ecbda9f6493fe366749.jpg",
        title: "Top 100 Nhạc Phim Việt Hay Nhất",
        singer: "Phan Mạnh Quỳnh, Lâm Bảo Ngọc, Khải Đăng...",
    },
    {
        img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/6/3/d/6/63d66cba99e32af4630120850c19bd53.jpg",
        title: "Top 100 Nhạc Trịnh Hay Nhất",
        singer: "Hùng Cường, Lưu Ánh Loan, Việt Hòa...",
    },
    {
        img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/5/6/e/f/56ef7180daf17a56ee15fdbac5d80498.jpg",
        title: "Top 100 Cải Lương Hay Nhất",
        singer: "Cẩm Loan, Hoàn Lâm, Vy Thúy Hằng...",
    },
    {
        img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/a/c/a/3/aca332d8c40d39fe5f1fdfd7fc4d6c21.jpg",
        title: "Top 100 Nhạc Không Lời Hay Nhất",
        singer: "Vũ Đặng Quốc Việt, Beto, Phương Thùy...",
    },
    {
        img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/c/9/4/fc94328a7c216b9d9c5eb1521f893709.jpg",
        title: "Top 100 Nhạc Thiếu Nhi Hay Nhất",
        singer: "Ngọc Khánh Chi, Bé Thanh Chân, Ngân...",
    },
    {
        img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/8/6/c/3/86c3040f44aca0cdf8de2ec42963dcba.jpg",
        title: "Top 100 Nhạc Quê Hương Hay Nhất",
        singer: "Phi Nhung, Tố My, Dương Hồng Loan...",
    },
    {
        img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/2/6/4/f26467e87075a96bf974a8c49450bad5.jpg",
        title: "Top 100 Nhạc Cách Mạng Hay Nhất",
        singer: "Trường Ca, Quang Hà, Tình Ca Việt...",
    },
    {
        img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/b/8/0/0/b800a8b039fd00210f54e58b3309b46f.jpg",
        title: "Top 100 Nhạc Dance Việt Hay Nhất",
        singer: "CUKAK, Phát Hồ, DinhLong...",
    },
    {
        img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/9/c/0/8/9c08ea345994e2d1b8e2c55bfe86f585.jpg",
        title: "Top 100 Nhạc Rap Việt Hay Nhất",
        singer: "Phúc Du, B Ray, Binz...",
    },
    {
        img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/6/9/a/d/69adc20d10b93758ae077afc03608e02.jpg",
        title: "Top 100 Nhạc Rock Việt Hay Nhất",
        singer: "7UPPERCUTS, The Cassette, ĐÁ SỐ TỚI...",
    },
    {
        img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/8/4/3/a/843ad75cffcf672c14e9d55a52f922cc.jpg",
        title: "Top 100 Nhạc Trữ Tình Hay Nhất",
        singer: "Như Quỳnh, Mạnh Quỳnh, Đan Trường...",
    },
    {
        img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/9/8/0/f/980fe220bd14602b466aeca6c0f8ba97.jpg",
        title: "Top 100 Bài Hát Nhạc Trẻ Hay Nhất",
        singer: "Đình Dũng, Minh Vương M4U, Jack - J97...",
    },
    {},
    {}
]

function VietNamMusic() {
    return (
        <div className="wrapper-want-listen parent-four-card">
            <div className="title-explore">Nhạc Việt Nam</div>
            <FormFourCard data={list} more_card={true} />
        </div>
    )
};

export default VietNamMusic;