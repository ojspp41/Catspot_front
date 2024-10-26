import "./../css/components/library_seats.css";

export default function LibrarySeats({ name, image, Seats }) {
  const { allSeats, useSeats, restSeats } = Seats;

  return (
    <div className="library_seats">
      <img src={image} alt={`${name} 이미지`} className="library-img" />
      <div className="library_seats_head">
        <p className="head">{name}</p>
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
