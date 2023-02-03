import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

const SearchCollege = () => {
  const {key} = useOutletContext();

  const sideMenu = [{ text: 'Search', icon: <i className="i-tag fa-solid fa-house"></i> }, { text: 'btech', icon: <i className="i-tag fa-solid fa-address-card"></i> }, { text: 'mtech', icon: <i className="i-tag fa-sharp fa-solid fa-laptop"></i> }, { text: 'b pharma', icon: <i className="i-tag fa-brands fa-blogger-b"></i> }, { text: 'phd', icon: <i className="i-tag fa-solid fa-magnifying-glass-chart"></i> }];

  useEffect(() => {
    key(sideMenu);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div className="main-item main-right">
        <h1>SearchCollege page</h1>
      </div>
    </>
  )
}

export default SearchCollege;