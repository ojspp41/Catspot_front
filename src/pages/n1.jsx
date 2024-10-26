import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import "../css/pages/n1.css";
import RoomBox from '../components/RoomBox';
import ScheduleModal from '../components/ScheduleModal';
import axiosInstance from '../axiosConfig';

const N1 = () => {
  const [selectedRoom, setSelectedRoom] = useState(null); // 선택된 강의실의 데이터
  const [highlightedRooms, setHighlightedRooms] = useState([]); // 하이라이트된 강의실 목록
  const { roomId } = useParams();

  // roomId에서 buildingName과 floor 추출
  const buildingName = roomId.charAt(0).toUpperCase();
  const floor = parseInt(roomId.charAt(1), 10);

  // 페이지가 로드될 때 하이라이트된 강의실 목록 가져오기
  useEffect(() => {
    const fetchHighlightedRooms = async () => {
      const dayNames = ["일", "월", "화", "수", "목", "금", "토"];
      const currentDate = new Date();
      const currentDay = dayNames[currentDate.getDay()];
      const currentHour = currentDate.getHours();
      try {
        const response = await axiosInstance.post("/api/classroom", {
          buildingName,
          floor,
          day: '월',
          hour: 13,
        });
        console.log(response);
        setHighlightedRooms(response.data.classrooms);
        console.log(highlightedRooms);
      } catch (error) {
        console.error("Error fetching highlighted rooms:", error);
      }
    };

    fetchHighlightedRooms();
  }, [buildingName, floor]);

  // 강의실을 클릭할 때 시간표 가져오기
  
const handleRoomClick = async (room) => {
  try {
    const response = await axiosInstance.post("/api/roomSchedule", {
      buildingName,
      classroomNumber: room.substring(1), // room에서 숫자 부분만 추출
      day: '월',
      hour: 13,
    });
    setSelectedRoom(response.data); // 받아온 데이터를 selectedRoom에 저장
  } catch (error) {
    console.error("강의실 시간표를 불러오는 중 오류 발생:", error);
  }
};

// selectedRoom이 업데이트될 때마다 값을 콘솔에 출력
useEffect(() => {
if (selectedRoom) {
  console.log(selectedRoom);
}
}, [selectedRoom]);

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
          <RoomBox
            text="N119"
            onClick={() => handleRoomClick("N119")}
            className={highlightedRooms.includes(parseInt("119"))? "room-box-highlight" : ""}
          />
          <RoomBox
            text="N113"
            onClick={() => handleRoomClick("N113")}
            className={highlightedRooms.includes(parseInt("113")) ? "room-box-highlight" : ""}
          />
          <div style={{ marginBottom: '30px' }}></div>
          <RoomBox
            text="N102"
            onClick={() => handleRoomClick("N102")}
            className={highlightedRooms.includes(parseInt("102"))? "room-box-highlight" : ""}
          />
          <RoomBox
            text="N101"
            onClick={() => handleRoomClick("N101")}
            className={highlightedRooms.includes(parseInt("101")) ? "room-box-highlight" : ""}
          />
        </div>

        <div className="centered-text">
          <span>니</span>
          <span>콜</span>
          <span>스</span>
          <span>{floor}</span>
          <span>층</span>
        </div>

        <div className="room-column room-column-right">
          <RoomBox
            text="N114"
            onClick={() => handleRoomClick("N114")}
            className={highlightedRooms.includes(parseInt("114")) ? "room-box-highlight" : ""}
          />
          <RoomBox
            text="N112"
            onClick={() => handleRoomClick("N112")}
            className={highlightedRooms.includes(parseInt("112")) ? "room-box-highlight" : ""}
          />
          <RoomBox
            text="N104"
            onClick={() => handleRoomClick("N104")}
            className={highlightedRooms.includes(parseInt("104")) ? "room-box-highlight" : ""}
          />
          <div style={{ marginBottom: '10px' }}></div>
          <RoomBox
            text="N110"
            onClick={() => handleRoomClick("N110")}
            className={highlightedRooms.includes(parseInt("110")) ? "room-box-highlight" : ""}
          />
          <RoomBox
            text="N103"
            onClick={() => handleRoomClick("N103")}
            className={highlightedRooms.includes(parseInt("103"))? "room-box-highlight" : ""}
          />
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
