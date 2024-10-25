import eyes from "/assets/eyes.svg";
import cat from "/assets/cat.svg";
import wifi1 from "/assets/wifi1.svg";
import wifi2 from "/assets/wifi2.svg";
import wifi3 from "/assets/wifi3.svg";
import "./../css/components/character.css";

export default function Character() {
  return (
    <div className="character">
      <div className="cat-wrapper">
        <div className="wifi-wrapper">
          <img src={wifi3} alt="와이파이" className="wifi wifi3" />
          <img src={wifi2} alt="와이파이" className="wifi wifi2" />
          <img src={wifi1} alt="와이파이" className="wifi wifi1" />
        </div>
        <img src={cat} alt="캣스팟 고양이" className="cat" />
        <img src={eyes} alt="고양이눈" className="eyes" />
      </div>
    </div>
  );
}
