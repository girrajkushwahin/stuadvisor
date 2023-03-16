import React, { useEffect, useState, useContext } from 'react';
import { useOutletContext } from 'react-router-dom';
import { SignOut, SiteContext } from '../App';
import SignIn from './SignIn';
import SignUp from './SignUp';
import SearchBlog from './SearchBlog';
import TrendingBlogs from './TrendingBlogs';
import EduBlog from './EduBlog';
import OtherBlog from './OtherBlog';
import DataPosted2 from './DataPosted2';

const Blogs = () => {
  const { state } = useContext(SiteContext);
  const handleSignOut = useContext(SignOut);
  const [data, setData] = useState(0);
  const { key } = useOutletContext();

  const menuClick = id => {
    setData(id);
  }

  const blogsData = [{ text: 'Search', icon: <i className="i-tag fa-solid fa-house"></i>, click: menuClick }, { text: 'Trending Blogs', icon: <i className="i-tag fa-solid fa-address-card"></i>, click: menuClick }, { text: 'Edu Blogs', icon: <i className="i-tag fa-sharp fa-solid fa-laptop"></i>, click: menuClick }, { text: 'Other', icon: <i className="i-tag fa-brands fa-blogger-b"></i>, click: menuClick }, { text: 'Data Posted', icon: <i className="i-tag fa-solid fa-magnifying-glass-chart"></i>, click: menuClick }]

  const blogsMenu = [...blogsData, { text: 'Sign in', icon: <i className="i-tag fa-solid fa-door-open"></i>, click: menuClick }, { text: 'Sign up', icon: <i className="i-tag fa-solid fa-user-plus"></i>, click: menuClick }];

  const blogsMenu2 = [...blogsData, { text: 'Sign out', icon: <i className="i-tag fa-solid fa-right-from-bracket"></i>, click: handleSignOut }];

  useEffect(() => {
    document.title = 'Blogs';
    if (state) key(blogsMenu2);
    else key(blogsMenu);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div className="main-item main-right">
        {data === 0 ? <SearchBlog /> : null}
        {data === 1 ? <TrendingBlogs /> : null}
        {data === 2 ? <EduBlog /> : null}
        {data === 3 ? <OtherBlog /> : null}
        {data === 4 ? <DataPosted2 /> : null}
        {data === 5 ? <SignIn /> : null}
        {data === 6 ? <SignUp /> : null}
      </div>
    </>
  )
}

export default Blogs;