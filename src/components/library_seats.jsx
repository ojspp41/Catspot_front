import "./../css/components/library_seats.css";

export default function LibrarySeats({ placeIdx, Seats }) {
  const { image, allSeats, useSeats, restSeats } = Seats;

  return (
    <div className="library_seats">
      <img src={image} alt="열람실" className="library-img" />

      <div className="library_seats_head">
        <p className="head">제 {placeIdx} 자유열람실</p>
        <div className="library_seats_detail">
          <p className="detail">잔여좌석</p>
          <p className="detail">사용중</p>
          <p className="detail">총 좌석수</p>
        </div>
        <div className="seats_data">
          <p>{restSeats}</p>
          <p>{useSeats}</p>
          <p>{allSeats}</p>
        </div>
      </div>
    </div>
  );
}
