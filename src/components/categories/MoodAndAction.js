import React from "react";

function MoodAndAction({ data }) {
  return (
    <div className="wrapper-mood-action">
      <div
        className="title-explore"
        style={{ margin: 0, marginBottom: "2rem" }}
      >
        Tâm Trạng Và Hoạt Động
      </div>
      <div className="wrapper-card-mood">
        {data?.map((item, index) => (
          <div key={index} className="wrapper-item-mood">
            <img src={item?.image} alt="img" className="img-bigest" />
            <div className="title-mood">{item?.title}</div>
            <div className="wrapper-img-smaller">
              <img src={item?.banner_first} alt="img" className="img" />
              <img src={item?.banner_second} alt="img" className="img" />
              <img src={item?.banner_third} alt="img" className="img" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoodAndAction;
