import './App.css';
import Navbar from './components/navbar/Navbar';
import ParticlesComponent from './components/particles';
import Header from './containers/header/Header';
import About from './containers/about/About';
import Sports from './containers/sports/Sports';

function App() {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <div id='about-page'>
        <About/>
      </div>
      <div id='sports-page'>
        <Sports/>
      </div>
      
    </div>
  );
}




export default App;
