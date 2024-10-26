import { useState } from "react";
import "../css/components/QAModal.css";
import axiosInstance from "../axiosConfig";
export default function QAModal({ isOpen, onClose }) {
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  const handleClose = () => {
    setTitle("");
    setEmail("");
    setBody("");
    setError("");
    onClose();
  };
  
const handleSubmit = async () => {
  if (!validateEmail(email)) {
    alert("@^.com 유효한 이메일을 입력하세요.");
    return;
  }
  setError("");
  const payload = { title, email, body };

  try {
    const response = await axiosInstance.post("/api/suggestion", payload);
    if (response.status === 200) {
      alert("건의사항이 성공적으로 제출되었습니다.");
      handleClose();
    } else {
      alert("제출에 실패했습니다. 다시 시도해주세요.");
    }
  } catch (error) {
    console.error(error);
    alert("오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
  }
};

  if (!isOpen) return null;

  return (
    <div className="qa-modal-overlay">
      <div className="qa-modal">
        <img src="/assets/x.svg" alt="Close" className="close-icon" onClick={handleClose} />
        <h2>Q/A</h2>
        <input
          type="text"
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error && <p className="error">{error}</p>}
        <textarea
          placeholder="건의사항"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        
        <button onClick={handleSubmit}className="close-button">SubMit</button>
      </div>
    </div>
  );
}
