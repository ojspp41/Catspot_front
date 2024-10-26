import React, { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import RoomBox from "../components/RoomBox";
import ScheduleModal from "../components/ScheduleModal";
import axiosInstance from "../axiosConfig";
import "../css/pages/m2.css";

const M2 = () => {
  const [selectedRoom, setSelectedRoom] = useState(null); // Data for selected room
  const [highlightedRooms, setHighlightedRooms] = useState([]); // Highlighted room list

  // Fetch highlighted rooms on page load
  useEffect(() => {
    const fetchHighlightedRooms = async () => {
      try {
        const response = await axiosInstance.post("/api/classroom", {
          buildingName: 'M', // Building name
          floor: 2,          // Floor level
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
      <div className="m2_container">
        <div className="border-marker marker-red marker-bottom-left"></div>

        {/* Left column with RoomBox components */}
        <div className="room-column room-column-left">
          <RoomBox
            text="M212"
            onClick={() => handleRoomClick("M212")}
            className={highlightedRooms.includes(parseInt("212")) ? "room-box-highlight" : ""}
          />
          <RoomBox
            text="M213"
            onClick={() => handleRoomClick("M213")}
            className={highlightedRooms.includes(parseInt("213")) ? "room-box-highlight" : ""}
          />
          <RoomBox
            text="M218"
            onClick={() => handleRoomClick("M218")}
            className={highlightedRooms.includes(parseInt("218")) ? "room-box-highlight" : ""}
          />
          <RoomBox
            text="M217"
            onClick={() => handleRoomClick("M217")}
            className={highlightedRooms.includes(parseInt("217")) ? "room-box-highlight" : ""}
          />
          <RoomBox
            text="M216"
            onClick={() => handleRoomClick("M216")}
            className={highlightedRooms.includes(parseInt("216")) ? "room-box-highlight" : ""}
          />
        </div>

        {/* Centered text */}
        <div className="centered-text">
          <span>마</span>
          <span>리</span>
          <span>아</span>
          <span>2</span>
          <span>층</span>
        </div>

        {/* Right column with RoomBox components */}
        <div className="room-column room-column-right">
          <RoomBox
            text="M211"
            onClick={() => handleRoomClick("M211")}
            className={highlightedRooms.includes(parseInt("211")) ? "room-box-highlight" : ""}
          />
          <RoomBox
            text="M207"
            onClick={() => handleRoomClick("M207")}
            className={highlightedRooms.includes(parseInt("207")) ? "room-box-highlight" : ""}
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

export default M2;
