import Character from "./../components/character.jsx";
import MainButton from "./../components/mainpage_button.jsx";
import "./../css/pages/mainpage.css";

export default function MainPage() {
  return (
    <div className="mainpage">
      <p className="sub-title">빈 공간을 찾으신다면?</p>
      <p className="title">CAT-SPOT</p>
      <Character />
      <MainButton />
    </div>
  );
}
