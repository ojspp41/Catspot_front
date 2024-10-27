// src/utils/dateUtils.js

export const getKoreanDayAndHour = () => {
    const koreaTime = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Seoul",
    });
    const date = new Date(koreaTime);
    const days = ["일", "월", "화", "수", "목", "금", "토"];
    const day = days[date.getDay()]; // 요일 이름 (예: "월")
    const hour = date.getHours();    // 현재 시간 (24시간제)
    return { day, hour };
  };
  