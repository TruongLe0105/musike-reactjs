import React, { useEffect, useRef, useState } from 'react';

const banners = [
    "https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/jack.png",
    "https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/huong-ly.png",
    "https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/erik.png",
    "https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/karik.png",
    "https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/duc-phuc.png",
    "https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/trinh-thanh-binh.png",
    "https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/hoa-minzy.png",
    "https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/justatee.png",
    "https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/justatee.png",
    "https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/onlyc.png",
    "https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/mr-siro.png",
    "https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/chi-dan.png",
]

function SingerBanners() {
    const [listBanner, setListBanner] = useState(null);
    const [canPrev, setCanPrev] = useState(false);
    const [canNext, setCanNext] = useState(true);
    const myIntervalId = useRef(null);

    const handlePrev = () => {
        if (canPrev) {
            setCanPrev(false);
            setCanNext(true);
        }
    }

    const handleNext = () => {
        if (canNext) {
            setCanNext(false);
            setCanPrev(true);
        }
    }

    const myAnimation = () => {
        myIntervalId.current = setInterval(() => {
            if (canNext) {
                setListBanner(banners.slice(0, 6))
                setCanNext(false);
                setCanPrev(true);
            } else {
                setListBanner(banners.slice(6,))
                setCanNext(true);
                setCanPrev(false);
            }
        }, 4000)
    }

    useEffect(() => {
        const bannerActive = canNext ? banners.slice(0, 6) : banners.slice(6,)
        setListBanner(bannerActive);
        myAnimation();
        return () => clearInterval(myIntervalId.current);
    }, [canNext, canPrev]);

    return (
        <div className="container-banner-singer" >
            <div
                onClick={handlePrev}
                className={!canPrev ? "disable-left" : "chevron-left"}
            >
                <i className="fa-solid fa-chevron-left" />
            </div>
            <div
                onClick={handleNext}
                className={!canNext ? "disable-right" : "chevron-right"}
            >
                <i className="fa-solid fa-chevron-right" />
            </div>
            <div className="wrapper-banner-singer">
                {listBanner?.map((item, index) => (
                    <div className="item-img-banner" key={index}>
                        <img src={item} alt="img" className="img" />
                    </div>
                ))}
            </div>
        </div>
    )
};

export default SingerBanners;