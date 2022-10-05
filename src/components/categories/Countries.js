import React, { useEffect, useState } from "react";

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
