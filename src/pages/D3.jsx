import React, { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import RoomBox from "../components/RoomBox";
import ScheduleModal from "../components/ScheduleModal";
import axiosInstance from "../axiosConfig";
import "../css/pages/d3.css";
import { getKoreanDayAndHour } from "../utils/dateUtils";
const D3 = () => {
  const [selectedRoom, setSelectedRoom] = useState(null); // Data for selected room
  const [highlightedRooms, setHighlightedRooms] = useState([]); // Highlighted room list

  // Fetch highlighted rooms on page load
  useEffect(() => {
    const fetchHighlightedRooms = async () => {
      const { day, hour } = getKoreanDayAndHour()
      try {
        const response = await axiosInstance.post("/api/classroom", {
          buildingName: 'D', // Building name
          floor: 3,          // Floor level
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
        buildingName: 'D',
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
      <div className="d3_container">
        <div className="border-marker marker-blue marker-top-right-center"></div>
        <div className="border-marker marker-red marker-top-right"></div>
        <div className="border-marker marker-red marker-bottom-right"></div>

        {/* Left column */}
        <div className="room-column room-column-left">
          <RoomBox
            text="D304"
            
            onClick={() => handleRoomClick("D304")}
            className={highlightedRooms.includes(parseInt("304")) ? "room-box-highlight" : ""}
          />
          <RoomBox
            text="D335"
            onClick={() => handleRoomClick("D335")}
            className={highlightedRooms.includes(parseInt("335")) ? "room-box-highlight" : ""}
          />
          <RoomBox
            text="D336"
            onClick={() => handleRoomClick("D336")}
            className={highlightedRooms.includes(parseInt("336")) ? "room-box-highlight" : ""}
          />
          <RoomBox
            text="D340"
            
            onClick={() => handleRoomClick("D340")}
            className={highlightedRooms.includes(parseInt("340")) ? "room-box-highlight" : ""}
          />
          <RoomBox
            text="D341"
            onClick={() => handleRoomClick("D341")}
            className={highlightedRooms.includes(parseInt("341")) ? "room-box-highlight" : ""}
          />
        </div>

        {/* Centered text */}
        <div className="centered-text">
          <span>다</span>
          <span>솔</span>
          <span>관</span>
          <span>3</span>
          <span>층</span>
        </div>

        {/* Right column */}
        <div className="room-column room-column-right">
          <RoomBox
            text="D308"
            onClick={() => handleRoomClick("D308")}
            className={highlightedRooms.includes(parseInt("308")) ? "room-box-highlight" : ""}
          />
          <RoomBox
            text="D304"
            
            onClick={() => handleRoomClick("D304")}
            className={highlightedRooms.includes(parseInt("304")) ? "room-box-highlight" : ""}
          />
          <RoomBox
            text="D303"
            onClick={() => handleRoomClick("D303")}
            className={highlightedRooms.includes(parseInt("303")) ? "room-box-highlight" : ""}
          />
          <RoomBox
            text="D301"
            
            onClick={() => handleRoomClick("D301")}
            className={highlightedRooms.includes(parseInt("301")) ? "room-box-highlight" : ""}
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

      <div style={{ margin: "30px" }}></div>

      {selectedRoom && <ScheduleModal schedule={selectedRoom} onClose={closeModal} />}
    </>
  );
};

export default D3;
