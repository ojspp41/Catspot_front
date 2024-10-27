import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { currentBuildingState, currentFloorState } from "../Atom.jsx";
import axiosInstance from "../axiosConfig.jsx";
import { Navbar } from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import "../css/pages/Room.css";
import Stair from "../components/Stair";

const Rooma = () => {
  const categories = ["니콜스관", "다솔관", "밤비노관", "마리아관", "비루투스관"];
  const navigate = useNavigate();

  // Define the number of floors per building
  const floorsMapping = {
    니콜스관: 4,
    다솔관: 4,
    비루투스관: 3,
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

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentBuilding, setCurrentBuilding] = useRecoilState(currentBuildingState);
  const [currentFloor] = useRecoilState(currentFloorState);

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
      <div className="room-centered-box">
      <div className="room-category">
          <img
              src="/assets/up.svg"
              alt="Up Arrow"
              className="arrow-icon"
              onClick={() => handleCategoryClick((currentIndex + categories.length - 1) % categories.length)}
          />

          <p
              className="room-faded-text"
              
          >
              {categories[(currentIndex + categories.length - 1) % categories.length]}
          </p>

          <p className="room-centered-text" >
              {currentCategory}
          </p>

          <p
              className="room-faded-text"
              onClick={() => handleCategoryClick((currentIndex + 1) % categories.length)}
          >
              {categories[(currentIndex + 1) % categories.length]}
          </p>

          <img
              src="/assets/down.svg"
              alt="Down Arrow"
              className="arrow-icon"
              onClick={() => handleCategoryClick((currentIndex + 1) % categories.length)}
          />
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
