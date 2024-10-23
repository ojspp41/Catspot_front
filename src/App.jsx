import './App.css';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Room from './pages/room';
import N1 from './pages/n1';
import N2 from './pages/n2';
import N4 from './pages/n4';
function App() {
  return (
    <RecoilRoot>
      <Router>
        <div className="App">
          
            <Routes>
              <Route path="/room" element={<Room />} />
              <Route path="/room/n1" element={<N1 />} />
              <Route path="/room/n2" element={<N2 />} />
              <Route path="/room/n4" element={<N4 />} />
            </Routes>
        </div>
      </Router>
    </RecoilRoot>
  );
}

export default App;
