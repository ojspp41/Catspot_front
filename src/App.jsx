import { RecoilRoot } from "recoil";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mainpage from "./pages/mainpage.jsx";
import Library from "./pages/library.jsx";
import LibrarySite1 from "./pages/library_site1.jsx";
import LibrarySite2 from "./pages/library_site2.jsx";
import LibrarySite3 from "./pages/library_site3.jsx";
import LibrarySite4 from "./pages/library_site4.jsx";
import LibrarySite5 from "./pages/library_site5.jsx";
import './App.css';

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/Library" element={<Library />} />
          <Route path="/Library_site1" element={<LibrarySite1 />} />
          <Route path="/Library_site2" element={<LibrarySite2 />} />
          <Route path="/Library_site3" element={<LibrarySite3 />} />
          <Route path="/Library_site4" element={<LibrarySite4 />} />
          <Route path="/Library_site5" element={<LibrarySite5 />} />
        </Routes>
      </Router>
    </RecoilRoot>
  );
}
export default App;