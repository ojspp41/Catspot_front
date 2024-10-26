import React, { useState } from "react";
// Axios 인스턴스 가져오기
import { Navbar } from "../components/Navbar";
// useNavigate import
import RoomBox from "../components/RoomBox";
import ScheduleModal from "../components/ScheduleModal";
import "../css/pages/m3.css";

const mockScheduleData = {
  N114: {
    room: "N114",
    classes: [
      { time: 9, subjectName: "문제해결기법" },
      { time: 10, subjectName: "문제해결기법" },
      { time: 12, subjectName: "데이터베이스설계" },
    ],
  },
  N104: {
    room: "N104",
    classes: [
      { time: 10, subjectName: "인공지능" },
      { time: 13, subjectName: "컴퓨터구조" },
    ],
  },
  N119: {
    room: "N119",
    classes: [
      { time: 9, subjectName: "소프트웨어공학" },
      { time: 14, subjectName: "운영체제" },
    ],
  },
  N113: {
    room: "N113",
    classes: [
      { time: 9, subjectName: "컴퓨터과학" },
      { time: 11, subjectName: "컴퓨터구조" },
    ],
  },
  N102: {
    room: "N102",
    classes: [
      { time: 10, subjectName: "자료구조" },
      { time: 12, subjectName: "알고리즘" },
    ],
  },
  N101: {
    room: "N101",
    classes: [
      { time: 9, subjectName: "프로그래밍 기초" },
      { time: 15, subjectName: "데이터 분석" },
    ],
  },
  N112: {
    room: "N112",
    classes: [
      { time: 9, subjectName: "네트워크 기초" },
      { time: 14, subjectName: "컴퓨터 네트워크" },
    ],
  },
  N110: {
    room: "N110",
    classes: [
      { time: 11, subjectName: "컴퓨터 보안" },
      { time: 16, subjectName: "암호학" },
    ],
  },
  N103: {
    room: "N103",
    classes: [
      { time: 10, subjectName: "데이터베이스" },
      { time: 14, subjectName: "데이터 모델링" },
    ],
  },
};

const M3 = () => {
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
      <div className="m3_container">
        <div className="border-marker marker-red marker-bottom-left"></div>
        <div className="border-marker marker-nicols marker-top-right-nicols">니콜스관</div>

        <div className="room-column room-column-left">
          <RoomBox text="M301" className="room-box-highlight" onClick={() => handleRoomClick("M301")} />
          <RoomBox text="M302" onClick={() => handleRoomClick("M302")} />
          <RoomBox text="M303" onClick={() => handleRoomClick("M303")} />
          <RoomBox text="M304" className="room-box-highlight" onClick={() => handleRoomClick("M304")} />
          <RoomBox text="M305" onClick={() => handleRoomClick("M305")} />
          <RoomBox text="M306" onClick={() => handleRoomClick("M306")} />
          <RoomBox text="M307" onClick={() => handleRoomClick("M307")} />
        </div>

        <div className="centered-text">
          <span>마</span>
          <span>리</span>
          <span>아</span>
          <span>3</span>
          <span>층</span>
        </div>

        {/* 오른쪽 컬럼 */}
        <div className="room-column room-column-right">
          <RoomBox text="M320" className="room-box-highlight" onClick={() => handleRoomClick("M320")} />
          <RoomBox text="M321" onClick={() => handleRoomClick("M321")} />
          <RoomBox text="M322" onClick={() => handleRoomClick("M322")} />
        </div>
      </div>

      <div className="label-container">
        <div className="label label-exit"></div>
        <span className="label-text">입출구</span>
        <div className="label label-stairs" style={{ marginLeft: "20px" }}></div>
        <span className="label-text">계단</span>
      </div>

      <div style={{ marginBottom: "30px" }}></div>

      {selectedRoom && <ScheduleModal schedule={selectedRoom} onClose={closeModal} />}
    </>
  );
};

export default M3;
