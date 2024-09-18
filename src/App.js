import './App.css';
import Navbar from './components/navbar/Navbar';
import ParticlesBackground from './components/particlesBackground';

function App() {
  return (
    <div className="App">
      <ParticlesBackground />
      <div className='gradient__bg'>
        <Navbar />
        {/* Other content */}
      </div>
    </div>
  );
}

export default App;
