import { useState, useEffect } from "react";
import axios from "axios";
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

const sampleSeats = {
  allSeats: "총 좌석",
  useSeats: "사용 좌석",
  restSeats: "잔여 좌석",
};

export default function Library() {
  // const [seats, setSeats] = useState();
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const seatsData = async () => {
  //     setLoading(true);
  //     try {
  //       const response = await axios.get("http://3.35.114.206/api/study-seat");
  //       console.log(response);
  //       setSeats(response.data.seats);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //     setLoading(false);
  //   };
  //   seatsData();
  // }, []);

  // if (loading) {
  //   return null;
  // }
  // if (!seats) {
  //   return null;
  // }

  return (
    <div className="main-library">
      <Topbar title="도서관 잔여 좌석" className="header" />
      <div className="library_rooms">
        <Link to="/LibrarySite1A">
          <LibrarySeats name="제 1자유열람실A" image={library1A} Seats={sampleSeats} />
        </Link>

        <Link to="/LibrarySite1B">
          <LibrarySeats name="제 1자유열람실B" image={library1B} Seats={sampleSeats} />
        </Link>

        <Link to="/LibrarySite1C">
          <LibrarySeats name="제 1자유열람실C" image={library1C} Seats={sampleSeats} />
        </Link>

        <Link to="/LibrarySite1D">
          <LibrarySeats name="제 1자유열람실D" image={library1D} Seats={sampleSeats} />
        </Link>

        <Link to="/LibrarySite2A">
          <LibrarySeats name="제 2자유열람실A" image={library2A} Seats={sampleSeats} />
        </Link>

        <Link to="/LibrarySite2B">
          <LibrarySeats name="제 2자유열람실B" image={library2B} Seats={sampleSeats} />
        </Link>

        <Link to="/LibrarySiteK">
          <LibrarySeats name="김수환관 열람실" image={libraryK} Seats={sampleSeats} />
        </Link>

        <Link to="/LibrarySiteM">
          <LibrarySeats name="메인 스퀘어" image={libraryM} Seats={sampleSeats} />
        </Link>
      </div>
    </div>
  );
}
