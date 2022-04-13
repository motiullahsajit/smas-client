import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import allData from '../Data/allData.json';
import SeasonsAccordion from '../Acccordion/Accordion';

import './SeriesPage.scss';
import Nav from '../Nav/Nav';

const SeriesPage = () => {
  const { name, type } = useParams();
  const [series, setSeries] = useState({})
  const [lodder, setLodder] = useState(true)

  useEffect(() => {
    // if (type === 'spanish') {
    //   spanishSeries.find((s) => {
    //     if (s.name === name) {
    //       setSeries(s)
    //       setLodder(false)
    //     }
    //   })
    // }
    // if (type === 'german') {
    //   germanSeries.find((s) => {
    //     if (s.name === name) {
    //       setSeries(s)
    //       setLodder(false)
    //     }
    //   })
    // }
    // if (type === 'korean') {
    //   koreanSeries.find((s) => {
    //     if (s.name === name) {
    //       setSeries(s)
    //       setLodder(false)
    //     }
    //   })
    // }
    allData.find((s) => {
      if (s.name === name) {
        setSeries(s)
        setLodder(false)
      }
    })
  }, [series]);

  return (
    <main>
      {
        lodder ? <p>Loading</p> :
          <>
            <Nav />
            <header style={{ backgroundImage: `url('${series?.coverUrl}')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center center' }} className='banner'>
              <div className="banner__contents">
                <h1 className="banner__title">
                  {series?.name}
                </h1>
                <h1 className="banner__description">
                  {series?.overview}
                </h1>
              </div>
              <div className="banner--fadeBottom" />
            </header>
            <div className='seasons_container'>
              <section className='seasons'>
                {
                  series?.seasons.map((s) => <SeasonsAccordion name={s.name} episodes={s.episodes} key={s.name} />)
                }
              </section>
            </div>
          </>
      }
    </main >
  );
};

export default SeriesPage;