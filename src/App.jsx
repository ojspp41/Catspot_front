import './App.css';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Room from './pages/room';
import N1 from './pages/n1';
function App() {
  return (
    <RecoilRoot>
      <Router>
        <div className="App">
          
            <Routes>
              <Route path="/room" element={<Room />} />
              <Route path="/room/n1" element={<N1 />} />
            </Routes>
        </div>
      </Router>
    </RecoilRoot>
  );
}

export default App;
