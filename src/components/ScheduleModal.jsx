import React from 'react';
import "../css/components/ScheduleModal.css"; // 모달을 위한 스타일 추가

const ScheduleModal = ({ schedule, onClose }) => {
  // 9시부터 17시까지의 시간대를 배열로 정의
  const timeSlots = [
    9, 10, 11, 12, 13, 14, 15, 16
  ];

  // 각 시간대에 해당하는 수업을 매칭
  const getClassForTimeSlot = (timeSlot) => {
    const classItem = schedule.classes.find(item => item.time === timeSlot);
    return classItem ? classItem.subjectName : ""; // 수업이 없으면 빈 문자열
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2 className='room-name'>{schedule.room}</h2>
        <table className="schedule-table">
          <thead>
            <tr>
              <th>과목</th>
              <th>시간</th>
            </tr>
          </thead>
          <tbody>
            {timeSlots.map((timeSlot, index) => (
              <tr key={index}>
                <td>{getClassForTimeSlot(timeSlot)}</td>
                <td>{`${timeSlot}:00 ~ ${timeSlot + 1}:00`}</td> {/* 1시간 단위로 매칭 */}
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
