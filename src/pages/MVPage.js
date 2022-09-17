import React, { useEffect, useState } from "react";
import FormCardMV from "../components/MV/FormCardMV";
import OptionTabMV from "../components/MV/OptionTabMV";
import TabsMV from "../components/MV/TabsMV";


const list = [
  [
    {
      img: "https://photo-resize-zmp3.zmdcdn.me/w600_r300x169_webp/thumb_video/c/3/5/8/c35826756d0020fde4272cd6d2b20420.jpg",
      imgSinger: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/0/2/0220f492c95a2995c9e28980f66fa9f2_1516088772.jpg",
      title: "Chiếc Đèn Ông Sao",
      singer: "Bé Thanh Ngân",
      time: "03:30",
    },
    {
      img: "https://photo-resize-zmp3.zmdcdn.me/w600_r300x169_webp/thumb_video/d/6/e/6/d6e6201323fed8fb16886a3f428fc4f7.jpg",
      imgSinger: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/4/5/a/b/45ab1296d73b215629fcbab092687d4c.jpg",
      title: "Túp Lều Vàng",
      singer: "Nguyễn Đình Vũ, ACV",
      time: "03:30",
    },
    {
      img: "https://photo-resize-zmp3.zmdcdn.me/w600_r300x169_webp/thumb_video/6/8/9/b/689b9f49c7ceb4ca4dc326571bba4e2a.jpg",
      imgSinger: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/9/b/8/9/9b89b2a594d805de75eeb1ce0547fff8.jpg",
      title: "Lựa Chọn Của Anh",
      singer: "Thương Võ, ACV",
      time: "03:30",
    },
    {
      img: "https://photo-resize-zmp3.zmdcdn.me/w600_r300x169_webp/thumb_video/8/0/1/c/801c0a9f296fd140a40f94ba3eae5e35.jpg",
      imgSinger: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/5/e/5/d/5e5dfdfa44a483ebaf6952fa52a5a60a.jpg",
      title: "Đom Đóm",
      singer: "Jack - J97",
      time: "03:30",
    },
    {
      img: "https://photo-resize-zmp3.zmdcdn.me/w600_r300x169_webp/thumb_video/6/7/f/c/67fc99471e4c9b29cb00238a101624d1.jpg",
      imgSinger: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/b/3/6/c/b36cc91ecdf9c779085e1ad681bfc83e.jpg",
      title: "Kẹo Bông Gòn",
      singer: "H2K, TRUNKY",
      time: "03:30",
    },
    {
      img: "https://photo-resize-zmp3.zmdcdn.me/w600_r300x169_webp/thumb_video/e/c/d/0/ecd073a7ccc5fdb4b73fafb245502151.jpg",
      imgSinger: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/5/e/5/d/5e5dfdfa44a483ebaf6952fa52a5a60a.jpg",
      title: "Em Gì Ơi",
      singer: "K-ICM, Jack - J97",
      time: "03:30",
    },
  ],
  [
    {
      img: "https://photo-resize-zmp3.zmdcdn.me/w600_r300x169_webp/thumb_video/4/2/f/a/42fa68a14d3ebbbc0af180f6935c9196.jpg",
      imgSinger: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/d/c/f/9/dcf9fb1df89a69b86f1a5d1d2be7688b.jpg",
      title: "STAY",
      singer: "The Kid LAROI, Justin Bieber",
      time: "03:30",
    },
    {
      img: "https://photo-resize-zmp3.zmdcdn.me/w600_r300x169_webp/thumb_video/0/9/5/7/09577f9b392392ffecad09a772775f8f.jpg",
      imgSinger: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/4/e/d/4/4ed49660860b3dc91db4712bf2f894e8.jpg",
      title: "Travel The World",
      singer: "Spookiz",
      time: "03:30",
    },
    {
      img: "https://photo-resize-zmp3.zmdcdn.me/w600_r300x169_webp/thumb_video/7/1/7/7/7177e279d0b39bacb48a46611de2f39e.jpg",
      imgSinger: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/a/4/4/4/a4449771ab43cafa98cc30060b38b1e8.jpg",
      title: "Havana",
      singer: "Camila Cabelo, Young Thug",
      time: "03:30",
    },
    {
      img: "https://photo-resize-zmp3.zmdcdn.me/w600_r300x169_webp/thumb_video/2/2/22932972e1f543e6e1e09314ae02eac2_1467772504.jpg",
      imgSinger: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/6/a/6a4d3f1e6043d9995b7066890b104951_1466408204.jpg",
      title: "Alone",
      singer: "MarshMello",
      time: "03:30",
    },
    {
      img: "https://photo-resize-zmp3.zmdcdn.me/w600_r300x169_webp/thumb_video/b/a/2/0/ba208abb79f62840a31ad805bbfdf14e.jpg",
      imgSinger: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/2/c/1/3/2c139949903f4a0cdbc39bb988be596e.jpg",
      title: "On The Way",
      singer: "Alan Walker, Sabrina Carpenter, Farr...",
      time: "03:30",
    },
    {
      img: "https://photo-resize-zmp3.zmdcdn.me/w600_r300x169_webp/thumb_video/5/a/5ac28db0054baa551ba8c8734e6ba55c_1509166055.jpg",
      imgSinger: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/2/c/1/3/2c139949903f4a0cdbc39bb988be596e.jpg",
      title: "All Falls Down",
      singer: "Alan Walker, Noah Cyrus, Digital Far...",
      time: "03:30",
    },
  ],
  [
    {
      img: "https://photo-resize-zmp3.zmdcdn.me/w600_r300x169_webp/thumb_video/0/6/e/e/06ee2cc0a478eb76646e2f0a2180c9fe.jpg",
      imgSinger: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/3/8/4/b/384b7bc5b9732751b678896e623f41dc.jpg",
      title: "How You Like That",
      singer: "BLACKPINK",
      time: "03:30",
    },
    {
      img: "https://photo-resize-zmp3.zmdcdn.me/w600_r300x169_webp/thumb_video/6/9/b/6/69b6ba9f7a0fcc8132c425bc769427c4.jpg",
      imgSinger: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/3/8/4/b/384b7bc5b9732751b678896e623f41dc.jpg",
      title: "DDU-DU DDU-DU",
      singer: "BLACKPINK",
      time: "03:30",
    },
    {
      img: "https://photo-resize-zmp3.zmdcdn.me/w600_r300x169_webp/thumb_video/5/1/f/6/51f635c9bc795c84b0ed9614577f70e5.jpg",
      imgSinger: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/3/8/4/b/384b7bc5b9732751b678896e623f41dc.jpg",
      title: "Kill This Love",
      singer: "BLACKPINK",
      time: "03:30",
    },
    {
      img: "https://photo-resize-zmp3.zmdcdn.me/w600_r300x169_webp/thumb_video/6/d/d/9/6dd9ef11a8b5351388e2f853e5c15939.jpg",
      imgSinger: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/3/8/4/b/384b7bc5b9732751b678896e623f41dc.jpg",
      title: "Lovesick Girls",
      singer: "BLACKPINK",
      time: "03:30",
    },
    {
      img: "https://photo-resize-zmp3.zmdcdn.me/w600_r300x169_webp/thumb_video/1/c/6/7/1c67cdd044b7dbb2556530da2484a022.jpg",
      imgSinger: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/f/7/7/4/f774bd46cc7f611367a578063a11e983.jpg",
      title: "On The Round",
      singer: "ROSÉ",
      time: "03:30",
    },
    {
      img: "https://photo-resize-zmp3.zmdcdn.me/w600_r300x169_png/thumb_video/8/4/84aeb236e5ce334e741e5ee6740c6637_1470671208.png",
      imgSinger: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/3/8/4/b/384b7bc5b9732751b678896e623f41dc.jpg",
      title: "WHISTLE",
      singer: "BLACKPINK",
      time: "03:30",
    },
  ],
  [
    {
      img: "https://photo-resize-zmp3.zmdcdn.me/w600_r300x169_webp/thumb_video/2/6/260fd0de462cef9d2b8b715f5110ca4a_1393321743.jpg",
      imgSinger: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/f/3/f3ccdd27d2000e3f9255a7e3e2c48800_1369386238.jpg",
      title: "Let It Go",
      singer: "The Piano Guys",
      time: "03:30",
    },
    {
      img: "https://photo-resize-zmp3.zmdcdn.me/w600_r300x169_webp/thumb_video/6/e/6e8483d84a7718f857dacb39a2403a4b_1382948669.jpg",
      imgSinger: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/7/0/702ae655398d8e9e3bd8b469ffb8dcec_1513833326.jpg",
      title: "Nắng Ấm Xa Dần",
      singer: "An Coong",
      time: "03:30",
    },
    {
      img: "https://photo-resize-zmp3.zmdcdn.me/w600_r300x169_webp/thumb_video/1/9/b/2/19b2fbb704eb82d30eb0ae7fb4dc8935.jpg",
      imgSinger: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/f/7/f725e75795015e9af9d2a0006176ecf1_1342772380.jpg",
      title: "The Love For Life",
      singer: "Yanni",
      time: "03:30",
    },
    {
      img: "https://photo-resize-zmp3.zmdcdn.me/w600_r300x169_webp/thumb_video/7/f/7fffb663120dd173020ed4b9bc223583_1383202237.jpg  ",
      imgSinger: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/f/3/f3ccdd27d2000e3f9255a7e3e2c48800_1369386238.jpg",
      title: "Beethoven's 5 Secrets",
      singer: "The Piano Guys",
      time: "03:30",
    },
    {
      img: "https://photo-resize-zmp3.zmdcdn.me/w600_r300x169_webp/thumb_video/2013/04/19/b/b/bb8346d45e9db90c10de03334b7e89e2_1.jpg",
      imgSinger: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/7/0/702ae655398d8e9e3bd8b469ffb8dcec_1513833326.jpg",
      title: "Thời Gian Sẽ Trả Lời (Piano Cover)",
      singer: "An Coong",
    },
    {
      img: "https://photo-resize-zmp3.zmdcdn.me/w600_r300x169_webp/cover/f/9/7/4/f974a9f5360ea13d577230eda1d89935.jpg",
      imgSinger: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/c/8/c81f548a0cdf31afd58653f7760b3439_1331629225.jpg",
      title: "River Flows In You",
      singer: "Yiruma",
    },
  ]
]


function MVPage() {
  const [active, setActive] = useState(0);
  const [cards, setCards] = useState(null);

  useEffect(() => {
    setCards(list[active]);
  }, [active])

  return (
    <div className="wrapper-mv-page">
      <TabsMV active={active} setActive={setActive} />
      <OptionTabMV />
      <FormCardMV active={active} setActive={setActive} data={cards} />
    </div>
  )
}

export default MVPage;
