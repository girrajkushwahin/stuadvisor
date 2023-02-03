import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

const Academics = () => {
  const {key} = useOutletContext();
  
  const sideMenu = [{ text: 'A1', icon: <i className="i-tag fa-solid fa-house"></i> }, { text: 'A2', icon: <i className="i-tag fa-solid fa-address-card"></i> }, { text: 'A3', icon: <i className="i-tag fa-sharp fa-solid fa-laptop"></i> }, { text: 'A4', icon: <i className="i-tag fa-brands fa-blogger-b"></i> }, { text: 'A5', icon: <i className="i-tag fa-solid fa-magnifying-glass-chart"></i> }];

  useEffect(() => {
    key(sideMenu);
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