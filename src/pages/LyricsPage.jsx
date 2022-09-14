import React, { useState, useEffect, useContext, createContext } from 'react';
import line from '../assets/line.png';
import windy from '../assets/windy.png';
import lyricshero from '../assets/lyricshero.png';
import logo from '../assets/logo.png';
import {NavLink} from 'react-router-dom';
const LyricsPage = () => {   

  const [artist, setArtist] = useState("");
  const [song, setSong] = useState("");
  const [lyrics, setLyrics] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log(artist, song);

  const handleSubmit = (e) => {
    e.preventDefault();
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'af8c59034cmshb77651f0711720ap1f5705jsndedce9489dc7',
        'X-RapidAPI-Host': 'lyrics-plus.p.rapidapi.com'
      }
    };
    setLoading(true);
    // https://lyrics-plus.p.rapidapi.com/lyrics/${song}/${artist}
    fetch(`https://lyrics-plus.p.rapidapi.com/lyrics/${song}/${artist}`, options)
      .then(response => response.json())
      .then(response => {
        console.log(response); 
        setLyrics(response); 
        setLoading(false);
      })
      .catch(err => console.error(err));
  }

  return (
    <section className="lyrics text-white relative">
      <div className="lines z-10">
        <img 
          src={line}
          alt="line across the bg"
        />
      </div>

      <div className="absolute z-40 top-14 left-24">
        <NavLink to="/">
          <img 
            src={logo} 
            alt="logo"
            className="w-9 h-9 "
          />
        </NavLink>
      </div>

      <form className="z-40 text-black flex justify-beween absolute right-8 top-0 space-x-4">
        <div>            
          <input 
            type="text" 
            name="artist" 
            placeholder="Artist.."
            onChange={(e)=>setArtist(e.target.value)}
          />
        </div>

        <div className="">            
          <input 
            type="text"  
            name="song" 
            placeholder="Song.."
            onChange={(e)=>setSong(e.target.value)}
          />
        </div>
      
        <div>
          <input 
            type="submit" 
            value={loading?  "Searching . . .": "Search Lyrics"}
            onClick={handleSubmit}
          />
        </div>
      </form>
       
      <div className="lyricsContent flex justify-around items-center">
        <div>
          <img
            src={lyricshero}
            alt="a young dark lady looking elsewhere"
            className=""
          />  
        </div>
        
        <div>
          {/* {
            lyrics?.map((lyric)=>{
              (
                <div key={lyric.name}>
                  <p>
                    {lyric.name}
                  </p>

                  <p>
                    {lyric.lyrics}
                  </p>
                </div>
              )
            })
          } */}
          {
            loading?
            (
              <h1 className="text-8xl font-bold">
                LYRICS GENERATOR
              </h1>
            )
            :
            (<h1>ij</h1>)            
          }
        </div>
      </div>
      
      <div className="spiral">
        <img 
          src={windy}
          alt="a spiral shape"  
        />  
      </div>

    </section>
  )
}

export default LyricsPage