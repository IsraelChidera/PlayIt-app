import React from 'react'

const MusicFooter = () => {
  return (
    <section className='flex justify-between items-center text-white p-4'>
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

        <div>
          Song Select
        </div>
    </section>
  )
}

export default MusicFooter