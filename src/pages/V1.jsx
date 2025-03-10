import React, { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import RoomBox from "../components/RoomBox";
import ScheduleModal from "../components/ScheduleModal";
import axiosInstance from "../axiosConfig";
import "../css/pages/v1.css";
import { getKoreanDayAndHour } from "../utils/dateUtils";
const V1 = () => {
  const [selectedRoom, setSelectedRoom] = useState(null); // Data for selected room
  const [highlightedRooms, setHighlightedRooms] = useState([]); // Highlighted room list

  // Fetch highlighted rooms on page load
  useEffect(() => {
    const fetchHighlightedRooms = async () => {
      const { day, hour } = getKoreanDayAndHour()
      try {
        const response = await axiosInstance.post("/api/classroom", {
          buildingName: 'V', // Building name
          floor: 1,          // Floor level
          day,         // Example day, update as necessary
          hour,          // Example hour, update as necessary
        });
        setHighlightedRooms(response.data.classrooms);
      } catch (error) {
        console.error("Error fetching highlighted rooms:", error);
      }
    };

    fetchHighlightedRooms();
  }, []);

  // Fetch room schedule when a room is clicked
  const handleRoomClick = async (room) => {
    const { day, hour } = getKoreanDayAndHour()
    try {
      const response = await axiosInstance.post("/api/roomSchedule", {
        buildingName: 'V',
        classroomNumber: room.substring(1), // Extract the numeric part
        day,                           // Example day
        hour,                            // Example hour
      });
      setSelectedRoom(response.data); // Store fetched schedule in state
    } catch (error) {
      console.error("Error fetching room schedule:", error);
    }
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
        
        {/* Left column placeholder */}
        <div className="room-column room-column-left">
          <div style={{ marginInline: "50px" }}></div>
        </div>

        {/* Centered text */}
        <div className="centered-text">
          <span>비</span>
          <span>루</span>
          <span>투</span>
          <span>스</span>
          <span>1</span>
          <span>층</span>
        </div>

        {/* Right column with RoomBox components */}
        <div className="room-column room-column-right">
          <RoomBox
            text="V111"
            onClick={() => handleRoomClick("V111")}
            className={highlightedRooms.includes(parseInt("111")) ? "room-box-highlight" : ""}
          />
          <RoomBox
            text="V112"
            onClick={() => handleRoomClick("V112")}
            className={highlightedRooms.includes(parseInt("112")) ? "room-box-highlight" : ""}
          />
        </div>
      </div>
      <p className="helper-text">강의실을 클릭하여 시간표를 확인하세요!</p>
      


      {/* Exit and stairs labels */}
      <div className="label-container">
        <div className="label label-use "></div>
        <span className="label-text label-margin">사용중</span>
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
