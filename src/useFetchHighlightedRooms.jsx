import { useState, useEffect } from 'react';
import axiosInstance from './axiosConfig';

const useFetchHighlightedRooms = (buildingName, floor) => {
  const [highlightedRooms, setHighlightedRooms] = useState([]);

  useEffect(() => {
    const fetchHighlightedRooms = async () => {
      const dayNames = ["일", "월", "화", "수", "목", "금", "토"];
      const currentDate = new Date();
      const currentDay = dayNames[currentDate.getDay()];
      const currentHour = currentDate.getHours();

      try {
        const response = await axiosInstance.post("/api/classroom", {
          buildingName,
          floor,
          day: currentDay,
          hour: currentHour,
        });
        setHighlightedRooms(response.data.classrooms || []);
      } catch (error) {
        console.error("Error fetching highlighted rooms:", error);
      }
    };

    fetchHighlightedRooms();
  }, [buildingName, floor]);

  return highlightedRooms;
};

export default useFetchHighlightedRooms;
