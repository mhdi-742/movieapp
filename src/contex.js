import React, { useEffect, useState, useContext } from "react";
const AppContext=React.createContext();
export const ApiUrl=`http://www.omdbapi.com/?apikey=f172c965&`;
const AppProvider =({children})=>{
    const[movie,SetMovie]=useState([]);
    const[fmovie,fSetMovie]=useState([{Title: 'Batman Begins', Year: '2005', imdbID: 'tt0372784', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},
    {Title: 'The Batman', Year: '2022', imdbID: 'tt1877830', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BM2MyNTAwZG…mQyZDEwXkEyXkFqcGdeQXVyNDc2NTg3NzA@._V1_SX300.jpg'},
    {Title: 'Batman v Superman: Dawn of ...', Year: '2016', imdbID: 'tt2975590', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BYThjYzcyYz…WJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'}]);
    const[isloading,Setloading]=useState(true);
    const[isError,SetError]=useState({show:false,msg:""});
    const[query,SetQuery]=useState('batman');
    const[search,SetSearch]=useState('search-container');
    const[logedin,SetLogin]=useState('loged-out');
    //fetch movies
    const fetchwatchlist=async()=>{
       //to do api calls
       fSetMovie(
        [{Title: 'Batman Begins', Year: '2005', imdbID: 'tt0372784', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2…zQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'},
        {Title: 'The Batman', Year: '2022', imdbID: 'tt1877830', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BM2MyNTAwZG…mQyZDEwXkEyXkFqcGdeQXVyNDc2NTg3NzA@._V1_SX300.jpg'},
        {Title: 'Batman v Superman: Dawn of ...', Year: '2016', imdbID: 'tt2975590', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BYThjYzcyYz…WJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'}])
    }
    const getMovies= async(url)=>
    {
      Setloading(true);
       try{
        const res= await fetch(url);
        const data= await res.json();
       // console.log(data);
        if(data.Response==='True')
        {
        // console.log("working");
        Setloading(false);
        SetMovie(data.Search);
        SetError({show:false,msg:data.Error});
        }
        else{
          SetError({show:true,msg:data.Error});
        }
       }catch(error){
        console.log(error);
       }
    }
    useEffect(()=>
    {
      let time=setTimeout(()=>{
      getMovies(`${ApiUrl}s=${query}`);
      },1000);
      return ()=>clearTimeout(time);
    },[query]) 
    return <AppContext.Provider value={{movie ,isError ,isloading,SetQuery,query,search,SetSearch,logedin,SetLogin,fSetMovie,fmovie,fetchwatchlist}}>{children}</AppContext.Provider>
};
const useGlobalContext = () => {
    return useContext(AppContext);
  };
export{ AppContext,AppProvider,useGlobalContext};