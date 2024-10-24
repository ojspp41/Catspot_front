import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import RoomBox from '../components/RoomBox';
import ScheduleModal from '../components/ScheduleModal'; // 모달 추가
import "../css/pages/n3.css";

// 목데이터 예시
const mockScheduleData = {
  N301: {
    room: "N301",
    classes: [
      { time: 9, subjectName: "자료구조" },
      { time: 12, subjectName: "컴퓨터 네트워크" },
    ],
  },
  N308: {
    room: "N308",
    classes: [
      { time: 10, subjectName: "데이터베이스" },
      { time: 14, subjectName: "운영체제" },
    ],
  },
  N310: {
    room: "N310",
    classes: [
      { time: 9, subjectName: "프로그래밍 언어" },
      { time: 13, subjectName: "프론트엔드 개발" },
    ],
  },
  N312: {
    room: "N312",
    classes: [
      { time: 11, subjectName: "기계학습" },
      { time: 15, subjectName: "알고리즘" },
    ],
  },
  N319: {
    room: "N319",
    classes: [
      { time: 10, subjectName: "운영체제" },
      { time: 14, subjectName: "데이터 분석" },
    ],
  },
  N307: {
    room: "N307",
    classes: [
      { time: 9, subjectName: "모바일 프로그래밍" },
      { time: 12, subjectName: "컴퓨터 비전" },
    ],
  },
  N314: {
    room: "N314",
    classes: [
      { time: 11, subjectName: "프론트엔드 개발" },
      { time: 16, subjectName: "데이터베이스" },
    ],
  },
  N309: {
    room: "N309",
    classes: [
      { time: 10, subjectName: "백엔드 개발" },
      { time: 15, subjectName: "클라우드 컴퓨팅" },
    ],
  },
  N317: {
    room: "N317",
    classes: [
      { time: 9, subjectName: "컴퓨터 네트워크" },
      { time: 13, subjectName: "자료구조" },
    ],
  },
  N318: {
    room: "N318",
    classes: [
      { time: 12, subjectName: "알고리즘" },
      { time: 14, subjectName: "기계학습" },
    ],
  },
};

const N3 = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleRoomClick = (room) => {
    if (room !== "상담실") { // 상담실 클릭 시 아무 동작 안 함
      setSelectedRoom(mockScheduleData[room]);
    }
  };

  const closeModal = () => {
    setSelectedRoom(null);
  };

  return (
    <>
      <Navbar title="빈강의실" />
      
      <div className="n3_container">
        <div className="border-marker marker-blue marker-top-left"></div>
        <div className="border-marker marker-maria marker-top-right-maria">마리아관</div>
        <div className="border-marker marker-red marker-bottom-left"></div>
        
        {/* N301 부분 */}
        <div className="room-box-max" onClick={() => handleRoomClick("N301")}> 
          <div className="room-box-content">
            N301
          </div>
        </div>
        
        <div className="flex-container">
          <div className="room-column room-column-left">
            <RoomBox text="N308" onClick={() => handleRoomClick("N308")} />
            <RoomBox text="N310" onClick={() => handleRoomClick("N310")} />
            <RoomBox text="N312" onClick={() => handleRoomClick("N312")} />
            <div style={{ marginBottom: '50px' }}></div>
            <RoomBox text="N319" onClick={() => handleRoomClick("N319")} />
          </div>
          
          {/* 중앙 텍스트 */}
          <div className="centered3-text">
            <span>니</span>
            <span>콜</span>
            <span>스</span>
            <span>3</span>
            <span>층</span>
          </div>

          <div className="room-column room-column-right">
            <RoomBox text="N307" onClick={() => handleRoomClick("N307")} />
            <RoomBox text="N314" onClick={() => handleRoomClick("N314")} />
            <RoomBox text="상담실" className="room-box-highlight" onClick={() => handleRoomClick("상담실")} />
            <RoomBox text="N309" onClick={() => handleRoomClick("N309")} />
            <RoomBox text="N317" onClick={() => handleRoomClick("N317")} />
            <RoomBox text="N318" onClick={() => handleRoomClick("N318")} />
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

      {selectedRoom && (
        <ScheduleModal schedule={selectedRoom} onClose={closeModal} />
      )}
    </>
  );
};

export default N3;
