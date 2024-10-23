import React from 'react';
import { Navbar } from '../components/Navbar';
import RoomBox from '../components/RoomBox';
import "../css/pages/n1.css";

const N4 = () => {
  return (
    <>
      <Navbar title="빈강의실" />
      
      <div className="n1_container">
        <div className="border-marker marker-blue marker-top-left">
        </div>
        <div className="border-marker marker-maria marker-top-right-maria">
          마리아관
        </div>
        <div className="border-marker marker-red marker-bottom-left"></div>
        {/* 왼쪽 컬럼 */}
        
        <div className="room-column room-column-left">
          <RoomBox text="N406" />
          <RoomBox text="N407" />
          <RoomBox text="N409" />
          <div style={{ marginBottom: '70px' }}></div>
          <RoomBox text="N413" />
          <RoomBox text="N415" />
        </div>

        {/* 중앙 텍스트 */}
        <div className="centered-text">
          <span>니</span>
          <span>콜</span>
          <span>스</span>
          <span>4</span>
          <span>층</span>
        </div>

        {/* 오른쪽 컬럼 */}
        <div className="room-column room-column-right">
          <RoomBox text="N405" />
          <RoomBox text="N408" />
          <RoomBox text="N410" />
          <RoomBox text="N411" className="room-box-highlight" />
          <RoomBox text="N412" />
          <RoomBox text="N414" />
        </div>
      </div>  {/* n1_container 닫힘 */}
      
      {/* 입출구 및 계단 표시 */}
      <div className="label-container">
        <div className="label label-exit"></div>
        <span className="label-text">입출구</span>
        <div className="label label-stairs" style={{ marginLeft: '20px' }}></div>
        <span className="label-text">계단</span>
      </div>

      <div style={{ margin: '30px' }}></div>
    </>
  );
};

export default N4;
