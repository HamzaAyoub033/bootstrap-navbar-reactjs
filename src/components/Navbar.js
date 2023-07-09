import React from 'react'
import "../Styles/Navbar.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";


function Navbar() {
  return (
 
    <nav className="navbar navbar-dark bg-dark navcss">

    <ul className="nav justify-content-center">
    <li className="nav-item">
      <a className="nav-link active" href="/">Home</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/experience">Experience</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/projects">Projects</a>
    </li>
   
  </ul>
  </nav>

  )
}

export default Navbar
