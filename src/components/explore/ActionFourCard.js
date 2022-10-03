import React, { useEffect, useRef, useState } from 'react'
import FormFourCard from '../FormFourCard'

const list = [
    {
        image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/5/9/a/5/59a5868905a89f67c0dea6680779f4b7.jpg",
        title: "Huyết Hoa Rơi (single)",
        singer: "Thiên Tú"
    },
    {
        image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/0/1/3/e/013e71ac81a81edf3e6ccaa93411e955.jpg",
        title: "Cho Anh (single)",
        singer: "Lee Ken, Cần Vinh"
    },
    {
        image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/e/3/8/c/e38c2cad80dbe5cf5cefede1ca2ac967.jpg",
        title: "Dang Dở",
        singer: "Nal"
    },
    {
        image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/d/0/2/c/d02cdc17fe21cbc118a5216e8cc9c006.jpg",
        title: "Thiêu Thân (single)",
        singer: "Ali Hoàng Dương"
    },
    {
        image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/9/b/b/8/9bb83525f19ff08c0f4f377daf4b5206.jpg",
        title: "Đâu Phải Cho Anh",
        singer: "Phát Lee, TVk"
    },
    {
        image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/7/8/a/9/78a90bd9dbe81b1069be62912d6c2481.jpg",
        title: "Thế Nhân Sự Đời",
        singer: "Lâm Thái Bảo"
    },
    {
        image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/1/2/7/1/12719a2625e6dda2f568c347c64d4eb3.jpg",
        title: "Người Ta Có Yêu Thật Đâu (single)",
        singer: "Gia Huy singer"
    },
    {
        image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/e/9/8/3e982c53e8395c7c4dd07e3e7e3e1e6b.jpg",
        title: "Có Ai Đâu Ngờ (single)",
        singer: "H-Kray, Huỳnh Chương"
    },
    {
        image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/6/e/1/6/6e16e7f26ed20152a3571c5343d58580.jpg",
        title: "Mưa Phía Đông (single)",
        singer: "Đoàn Vy"
    },
    {
        image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/0/3/6/4/0364c8e28ebb8a7b5f136e41e68cde06.jpg",
        title: "Yên (EP)",
        singer: "Đoan Dũng"
    },
    {
        image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/d/f/4/6/df46a2117fff0cb1090d3665ac595f12.jpg",
        title: "Từng Là Của Nhau",
        singer: "Bảo Anh, Táo"
    },
    {
        image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/1/4/6/e/146e2543f5fddd6a5a5fc2d2d311b9c4.jpg",
        title: "Chưa Từng (Người Yêu Cũ) Của Ai (single)",
        singer: "Shine Thành Anh"
    },
]

function ActionFourCard() {
    const [listActive, setListActive] = useState(list.slice(0, 4));
    const [index, setIndex] = useState(0);
    const animationRefId = useRef(null);

    const myAnimation = () => {
        animationRefId.current = setInterval(() => {
            if (index === 0) {
                setListActive(list.slice(0, 4));
            } else if (index === 1) {
                setListActive(list.slice(4, 8));
            } else {
                setListActive(list.slice(8,));
            }
            const newIndex = index < 2 ? index + 1 : 0;
            setIndex(newIndex);
        }, 4000)
    }

    useEffect(() => {
        myAnimation();
        return () => clearInterval(animationRefId.current);
    }, [index]);

    return (
        <div className="wrapper-want-listen"
            style={{
                height: "35rem"
            }}
        >
            <FormFourCard data={listActive} />
        </div>
    )
}

export default ActionFourCard