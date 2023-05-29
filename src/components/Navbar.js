import React from 'react'
import logo from "../images/logo.svg"
import { pageLinks,socialLinks } from '../data';

const Navbar = () => {
  return (
    <>
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <a href='#home'><img src={logo} className="nav-logo" alt="backroads" /></a>
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <ul className="nav-links" id="nav-links">
            {
                pageLinks.map((link)=>{
                    return(
                        <li key={link.id}>
                            <a href={link.href} className="nav-link">{link.text}</a>
                        </li>
                    );
                })
            }

        </ul>

        <ul className="nav-icons">
            {
                socialLinks.map((value)=>{
                    return(
                        <li key={value.id}>
                            <a href={value.href} target="_blank" class="nav-icon" rel='noreferrer'>
                                <i className={value.icon}></i>
                            </a>
                        </li>
                    );
                })
            }
        </ul>
      </div>
    </nav>
    </>
  );
}
export default Navbar;