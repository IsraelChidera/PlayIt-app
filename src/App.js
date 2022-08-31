import './App.css';
import HeroSearch from './component/HeroSearch';
import Hero from './component/Hero';
import MusicFooter from './component/MusicFooter';
import overlap1 from './assets/overlap2.png';
import overlap2 from './assets/overlap3.png';
import overlap3 from './assets/overlap1.png';
import searchbtn from './assets/searchbtn.png';
import {useState} from 'react';

function App() {
  const [openInput, setOpenInput] = useState(false);

  const handleSearchClick = () => {
    setOpenInput(!openInput);
  }
  return (
    <section className="app h-screen relative">
      <div className='absolute flex items-center'>
        <div className='overlap'>
          <img src={overlap1} alt="overlaping words"/>
        </div>

        <div className='overlap2'>
          <img src={overlap2} alt="overlaping words"/>
        </div>
      </div>

      <div className='w-3/4 mx-auto space-x-4 flex items-center'>
        <div className='hero'>
          <Hero/>
        </div>

        <div>
          <HeroSearch/>
        </div>
      </div>

      <div 
        className='absolute top-24 right-0 identify p-2 flex items-center space-x-2'
      >
        <div className='identifySearch'>
          <img 
            src={searchbtn} 
            alt="search icon" 
            className='w-6 h-6 cursor-pointer'
            onClick={handleSearchClick}
          />
        </div>

        {openInput? <div>
          <form>
            <input 
              type="text" 
              placeholder="song, artist, album . . ."
              className='border text-sm py-3 pl-2 rounded-md w-full'  
            />
          </form>
        </div>:" "}
      </div>

      <div 
        className='musicfooter absolute bottom-0 right-0'
      >
        <MusicFooter/>
      </div>

      <div className='absolute overlap3'>
        <img src={overlap3} alt="overlaping words"/>
      </div>
    </section>
  );
}

export default App;
