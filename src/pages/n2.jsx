import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import RoomBox from '../components/RoomBox';
import ScheduleModal from '../components/ScheduleModal';
import axiosInstance from '../axiosConfig';
import "../css/pages/n1.css";

const N2 = () => {
  const [selectedRoom, setSelectedRoom] = useState(null); // Data for selected room
  const [highlightedRooms, setHighlightedRooms] = useState([]); // Highlighted room list
  const { roomId } = useParams();

  // Extract buildingName and floor from roomId
  const buildingName = roomId.charAt(0).toUpperCase();
  const floor = parseInt(roomId.charAt(1), 10);

  // Fetch highlighted rooms on page load
  useEffect(() => {
    const fetchHighlightedRooms = async () => {
      try {
        const response = await axiosInstance.post("/api/classroom", {
          buildingName,
          floor,
          day: '월',
          hour: 13,
        });
        setHighlightedRooms(response.data.classrooms);
      } catch (error) {
        console.error("Error fetching highlighted rooms:", error);
      }
    };

    fetchHighlightedRooms();
  }, [buildingName, floor]);

  // Fetch room schedule on room click
  const handleRoomClick = async (room) => {
    try {
      const response = await axiosInstance.post("/api/roomSchedule", {
        buildingName,
        classroomNumber: room.substring(1),
        day: '월',
        hour: 11,
      });
      setSelectedRoom(response.data);
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
        <div className="border-marker marker-red marker-top-left"></div>
        <div className="border-marker marker-red marker-bottom-left"></div>

        {/* Left column */}
        <div className="room-column room-column-left">
          <RoomBox
            text="N209"
            onClick={() => handleRoomClick("N209")}
            className={highlightedRooms.includes(parseInt("209")) ? "room-box-highlight" : ""}
          />
          <RoomBox
            text="N211"
            onClick={() => handleRoomClick("N211")}
            className={highlightedRooms.includes(parseInt("211")) ? "room-box-highlight" : ""}
          />
          <div style={{ marginBottom: '100px' }}></div>
          <RoomBox
            text="N219"
            onClick={() => handleRoomClick("N219")}
            className={highlightedRooms.includes(parseInt("219")) ? "room-box-highlight" : ""}
          />
        </div>

        {/* Centered text */}
        <div className="centered-text">
          <span>니</span>
          <span>콜</span>
          <span>스</span>
          <span>2</span>
          <span>층</span>
        </div>

        {/* Right column */}
        <div className="room-column room-column-right">
          <RoomBox
            text="N208"
            onClick={() => handleRoomClick("N208")}
            className={highlightedRooms.includes(parseInt("208")) ? "room-box-highlight" : ""}
          />
          <RoomBox
            text="N210"
            onClick={() => handleRoomClick("N210")}
            className={highlightedRooms.includes(parseInt("210")) ? "room-box-highlight" : ""}
          />
          <RoomBox
            text="N212"
            onClick={() => handleRoomClick("N212")}
            className={highlightedRooms.includes(parseInt("212")) ? "room-box-highlight" : ""}
          />
          <div style={{ marginBottom: '60px' }}></div>
          <RoomBox
            text="N218"
            onClick={() => handleRoomClick("N218")}
            className={highlightedRooms.includes(parseInt("218")) ? "room-box-highlight" : ""}
          />
        </div>
      </div>

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

export default N2;
