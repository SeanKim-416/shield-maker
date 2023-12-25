import NavBar from './components/commons/NavBar/NavBar';
import LandingPage from './pages/Landing/LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/reset.scss';

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/edit" element={<div>안녕</div>} />
          <Route path="/edit-json" element={<div>안녕</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
