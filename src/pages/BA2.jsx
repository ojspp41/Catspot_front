import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import RoomBox from "../components/RoomBox";
import ScheduleModal from "../components/ScheduleModal"; // 모달 추가
import "../css/pages/ba2.css";

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

const BA2 = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleRoomClick = (room) => {
    if (room !== "상담실") {
      // 상담실 클릭 시 아무 동작 안 함
      setSelectedRoom(mockScheduleData[room]);
    }
  };

  const closeModal = () => {
    setSelectedRoom(null);
  };

  return (
    <>
      <Navbar title="빈강의실" />

      <div className="ba2_container">
        <div className="border-marker marker-blue marker-center-right"></div>
        <div className="border-marker marker-maria marker-top-right-maria">마리아관</div>
        {/* N301 부분 */}
        <div className="room-box-max" onClick={() => handleRoomClick("N301")}>
          <div className="room-box-content">N301</div>
        </div>
        <div className="flex-container">
          <div className="room-column room-column-left">
            <div className="room-box-max-left" onClick={() => handleRoomClick("N301")}>
              <div className="room-box-content">N301</div>
            </div>
          </div>

          {/* 중앙 텍스트 */}
          <div className="centered3-text">
            <span>밤</span>
            <span>비</span>
            <span>노</span>
            <span>2</span>
            <span>층</span>
          </div>

          <div className="room-column room-column-right">
            <div className="room-box-max-highlight" onClick={() => handleRoomClick("N301")}>
              <div className="room-box-content ">N301</div>
            </div>
          </div>
        </div>{" "}
        {/* n1_container 닫힘 */}
      </div>

      {/* 입출구 및 계단 표시 */}
      <div className="label-container">
        <div className="label label-exit"></div>
        <span className="label-text">입출구</span>
        <div className="label label-stairs" style={{ marginLeft: "20px" }}></div>
        <span className="label-text">계단</span>
      </div>

      <div style={{ marginBottom: "50px" }}></div>

      {selectedRoom && <ScheduleModal schedule={selectedRoom} onClose={closeModal} />}
    </>
  );
};

export default BA2;
