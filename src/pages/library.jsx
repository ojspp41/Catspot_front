import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
      
      // Mock data
      const mockData = [
        { placeIdx: 1, placeName: "제 1-A 자유열람실", url: "/library/1A", allSeats: 100, useSeats: 50, restSeats: 50 },
        { placeIdx: 2, placeName: "제 1-B 자유열람실", url: "/library/1B", allSeats: 80, useSeats: 20, restSeats: 60 },
        { placeIdx: 3, placeName: "제 1-c 자유열람실", url: "/library/1C", allSeats: 70, useSeats: 30, restSeats: 40 },
        { placeIdx: 4, placeName: "제 1-D 자유열람실", url: "/library/1D", allSeats: 60, useSeats: 40, restSeats: 20 },
        { placeIdx: 5, placeName: "제 2-A 자유열람실", url: "/library/2A", allSeats: 90, useSeats: 70, restSeats: 20 },
        { placeIdx: 6, placeName: "제 2-B 자유열람실 2B", url: "/library/2B", allSeats: 50, useSeats: 25, restSeats: 25 },
        { placeIdx: 7, placeName: "김수환관", url: "/library/K", allSeats: 100, useSeats: 80, restSeats: 20 },
        { placeIdx: 8, placeName: "메인 스퀘어", url: "/library/M", allSeats: 120, useSeats: 90, restSeats: 30 },
      ];

      // Filter out items if necessary
      const filteredData = mockData.filter(item => item.placeName !== "대학원 열람석");
      setSeats(filteredData);

      setLoading(false);
    };

    fetchSeatsData();
  }, []);

  if (loading) {
    return (
      <div className="loading-spinner-container">
        <div className="loading-spinner"></div>
      </div>
    );
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
