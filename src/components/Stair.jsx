import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { currentFloorState } from '../Atom.jsx';  // 현재 층 상태
import "../css/components/stair.css"; // Updated CSS for vertical staircase

const Stair = ({ totalFloors }) => {
  const [selectedFloor, setSelectedFloor] = useRecoilState(currentFloorState);  // Recoil로 상태 관리
  const [isAnimating, setIsAnimating] = useState(false);  // 애니메이션 중인지 확인

  // 애니메이션으로 층별로 이동
  const handleClick = (floor) => {
    if (floor !== selectedFloor && !isAnimating) {
      setIsAnimating(true);
      animateFloorChange(selectedFloor, floor);
    }
  };

  // 층 이동을 단계적으로 구현하는 함수
  const animateFloorChange = (startFloor, targetFloor) => {
    const direction = targetFloor > startFloor ? 1 : -1; // 올라가는지 내려가는지 확인
    let currentFloor = startFloor;

    const stepAnimation = setInterval(() => {
      currentFloor += direction;
      setSelectedFloor(currentFloor);

      if (currentFloor === targetFloor) {
        clearInterval(stepAnimation);
        setIsAnimating(false); // 애니메이션 종료
      }
    }, 200); // 0.5초마다 층 변경
  };

  useEffect(() => {
    setSelectedFloor(1);  // 건물이 변경될 때마다 아이콘 위치 초기화
  }, [totalFloors]);

  const floors = Array.from({ length: totalFloors }, (_, index) => index + 1);

  return (
    <div className="stair-container">
      {floors.map((floor, index) => (
        <div
          key={index}
          className="stair-step"
          style={{ height: `${(index + 1) * (252 / totalFloors)}px`, width: '100%' }}
          onClick={() => handleClick(floor)}  // 클릭 시 애니메이션 시작
        >
          <p className='stair-floor'>{floor}F</p>
          <div className="step-decorator"></div>
          {selectedFloor === floor && (
            <div className="icon-container">
              <img
                src="/assets/icon.svg"  // 아이콘 이미지 경로
                alt="Icon"
                className="icon"  // 아이콘에 애니메이션 적용
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Stair;
