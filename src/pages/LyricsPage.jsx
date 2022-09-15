import React, { useState, useEffect, useContext, createContext } from 'react';
import line from '../assets/line.png';
import windy from '../assets/windy.png';
import lyricshero from '../assets/lyricshero.png';
import logo from '../assets/logo.png';
import cancel from '../assets/cancel.png';
import {NavLink} from 'react-router-dom';

const LyricsPage = () => {   

  const [artist, setArtist] = useState("");
  const [song, setSong] = useState("");
  const [lyrics, setLyrics] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);

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
    setModal(false);
    console.log(lyrics);
    fetch(`https://lyrics-plus.p.rapidapi.com/lyrics/${song}/${artist}`, options)
      .then(response => response.json())
      .then(response => {
        console.log(response); 
        setLyrics(response); 
        setLoading(false);
        setModal(true);
        console.log(lyrics);
      })
      .catch(err => {
        console.error(err);        
      });
  }

  return (
    <section className="lyrics text-white relative">

      {
        modal && lyrics.name?
        (
          <section 
            className="modal absolute top-60 right-o z-100 bg-white
              w-full text-black h-full rounded-2xl p-4"
          >
            <div className="flex justify-end cursor-pointer">
              <img 
                src={cancel}
                alt="cancel icon"
                onClick={()=>setModal(false)}
              />
            </div>

            <div className="">
              <div>

                {/* {
                  lyrics?.map((lyric)=>(
                    <div key={lyric.name}>
                      <h1 className="text-3xl mb-4">
                        Song Name: {lyric.name}
                      </h1>

                      <p className="text-sm">Song lyrics</p>

                    </div>
                  ))
                } */}
                {
                  (
                    <>
                      <h1 className="text-4xl font-bold mb-4">
                        Song Name: {lyrics?.name}
                      </h1>
                      <p className="text-sm">{lyrics?.lyrics}</p>
                      <p className="text-sm">{lyrics?.message}</p>
                    </>
                  )
                }

              </div>              
            </div>
          </section>
        )
        :
        " "
      }
      

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

      <form className="z-40 text-black flex justify-beween absolute right-8 top-6 space-x-4">
        <div className="input-container">            
          <input 
            type="text" 
            name="artist"             
            onChange={(e)=>setArtist(e.target.value)}  
            required         
          />
          <label>
            Artist
          </label>
        </div>

        <div className="input-container">         
          <input 
            type="text"  
            name="song"             
            onChange={(e)=>setSong(e.target.value)}  
            required        
          />
           <label>
            Song
          </label>
        </div>
      
        <div>
          <input 
            type="submit" 
            value={loading?  
              "Searching . . ."
              : 
              "Search Lyrics"
            }
            onClick={handleSubmit}
            className="cursor-pointer bg-violet-500 hover:bg-violet-600 text-white
              px-4 py-2 rounded-md text-sm
             active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
          />
        </div>
      </form>
       
      <section className="lyricsContent 
        flex justify-center items-center                
        mx-auto w-4/5 h-full"
      >
        <div className="grid grid-cols-2 gap-4">

          <div className="flex justify-center items-center h-full">
            <img
              src={lyricshero}
              alt="a young dark lady looking elsewhere"          
            />  
          </div>
          
          <div className="flex justify-center items-center ">        
            <h1 className="text-8xl font-bold">
              <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
                <span class="relative text-white">LYRICS</span>
              </span>
                GENERATOR
            </h1>
          </div>

        </div>

      </section>
      
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