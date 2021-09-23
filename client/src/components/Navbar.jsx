import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
  <nav className='flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono' >
    <Link to="/" className='pl-8'>Yr Weeknd</Link>
    <Link to="/places" className='p-4'>All Places</Link>
    <Link to="/new" className='p-4'>New Place</Link>
    <Link to="/random" className='p-4'>Random Place</Link>

    
  </nav>
  )
}
