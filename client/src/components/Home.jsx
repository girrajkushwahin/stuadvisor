import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

const Home = () => {
  const [getData] = useOutletContext();
  const sideMenu = {
    item1: 'demo1',
    item2: 'demo2',
    item3: 'demo3',
    item4: 'demo4',
    item5: 'demo5'
  }

  useEffect(() => {
    getData(sideMenu);
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