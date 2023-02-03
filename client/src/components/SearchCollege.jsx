import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

const SearchCollege = () => {
  const [getData] = useOutletContext();
  const sideMenu = {
    item1: 'test1',
    item2: 'test2',
    item3: 'test3',
    item4: 'test4',
    item5: 'test5'
  }

  useEffect(() => {
    getData(sideMenu);
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