import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
  <nav className='flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono' >
    <Link to="/" className='pl-8'>Yr Weeknd</Link>
    <Link to="/places">All Places</Link>
    <Link to="/new">New Place</Link>
    <Link to="/random">Random Place</Link>

    
  </nav>
  )
}
