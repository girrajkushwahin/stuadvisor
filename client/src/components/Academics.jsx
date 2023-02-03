import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

const Academics = () => {
  const {key} = useOutletContext();
  
  const sideMenu = [{ text: 'Homework', icon: <i className="i-tag fa-solid fa-house"></i> }, { text: 'Assignments', icon: <i className="i-tag fa-solid fa-address-card"></i> }, { text: 'Previous year papers', icon: <i className="i-tag fa-sharp fa-solid fa-laptop"></i> }, { text: 'practise sets', icon: <i className="i-tag fa-brands fa-blogger-b"></i> }, { text: 'important questions', icon: <i className="i-tag fa-solid fa-magnifying-glass-chart"></i> }];

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