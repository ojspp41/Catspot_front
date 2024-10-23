import React from 'react';
import { Navbar } from '../components/Navbar';
import RoomBox from '../components/RoomBox';
import "../css/pages/n1.css";

const N2 = () => {
  return (
    <>
      <Navbar title="빈강의실" />
      <div className="n1_container">
        <div className="border-marker marker-red marker-top-left"></div>
        <div className="border-marker marker-red marker-bottom-left"></div>

        {/* 왼쪽 컬럼 */}
        <div className="room-column room-column-left">
          <RoomBox text="N209" />
          <RoomBox text="N211" />
          <div style={{ marginBottom: '100px' }}></div>
          <RoomBox text="N219" />
        </div>

        {/* 중앙 텍스트 */}
        <div className="centered-text">
          <span>니</span>
          <span>콜</span>
          <span>스</span>
          <span>2</span>
          <span>층</span>
        </div>

        {/* 오른쪽 컬럼 */}
        <div className="room-column room-column-right">
          <RoomBox text="N208" />
          <RoomBox text="N210" />
          <RoomBox text="N212" className="room-box-highlight" />
          <div style={{ marginBottom: '60px' }}></div>
          <RoomBox text="N218" />
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

export default N2;
