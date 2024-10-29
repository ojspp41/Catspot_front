import { useState } from "react";
import Character from "./../components/character.jsx";
import MainButton from "./../components/mainpage_button.jsx";
import QAModal from "../components/QAModal.jsx";
import "./../css/pages/mainpage.css";
import { Link } from "react-router-dom";

export default function MainPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="mainpage">
      <img src="/assets/qacat.svg" alt="Top Right Image" className="top-right-image" onClick={handleImageClick} />
      <p className="sub-title">빈 공간을 찾으신다면?</p>
      <p className="title">CAT-SPOT</p>
      <Character />
      <MainButton />
      <div className="guidebook_link">
        <Link to="/guidebook">서비스 이용법 안내</Link>
      </div>
      <QAModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
