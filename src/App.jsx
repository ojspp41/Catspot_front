import { RecoilRoot } from "recoil";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mainpage from "./pages/mainpage.jsx";
import Library from "./pages/library.jsx";
import LibrarySite1A from "./pages/library_site1A.jsx";
import LibrarySite1B from "./pages/library_site1B.jsx";
import LibrarySite1C from "./pages/library_site1C.jsx";
import LibrarySite1D from "./pages/library_site1D.jsx";
import LibrarySite2A from "./pages/library_site2A.jsx";
import LibrarySite2B from "./pages/library_site2B.jsx";
import LibrarySiteK from "./pages/library_siteK.jsx";
import LibrarySiteM from "./pages/library_siteM.jsx";
import "./App.css";

import Room from "./pages/room";
import N1 from "./pages/n1";
import N2 from "./pages/n2";
import N3 from "./pages/n3";
import N4 from "./pages/n4";
import D4 from "./pages/D1.jsx";
function App() {
  return (
    <RecoilRoot>
      <Router>
        <div className="App">
          <Routes>
            {/* Mainpage and Library routes */}
            <Route path="/" element={<Mainpage />} />
            <Route path="/Library" element={<Library />} />
            <Route path="/LibrarySite1A" element={<LibrarySite1A />} />
            <Route path="/LibrarySite1B" element={<LibrarySite1B />} />
            <Route path="/LibrarySite1C" element={<LibrarySite1C />} />
            <Route path="/LibrarySite1D" element={<LibrarySite1D />} />
            <Route path="/LibrarySite2A" element={<LibrarySite2A />} />
            <Route path="/LibrarySite2B" element={<LibrarySite2B />} />
            <Route path="/LibrarySiteK" element={<LibrarySiteK />} />
            <Route path="/LibrarySiteM" element={<LibrarySiteM />} />

            {/* Room routes */}
            <Route path="/room" element={<Room />} />
            <Route path="/room/n1" element={<N1 />} />
            <Route path="/room/n2" element={<N2 />} />
            <Route path="/room/n3" element={<N3 />} />
            <Route path="/room/n4" element={<N4 />} />
            <Route path="/room/d4" element={<D4 />} />
          </Routes>
        </div>
      </Router>
    </RecoilRoot>
  );
}

export default App;
