import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
<nav id='nav' class="navbar navbar-expand-lg navbar-light  fixed-top shadow-sm">
        <div class="container">
            <a class="navbar-brand fw-bold" href="#home">Minde Srikanth</a>
            <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#home">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#skills">Skills</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#projects">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    </div>
  )
}

export default Navbar