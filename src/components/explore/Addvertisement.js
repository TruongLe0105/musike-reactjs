import React from 'react'

function Addvertisement() {
    const listAds = [
        "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/beggers.png",
        "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/universal-1.png",
        "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/yg.png",
        "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/orcahrd.png",
        "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/FUGA.png",
        "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/monstercat.png",
        "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/SM-Entertainment.png",
        "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/Kakao-M.png",
        "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/sony.png",
        "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/empire.png",
    ]
    return (
        <div className="container-ads">
            {listAds.map((item, index) => (
                <div className="img-ads" key={index}>
                    <img src={item} alt="ads" className="img" />
                </div>
            ))}
        </div>
    )
}

export default Addvertisement