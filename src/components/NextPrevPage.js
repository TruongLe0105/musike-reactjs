import React from 'react';
import "./css/mainHeader.css";

function NextPrevPage() {
    return (
      <div className="wrapperTitle">
        <div style={{ marginRight: "2rem", cursor: "pointer" }}>
          <i className="fa-solid fa-arrow-left"></i>
        </div>
        <div style={{ cursor: "pointer" }}>
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    );
}

export default NextPrevPage;