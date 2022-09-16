import React, {useState, useEffect} from 'react';
import HeroSearch from '../component/HeroSearch';
import Hero from '../component/Hero';
import MusicFooter from '../component/MusicFooter';
import overlap1 from '../assets/overlap2.png';
import overlap2 from '../assets/overlap3.png';
import overlap3 from '../assets/overlap1.png';
import searchbtn from '../assets/searchbtn.png';
import logo from '../assets/logo.png';
import {useNavigate} from 'react-router-dom';


const LandingPage = () => {
  // const {lyrics, inputs, setInputs} = useContext(MusicContext);
  const handleSearchClick = () => {
    navigate('/lyrics');
  }
  
  const navigate = useNavigate();
  const [openInput, setOpenInput] = useState(false);  
  
  const fetchData = () => {
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'text/plain',
        'X-RapidAPI-Key': 'af8c59034cmshb77651f0711720ap1f5705jsndedce9489dc7',
        'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
      },
      body: '"Generate one on your own for testing and send the body with the content-type as text/plain"'
    };
    
    fetch('https://shazam.p.rapidapi.com/songs/v2/detect?timezone=America%2FChicago&locale=en-US', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }

  useEffect(()=>{
    fetchData();
  }, []) 
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
            className='animate-bounce cursor-pointer h-6 w-6 '
            
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