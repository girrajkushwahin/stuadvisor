import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

const Blogs = () => {
  const [getData] = useOutletContext();

  const sideMenu = {
    item1: 'b1',
    item2: 'b2',
    item3: 'b3',
    item4: 'b4',
    item5: 'b5'
  }

  useEffect(() => {
    getData(sideMenu);
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