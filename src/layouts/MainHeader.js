import React from "react";

function MainHeader() {
  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    height: "100%",
  };

  return (
    <div style={containerStyle}>
      <div>
        <h2>Free Music</h2>
      </div>
      <div>
        <h2>Genres</h2>
      </div>
      <div>
        <h2>Play list</h2>
      </div>
      <div>
        <input />
      </div>
      <div>
        <p>Avatar</p>
        <p>Name</p>
        <p>Info</p>
        <i class="fa-solid fa-angle-down"></i>
      </div>
      <div>
        <i class="fa-solid fa-comment-dots"></i>
      </div>
      <div>
        <i class="fa-light fa-gear"></i>
      </div>
    </div>
  );
}

export default MainHeader;
