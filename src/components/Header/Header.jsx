import React from 'react'
import logoIMage from "../../assets/logoimage.jpg"
import { Link } from 'react-router-dom'
import "./Header.css"
function Header() {
  return (
    <div>
        <div className="containerHeader">
            <div className="logo">
                <div className="imagelogo">
                    <img src={logoIMage} alt="an image of the logo" />
                </div>
                <div className="logoname">
                    <h2>zaph tours</h2>
                </div>
            </div>
            <div className="links">
                <ul className='navlist'>
                    <li ><Link to="/Home" className='navlinks'>Home</Link></li>
                    <li><Link to="/Destination" className='navlinks'>Destination</Link></li>
                    <li><Link to="/Trips" className='navlinks'>Trips</Link></li>
                    <li><Link to="/Contacts" className='navlinks'>Contacts</Link></li>
                </ul>
            </div>
        </div>
     
    </div>
  )
}

export default Header
