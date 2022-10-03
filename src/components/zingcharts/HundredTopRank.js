import React from 'react';
import { HeartButton, LyricsButton, OptionButton } from '../Button';
import "../css/zingchart.css";


function HundredTopRank({ data, collapse, title }) {
  return (
    <div className="wrapper-rank-hundred">
      {title && (
        <div
          style={{
            color: "white",
            fontSize: "4rem",
            fontWeight: "bold",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "2rem",
            paddingTop: "5rem",
          }}
        >
          <div>{title}</div>
        </div>
      )}
      {data.map((item, index) => (
        <div key={index} className="rank-hundred">
          <div className="wrapper-content-left">
            <div className="index">{index + 1}</div>
            <div className="strikethrough">_</div>
            <div className="content-left">
              <div className="wrapper-img">
                <img src={item?.image} alt="zing-chart" className="img" />
                <div className="bg-black" />
                <i className="fa-solid fa-play" />
              </div>
              <div>
                <div className="title-content">{item.title}</div>
                <a className="link-detail" href="/#">{item.singer}</a>
              </div>
            </div>
          </div>
          <div className="wrapper-content-center">{item.title} (Single)</div>
          <div className="wrapper-content-right">{item.time}</div>
          <div className="wrapper_icon icon-group">
            <LyricsButton />
            <HeartButton />
            <OptionButton />
          </div>
        </div>
      ))}
      {collapse && <div className="btn-top-hundred">Xem top 100</div>}
    </div>
  );
}

export default HundredTopRank