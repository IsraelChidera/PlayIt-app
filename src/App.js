import './App.css';
import LandingPage from './pages/LandingPage';
import { Route, Routes } from 'react-router-dom';
import LyricsPage from './pages/LyricsPage';
import React, {useState, useEffect} from 'react';
import {MusicProvider} from './MusicContext';
import logo from './assets/logo.png';

function App() {
  
  const [loader, setLoader] = useState(false);
  useEffect(()=>{
    setTimeout(() => {
      console.log("Delayed for 3 second.");
      setLoader(true);
    }, 5000)
  }, [])
  return (   
    
    <>
    {
      !loader?
      (        
        <div className="loader">
          <div className="flex justify-center items-center h-screen">
            <img 
              src={logo}
              alt="logo use in loading component"
              className="animate-bounce"
            />  
          </div>
        </div>
      )
      :
      (
      <Routes>
        <Route exact path="/" element={< LandingPage />}/>
        <Route exact path="/lyrics" element={< LyricsPage />}/>
      </Routes>
    
      )
    }
    
    </>
      
    
  );
}

export default App;
