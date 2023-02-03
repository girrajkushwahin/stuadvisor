import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

const Academics = () => {
  const [getData] = useOutletContext();
  
  const sideMenu = {
    item1: 'a1',
    item2: 'a2',
    item3: 'a3',
    item4: 'a4',
    item5: 'a5'
  }

  useEffect(() => {
    getData(sideMenu);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div className="main-item main-right">
        <h1>Academics page</h1>
      </div>
    </>
  )
}

export default Academics;