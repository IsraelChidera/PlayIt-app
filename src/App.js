import './App.css';
import LandingPage from './pages/LandingPage';
import { Route, Routes } from 'react-router-dom';
import LyricsPage from './pages/LyricsPage';
import React, {useState, createContext} from 'react';
import {MusicProvider} from './MusicContext';

function App() {
  
  const UserContext = createContext("datas");
  // const [data, setData] = useState("datasss");

  return (   
    // <MusicProvider>
      <Routes>
        <Route exact path="/" element={< LandingPage />}/>
        <Route exact path="/lyrics" element={< LyricsPage />}/>
      </Routes>
    // </MusicProvider>
  );
}

export default App;
