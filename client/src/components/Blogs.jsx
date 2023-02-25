import React, { useEffect, useState, useContext } from 'react';
import { useOutletContext } from 'react-router-dom';
import { SignOut, SiteContext } from '../App';
import SignIn from './SignIn';
import SignUp from './SignUp';
import SearchBlog from './SearchBlog';
import Technology from './Technology';
import Studyblog from './Studyblog';
import Newsblog from './Newsblog';
import Trendingblogs from './Trendingblogs';

const Blogs = () => {
  const { state } = useContext(SiteContext);
  const handleSignOut = useContext(SignOut);
  const [data, setData] = useState(0);
  const { key } = useOutletContext();

  const menuClick = id => {
    setData(id);
  }

  const blogsData = [{ text: 'Search blog', icon: <i className="i-tag fa-solid fa-house"></i>, click: menuClick }, { text: 'Technology', icon: <i className="i-tag fa-solid fa-address-card"></i>, click: menuClick }, { text: 'study blogs', icon: <i className="i-tag fa-sharp fa-solid fa-laptop"></i>, click: menuClick }, { text: 'news blogs', icon: <i className="i-tag fa-brands fa-blogger-b"></i>, click: menuClick }, { text: 'trending blogs', icon: <i className="i-tag fa-solid fa-magnifying-glass-chart"></i>, click: menuClick }]

  const blogsMenu = [...blogsData, { text: 'Sign in', icon: <i className="i-tag fa-solid fa-door-open"></i>, click: menuClick }, { text: 'Sign up', icon: <i className="i-tag fa-solid fa-user-plus"></i>, click: menuClick }];

  const blogsMenu2 = [...blogsData, { text: 'Sign out', icon: <i className="i-tag fa-solid fa-right-from-bracket"></i>, click: handleSignOut }];

  useEffect(() => {
    if (state) key(blogsMenu2);
    else key(blogsMenu);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div className="main-item main-right">
        {data === 0 ? <SearchBlog /> : null}
        {data === 1 ? <Technology /> : null}
        {data === 2 ? <Studyblog /> : null}
        {data === 3 ? <Newsblog /> : null}
        {data === 4 ? <Trendingblogs /> : null}
        {data === 5 ? <SignIn /> : null}
        {data === 6 ? <SignUp /> : null}
      </div>
    </>
  )
}

export default Blogs;