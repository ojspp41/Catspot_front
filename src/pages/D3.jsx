import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import RoomBox from "../components/RoomBox";
import ScheduleModal from "../components/ScheduleModal"; // 모달 추가
import "../css/pages/d3.css";

// 목데이터 예시
const mockScheduleData = {
  N406: {
    room: "N406",
    classes: [
      { time: 9, subjectName: "인공지능" },
      { time: 12, subjectName: "알고리즘" },
    ],
  },
  N407: {
    room: "N407",
    classes: [
      { time: 10, subjectName: "데이터베이스" },
      { time: 13, subjectName: "운영체제" },
    ],
  },
  N409: {
    room: "N409",
    classes: [
      { time: 9, subjectName: "컴퓨터 네트워크" },
      { time: 15, subjectName: "자료구조" },
    ],
  },
  N413: {
    room: "N413",
    classes: [
      { time: 10, subjectName: "프로그래밍 기초" },
      { time: 14, subjectName: "프론트엔드 개발" },
    ],
  },
  N415: {
    room: "N415",
    classes: [
      { time: 9, subjectName: "컴퓨터 비전" },
      { time: 16, subjectName: "기계학습" },
    ],
  },
  N405: {
    room: "N405",
    classes: [
      { time: 11, subjectName: "운영체제" },
      { time: 14, subjectName: "컴파일러" },
    ],
  },
  N408: {
    room: "N408",
    classes: [
      { time: 9, subjectName: "데이터 분석" },
      { time: 13, subjectName: "프로그래밍 언어" },
    ],
  },
  N410: {
    room: "N410",
    classes: [
      { time: 10, subjectName: "웹 프로그래밍" },
      { time: 15, subjectName: "모바일 프로그래밍" },
    ],
  },
  N411: {
    room: "N411",
    classes: [
      { time: 11, subjectName: "네트워크 보안" },
      { time: 14, subjectName: "암호학" },
    ],
  },
  N412: {
    room: "N412",
    classes: [
      { time: 9, subjectName: "기계학습" },
      { time: 12, subjectName: "데이터 모델링" },
    ],
  },
  N414: {
    room: "N414",
    classes: [
      { time: 10, subjectName: "프론트엔드 개발" },
      { time: 14, subjectName: "백엔드 개발" },
    ],
  },
};

const D3 = () => {
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
      <div className="d3_container">
        <div className="border-marker marker-blue marker-top-right-center"></div>
        <div className="border-marker marker-red marker-top-right"></div>
        <div className="border-marker marker-red marker-bottom-right"></div>

        {/* 왼쪽 컬럼 */}
        <div className="room-column room-column-left">
          <RoomBox text="D304" className="room-box-highlight" onClick={() => handleRoomClick("D304")} />
          <RoomBox text="D335" onClick={() => handleRoomClick("D335")} />
          <RoomBox text="D336" onClick={() => handleRoomClick("D336")} />
          <RoomBox text="D340" className="room-box-highlight" onClick={() => handleRoomClick("D340")} />
          <RoomBox text="D341" onClick={() => handleRoomClick("D341")} />
        </div>

        {/* 중앙 텍스트 */}
        <div className="centered-text">
          <span>다</span>
          <span>솔</span>
          <span>관</span>
          <span>3</span>
          <span>층</span>
        </div>

        {/* 오른쪽 컬럼 */}
        <div className="room-column room-column-right">
          <RoomBox text="D308" onClick={() => handleRoomClick("D308")} />
          <RoomBox text="D304" className="room-box-highlight" onClick={() => handleRoomClick("D304")} />
          <RoomBox text="D303" onClick={() => handleRoomClick("D303")} />
          <RoomBox text="D301" className="room-box-highlight" onClick={() => handleRoomClick("D301")} />
        </div>
      </div>{" "}
      {/* n1_container 닫힘 */}
      {/* 입출구 및 계단 표시 */}
      <div className="label-container">
        <div className="label label-exit"></div>
        <span className="label-text">입출구</span>
        <div className="label label-stairs" style={{ marginLeft: "20px" }}></div>
        <span className="label-text">계단</span>
      </div>
      <div style={{ margin: "30px" }}></div>
      {selectedRoom && <ScheduleModal schedule={selectedRoom} onClose={closeModal} />}
    </>
  );
};

export default D3;
