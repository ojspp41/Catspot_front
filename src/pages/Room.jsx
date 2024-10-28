import React, { useState, useEffect } from "react";
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

  const floorsMapping = {
    니콜스관: 4,
    다솔관: 4,
    비루투스관: 3,
    밤비노관: 2,
    마리아관: 4,
  };

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

  const [currentIndex, setCurrentIndex] = useState(
    parseInt(localStorage.getItem("currentIndex")) || 0
  );
  const [currentBuilding, setCurrentBuilding] = useRecoilState(currentBuildingState);
  const [currentFloor, setCurrentFloor] = useRecoilState(currentFloorState);

  useEffect(() => {
    // 컴포넌트가 마운트될 때 저장된 building과 floor 불러오기
    const savedIndex = parseInt(localStorage.getItem("currentIndex"));
    const savedFloor = parseInt(localStorage.getItem("currentFloor"));

    if (!isNaN(savedIndex)) setCurrentIndex(savedIndex);
    if (!isNaN(savedFloor)) setCurrentFloor(savedFloor);
  }, []);

  useEffect(() => {
    // currentIndex와 currentFloor가 변경될 때마다 localStorage에 저장
    localStorage.setItem("currentIndex", currentIndex);
    localStorage.setItem("currentFloor", currentFloor);
  }, [currentIndex, currentFloor]);

  const handleCategoryClick = (index) => {
    setCurrentIndex(index);
    setCurrentBuilding(categories[index]);
  };

  const handleGoClick = () => {
    const currentCategory = categories[currentIndex];
    setCurrentBuilding(currentCategory);
    const buildingCode = getBuildingCode(currentCategory);
    const roomPath = `/room/${buildingCode}${currentFloor}/${buildingCode}${currentFloor}`;
    navigate(roomPath);
  };

  const currentCategory = categories[currentIndex];
  const totalFloors = floorsMapping[currentCategory];

  return (
    <>
      <Navba title="빈강의실" />
      <div className="room-centered-box">
        <div className="room-category">
          <img
            src="/assets/up.svg"
            alt="Up Arrow"
            className="arrow-icon"
            onClick={() => handleCategoryClick((currentIndex + categories.length - 1) % categories.length)}
          />
          <p className="room-faded-text">
            {categories[(currentIndex + categories.length - 1) % categories.length]}
          </p>
          <p className="room-centered-text">
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

export default Room;
