import React, { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";

import "../css/pages/n1.css";

const BA1 = () => {
  

  return (
    <>
      <Navbar title="빈강의실" />
      <div className="n1_container">
        <div className="border-marker marker-blue marker-bottom-right"></div>
        <div className="border-marker marker-red marker-top-right"></div>
        <div className="room-column room-column-left"></div>

        

        {/* Centered text */}
        <div className="centered-text">
          <span>밤</span>
          <span>비</span>
          <span>노</span>
          <span>1</span>
          <span>층</span>
        </div>
        <div className="room-column room-column-right"></div>
        {/* Right column */}
        
      </div>
      <p className="helper-text">강의실을 클릭하여 시간표를 확인하세요!</p>
      

      {/* Exit and stairs labels */}
      <div className="label-container">
        <div className="label label-use "></div>
        <span className="label-text label-margin">사용중</span>
        <div className="label label-exit"></div>
        <span className="label-text">입출구</span>
        <div className="label label-stairs" style={{ marginLeft: "20px" }}></div>
        <span className="label-text">계단</span>
      </div>

      <div style={{ margin: "30px" }}></div>

      
    </>
  );
};

export default BA1;
