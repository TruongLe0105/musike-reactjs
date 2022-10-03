import React from 'react'
import FormFourCard from '../FormFourCard'

function CanYouWantListen() {
    const list = [
        {
            image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/2/7/2/9/2729fa004931e9c726d9f90c3528115b.jpg",
            title: "Vinahouse chọn lọc",
            singer: "Minh vương M4U, Đinh tùng huy, đình dũng..."
        },
        {
            image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/6/0/9/2/6092edd373fcd768e426d267c2e21d82.jpg",
            title: "nhạc hoa lời việt hay nhất",
            singer: "đan trường, tăng phúc, trương thảo nhi..."
        },
        {
            image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/0/5/2/5/052545d54d42c5026b7e14b309a6aeb9.jpg",
            title: "lofi remix",
            singer: "muộii, nguyễn trọng tài, freak d..."
        },
        {
            image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/2/4/a/324a4ab3eb3444ba9d7b288bf677aed9.jpg",
            title: "trữ tình hải ngoại",
            singer: "quang lê, như quỳnh, phi nhung"
        },
    ]
    return (
        <div className="wrapper-want-listen">
            <div className="title-explore">có thể bạn muốn nghe</div>
            <FormFourCard data={list} />
        </div>
    )
}

export default CanYouWantListen;