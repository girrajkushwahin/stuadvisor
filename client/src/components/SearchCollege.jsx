import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

const SearchCollege = () => {
  const {key} = useOutletContext();

  const sideMenu = [{ text: 'test1', icon: <i className="i-tag fa-solid fa-house"></i> }, { text: 'test2', icon: <i className="i-tag fa-solid fa-address-card"></i> }, { text: 'test3', icon: <i className="i-tag fa-sharp fa-solid fa-laptop"></i> }, { text: 'test4', icon: <i className="i-tag fa-brands fa-blogger-b"></i> }, { text: 'test5', icon: <i className="i-tag fa-solid fa-magnifying-glass-chart"></i> }];

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