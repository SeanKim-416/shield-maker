import NavBar from './components/commons/NavBar/NavBar';
import Landing from './pages/Landing/Landing';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/reset.scss';

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/edit" element={<div>안녕</div>} />
          <Route path="/edit-json" element={<div>안녕</div>} />
          <Route path="*" element={<div>잘못된 페이지</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
