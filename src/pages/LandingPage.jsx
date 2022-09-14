import React, {useState, useContext} from 'react';
import HeroSearch from '../component/HeroSearch';
import Hero from '../component/Hero';
import MusicFooter from '../component/MusicFooter';
import overlap1 from '../assets/overlap2.png';
import overlap2 from '../assets/overlap3.png';
import overlap3 from '../assets/overlap1.png';
import searchbtn from '../assets/searchbtn.png';
import logo from '../assets/logo.png';
import Login from './Login';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import MusicContext from '../MusicContext';


const LandingPage = () => {
  // const {lyrics, inputs, setInputs} = useContext(MusicContext);
  const handleSearchClick = () => {
    navigate('/lyrics');
  }
  
  const navigate = useNavigate();
  const [openInput, setOpenInput] = useState(false);  
  
               
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

      <div className="absolute top-14 left-24">
        <img 
          src={logo} 
          alt="logo"
          className="w-9 h-9 "
        />
      </div>

      <div className='w-4/5 mx-auto space-x-4 flex items-center'>
        <div className='hero'>
          
          <Hero/>

        </div>

        <div>
          <HeroSearch/>
        </div>
      </div>

      <div className="absolute top-24 right-0 identify flex items-center space-x-2 ">
        <div 
          className='
          identifySearch mr-4 bg-slate-500 p-4 rounded-full' 
          onClick={handleSearchClick}
        >
          <img 
            src={searchbtn} 
            alt="search icon" 
            className=' cursor-pointer h-6 w-6 '
            
          />          
        </div>
      </div>

      <div 
        className='musicfooter absolute bottom-2 right-0 z-40'
      >
        <MusicFooter/>
      </div>

      <div className='absolute overlap3'>
        <img src={overlap3} alt="overlaping words"/>
      </div>
    </section>
  
  )
}

export default LandingPage