import eyes from "./../../public/assets/eyes.svg";
import cat from "./../../public/assets/cat.svg";
import "./../css/components/character.css";

export default function Character() {
  return (
    <div className="character">
      <div className="cat-wrapper">
        <img src={cat} alt="캣스팟 고양이" className="cat" />
        <img src={eyes} alt="고양이눈" className="eyes" />
      </div>
    </div>
  );
}
