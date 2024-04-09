import React, { useContext } from 'react'
import { AppContext, useGlobalContext } from '../contex';
import { NavLink } from 'react-router-dom';
import Navbar from'../pages/Navbar'
import '../card.css'
const Watchlist = () => {
  const {movie,isloading,SetSearch,fmovie,fSetMovie,fetchwatchlist}=useGlobalContext();
  SetSearch('search-container');
  return ( 
   <>
   <Navbar key={"watchlist"}></Navbar>
   <div className='items'>
   {fmovie.map((curr)=>
   {
    if(curr.Title.length>27) curr.Title=curr.Title.substring(0,27)+"...";
    return(
      <div key={curr.Title}>
      <NavLink to={`http:/localhost:3000/singlepage/${curr.imdbID}`} key={curr.imdbID} className={"card"}>
      <div className="nnn" >
          <div className='poster1'>
          <img src={curr.Poster} id="image" className="thumbnail"/>
          </div>
          <div className="name"><h3 className="title">{curr.Title}</h3></div>
      </div>
      </NavLink>
      </div>
    );
   })}
   </div>
   </>
  )
}

export default Watchlist;