// import { useState, useEffect } from "react";
// import axios from "axios";
import { Topbar } from "./../components/topbar.jsx";
import LibrarySeats from "../components/library_seats.jsx";
import image from "/assets/astronaut_25 1.png";
import { Link } from "react-router-dom";
// import { useState } from "react";
import "./../css/pages/library.css";

const sampleSeats = {
  image: image,
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
  //       setSeats(response.data.seats);
  //     } catch (e) {
  //       console.log(e);
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
        <Link to="/Library_site1">
          <LibrarySeats placeIdx="1" Seats={sampleSeats} />
        </Link>

        <Link to="/Library_site2">
          <LibrarySeats placeIdx="2" Seats={sampleSeats} />
        </Link>

        <Link to="/Library_site3">
          <LibrarySeats placeIdx="3" Seats={sampleSeats} />
        </Link>

        <Link to="/Library_site4">
          <LibrarySeats placeIdx="4" Seats={sampleSeats} />
        </Link>

        <Link to="/Library_site5">
          <LibrarySeats placeIdx="5" Seats={sampleSeats} />
        </Link>
      </div>
    </div>
  );
}
