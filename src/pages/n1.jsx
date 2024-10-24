import React, { useState } from 'react';
// Axios 인스턴스 가져오기
import { Navbar } from '../components/Navbar';
// useNavigate import
import "../css/pages/n1.css";
import RoomBox from '../components/RoomBox';
import ScheduleModal from '../components/ScheduleModal';
// import axiosInstance from '../axiosConfig';
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

const N1 = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleRoomClick = (room) => {
    setSelectedRoom(mockScheduleData[room]);
  };
  // const handleRoomClick = async (room) => {
  //   setLoading(true);  // 요청 시작 시 로딩 상태로 설정
  //   setError(null);    // 이전 에러 상태 초기화

  //   try {
  //     // 해당 room의 스케줄을 서버로부터 GET 요청
  //     const response = await axiosInstance.get(`/api/${room}`);
  //     setSelectedRoom(response.data); // 응답 받은 데이터로 상태 업데이트
  //   } catch (err) {
  //     setError("스케줄을 불러오는 중 오류가 발생했습니다."); // 에러 발생 시 상태 업데이트
  //   } finally {
  //     setLoading(false); // 요청 완료 후 로딩 상태 해제
  //   }
  // };통신
  const closeModal = () => {
    setSelectedRoom(null);
  };

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
          <RoomBox text="N119" onClick={() => handleRoomClick("N119")} />
          <RoomBox text="N113" onClick={() => handleRoomClick("N113")} />
          <div style={{ marginBottom: '30px' }}></div>
          <RoomBox text="N102" onClick={() => handleRoomClick("N102")} />
          <RoomBox text="N101" onClick={() => handleRoomClick("N101")} />
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
          <RoomBox text="N114" onClick={() => handleRoomClick("N114")} />
          <RoomBox text="N112" onClick={() => handleRoomClick("N112")} />
          <RoomBox text="N104" className="room-box-highlight" onClick={() => handleRoomClick("N104")} />
          <div style={{ marginBottom: '10px' }}></div>
          <RoomBox text="N110" onClick={() => handleRoomClick("N110")} />
          <RoomBox text="N103" onClick={() => handleRoomClick("N103")} />
        </div>
      </div>

      <div className="label-container">
        <div className="label label-exit"></div>
        <span className="label-text">입출구</span>
        <div className="label label-stairs" style={{ marginLeft: '20px' }}></div>
        <span className="label-text">계단</span>
      </div>

      <div style={{ marginBottom: '30px' }}></div>

      {selectedRoom && (
        <ScheduleModal schedule={selectedRoom} onClose={closeModal} />
      )}
    </>
  );
};

export default N1;
