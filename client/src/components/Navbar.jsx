import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
  <nav>
    <Link to="/"><h1>Home</h1></Link>
    <ul>
      <li><Link to="/places">All Places</Link></li>
      <li><Link to="/new">New Place</Link></li>
      <li><Link to="/random">Random Place</Link></li>

    </ul>
  </nav>
  )
}
