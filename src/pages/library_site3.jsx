import { Topbar } from "./../components/topbar.jsx";
import LibrarySeatSite from "./../components/library_seats_site.jsx";
import image from "/assets/astronaut_25 1.png";

export default function LibrarySite() {
  return (
    <div>
      <Topbar title="도서관 잔여 좌석" />
      <LibrarySeatSite num="3" image={image} />
    </div>
  );
}
