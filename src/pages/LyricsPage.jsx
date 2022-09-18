import React, { useState, useEffect, useContext, createContext } from 'react';
import line from '../assets/line.png';
import windy from '../assets/windy.png';
import lyricshero from '../assets/lyricshero.png';
import logo from '../assets/logo.png';
import cancel from '../assets/cancel.png';
import searchbtn from '../assets/searchbtn.png';
import {NavLink} from 'react-router-dom';

const LyricsPage = () => {   

  const [artist, setArtist] = useState("");
  const [song, setSong] = useState("");
  const [lyrics, setLyrics] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [openMobileLyrics, setOpenMobileLyrics] = useState(false);
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

  const handleLyricsSearch = () => {
    setOpenMobileLyrics(!openMobileLyrics);
    console.log("yes")
  }

  return (
    <section className="lyrics text-white relative h-screen">            

      {
        modal && lyrics.name?
        (
          <section 
            className="transition ease-in-out delay-150 modal absolute 
            top-60 right-o z-100 bg-white h-auto
              w-full text-black rounded-3xl p-6"
          >
            <div className="flex animate-bounce justify-end cursor-pointer">
              <img 
                src={cancel}
                alt="cancel icon"
                onClick={()=>setModal(false)}
              />
            </div>

            <div className="">
              <div>
                {
                  (
                    <>
                      <h1 className="text-6xl font-bold mt-6 mb-4">
                        {lyrics?.name}
                      </h1>

                      <p className="text-2xl w-3/4">                        
                        {
                          lyrics.lyrics && lyrics.lyrics.split("\n").map((lyric)=>(
                            <p className="text-2xl w-3/4">
                              {lyric}
                            </p>
                          )) 
                        }
                        {lyrics?.lyrics}
                      </p>                                          
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

      
      

      <div className="lines z-0">
        <img 
          src={line}
          alt="line across the bg"
        />
      </div>

      <div className=' absolute top-0 left-0 w-full md:block pt-10 px-16 lyrics-nav flex justify-between items-center z-30'>
        <nav className="block">
          <NavLink to="/">
            <img 
              src={logo} 
              alt="logo"
              className="w-9 h-9 "
            />
          </NavLink>
        </nav>

        <div className='md:hidden block '>
          <button 
            className="w-6 h-6"
            onClick={handleLyricsSearch}
          >
            <img
              src={searchbtn}
              alt="search icon"
            />
          </button>
        </div>
      </div>

      <form className="md:flex hidden text-sm z-40 text-black  justify-beween absolute right-8 top-6 space-x-4">
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
        md:flex justify-center items-center  z-10              
        mx-auto w-4/5  md:py-0 py-24 h-full"
      >

        {
          openMobileLyrics?
          (
            <div className="mt-20 mb-10 md:hidden">

            <form className="block text-sm z-40 text-black  ">
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
            </div> 
          )
          :
          " "
        }
        

        <div className=" md:grid grid-cols-2 gap-4">

          <div className="flex lyricshero justify-center items-center h-full">
            <img
              src={lyricshero}
              alt="a young dark lady looking elsewhere"          
            />  
          </div>
          
          <div className="md:pt-0 pt-6 flex justify-center lyricscontent items-center ">        
            <h1 className="text-5xl font-bold text-center">
              <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
                <span className="relative pl-4 text-white">LYRICS</span>
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