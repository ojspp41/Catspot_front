import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../axiosConfig.jsx";
import library1A from "/assets/library1A.svg";
import library1B from "/assets/library1B.svg";
import library1C from "/assets/library1C.svg";
import library1D from "/assets/library1D.svg";
import library2A from "/assets/library2A.svg";
import library2B from "/assets/library2B.svg";
import libraryK from "/assets/libraryK.svg";
import libraryM from "/assets/libraryM.svg";
import { Topbar } from "./../components/topbar.jsx";
import LibrarySeats from "./../components/library_seats.jsx";
import "./../css/pages/library.css";

export default function Library() {
  const [seats, setSeats] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSeatsData = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get('/api/study-seat');
        console.log(response);
        setSeats(response.data.data);
      } catch (error) {
        console.error("Error fetching seats data:", error);
      }
      setLoading(false);
    };
    fetchSeatsData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (!seats || seats.length === 0) {
    return <p>No data available.</p>;
  }

  const images = [library1A, library1B, library1C, library1D, library2A, library2B, libraryK, libraryM];

  return (
    <div className="main-library">
      <Topbar title="도서관 잔여 좌석" className="header" />
      <div className="library_rooms">
        {seats.map((seat, index) => (
          <Link to={seat.url} key={seat.placeIdx}>
            <LibrarySeats
              name={seat.placeName}
              image={images[index % images.length]} // Cycles through images
              Seats={{
                allSeats: seat.allSeats,
                useSeats: seat.useSeats,
                restSeats: seat.restSeats,
              }}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}