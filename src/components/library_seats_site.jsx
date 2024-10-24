import "./../css/components/library_seats_site.css";

export default function LibrarySeats({ num, image }) {
  return (
    <div className="library-site">
      <p>제 {num} 자유열람실</p>
      <figure>
        <img src={image} alt="좌석 배치도" />
      </figure>
    </div>
  );
}
