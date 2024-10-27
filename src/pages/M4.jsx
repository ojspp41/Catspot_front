import React, { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import RoomBox from "../components/RoomBox";
import ScheduleModal from "../components/ScheduleModal";
import axiosInstance from "../axiosConfig";
import "../css/pages/m4.css";
import { useNavigate } from 'react-router-dom';
import { getKoreanDayAndHour } from "../utils/dateUtils";
const M4 = () => {
  const [selectedRoom, setSelectedRoom] = useState(null); // Data for selected room
  const [highlightedRooms, setHighlightedRooms] = useState([]); // Highlighted room list
  const navigate = useNavigate();
  // Fetch highlighted rooms on page load
  useEffect(() => {
    const { day, hour } = getKoreanDayAndHour()
    const fetchHighlightedRooms = async () => {
      try {
        const response = await axiosInstance.post("/api/classroom", {
          buildingName: 'M', // Building name
          floor: 4,          // Floor level
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
  const goToNicolsRoom = () => {
    navigate("/room/n4/n4");
  };
  // Fetch room schedule when a room is clicked
  const handleRoomClick = async (room) => {
    const { day, hour } = getKoreanDayAndHour()
    try {
      const response = await axiosInstance.post("/api/roomSchedule", {
        buildingName: 'M',
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
      <div className="m4_container">
        <div className="border-marker marker-red marker-bottom-left"></div>
        <div
          className="border-marker marker-nicols marker-top-right-nicols"
          onClick={goToNicolsRoom} // Add onClick handler
        >
          니콜스관
        </div>

        {/* Left column with RoomBox components */}
        <div className="room-column room-column-left">
          <RoomBox
            text="M413"
            onClick={() => handleRoomClick("M413")}
            className={highlightedRooms.includes(parseInt("413")) ? "room-box-highlight" : ""}
          />
          <RoomBox
            text="M414"
            onClick={() => handleRoomClick("M414")}
            className={highlightedRooms.includes(parseInt("414")) ? "room-box-highlight" : ""}
          />
          <RoomBox
            text="M420"
            onClick={() => handleRoomClick("M420")}
            className={highlightedRooms.includes(parseInt("420")) ? "room-box-highlight" : ""}
          />
          <RoomBox
            text="M419"
            onClick={() => handleRoomClick("M419")}
            className={highlightedRooms.includes(parseInt("419")) ? "room-box-highlight" : ""}
          />
          <RoomBox
            text="M418"
            onClick={() => handleRoomClick("M418")}
            className={highlightedRooms.includes(parseInt("418")) ? "room-box-highlight" : ""}
          />
        </div>

        {/* Centered text */}
        <div className="centered-text">
          <span>마</span>
          <span>리</span>
          <span>아</span>
          <span>4</span>
          <span>층</span>
        </div>

        {/* Right column with RoomBox components */}
        <div className="room-column room-column-right">
          {[401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411].map((roomNumber) => (
            <RoomBox
              key={roomNumber}
              text={`M${roomNumber}`}
              onClick={() => handleRoomClick(`M${roomNumber}`)}
              className={highlightedRooms.includes(roomNumber) ? "room-box-highlight" : ""}
            />
          ))}
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

export default M4;
