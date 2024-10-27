import React, { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import RoomBox from "../components/RoomBox";
import ScheduleModal from "../components/ScheduleModal";
import axiosInstance from "../axiosConfig";
import "../css/pages/d2.css";
import { getKoreanDayAndHour } from "../utils/dateUtils";
const D2 = () => {
  const [selectedRoom, setSelectedRoom] = useState(null); // Data for selected room
  const [highlightedRooms, setHighlightedRooms] = useState([]); // Highlighted room list

  

  // Fetch highlighted rooms on page load
  useEffect(() => {
    const fetchHighlightedRooms = async () => {
      const { day, hour } = getKoreanDayAndHour();
      try {
        const response = await axiosInstance.post("/api/classroom", {
          buildingName: 'D', // Building name
          floor: 2,          // Floor level
          day,               // 실시간 요일
          hour,        // Example hour, update as necessary
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
    const { day, hour } = getKoreanDayAndHour();
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
      <div className="d2_container">
        <div className="border-marker marker-blue marker-bottom-right"></div>
        <div className="border-marker marker-red marker-top-right"></div>
        <div className="border-marker marker-red marker-bottom-right-center"></div>

        {/* Left column */}
        <div className="room-column room-column-left">
          <RoomBox
            text="D229"
            onClick={() => handleRoomClick("D229")}
            className={highlightedRooms.includes(parseInt("229")) ? "room-box-highlight" : ""}
          />
          <RoomBox
            text="D230"
            onClick={() => handleRoomClick("D230")}
            className={highlightedRooms.includes(parseInt("230")) ? "room-box-highlight" : ""}
          />
          <RoomBox
            text="D231"
            onClick={() => handleRoomClick("D231")}
            className={highlightedRooms.includes(parseInt("231")) ? "room-box-highlight" : ""}
          />
          <div style={{ marginBottom: "70px" }}></div>
          <RoomBox
            text="D232"
            onClick={() => handleRoomClick("D232")}
            className={highlightedRooms.includes(parseInt("232")) ? "room-box-highlight" : ""}
          />
          <RoomBox
            text="D236"
            onClick={() => handleRoomClick("D236")}
            className={highlightedRooms.includes(parseInt("236")) ? "room-box-highlight" : ""}
          />
        </div>

        {/* Centered text */}
        <div className="centered-text">
          <span>다</span>
          <span>솔</span>
          <span>관</span>
          <span>2</span>
          <span>층</span>
        </div>

        {/* Right column */}
        <div className="room-column room-column-right">
          <RoomBox
            text="D209"
            onClick={() => handleRoomClick("D209")}
            className={highlightedRooms.includes(parseInt("209")) ? "room-box-highlight" : ""}
          />
          <RoomBox
            text="D208"
            onClick={() => handleRoomClick("D208")}
            className={highlightedRooms.includes(parseInt("208")) ? "room-box-highlight" : ""}
          />
          <div style={{ marginBottom: "70px" }}></div>
          <RoomBox
            text="D207"
            onClick={() => handleRoomClick("D207")}
            className={highlightedRooms.includes(parseInt("207")) ? "room-box-highlight" : ""}
          />
          <RoomBox
            text="D205"
            onClick={() => handleRoomClick("D205")}
            className={highlightedRooms.includes(parseInt("205")) ? "room-box-highlight" : ""}
          />
        </div>
      </div>

      {/* Exit and stairs labels */}
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

export default D2;
