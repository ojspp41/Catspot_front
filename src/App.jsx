import './App.css';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Room from './pages/room';
function App() {
  return (
    <RecoilRoot>
      <Router>
        <div className="App">
          
            <Routes>
              <Route path="/room" element={<Room />} />
            </Routes>
        </div>
      </Router>
    </RecoilRoot>
  );
}

export default App;
