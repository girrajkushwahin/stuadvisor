import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { blogsMenu } from './sideMenu';

const Blogs = () => {
  const {key} = useOutletContext();

  useEffect(() => {
    key(blogsMenu);
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