import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { currentBuildingState, currentFloorState } from "../Atom.jsx";
import axiosInstance from "../axiosConfig.jsx";
import { Navbar } from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import "../css/pages/room.css";
import Stair from "../components/Stair";

const Rooma = () => {
  const categories = ["니콜스관", "다솔관", "밤비노관", "마리아관", "비루투스"];
  const navigate = useNavigate();

  // Define the number of floors per building
  const floorsMapping = {
    니콜스관: 4,
    다솔관: 4,
    비루투스: 3,
    밤비노관: 2,
    마리아관: 4,
  };

  const getBuildingCode = (building) => {
    switch (building) {
      case "니콜스관":
        return "n";
      case "다솔관":
        return "d";
      case "비루투스관":
        return "v";
      case "밤비노관":
        return "ba";
      case "마리아관":
        return "m";
      default:
        return "";
    }
  };

  const [currentIndex, setCurrentIndex] = useState(1);
  const [currentBuilding, setCurrentBuilding] = useRecoilState(currentBuildingState);
  const [currentFloor] = useRecoilState(currentFloorState);
  const [offsetY, setOffsetY] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);

  // Determine the selected building's floors
  const currentCategory = categories[currentIndex];
  const totalFloors = floorsMapping[currentCategory];

  // Display alert if there are no floors available
  const [alertShown, setAlertShown] = useState(false);

  useEffect(() => {
    if (!alertShown) {
      alert("해당 층은 없습니다.");
      setAlertShown(true);
    }
  }, [alertShown]);

  let touchStartY = 0;

  const handleTouchStart = (e) => {
    touchStartY = e.changedTouches[0].clientY;
    setIsSwiping(true);
  };

  const handleTouchMove = (e) => {
    const touchMoveY = e.changedTouches[0].clientY;
    let deltaY = touchMoveY - touchStartY;
    deltaY = Math.max(-30, Math.min(30, deltaY));
    setOffsetY(deltaY);
  };

  const handleTouchEnd = (e) => {
    const touchEndY = e.changedTouches[0].clientY;
    setIsSwiping(false);

    if (touchStartY - touchEndY > 50) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length);
    } else if (touchEndY - touchStartY > 50) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + categories.length) % categories.length);
    }
    setOffsetY(0);
  };

  const handleCategoryClick = (index) => {
    setCurrentIndex(index);
  };

  const handleGoClick = () => {
    setCurrentBuilding(currentCategory);
    const buildingCode = getBuildingCode(currentCategory);
    const roomPath = `/room/${buildingCode}${currentFloor}/${buildingCode}${currentFloor}`;
    navigate(roomPath);
  };

  return (
    <>
      <Navbar title="빈강의실" />
      <div
        className="room-centered-box"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="room-category" style={{ transform: `translateY(${offsetY}px)` }}>
          <p
            className="room-faded-text"
            onClick={() => handleCategoryClick((currentIndex + categories.length - 1) % categories.length)}
          >
            {categories[(currentIndex + categories.length - 1) % categories.length]}
          </p>

          <p
            className="room-centered-text"
            onClick={() => handleCategoryClick(currentIndex)}
            style={{
              transform: `translateY(${offsetY}px)`,
              transition: isSwiping ? "none" : "transform 0.3s ease",
            }}
          >
            {currentCategory}
          </p>

          <p
            className="room-faded-text"
            onClick={() => handleCategoryClick((currentIndex + 1) % categories.length)}
          >
            {categories[(currentIndex + 1) % categories.length]}
          </p>
        </div>
      </div>

      <Stair totalFloors={totalFloors} />
      <div className="room-button-container">
        <button className="room-button" onClick={handleGoClick}>
          Go
        </button>
      </div>
    </>
  );
};

export default Rooma;
