import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { currentBuildingState, currentFloorState } from '../Atom.jsx';
import axiosInstance from '../axiosConfig.jsx';  // Axios 인스턴스 가져오기
import { Navbar } from '../components/Navbar';
import { useNavigate } from 'react-router-dom';  // useNavigate import
import "../css/pages/room.css";
import Stair from '../components/Stair';

const Room = () => {
  const categories = ['김수환관', '니콜스관', '다솔관', '성심관'];
  const navigate = useNavigate(); // useNavigate hook 사용
  // 건물별 층수를 저장한 객체
  const floorsMapping = {
    '김수환관': 5,
    '니콜스관': 4,
    '다솔관': 7,
    '성심관': 6
  };
  const getBuildingCode = (building) => {
    switch (building) {
      case '김수환관':
        return 'k';
      case '니콜스관':
        return 'n';
      case '다솔관':
        return 'd';
      case '성심관':
        return 'sh';
      default:
        return '';
    }
  };
  const [currentIndex, setCurrentIndex] = useState(1);
  const [currentBuilding, setCurrentBuilding] = useRecoilState(currentBuildingState);
  const [currentFloor] = useRecoilState(currentFloorState);  // 층 상태는 읽기만
  const [offsetY, setOffsetY] = useState(0);  // 터치 중 Y축 이동을 저장

  let touchStartY = 0;  // 터치 시작 Y 좌표 저장
  let touchEndY = 0;    // 터치 종료 Y 좌표 저장

  // 터치 시작 핸들러
  const handleTouchStart = (e) => {
    touchStartY = e.changedTouches[0].clientY;  // 터치 시작 Y 좌표 기록
  };
  const handleTouchMove = (e) => {
    const touchMoveY = e.changedTouches[0].clientY;
    const deltaY = touchMoveY - touchStartY;  // 터치 시작점과 현재 위치의 차이 계산
    setOffsetY(deltaY);  // offset 값을 업데이트하여 화면에 반영
  };
  // 터치 종료 핸들러
  const handleTouchEnd = (e) => {
    touchEndY = e.changedTouches[0].clientY;  // 터치 종료 Y 좌표 기록
    handleSwipeGesture();
  };
  const handleCategoryClick = (index) => {
    setCurrentIndex(index);
  };

  // 스와이프 방향에 따라 건물 선택
  const handleSwipeGesture = () => {
    if (touchStartY - touchEndY > 50) {
      // 스와이프 업: 다음 카테고리로 이동
      setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length);
    }
    if (touchEndY - touchStartY > 50) {
      // 스와이프 다운: 이전 카테고리로 이동
      setCurrentIndex((prevIndex) => (prevIndex - 1 + categories.length) % categories.length);
    }
  };
//   const handleGoClick = async () => {
//     setCurrentBuilding(currentCategory);  // 현재 건물 상태 업데이트

//     try {
//       // POST 요청에서 currentFloorState의 값을 사용하여 전송
//       const response = await axiosInstance.post('/api/submit', {
//         building: currentCategory,
//         floor: currentFloor,  // currentFloorState에서 가져온 값 (Recoil 상태값)
//       });

//       console.log('응답 받음:', response.data);
//     } catch (error) {
//       console.error('POST 요청 실패:', error);
//     }
//   };
    const handleGoClick = () => {
        setCurrentBuilding(currentCategory);  // 현재 건물 상태 업데이트
        const buildingCode = getBuildingCode(currentCategory);
        const roomPath = `/room/${buildingCode}${currentFloor}`; // 경로 설정
        navigate(roomPath); // 경로로 네비게이션
    };

  // 현재 선택된 건물 이름
  const currentCategory = categories[currentIndex];

  // 현재 건물에 따른 층수를 가져옴
  const totalFloors = floorsMapping[currentCategory];

  return (
    <>
      <Navbar title="빈강의실" />
      <div
        className="room-centered-box"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="room-category" style={{ transform: `translateY(${offsetY}px)` }}>
          <p className="room-faded-text" onClick={() => handleCategoryClick((currentIndex + categories.length - 1) % categories.length)}>
            {categories[(currentIndex + categories.length - 1) % categories.length]}
          </p>
          <p className="room-centered-text" onClick={() => handleCategoryClick(currentIndex)}>
            {currentCategory}
          </p>
          <p className="room-faded-text" onClick={() => handleCategoryClick((currentIndex + 1) % categories.length)}>
            {categories[(currentIndex + 1) % categories.length]}
          </p>
        </div>
      </div>

      {/* 현재 건물의 층수를 기반으로 Stair 컴포넌트에 전달 */}
      <Stair totalFloors={totalFloors} />
      <div className="room-button-container">
        <button className="room-button"  onClick={handleGoClick}>Go</button>
      </div>
    </>
  );
};

export default Room;
