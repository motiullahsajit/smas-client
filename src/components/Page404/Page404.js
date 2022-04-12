import React from 'react';
import { useNavigate } from "react-router-dom";
import './Page404.scss';

const Page404 = () => {
  const navigate = useNavigate();
  const navigateTo = (route) => {
    navigate(`/${route}`)
  }
  return (
    <main className='page_404_bg'>
      <h3 onClick={() => navigateTo('')}>BACK TO HOME</h3>
    </main>
  );
};

export default Page404;