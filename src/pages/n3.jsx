import React, { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import RoomBox from "../components/RoomBox";
import ScheduleModal from "../components/ScheduleModal";
import axiosInstance from "../axiosConfig";
import "../css/pages/n3.css";
import { useNavigate } from "react-router-dom";
import { getKoreanDayAndHour } from "../utils/dateUtils";
const N3 = () => {
  const [selectedRoom, setSelectedRoom] = useState(null); // Data for selected room
  const [highlightedRooms, setHighlightedRooms] = useState([]); // Highlighted room list
  const navigate = useNavigate(); // Initialize navigate for routing
  // Fetch highlighted rooms on page load
  useEffect(() => {
    const { day, hour } = getKoreanDayAndHour()
    const fetchHighlightedRooms = async () => {
      try {
        const response = await axiosInstance.post("/api/classroom", {
          buildingName: 'N', // Building name
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
    if (room !== "상담실") {
      try {
        const response = await axiosInstance.post("/api/roomSchedule", {
          buildingName: 'N',
          classroomNumber: room.substring(1), // Extract the numeric part
          day,                           // Example day
          hour,                            // Example hour
        });
        setSelectedRoom(response.data); // Store fetched schedule in state
      } catch (error) {
        console.error("Error fetching room schedule:", error);
      }
    }
  };

  const closeModal = () => {
    setSelectedRoom(null);
  };
  const goToMariaRoom = () => {
    navigate("/room/m3/m3");
  };

  return (
    <>
      <Navbar title="빈강의실" />

      <div className="n3_container">
        <div className="border-marker marker-red marker-top-left"></div>
        <div
          className="border-marker marker-maria marker-top-right-maria"
          onClick={goToMariaRoom} // Add onClick handler
        >
          마리아관
        </div>
        <div className="border-marker marker-red marker-bottom-left"></div>
        
        {/* N301 section */}
        <div className="room-box-max" onClick={() => handleRoomClick("N301")}>
          <div className="room-box-content">N301</div>
        </div>

        <div className="flex-container">
          <div className="room-column room-column-left">
            <RoomBox
              text="N308"
              onClick={() => handleRoomClick("N308")}
              className={highlightedRooms.includes(parseInt("308")) ? "room-box-highlight" : ""}
            />
            <RoomBox
              text="N310"
              onClick={() => handleRoomClick("N310")}
              className={highlightedRooms.includes(parseInt("310")) ? "room-box-highlight" : ""}
            />
            <RoomBox
              text="N312"
              onClick={() => handleRoomClick("N312")}
              className={highlightedRooms.includes(parseInt("312")) ? "room-box-highlight" : ""}
            />
            <div style={{ marginBottom: "50px" }}></div>
            <RoomBox
              text="N319"
              onClick={() => handleRoomClick("N319")}
              className={highlightedRooms.includes(parseInt("319")) ? "room-box-highlight" : ""}
            />
          </div>

          {/* Centered text */}
          <div className="centered3-text">
            <span>니</span>
            <span>콜</span>
            <span>스</span>
            <span>3</span>
            <span>층</span>
          </div>

          <div className="room-column room-column-right">
            <RoomBox
              text="N307"
              onClick={() => handleRoomClick("N307")}
              className={highlightedRooms.includes(parseInt("307")) ? "room-box-highlight" : ""}
            />
            <RoomBox
              text="N314"
              onClick={() => handleRoomClick("N314")}
              className={highlightedRooms.includes(parseInt("314")) ? "room-box-highlight" : ""}
            />
            <RoomBox
              text="상담실"
              className="room-box-highlight"
              onClick={() => handleRoomClick("상담실")}
            />
            <RoomBox
              text="N309"
              onClick={() => handleRoomClick("N309")}
              className={highlightedRooms.includes(parseInt("309")) ? "room-box-highlight" : ""}
            />
            <RoomBox
              text="N317"
              onClick={() => handleRoomClick("N317")}
              className={highlightedRooms.includes(parseInt("317")) ? "room-box-highlight" : ""}
            />
            <RoomBox
              text="N318"
              onClick={() => handleRoomClick("N318")}
              className={highlightedRooms.includes(parseInt("318")) ? "room-box-highlight" : ""}
            />
          </div>
        </div> {/* n3_container end */}
      </div>

      {/* Exit and stairs labels */}
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

export default N3;
