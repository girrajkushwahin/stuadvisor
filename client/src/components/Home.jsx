import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { homeMenu } from './sideMenu';

const Home = () => {
  const { key } = useOutletContext();

  useEffect(() => {
    key(homeMenu);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div className="main-item main-right">
        <h1>Home page</h1>
      </div>
    </>
  )
}

export default Home;