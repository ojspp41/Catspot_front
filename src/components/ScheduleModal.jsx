import React from 'react';
import "../css/components/ScheduleModal.css";

const ScheduleModal = ({ schedule, onClose }) => {
  
  const timeSlots = [9, 10, 11, 12, 13, 14, 15, 16];
  const currentHour = new Date().getHours();
  
  const getClassForTimeSlot = (timeSlot) => {
    // `time` 값을 교시에서 실제 시간으로 매핑하기 위해 +8을 더합니다.
    const classItem = schedule.schedule.find(item => parseInt(item.time, 10) + 8 === timeSlot);
    return classItem ? classItem.subjectName : "";
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2 className='room-name'>{schedule.className}</h2>
        <table className="schedule-table">
          <thead>
            <tr>
              <th>과목</th>
              <th>시간</th>
            </tr>
          </thead>
          <tbody>
            {timeSlots.map((timeSlot, index) => (
              <tr key={index} className={timeSlot === currentHour ? "current-time-slot" : ""}>
                <td>{getClassForTimeSlot(timeSlot)}</td>
                <td>{`${timeSlot}:00 ~ ${timeSlot + 1}:00`}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="close-button" onClick={onClose}>닫기</button>
      </div>
    </div>
  );
};

export default ScheduleModal;
