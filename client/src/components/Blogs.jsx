import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

const Blogs = () => {
  const {key} = useOutletContext();

  const sideMenu = [{ text: 'B1', icon: <i className="i-tag fa-solid fa-house"></i> }, { text: 'B2', icon: <i className="i-tag fa-solid fa-address-card"></i> }, { text: 'B3', icon: <i className="i-tag fa-sharp fa-solid fa-laptop"></i> }, { text: 'B4', icon: <i className="i-tag fa-brands fa-blogger-b"></i> }, { text: 'B5', icon: <i className="i-tag fa-solid fa-magnifying-glass-chart"></i> }];

  useEffect(() => {
    key(sideMenu);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div className="main-item main-right">
        <h1>Blogs page</h1>
      </div>
    </>
  )
}

export default Blogs;