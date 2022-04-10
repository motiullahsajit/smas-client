import React, { useEffect, useState } from 'react';

import Row from '../Row/Row';
import allData from '../Data/allData.json'
import './Nav.scss';

function Nav() {
  const [show, handleShow] = useState(false);
  const [results, setResults] = useState({});
  const [showBox, setShowBox] = useState(false);
  const [lodder, setLodder] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [showNoResults, setShowNoResults] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  }

  const onChangeHandler = (e) => {
    setShowBox(true)
    setLodder(true)
    const value = e.target.value;

    const result = allData.filter((s) => s.name.toLowerCase() === value.toLowerCase())
    if (result.length > 0) {
      setResults(result[0])
      setShowResults(true)
      setLodder(false)
      setShowNoResults(false)
    }
    else {
      setLodder(false)
      setShowResults(false)
      setShowNoResults(true)
    }
  }


  const handleClear = () => {
    setShowBox(false)
    setShowResults(false)
    setShowNoResults(false)
    setResults({})
  }

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, [])


  return (
    <nav className={`nav ${show && 'nav__black'}`}>
      <div className="nav__contents">
        <h2>SMAS</h2>
        <div className='searchbox'>
          <input onClick={() => setShowBox(true)} onChange={(e) => onChangeHandler(e)} type="text" placeholder="Search ...." />
          <img className='nav__avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
        </div>
      </div>
      {
        showBox && <div className='searchresults'>
          <button onClick={handleClear}>x</button>
          {lodder && <p>Loading</p>}
          {showNoResults && <p>No Results Found</p>}
          {showResults && <Row title='Results Found' data={results} type={"search"} />}
        </div>
      }
    </nav>
  )
}

export default Nav
