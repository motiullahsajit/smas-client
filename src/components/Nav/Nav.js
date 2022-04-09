import React, { useEffect, useState } from 'react'
import './Nav.scss';

function Nav() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, [])

  return (
    <nav className={`nav ${show && 'nav__black'}`}>
      {/* <div className="nav__contents"> */}
      <h2 style={{ color: 'red' }}>SMAS</h2>
      <img className='nav__avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
      {/* </div> */}
    </nav>
  )
}

export default Nav
