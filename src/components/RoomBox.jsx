import React from 'react';
import '../css/components/roomBox.css';  // 별도의 CSS 파일로 스타일 관리

const RoomBox = ({ text, className }) => {
  return (
    <div className={`room-box ${className}`}> 
      <div className="room-box-content">
        {text}
      </div>
    </div>
  );
};

export default RoomBox;
