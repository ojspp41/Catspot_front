import { RecoilRoot } from "recoil";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainpage from "./pages/mainpage.jsx";
import GuideBook from "./pages/guidebook.jsx";
import Library from "./pages/library.jsx";
import "./App.css";
import Room from "./pages/Room.jsx";
import OpenExternalBrowser from "./OpenExternalBrowser.jsx";
import N1 from "./pages/n1.jsx";
import N2 from "./pages/n2.jsx";
import N3 from "./pages/n3.jsx";
import N4 from "./pages/n4.jsx";
import D2 from "./pages/D2.jsx";
import D3 from "./pages/D3.jsx";
import D4 from "./pages/D4.jsx";
import BA2 from "./pages/BA2.jsx";
import M2 from "./pages/M2.jsx";
import M3 from "./pages/M3.jsx";
import M4 from "./pages/M4.jsx";
import V1 from "./pages/V1.jsx";
import V2 from "./pages/V2.jsx";
import V3 from "./pages/V3.jsx";
import D1 from "./pages/D1.jsx";
import BA1 from "./pages/BA1.jsx";
import M1 from "./pages/M1.jsx";
import D5 from "./pages/D5.jsx";
import D6 from "./pages/D6.jsx";
function App() {
  return (
    <RecoilRoot>
      <OpenExternalBrowser />
      <BrowserRouter>
        <div className="App">
          <Routes>
            {/* Mainpage and Library routes */}
            <Route path="/" element={<Mainpage />} />
            <Route path="/library" element={<Library />} />
            <Route path="/guidebook" element={<GuideBook />} />

            {/* Room routes */}
            <Route path="/room" element={<Room />} />
            <Route path="/room/n1/:roomId" element={<N1 />} />
            <Route path="/room/n2/:roomId" element={<N2 />} />
            <Route path="/room/n3/:roomId" element={<N3 />} />
            <Route path="/room/n4/:roomId" element={<N4 />} />
            <Route path="/room/d1/:roomId" element={<D1 />} />
            <Route path="/room/d2/:roomId" element={<D2 />} />
            <Route path="/room/d3/:roomId" element={<D3 />} />
            <Route path="/room/d4/:roomId" element={<D4 />} />
            <Route path="/room/d5/:roomId" element={<D5 />} />
            <Route path="/room/d6/:roomId" element={<D6 />} />

            <Route path="/room/ba1/:roomId" element={<BA1 />} />
            <Route path="/room/ba2/:roomId" element={<BA2 />} />
            <Route path="/room/m1/:roomId" element={<M1 />} />
            <Route path="/room/m2/:roomId" element={<M2 />} />
            <Route path="/room/m3/:roomId" element={<M3 />} />
            <Route path="/room/m4/:roomId" element={<M4 />} />
            <Route path="/room/v1/:roomId" element={<V1 />} />
            <Route path="/room/v2/:roomId" element={<V2 />} />
            <Route path="/room/v3/:roomId" element={<V3 />} />
          </Routes>
        </div>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
