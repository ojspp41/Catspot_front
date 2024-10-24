import { Navbar } from "./../components/Navbar.jsx";
import LibrarySeatSite from "./../components/library_seats_site.jsx";
import image from "/assets/astronaut_25 1.png";

export default function LibrarySite() {
  return (
    <div>
      <Navbar title="도서관 좌석 현황" />
      <LibrarySeatSite num="1" image={image} />
    </div>
  );
}
