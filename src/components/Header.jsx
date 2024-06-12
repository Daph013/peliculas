import React from 'react'
import { Link } from 'react-router-dom'
import FiltrosTv from './FiltrosTv'
import FiltrosPel from './FiltrosPel'

const Header = () => {
  return (
    
    <div className="navbar bg-primary font-bold text-primary-content">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li><Link to="/inicio">Inicio</Link></li>
          <li>
            <a>Generos</a>
            <ul className="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li>
          </ul>
      </div>
      <div className='container'>
      <Link to ="/inicio" className="btn btn-ghost text-xl"><img className=' pr-1 my-auto' width={200} src="../src/assets/logo.png" alt="" /></Link>
      </div>
    </div>
    <div className="navbar-center  hidden lg:flex">
      <ul className="menu menu-horizontal text-md px-1">
      <li><Link to="/inicio">Inicio</Link></li>
      <li><Link to="/tendenciastv">Tendencias TV</Link></li>
      <li><Link to="/tendenciaspel">Tendencias Peliculas</Link></li>
        <li>
          <details>
            <summary>Generos TV</summary>
            <ul className="p-2 z-50">
             <FiltrosTv/>
            </ul>
            
          </details>
        </li>
        <li>
          <details>
            <summary>Generos Cine</summary>
            <ul className="p-2 z-50">
             <FiltrosPel/>
            </ul>
            
          </details>
        </li>
        </ul>
    </div>
    <div className="navbar-end">
    <button className="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
  </div>
  )
}

export default Header