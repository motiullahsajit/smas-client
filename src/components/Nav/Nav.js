import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import allData from '../Data/allData.json'
import AccountMenu from './Menu';
import Row from '../Row/Row';

import './Nav.scss';

function Nav() {
  const navigate = useNavigate();
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

    const resultsData = allData.filter((s) => s.name.toLowerCase().includes(value.toLowerCase()));

    if (resultsData.length > 0) {
      setResults(resultsData)
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

  const navigateTo = () => {
    navigate(`/`)
  }

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, [])

  return (
    <nav className={`nav ${show && 'nav__black'}`}>
      <div className="nav__contents">
        <h2 onClick={navigateTo}>SMAS</h2>
        <div className='searchbox'>
          <input onClick={() => {
            setShowBox(true)
            setLodder(true)
          }} onChange={(e) => onChangeHandler(e)} type="text" placeholder="Search ...." />
          <AccountMenu />
        </div>
      </div>
      {
        showBox &&
        <div className='searchresults'>
          <div className='search_cross'>
            <button onClick={handleClear}>x</button>
          </div>
          {lodder && <p>Search the exact name...</p>}
          {showNoResults && <p>No Results Found</p>}
          {showResults && <Row title='Results Found' data={results} />}
        </div>
      }
    </nav>
  )
}

export default Nav
