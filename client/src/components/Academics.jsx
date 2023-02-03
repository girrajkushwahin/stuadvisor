import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { academicsMenu } from './sideMenu';

const Academics = () => {
  const {key} = useOutletContext();

  useEffect(() => {
    key(academicsMenu);
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