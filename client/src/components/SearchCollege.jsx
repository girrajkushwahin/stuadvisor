import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { searchCollegeMenu } from './sideMenu';

const SearchCollege = () => {
  const {key} = useOutletContext();

  useEffect(() => {
    key(searchCollegeMenu);
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