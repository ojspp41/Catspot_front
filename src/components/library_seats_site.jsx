import "./../css/components/library_seats_site.css";
import { Topbar } from "../components/topbar";

export default function LibrarySeats({ name }) {
  const imageUrl = "https://example.com/image.jpg"; // 사용할 이미지 URL

  return (
    <div className="library-site">
      <Topbar title="도서관 잔여 좌석" />
      <p className="library-room-name">{name}</p>
      <div className="library-page-wrapper">
        <img src={imageUrl} alt="열람실좌석배치도" />
      </div>
    </div>
  );
}
