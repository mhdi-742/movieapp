import React from 'react'
import { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom'
import './Navbar.css'
import { useGlobalContext } from '../contex'
export default function Navbar() {
  const {query,SetQuery,isError,search,SetSearch}=useGlobalContext();
  return (
    <div>
    <div className="topnav">
     <div>
    <NavLink className="active" to="/">The Movie Site</NavLink>
    </div>
    <div className={search}>
      <form role="search" id="form" onSubmit={(e)=>e.preventDefault()}>
        <input type="search" id="query" name="q" placeholder={query} onChange={(e)=>
        {
          SetQuery(e.target.value);
        }}></input>
      </form>
      <div>
        <p className='error'>{isError.show && isError.msg}</p>
      </div>
    </div>
    <div className='sign'>
    <NavLink className="signin" to="/watchlist">watchlist</NavLink>
    </div>
    <div className='sign'>
    <NavLink className="signin" to="/signin">Sign In</NavLink>
    </div>
  </div>
  </div>
  )
}



