import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import RoomBox from '../components/RoomBox';
import ScheduleModal from '../components/ScheduleModal';
import axiosInstance from '../axiosConfig';
import "../css/pages/n1.css";
import { useNavigate } from 'react-router-dom';
import { getKoreanDayAndHour } from '../utils/dateUtils';
const N4 = () => {
  const [selectedRoom, setSelectedRoom] = useState(null); // Data for selected room
  const [highlightedRooms, setHighlightedRooms] = useState([]); // Highlighted rooms list
  const navigate = useNavigate(); 
  const goToMariaRoom = () => {
    navigate("/room/m4/m4");
  };
  // Fetch highlighted rooms on page load
  useEffect(() => {
    const { day, hour } = getKoreanDayAndHour()
    const fetchHighlightedRooms = async () => {
      try {
        const response = await axiosInstance.post("/api/classroom", {
          buildingName: 'N', // Building name
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

  // Fetch room schedule when a room is clicked
  const handleRoomClick = async (room) => {
    const { day, hour } = getKoreanDayAndHour()
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
  };

  const closeModal = () => {
    setSelectedRoom(null);
  };

  return (
    <>
      <Navbar title="빈강의실" />
      
      <div className="n1_container">
        <div className="border-marker marker-blue marker-top-left"></div>
        <div
          className="border-marker marker-maria marker-top-right-maria"
          onClick={goToMariaRoom} // Add onClick handler
        >
          마리아관
        </div>
        <div className="border-marker marker-red marker-bottom-left"></div>

        {/* Left column */}
        <div className="room-column room-column-left">
          <RoomBox
            text="N406"
            onClick={() => handleRoomClick("N406")}
            className={highlightedRooms.includes(parseInt("406")) ? "room-box-highlight" : ""}
          />
          <RoomBox
            text="N407"
            onClick={() => handleRoomClick("N407")}
            className={highlightedRooms.includes(parseInt("407")) ? "room-box-highlight" : ""}
          />
          <RoomBox
            text="N409"
            onClick={() => handleRoomClick("N409")}
            className={highlightedRooms.includes(parseInt("409")) ? "room-box-highlight" : ""}
          />
          <div style={{ marginBottom: '70px' }}></div>
          <RoomBox
            text="N413"
            onClick={() => handleRoomClick("N413")}
            className={highlightedRooms.includes(parseInt("413")) ? "room-box-highlight" : ""}
          />
          <RoomBox
            text="N415"
            onClick={() => handleRoomClick("N415")}
            className={highlightedRooms.includes(parseInt("415")) ? "room-box-highlight" : ""}
          />
        </div>

        {/* Centered text */}
        <div className="centered-text">
          <span>니</span>
          <span>콜</span>
          <span>스</span>
          <span>4</span>
          <span>층</span>
        </div>

        {/* Right column */}
        <div className="room-column room-column-right">
          <RoomBox
            text="N405"
            onClick={() => handleRoomClick("N405")}
            className={highlightedRooms.includes(parseInt("405")) ? "room-box-highlight" : ""}
          />
          <RoomBox
            text="N408"
            onClick={() => handleRoomClick("N408")}
            className={highlightedRooms.includes(parseInt("408")) ? "room-box-highlight" : ""}
          />
          <RoomBox
            text="N410"
            onClick={() => handleRoomClick("N410")}
            className={highlightedRooms.includes(parseInt("410")) ? "room-box-highlight" : ""}
          />
          <RoomBox
            text="N411"
            onClick={() => handleRoomClick("N411")}
            className={highlightedRooms.includes(parseInt("411")) ? "room-box-highlight" : ""}
          />
          <RoomBox
            text="N412"
            onClick={() => handleRoomClick("N412")}
            className={highlightedRooms.includes(parseInt("412")) ? "room-box-highlight" : ""}
          />
          <RoomBox
            text="N414"
            onClick={() => handleRoomClick("N414")}
            className={highlightedRooms.includes(parseInt("414")) ? "room-box-highlight" : ""}
          />
        </div>
      </div>  {/* n1_container end */}
      
      {/* Exit and stairs labels */}
      <div className="label-container">
        <div className="label label-exit"></div>
        <span className="label-text">입출구</span>
        <div className="label label-stairs" style={{ marginLeft: '20px' }}></div>
        <span className="label-text">계단</span>
      </div>

      <div style={{ margin: '30px' }}></div>

      {selectedRoom && (
        <ScheduleModal schedule={selectedRoom} onClose={closeModal} />
      )}
    </>
  );
};

export default N4;
