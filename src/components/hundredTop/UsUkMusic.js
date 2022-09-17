import React from 'react';
import FormFourCard from '../FormFourCard';

const list = [
    {
        img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/d/6/0/3d60491e7407321dbce823a2e8588b92.jpg",
        title: "Top 100 Nhạc Audiophile Âu Mỹ Hay Nhất",
        singer: "Bobby Vinton, Herman's Hermits, Matt Monro...",
    },
    {
        img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/4/8/d/5/48d556485a84f1100b561623075538b8.jpg",
        title: "Top 100 Nhạc Folk Âu Mỹ Hay Nhất",
        singer: "Lydia Cole, The Paper Kites, Aoife O'Donovan,...",
    },
    {
        img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/7/1/4/f714adb9de227923806c7076b99dd6c0.jpg",
        title: "Top 100 Nhạc Blue/Jazz Hay Nhất",
        singer: "Eartha Kitt, Pablo Cepeda, Lynn Blessing...",
    },
    {
        img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/a/5/9/fa59f41bb360d16b5089f5d26a7a761c.jpg",
        title: "Top 100 Nhạc Trance/House/Techno Âu Mỹ Hay Nhất",
        singer: "Alan Walker, K-391, Emelie Hollow...",
    },
    {
        img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/8/5/5/2/85526565d826c80f9d709361908d6846.jpg",
        title: "Top 100 Nhạc Indie Âu Mỹ Hay Nhất",
        singer: "Au/Ra, Luke Hemmings, Declan Mackenna...",
    },
    {
        img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/4/a/3/5/4a352cf9e92b9cc794c5d9cc8b35fa30.jpg",
        title: "Top 100 Nhạc Christian & Gospel Âu Mỹ Hay Nhất",
        singer: "Rhett Walker, Pentatonix, Justin Bieber...",
    },
    {
        img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/a/b/3/8/ab389ff054099f722894413871b08644.jpg",
        title: "Top 100 Nhạc Phim Âu Mỹ Hay Nhất",
        singer: "Lionel Richie, Ariana Grande, Low Roar...",
    },
    {
        img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/9/e/0/4/9e047c9d089c68f60bce31b20ff59a97.jpg",
        title: "Top 100 Nhạc R&B Âu Mỹ Hay Nhất",
        singer: "Giveon, Khalid, Nicki Minaj...",
    },
    {
        img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/c/5/f/c/c5fc615c43215c6b72676f42767855ee.jpg",
        title: "Top 100 Nhạc Electronic/Dance Âu Mỹ Hay Nhất",
        singer: "Alan Walker, K-391, Emelie Hollow...",
    },
    {
        img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/6/6/f/8/66f8ddb7b4b7fe2b1b4076ea2cd05c93.jpg",
        title: "Top 100 Nhạc Country Âu Mỹ Hay Nhất",
        singer: "Taylow Switf, Mitchell Tenpenny, Walker Hayes...",
    },
    {
        img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/1/0/a/9/10a90831c995dbcb7a8dc76327e40997.jpg",
        title: "Top 100 Nhạc Rap/Hiphop Âu Mỹ Hay Nhất",
        singer: "Post Malone, Iann Dior, 24KGoldn...",
    },
    {
        img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/f/d/8/3fd85ec2d5234067f03dccb5a0e711d8.jpg",
        title: "Top 100 Nhạc Rock Âu Mỹ Hay Nhất",
        singer: "Simple Plan, KOJ, Foo Fighters...",
    },
    {
        img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/6/0/6/4/606430a29783ea7f864de569bb8a45d0.jpg",
        title: "Top 100 Nhạc Pop Âu Mỹ Hay Nhất",
        singer: "Adele, The Kid LAROI, Justin Bieber...",
    },
]

function UsUkMusic() {
    return (
        <div className="wrapper-want-listen" style={{ marginTop: "1rem" }}>
            <div className="title-explore">Nhạc Âu Mỹ</div>
            <FormFourCard data={list} more_card={true} />
        </div>
    )
}

export default UsUkMusic;