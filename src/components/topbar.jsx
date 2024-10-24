import { useNavigate } from "react-router-dom";
import "../css/components/topbar.css";

export const Topbar = ({ title }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="topbar">
      <div className="topbar-left-section">
        <img src="/assets/back.svg" alt="logo" className="navbar-logo" onClick={handleBackClick} />
      </div>
      <div className="topbar-title-section">
        <h1 className="topbar-title">{title}</h1>
      </div>
    </div>
  );
};
