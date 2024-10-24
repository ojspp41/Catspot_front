import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import RoomBox from '../components/RoomBox';
import ScheduleModal from '../components/ScheduleModal';
import "../css/pages/n1.css";

// 목데이터 예시
const mockScheduleData = {
  N209: {
    room: "N209",
    classes: [
      { time: 9, subjectName: "알고리즘" },
      { time: 10, subjectName: "자료구조" },
    ],
  },
  N211: {
    room: "N211",
    classes: [
      { time: 11, subjectName: "운영체제" },
      { time: 14, subjectName: "프로그래밍 언어" },
    ],
  },
  N219: {
    room: "N219",
    classes: [
      { time: 10, subjectName: "컴퓨터 네트워크" },
      { time: 12, subjectName: "소프트웨어 공학" },
    ],
  },
  N208: {
    room: "N208",
    classes: [
      { time: 9, subjectName: "인공지능" },
      { time: 13, subjectName: "컴퓨터 비전" },
    ],
  },
  N210: {
    room: "N210",
    classes: [
      { time: 10, subjectName: "컴파일러" },
      { time: 15, subjectName: "디지털 회로" },
    ],
  },
  N212: {
    room: "N212",
    classes: [
      { time: 11, subjectName: "데이터베이스" },
      { time: 14, subjectName: "웹 프로그래밍" },
    ],
  },
  N218: {
    room: "N218",
    classes: [
      { time: 9, subjectName: "모바일 프로그래밍" },
      { time: 12, subjectName: "프론트엔드 개발" },
    ],
  },
};

const N2 = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleRoomClick = (room) => {
    setSelectedRoom(mockScheduleData[room]);
  };

  const closeModal = () => {
    setSelectedRoom(null);
  };

  return (
    <>
      <Navbar title="빈강의실" />
      <div className="n1_container">
        <div className="border-marker marker-red marker-top-left"></div>
        <div className="border-marker marker-red marker-bottom-left"></div>

        {/* 왼쪽 컬럼 */}
        <div className="room-column room-column-left">
          <RoomBox text="N209" onClick={() => handleRoomClick("N209")} />
          <RoomBox text="N211" onClick={() => handleRoomClick("N211")} />
          <div style={{ marginBottom: '100px' }}></div>
          <RoomBox text="N219" onClick={() => handleRoomClick("N219")} />
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
          <RoomBox text="N208" onClick={() => handleRoomClick("N208")} />
          <RoomBox text="N210" onClick={() => handleRoomClick("N210")} />
          <RoomBox text="N212" className="room-box-highlight" onClick={() => handleRoomClick("N212")} />
          <div style={{ marginBottom: '60px' }}></div>
          <RoomBox text="N218" onClick={() => handleRoomClick("N218")} />
        </div>
      </div> {/* n1_container 닫힘 */}
      
      {/* 입출구 및 계단 표시 */}
      <div className="label-container">
        <div className="label label-exit"></div>
        <span className="label-text">입출구</span>
        <div className="label label-stairs" style={{ marginLeft: '20px' }}></div>
        <span className="label-text">계단</span>
      </div>

      <div style={{ margin: '30px' }}></div>

      {selectedRoom && (
        <ScheduleModal schedule={selectedRoom} onClose={closeModal} />
      )}
    </>
  );
};

export default N2;
