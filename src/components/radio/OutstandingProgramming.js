import React, { useEffect, useState } from "react";

const data = [
  {
    image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/6/7/8/4/678408238d07e2012027a96bff12d196.jpg",
    programming: "XONE Radio",
    title: "XONE With Stars",
    content:
      "Talkshow 1 tiếng với các ca sĩ, nhạc sĩ, rapper, producer, ... hẹn hò cùng các nghệ sĩ trong nước: Tóc Tiên, Đức Phúc... ",
  },
  {
    image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/avatars/f/8/4/c/f84c36fa27e1243a86d48ec87bab01d0.jpg",
    programming: "Tun cảm ơn",
    title: "Đắp chăn mền nằm nghe Tun kể",
    content:
      "Là series podcast đầu tiên của Tun, nơi Tun và các bạn có thể trải lòng với nhau về những điều mệt mỏi trong cuộc sống... ",
  },
  {
    image: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/avatars/0/a/b/3/0ab3af1e5c01362ff2f8740de8643fe1.jpg",
    programming: "Vietcetera",
    title: "Have a Sip",
    content: `"Đi cà phê không?", "Tối nay đi uống nhé?" Vietcetera tin rằng gặp nhau và gọi 1 món đồ uống chính là tạo ra không gian để bạn và người khác kết nối...`,
  },
];

function Outstanding() {
  const [active, setActive] = useState();
  const [canPrev, setCanPrev] = useState(false);

  useEffect(() => {
    setActive(data.slice(0, 2));
  }, []);

  const handlePrev = () => {
    canPrev && setActive(data.slice(0, 2));
    setCanPrev(false);
  };

  const handleNext = () => {
    !canPrev && setActive(data.slice(1));
    setCanPrev(true);
  };

  return (
    <div className="wrapper-want-listen wrapper-programming">
      <div className="icon-group">
        <div className="title-explore" style={{ margin: 0 }}>
          Chương Trình Nổi Bật
        </div>
        <div>
          <i
            onClick={handlePrev}
            style={{
              cursor: canPrev && "pointer",
              opacity: canPrev ? 1 : 0.6,
            }}
            className="fa-solid fa-angle-left"
          ></i>
          <i
            style={{
              cursor: !canPrev && "pointer",
              opacity: canPrev ? 0.6 : 1,
            }}
            onClick={handleNext}
            className="fa-solid fa-angle-right"
          ></i>
        </div>
      </div>
      <div className="wrapper-outstanding">
        {active?.map((item, index) => (
          <div key={index} className="outstanding-programming">
            <div className="img-oustanding">
              <img src={item?.image} alt="img" className="img" />
            </div>
            <div className="content-outstanding">
              <div>{item?.programming}</div>
              <div className="title-outstanding">{item?.title}</div>
              <div>{item?.content}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Outstanding;
