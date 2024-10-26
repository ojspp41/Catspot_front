import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { currentBuildingState, currentFloorState } from "../Atom.jsx";
import axiosInstance from "../axiosConfig.jsx";
import { Navba } from "../components/Navba";
import { useNavigate } from "react-router-dom";
import "../css/pages/Room.css";
import Stair from "../components/Stair";

const Room = () => {
  const categories = ["니콜스관", "다솔관", "밤비노관", "마리아관", "비루투스관"];
  const navigate = useNavigate();

  // Building floor mapping
  const floorsMapping = {
    니콜스관: 4,
    다솔관: 4,
    비루투스관: 3,
    밤비노관: 2,
    마리아관: 4,
  };

  // Utility function for building code
  const getBuildingCode = (building) => {
    switch (building) {
      case "김수환관":
        return "k";
      case "니콜스관":
        return "n";
      case "다솔관":
        return "d";
      case "성심관":
        return "sh";
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

  const handleCategoryClick = (index) => {
    setCurrentIndex(index);
  };

  const handleGoClick = () => {
    const currentCategory = categories[currentIndex];
    setCurrentBuilding(currentCategory);
    const buildingCode = getBuildingCode(currentCategory);
    const roomPath = `/room/${buildingCode}${currentFloor}/${buildingCode}${currentFloor}`;
    navigate(roomPath);
  };

  // Retrieve current category and total floors
  const currentCategory = categories[currentIndex];
  const totalFloors = floorsMapping[currentCategory];

  return (
    <>
      <Navba title="빈강의실" />
      <div className="room-centered-box">
        <div className="room-category">
          <p
            className="room-faded-text"
            onClick={() => handleCategoryClick((currentIndex + categories.length - 1) % categories.length)}
          >
            {categories[(currentIndex + categories.length - 1) % categories.length]}
          </p>

          <p
            className="room-centered-text"
            onClick={() => handleCategoryClick(currentIndex)}
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

export default Room;
