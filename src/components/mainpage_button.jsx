import { useNavigate } from "react-router-dom";
import "./../css/components/mainpage_button.css";

export default function MainButton() {
  const navigate = useNavigate();

  const LibraryButton = () => {
    navigate("/Library");
  };

  const ClassroomButton = () => {
    navigate("/room");
  };

  return (
    <div className="main-button">
      <button onClick={LibraryButton}>도서관 잔여 좌석</button>
      <button onClick={ClassroomButton}>빈 강의실</button>
    </div>
  );
}
