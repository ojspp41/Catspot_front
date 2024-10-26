import React, { useState } from "react";
// Axios 인스턴스 가져오기
import { Navbar } from "../components/Navbar";
// useNavigate import
import RoomBox from "../components/RoomBox";
import ScheduleModal from "../components/ScheduleModal";
import "../css/pages/v1.css";

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

const V1 = () => {
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
      <div className="v1_container">
        <div className="border-marker marker-blue marker-bottom-right"></div>
        <div className="border-marker marker-red marker-center-right"></div>
        <div className="room-column room-column-left">
          <div style={{ marginInline: "50px" }}></div>
        </div>
        <div className="centered-text">
          <span>비</span>
          <span>루</span>
          <span>투</span>
          <span>스</span>
          <span>1</span>
          <span>층</span>
        </div>

        {/* 오른쪽 컬럼 */}
        <div className="room-column room-column-right">
          <RoomBox text="V111" onClick={() => handleRoomClick("V111")} />
          <RoomBox text="V112" className="room-box-highlight" onClick={() => handleRoomClick("V112")} />
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

export default V1;
