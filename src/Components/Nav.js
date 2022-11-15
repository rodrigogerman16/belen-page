import React from "react";
import { Link } from "react-router-dom";

const Nav = () =>{
    return(
        <nav className='Navbar'>
          <div className='Belen-title'>
          <Link to="/">
            <img src="/favicon.ico" alt="belenicon"/>          
          </Link>
          </div>
          <div className='Navbar-ul'>
            <ul>
              <Link to="/">                
                <li>About Me</li>
              </Link>
              <Link to="/courses">                
                <li>Courses</li>
              </Link>
              <Link to="gallery">
              <li>Gallery</li>
              </Link>
              <Link to="references">
              <li>References</li>
              </Link>
              <Link to="contact">
              <li>Contact</li>
              </Link>
              
              
            </ul>
          </div>
        <div className='Hamburguer-nav'>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </div>
      </nav>
    )
}

export default Nav