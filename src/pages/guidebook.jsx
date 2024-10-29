import "./../css/pages/guidebook.css";
import { Topbar } from "./../components/topbar";
import GuideBookBox from "./../components/guideBookBox";
import GuideBook1 from "./../../public/assets/guidebook_1.svg";
import GuideBook2 from "./../../public/assets/guidebook_2.svg";
import GuideBook3 from "./../../public/assets/guidebook_3.svg";
import GuideBook4 from "./../../public/assets/guidebook_4.svg";

export default function GuideBook() {
  return (
    <div className="guidebook">
      <Topbar title="Guide Book" />
      <div className="title-section">
        <p className="title">CAT-SPOT</p>
        <p className="second-title">[가이드북]</p>
        <p className="intro">CAT-SPOT 서비스 이용안내 가이드북</p>
      </div>

      <div className="guidebook-contents">
        <GuideBookBox image={GuideBook1} title="# 메인페이지" content1="CAT-SPOT 메인 페이지입니다." content2="귀여운 고양이 아래에서 원하는 기능을 선택해주세요." content3=" 상단의 Q&A 버튼을 눌러 여러분의 건의사항을 적어주세요." />

        <GuideBookBox
          image={GuideBook2}
          title="# 원하는 건물/층 설정"
          content1="원하는 건물과 층을 설정하는 페이지입니다."
          content2="먼저 원하는 건물을 선택해주세요."
          content3="이후 원하는 층수를 눌러주세요."
          content4="귀여운 고양이 캐릭터가 해당 위치에 올라오면 
  설정이 완료된 것입니다."
          content5="Go 버튼을 눌러 이동해주세요."
        />

        <GuideBookBox
          image={GuideBook3}
          title="# 강의실 단면도"
          content1="
  설정한 위치의 강의실 단면도를 보여드립니다."
          content2="수업 중인 강의실은 노란색, 
  빈 강의실은 파란색으로 표시됩니다."
          content3="원하는 강의실 버튼을 누르면 
  해당 강의실의 당일 시간표가 나타나며, 현재 시간에 맞춰 하이라이트됩니다.해당 층에서 다른 건물로 연결된 타 건물 버튼을 누르면 이동할 수 있습니다."
          content4="빨간색: 계단, 파란색: 입출구"
        />

        <GuideBookBox
          image={GuideBook4}
          title="# 도서관 잔여 좌석"
          content1="
  학교 열람실 목록이 표시됩니다."
          content2="각 열람실별 잔여 좌석, 사용 중 좌석, 총 좌석 수를 한눈에 확인할 수 있습니다."
          content3="현재 좌석 상태가 궁금한 열람실 버튼을 눌러 확인하세요."
        />
      </div>
    </div>
  );
}
