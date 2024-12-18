import React from 'react';
import '../css/components/roomBox.css';  // 별도의 CSS 파일로 스타일 관리

const RoomBox = ({ text, className, onClick }) => {
  return (
    <div className={`room-box ${className}`} onClick={onClick}> 
      <div className="room-box-content">
        {text}
      </div>
    </div>
  );
};

export default RoomBox;
