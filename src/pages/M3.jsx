import React, { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import RoomBox from "../components/RoomBox";
import ScheduleModal from "../components/ScheduleModal";
import axiosInstance from "../axiosConfig";
import "../css/pages/m3.css";

const M3 = () => {
  const [selectedRoom, setSelectedRoom] = useState(null); // Data for selected room
  const [highlightedRooms, setHighlightedRooms] = useState([]); // Highlighted room list

  // Fetch highlighted rooms on page load
  useEffect(() => {
    const fetchHighlightedRooms = async () => {
      try {
        const response = await axiosInstance.post("/api/classroom", {
          buildingName: 'M', // Building name
          floor: 3,          // Floor level
          day: '월',         // Example day, update as necessary
          hour: 13,          // Example hour, update as necessary
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
    try {
      const response = await axiosInstance.post("/api/roomSchedule", {
        buildingName: 'M',
        classroomNumber: room.substring(1), // Extract the numeric part
        day: '월',                           // Example day
        hour: 11,                            // Example hour
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
      <div className="m3_container">
        <div className="border-marker marker-red marker-bottom-left"></div>
        <div className="border-marker marker-nicols marker-top-right-nicols">니콜스관</div>

        {/* Left column with RoomBox components */}
        <div className="room-column room-column-left">
          <RoomBox
            text="M301"
            onClick={() => handleRoomClick("M301")}
            className={highlightedRooms.includes(parseInt("301")) ? "room-box-highlight" : ""}
          />
          <RoomBox
            text="M302"
            onClick={() => handleRoomClick("M302")}
            className={highlightedRooms.includes(parseInt("302")) ? "room-box-highlight" : ""}
          />
          <RoomBox
            text="M303"
            onClick={() => handleRoomClick("M303")}
            className={highlightedRooms.includes(parseInt("303")) ? "room-box-highlight" : ""}
          />
          <RoomBox
            text="M304"
            onClick={() => handleRoomClick("M304")}
            className={highlightedRooms.includes(parseInt("304")) ? "room-box-highlight" : ""}
          />
          <RoomBox
            text="M305"
            onClick={() => handleRoomClick("M305")}
            className={highlightedRooms.includes(parseInt("305")) ? "room-box-highlight" : ""}
          />
          <RoomBox
            text="M306"
            onClick={() => handleRoomClick("M306")}
            className={highlightedRooms.includes(parseInt("306")) ? "room-box-highlight" : ""}
          />
          <RoomBox
            text="M307"
            onClick={() => handleRoomClick("M307")}
            className={highlightedRooms.includes(parseInt("307")) ? "room-box-highlight" : ""}
          />
        </div>

        {/* Centered text */}
        <div className="centered-text">
          <span>마</span>
          <span>리</span>
          <span>아</span>
          <span>3</span>
          <span>층</span>
        </div>

        {/* Right column with RoomBox components */}
        <div className="room-column room-column-right">
          <RoomBox
            text="M320"
            onClick={() => handleRoomClick("M320")}
            className={highlightedRooms.includes(parseInt("320")) ? "room-box-highlight" : ""}
          />
          <RoomBox
            text="M321"
            onClick={() => handleRoomClick("M321")}
            className={highlightedRooms.includes(parseInt("321")) ? "room-box-highlight" : ""}
          />
          <RoomBox
            text="M322"
            onClick={() => handleRoomClick("M322")}
            className={highlightedRooms.includes(parseInt("322")) ? "room-box-highlight" : ""}
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

      <div style={{ marginBottom: "30px" }}></div>

      {selectedRoom && <ScheduleModal schedule={selectedRoom} onClose={closeModal} />}
    </>
  );
};

export default M3;
