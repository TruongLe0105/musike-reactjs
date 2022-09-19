import React from 'react';
import DetailGenres from '../../components/detail/DetailGenres';
import FormFourCard from '../../components/FormFourCard';

const data = {
    banner: "https://photo-zmp3.zmdcdn.me/banner/6/9/c/c/69cc57b2dd854ce2db7020197073cf51.jpg",
    title: "Chỉ Có Thể Là BLACKPINK",
    singers: "BLACKPINK",
    update: "16/09/2022",
    like: "9k người yêu thích",
    preface: "Tuyển tập những ca khúc nổi bật nhất của nhóm nhạc BLACKPINK.",
    list: [
        {
            img: "https://res.cloudinary.com/deg3ts6ui/image/upload/v1663121968/hym6otu3nw9f0hdvc3zl.jpg",
            song: "Shut Down",
            singer: "BLACKPINK",
            album: "BORN PINK",
            time: "02:35",
        },
        {
            img: "https://res.cloudinary.com/deg3ts6ui/image/upload/v1663121924/b3gtnzsmtfeewlyb3css.jpg",
            song: "Pink Venom",
            singer: "BLACKPINK",
            album: "Pink Venom (Single)",
            time: "02:35",
        },
        {
            img: "https://res.cloudinary.com/deg3ts6ui/image/upload/v1663121835/cxibscfpxc34ddbfb5hv.jpg",
            song: "How You Like That",
            singer: "BLACKPINK",
            album: "How You Like That",
            time: "02:35",
        },
        {
            img: "https://res.cloudinary.com/deg3ts6ui/image/upload/v1663121968/hym6otu3nw9f0hdvc3zl.jpg",
            song: "DDU-DU DDU-DU",
            singer: "BLACKPINK",
            album: "abc",
            time: "02:35",
        },
        {
            img: "https://res.cloudinary.com/deg3ts6ui/image/upload/v1663121835/cxibscfpxc34ddbfb5hv.jpg",
            song: "Lovesick Girls",
            singer: "BLACKPINK",
            album: "Square Up (EP)",
            time: "02:35",
        },
        {
            img: "https://res.cloudinary.com/deg3ts6ui/image/upload/v1663121924/b3gtnzsmtfeewlyb3css.jpg",
            song: "Kill This Love",
            singer: "BLACKPINK",
            album: "The ALBUM",
            time: "02:35",
        },
        {
            img: "https://res.cloudinary.com/deg3ts6ui/image/upload/v1663121924/b3gtnzsmtfeewlyb3css.jpg",
            song: "Kill This Love",
            singer: "BLACKPINK",
            album: "The ALBUM",
            time: "02:35",
        },
        {
            img: "https://res.cloudinary.com/deg3ts6ui/image/upload/v1663121924/b3gtnzsmtfeewlyb3css.jpg",
            song: "Kill This Love",
            singer: "BLACKPINK",
            album: "The ALBUM",
            time: "02:35",
        },
        {
            img: "https://res.cloudinary.com/deg3ts6ui/image/upload/v1663121924/b3gtnzsmtfeewlyb3css.jpg",
            song: "Kill This Love",
            singer: "BLACKPINK",
            album: "The ALBUM",
            time: "02:35",
        },
        {
            img: "https://res.cloudinary.com/deg3ts6ui/image/upload/v1663121924/b3gtnzsmtfeewlyb3css.jpg",
            song: "Kill This Love",
            singer: "BLACKPINK",
            album: "The ALBUM",
            time: "02:35",
        },
        {
            img: "https://res.cloudinary.com/deg3ts6ui/image/upload/v1663121924/b3gtnzsmtfeewlyb3css.jpg",
            song: "Kill This Love",
            singer: "BLACKPINK",
            album: "The ALBUM",
            time: "02:35",
        },
        {
            img: "https://res.cloudinary.com/deg3ts6ui/image/upload/v1663121924/b3gtnzsmtfeewlyb3css.jpg",
            song: "Kill This Love",
            singer: "BLACKPINK",
            album: "The ALBUM",
            time: "02:35",
        },
        {
            img: "https://res.cloudinary.com/deg3ts6ui/image/upload/v1663121924/b3gtnzsmtfeewlyb3css.jpg",
            song: "Kill This Love",
            singer: "BLACKPINK",
            album: "The ALBUM",
            time: "02:35",
        },
    ],
    can_you_like: [
        {
            img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/avatars/5/e/1/c/5e1cf701a844b0b062cbe0045ee261c9.jpg",
            title: "Những Bài Hát Hay Nhất Của BLACKPINK",
            singer: "BLACKPINK",
        },
        {
            img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/a/2/4/2/a242422f5ee3f2289ba7c8a9fbec7e91.jpg",
            title: "YG Family",
            singer: "BIGBANG, BLACKPINK, iKON...",
        },
        {
            img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/5/3/3/6/53367483f7d044e334ec422d63223193.jpg",
            title: "Hit-Market, Teddy Park",
            singer: "BLACKPINK, 2NE1, BIGBANG...",
        },
        {
            img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/e/3/c/3e3ce3a1641efe969c7a26f8eafbfcc4.jpg",
            title: "Top Hits K-Pop",
            singer: "BTS, IU, TAEYEON...",
        },
    ],
    relate_to: {
        header: "Rock",
        list: [
            {
                img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/1/b/b/9/1bb92350b8c9adb386f1054be073bbec.jpg",
                title: "Nhạc Hàn Được Nghe Nhiều Nhất",
                singer: "TWICE, BLACKPINK, Halsey...",
            },
            {
                img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/covers/c/c/cc94b60e9c4fd0e44f634658ceeb74ff_1327976834.jpg",
                title: "GROWN-UP",
                singer: "FT Island"
            },
            {
                img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/covers/c/c/cc94b60e9c4fd0e44f634658ceeb74ff_1327976834.jpg",
                title: "GROWN-UP",
                singer: "FT Island"
            },
            {
                img: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/covers/c/c/cc94b60e9c4fd0e44f634658ceeb74ff_1327976834.jpg",
                title: "GROWN-UP",
                singer: "FT Island"
            },
        ]
    }
}

function AlbumPage() {


    //Call api

    const params = window.location.search.substring(1);
    console.log("params", params);

    return (
        <div className="wrapper-detail-card">
            <DetailGenres data={data} />
            <div className="wrapper-want-listen" style={{
                marginTop: "4rem"
            }}>
                <div className="title-explore">Có Thể Bạn Quan Tâm</div>
                <FormFourCard data={data?.can_you_like} />
            </div>
            <div className="wrapper-want-listen" style={{
                marginTop: "4rem"
            }}>
                <div className="title-explore">{data.relate_to.header}</div>
                <FormFourCard data={data?.relate_to.list} />
            </div>
        </div>
    )
}

export default AlbumPage;