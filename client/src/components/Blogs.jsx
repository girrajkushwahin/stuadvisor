import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
import SearchBlog from './SearchBlog';
import Technology from './Technology';
import Studyblog from './Studyblog';
import Newsblog from './Newsblog';
import Trendingblogs from './Trendingblogs';

const Blogs = () => {
  const [state, setState] = useState(0);
  const { key } = useOutletContext();

  const menuClick = id => {
    setState(id);
  }

  const blogsMenu = [{ text: 'Search blog', icon: <i className="i-tag fa-solid fa-house"></i>, click: menuClick }, { text: 'Technology', icon: <i className="i-tag fa-solid fa-address-card"></i>, click: menuClick }, { text: 'study blogs', icon: <i className="i-tag fa-sharp fa-solid fa-laptop"></i>, click: menuClick }, { text: 'news blogs', icon: <i className="i-tag fa-brands fa-blogger-b"></i>, click: menuClick }, { text: 'trending blogs', icon: <i className="i-tag fa-solid fa-magnifying-glass-chart"></i>, click: menuClick }, { text: 'Sign in', icon: <i className="i-tag fa-solid fa-door-open"></i>, click: menuClick }, { text: 'Sign up', icon: <i className="i-tag fa-solid fa-user-plus"></i>, click: menuClick }];

  useEffect(() => {
    key(blogsMenu);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div className="main-item main-right">
        {state === 0 ? <SearchBlog /> : null}
        {state === 1 ? <Technology /> : null}
        {state === 2 ? <Studyblog /> : null}
        {state === 3 ? <Newsblog /> : null}
        {state === 4 ? <Trendingblogs /> : null}
        {state === 5 ? <SignIn /> : null}
        {state === 6 ? <SignUp /> : null}
      </div>
    </>
  )
}

export default Blogs;