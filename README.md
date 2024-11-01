알려준 내용을 바탕으로 `CATSPOT`의 README 초안을 작성해볼게. 각 항목을 하나씩 정리해 나가자!

---

# CAT-SPOT (수정중)
<p>
  <img width="800" alt="캣스팟" src="https://github.com/user-attachments/assets/d2654af1-db4c-4cc7-92b5-c9edb0d04952">
</p>

## 배포 주소
> **가톨릭대학교 제 1회 GGUM Hackathon** <br>
개발기간 2024.10.19 ~

## 목차
- [서비스 소개](#서비스-소개)
- [상세 페이지](#상세-페이지)
- [기술 스택](#기술-스택)
- [프로젝트 구조](#프로젝트-구조)
- [팀 소개](#팀-소개)

## 서비스 소개
**CATSPOT**은 **가톨릭대 학생들이 원하는 공간을 쉽게 찾을 수 있도록 도와주는 서비스**입니다. 현재는 다음과 같은 기능이 포함되어 있습니다:
- **빈 강의실 찾기**: 강의실 위치와 시간표를 크롤링하여 사용 가능 여부를 표시합니다.
- **도서관 열람실 자리 찾기**: 도서관 좌석 정보를 실시간으로 제공하여 빈 좌석을 빠르게 찾을 수 있습니다.

## 상세 페이지
### 메인 페이지 + Q&A
| 메인                                                       | Q&A                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
|<img width="268" alt="메인 페이지" src="https://github.com/user-attachments/assets/1e70fd7a-fbb5-4068-83b2-73a90a14246f">| <img width="268" src="https://github.com/user-attachments/assets/f5fd0ac0-862f-40a5-bcd4-6226f8b033cd">|

| 열람실 리스트                                                       |                                                           |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
|<img width="268" alt="열람실 리스트" src="https://github.com/user-attachments/assets/ac645662-d687-4e40-95d5-d24def6df47d">| <img width="268" alt="열람실 리스트" src="https://github.com/user-attachments/assets/d0a33de7-d7a2-4132-baa3-1746c5e82d18">|

| 원하는 건물과 층 설정                                                       | 강의실 단면도                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
|<img width="268" alt="건물 및 층 설정" src="https://github.com/user-attachments/assets/cdfb4980-5418-4a2d-91ce-5777a0f204ba">| <img width="268" alt="강의실 단면도" src="https://github.com/user-attachments/assets/b262c17c-5a8f-47de-8b63-aa8f35cec39e">|

## 기술 스택
- **Frontend**: React, CSS, Recoil
- **라우팅**: `react-router-dom`을 사용하여 메인 페이지, 도서관, 가이드북 및 각 강의실 페이지로 라우팅
- **상태 관리**: Recoil을 활용해 전역 상태 관리
- **API**: 특정 기능 구현을 위해 크롤링 및 API 연동

## 프로젝트 구조
프로젝트는 React와 Recoil을 사용하여 다음과 같은 주요 페이지로 구성됩니다:
```javascript
import { RecoilRoot } from "recoil";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainpage from "./pages/mainpage.jsx";
import GuideBook from "./pages/guidebook.jsx";
import Library from "./pages/library.jsx";
import Room from "./pages/Room.jsx";
// 각 강의실 페이지 컴포넌트들
import N1 from "./pages/n1.jsx";
import N2 from "./pages/n2.jsx";
// 기타 페이지 컴포넌트들...

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Mainpage />} />
            <Route path="/library" element={<Library />} />
            <Route path="/guidebook" element={<GuideBook />} />
            {/* 강의실 및 도서관 상세 페이지 */}
            <Route path="/room/n1/:roomId" element={<N1 />} />
            {/* 추가 경로 및 컴포넌트들... */}
          </Routes>
        </div>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;

---

## 프로젝트 구조

```plaintext
📦 CATSPOT
├── dist
├── node_modules
├── public
│   └── assets
├── src
│   ├── components
│   │   ├── character.jsx
│   │   ├── guideBookBox.jsx
│   │   ├── library_seats_state.jsx
│   │   ├── library_seats.jsx
│   │   ├── mainpage_button.jsx
│   │   ├── Navba.jsx
│   │   ├── Navbar.jsx
│   │   ├── QAModal.jsx
│   │   ├── RoomBox.jsx
│   │   ├── ScheduleModal.jsx
│   │   ├── Stair.jsx
│   │   └── topbar.jsx
│   ├── css
│   ├── fonts
│   ├── pages
│   │   ├── BA1.jsx
│   │   ├── BA2.jsx
│   │   ├── D1.jsx
│   │   ├── D2.jsx
│   │   ├── D3.jsx
│   │   ├── D4.jsx
│   │   ├── D5.jsx
│   │   ├── D6.jsx
│   │   ├── D7.jsx
│   │   ├── guidebook.jsx
│   │   ├── library.jsx
│   │   ├── M1.jsx
│   │   ├── M2.jsx
│   │   ├── M3.jsx
│   │   ├── M4.jsx
│   │   ├── mainpage.jsx
│   │   ├── n1.jsx
│   │   ├── n2.jsx
│   │   ├── n3.jsx
│   │   ├── n4.jsx
│   │   ├── Room.jsx
│   │   ├── V1.jsx
│   │   ├── V2.jsx
│   │   └── V3.jsx
│   ├── utils
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── Atom.jsx
│   │   ├── axiosConfig.jsx
│   │   ├── index.css
│   │   ├── main.jsx
│   │   ├── OpenExternalBrowser.jsx
│   │   └── useFetchHighlight.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── vercel.json
└── vite.config.js
```

---

---

### 로컬 스토리지 사용

이 프로젝트에서는 사용자가 선택한 **건물과 층의 상태를 유지**하기 위해 로컬 스토리지를 사용하고 있습니다. 사용자가 페이지를 새로 고침하거나 나갔다가 다시 돌아왔을 때, 이전에 선택한 건물과 층의 상태가 유지됩니다.

**사용 예시:**
- `currentIndex`와 `currentFloor` 상태가 변경될 때마다 `localStorage`에 해당 상태를 저장하여 페이지를 다시 열어도 동일한 상태를 불러옵니다.
- 로컬 스토리지에 저장된 `currentIndex`와 `currentFloor` 값을 가져와 컴포넌트가 처음 로드될 때 설정합니다.

**코드 예시:**
```javascript
// 로컬 스토리지에서 상태 불러오기
useEffect(() => {
  const savedIndex = parseInt(localStorage.getItem("currentIndex"));
  const savedFloor = parseInt(localStorage.getItem("currentFloor"));

  if (!isNaN(savedIndex)) setCurrentIndex(savedIndex);
  if (!isNaN(savedFloor)) setCurrentFloor(savedFloor);
}, []);

// 상태 변경 시 로컬 스토리지에 저장
useEffect(() => {
  localStorage.setItem("currentIndex", currentIndex);
  localStorage.setItem("currentFloor", currentFloor);
}, [currentIndex, currentFloor]);
```

README에 `dateUtils`를 이용해 한국의 현재 요일과 시간을 가져오는 기능을 추가해 볼게요.

---

### 유틸리티 함수

프로젝트에서는 **한국 시간대에 맞춰 현재 요일과 시간을 계산**하는 유틸리티 함수를 사용하고 있습니다. 이 기능은 `Asia/Seoul` 타임존을 기준으로 강의실 예약 및 좌석 현황을 업데이트할 때 사용됩니다.

**사용된 함수:**
- `getKoreanDayAndHour`: 한국 표준 시간대(KST)에 따라 현재 요일과 시간을 반환하는 함수입니다.

**코드 예시:**
```javascript
// src/utils/dateUtils.js

export const getKoreanDayAndHour = () => {
    const koreaTime = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Seoul",
    });
    const date = new Date(koreaTime);
    const days = ["일", "월", "화", "수", "목", "금", "토"];
    const day = days[date.getDay()]; // 요일 이름 (예: "월")
    const hour = date.getHours();    // 현재 시간 (24시간제)
    return { day, hour };
};
```

이 함수는 서버와의 통신 시 한국 시간을 기준으로 데이터를 제공하여, 보다 정확한 강의실 예약 정보를 표시할 수 있도록 도와줍니다.