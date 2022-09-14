import {createContext, useState, useEffect} from 'react';

const MusicContext = createContext();

export function MusicProvider({children}){
    // const [lyrics, setLyrics] = useState([]);
    // const [query, setQuery] = useState([]);
    // const [inputs, setInputs] = useState({});  
    // console.log(inputs);
    // const fetchData = async() => {
    //     const options = {
    //         method: 'GET',
    //         headers: {
    //           'X-RapidAPI-Key': 'af8c59034cmshb77651f0711720ap1f5705jsndedce9489dc7',
    //           'X-RapidAPI-Host': 'lyrics-plus.p.rapidapi.com'
    //         }
    //       };
      
    //       await fetch(`https://lyrics-plus.p.rapidapi.com/lyrics/${inputs.song}/${inputs.artist}`, options)
    //         .then(response => response.json())
    //         .then(response => {
    //           console.log(response);
    //           setLyrics(response);
              
    //         })
    //         .catch(err => console.error(err));
    // }

    // fetchData();
    // useEffect(()=>{
    //     fetchData();
    // }, [lyrics])
    
    return (
        <MusicContext.Provider value="data">
            {children}
        </MusicContext.Provider>
    )
}
export default MusicContext;