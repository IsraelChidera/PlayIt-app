import React from 'react';
import playbtn from '../assets/playbtn.png';

const MusicFooter = () => {
  const handlePlayBtn = () =>{
    alert("Please login with spotify to start streaming songs");
  }
  return (
    <section className='flex justify-around items-center text-white p-4'>
        <div>
          <p className='playingnow'>
            PLAYING NOW
          </p>

          <p className='artist'>
            ARTIST
          </p>

          <p className='songname'>
            SONG NAME
          </p>
        </div>

        <button 
          onClick={handlePlayBtn} 
          className="cursor-pointer"
        >
          <img src={playbtn} alt="play btn" className="h-20"/>
        </button>
    </section>
  )
}

export default MusicFooter