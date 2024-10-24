import React from 'react';
import { Navbar } from '../components/Navbar';
import RoomBox from '../components/RoomBox';
import "../css/pages/n3.css";

const N3 = () => {
  return (
    <>
      <Navbar title="빈강의실" />
      
      <div className="n3_container">
        <div className="border-marker marker-blue marker-top-left">
        </div>
        <div className="border-marker marker-maria marker-top-right-maria">
          마리아관
        </div>
        <div className="border-marker marker-red marker-bottom-left"></div>
        <div className="room-box-max"> 
          <div className="room-box-content">
            N201
          </div>
        </div>
        <div className="flex-container">
          <div className="room-column room-column-left">
            <RoomBox text="N406" />
            <RoomBox text="N407" />
            <RoomBox text="N409" />
            <div style={{ marginBottom: '50px' }}></div>
            <RoomBox text="N415" />
          </div>
          
          {/* 중앙 텍스트 */}
          <div className="centered3-text">
            <span>니</span>
            <span>콜</span>
            <span>스</span>
            <span>4</span>
            <span>층</span>
          </div>
          <div className="room-column room-column-right">
            <RoomBox text="N405" />
            <RoomBox text="N408" />
            <RoomBox text="N410" className="room-box-highlight"
            />
            <RoomBox text="N410" />
            <RoomBox text="N410" />
            <RoomBox text="N410" />
            
        </div>
          
        </div>  {/* n1_container 닫힘 */}
        </div>
      
      {/* 입출구 및 계단 표시 */}
      <div className="label-container">
        <div className="label label-exit"></div>
        <span className="label-text">입출구</span>
        <div className="label label-stairs" style={{ marginLeft: '20px' }}></div>
        <span className="label-text">계단</span>
      </div>

      <div style={{ marginBottom: '50px' }}></div>
    </>
  );
};

export default N3;
