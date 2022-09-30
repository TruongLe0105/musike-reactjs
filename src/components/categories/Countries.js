import React, { useEffect, useState } from "react";

// const list = [
//   {
//     img: "https://avatar-nct.nixcdn.com/playlist/2016/10/18/7/b/1/0/1476777786162_500.jpg",
//     title: "Nhạc Việt",
//   },
//   {
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3lM-ZxsN6aaEBe6IJ7viS_gYXKkwdIb3uDA&usqp=CAU",
//     title: "Nhạc Âu Mỹ",
//   },
//   {
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4C6qAJ7re_h8jFKTb3N-jYKkFHiK5RVtWkRMmohf0AQ0zz0ospA9-G4hFrCl4OL_q5X4&usqp=CAU",
//     title: "Nhạc Hàn",
//   },
//   {
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwcAHs6cz4UOXzw2fCP_qqCVUvprEHEu20pg&usqp=CAU",
//     title: "Nhạc Hoa",
//   },
// ];

function Countries({ data }) {
  const [isSlice, setIsSlice] = useState(true);
  const [newData, setNewData] = useState(data);

  useEffect(() => {
    if (isSlice) {
      const newList = data.slice(0, 3);
      setNewData(newList);
    } else {
      setNewData(data);
    }
  }, [isSlice]);

  return (
    <div className="wrapper-country">
      <div className="title-explore">Quốc Gia</div>
      <div className="wapper-card-country">
        {newData?.map((item, index) => (
          <div key={index} className="card-country">
            <div className="title-card-country">{item.title}</div>
            <img src={item.image} alt="img" className="img" />
          </div>
        ))}
      </div>
      <div
        style={{
          fontSize: "2rem",
          width: "100%",
          textAlign: "center",
          marginBottom: isSlice ? "3rem" : "2rem",
        }}
      >
        {isSlice && (
          <span
            style={{
              border: "1px solid white",
              borderRadius: "20px",
              padding: "5px 1.5rem",
              cursor: "pointer",
            }}
            onClick={() => setIsSlice(false)}
          >
            Tất Cả
          </span>
        )}
      </div>
    </div>
  );
}

export default Countries;
