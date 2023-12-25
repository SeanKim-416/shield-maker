import NavBar from './components/commons/NavBar/NavBar';
import LandingPage from './pages/Landing/LandingPage';
import './styles/reset.scss';

function App() {
  return (
    <div className="App">
      <NavBar />
      <LandingPage />
    </div>
  );
}

export default App;
