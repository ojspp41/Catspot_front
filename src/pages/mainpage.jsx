import { useState } from "react";
import Character from "./../components/character.jsx";
import MainButton from "./../components/mainpage_button.jsx";
import QAModal from "../components/Qamodal.jsx";
import "./../css/pages/mainpage.css";

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
      <img
        src="/assets/qacat.svg"
        alt="Top Right Image"
        className="top-right-image"
        onClick={handleImageClick}
      />
      <p className="sub-title">빈 공간을 찾으신다면?</p>
      <p className="title">CAT-SPOT</p>
      <Character />
      <MainButton />
      <QAModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
