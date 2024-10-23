import React, { useState } from 'react';
 // Axios 인스턴스 가져오기
import { Navbar } from '../components/Navbar';
  // useNavigate import
import "../css/pages/n1.css";
import RoomBox from '../components/RoomBox';

const N1= () => {
  
  return (
    <>
        <Navbar title="빈강의실" />
        <div className="n1_container">
            <div className="border-marker marker-blue marker-top-left"></div>
            <div className="border-marker marker-blue marker-top-right"></div>
            <div className="border-marker marker-blue marker-bottom-left"></div>
            <div className="border-marker marker-blue marker-bottom-right"></div>

            <div className="border-marker marker-red marker-center-left"></div>
            <div className="border-marker marker-red marker-center-right"></div>
            <div className="room-column room-column-left">
                <RoomBox text="N119" />
                <RoomBox text="N113" />
                <div style={{ marginBottom: '30px' }}></div>

                <RoomBox text="N102" />
                <RoomBox text="N101" />
            </div>
            <div className="centered-text">
                <span>니</span>
                <span>콜</span>
                <span>스</span>
                <span>1</span>
                <span>층</span>
            </div>
            {/* 오른쪽 컬럼 */}
            <div className="room-column room-column-right">
                <RoomBox text="N114" />
                <RoomBox text="N112" />
                <RoomBox text="N104" className="room-box-highlight" />
                <div style={{ marginBottom: '10px' }}></div>
                <RoomBox text="N110"  />
                <RoomBox text="N103" />
            </div>
        </div>
        <div className="label-container">
            <div className="label label-exit"></div>
            <span className="label-text">입출구</span>

            <div className="label label-stairs" style={{ marginLeft: '20px' }}></div>
            <span className="label-text">계단</span>
        </div>
        <div style={{ marginBottom: '30px' }}></div>
    </>
  );
};

export default N1;
