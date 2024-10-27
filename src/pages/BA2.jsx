import React, { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import RoomBox from "../components/RoomBox";
import ScheduleModal from "../components/ScheduleModal";
import axiosInstance from "../axiosConfig";
import "../css/pages/ba2.css";
import { getKoreanDayAndHour } from "../utils/dateUtils";
const BA2 = () => {
  const [selectedRoom, setSelectedRoom] = useState(null); // Data for the selected room
  const [highlightedRooms, setHighlightedRooms] = useState([]); // Highlighted rooms list

  

  // Fetch highlighted rooms when the component loads
  useEffect(() => {
    const fetchHighlightedRooms = async () => {
      const { day, hour } = getKoreanDayAndHour();
      try {
        const response = await axiosInstance.post("/api/classroom", {
          buildingName: 'BA', // Building name
          floor: 2,           // Floor level
          day,          // Example day (adjust as needed)
          hour,           // Example hour (adjust as needed)
        });
        
        setHighlightedRooms(response.data.classrooms);
      } catch (error) {
        console.error("Error fetching highlighted rooms:", error);
      }
    };

    fetchHighlightedRooms();
  }, []);

  // Fetch the schedule when a room is clicked
  const handleRoomClick = async (room) => {
    if (room !== "상담실") {
      const { day, hour } = getKoreanDayAndHour();
      try {
        const response = await axiosInstance.post("/api/roomSchedule", {
          buildingName: 'BA',
          classroomNumber: room.substring(2), // Extract the numeric part after 'BA'
          day,                          // Example day
          hour,                           // Example hour
        });
        setSelectedRoom(response.data); // Store the fetched schedule in state
      } catch (error) {
        console.error("Error fetching room schedule:", error);
      }
    }
  };

  const closeModal = () => {
    setSelectedRoom(null);
  };

  return (
    <>
      <Navbar title="빈강의실" />

      <div className="ba2_container">
        <div className="border-marker marker-blue marker-bottom-right"></div>

        {/* BA203 Room */}
        <div
          className={`room-box-max_ba2 ${highlightedRooms.includes(parseInt("203")) ? "room-box-highlight" : ""}`}
          onClick={() => handleRoomClick("BA203")}
        >
          <div className="room-box-content">BA203</div>
        </div>

        <div style={{ marginBottom: "50px" }}></div>

        <div className="flex-container">
          {/* BA202 Room */}
          <div className={`room-box-max-left ${highlightedRooms.includes(parseInt("202")) ? "room-box-highlight" : ""}`} onClick={() => handleRoomClick("BA202")}>
            <div
              className="room-box-content"
              style={{
                transform: "rotate(-90deg)",
              }}
            >
              BA202
            </div>
          </div>

          {/* Centered text */}
          <div className="centered3-text">
            <span>밤</span>
            <span>비</span>
            <span>노</span>
            <span>2</span>
            <span>층</span>
          </div>

          {/* BA204 Room */}
          <div
            className={`room-box-max-right ${highlightedRooms.includes(parseInt("204")) ? "room-box-highlight" : ""}`}
            onClick={() => handleRoomClick("BA204")}
          >
            <div
              className="room-box-content"
              style={{
                transform: "rotate(90deg)",
              }}
            >
              BA204
            </div>
          </div>
        </div>
      </div>

      {/* Labels for exit and stairs */}
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
