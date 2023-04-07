import React, { useEffect, useState, useContext } from 'react';
import { useOutletContext } from 'react-router-dom';
import axios from 'axios';
import { SignOut, SiteContext } from '../App';
import SignIn from './SignIn';
import SignUp from './SignUp';
import SearchBlog from './SearchBlog';
import TrendingBlogs from './TrendingBlogs';
import DataPosted2 from './DataPosted2';
const API = 'http://127.0.0.1:8000';

const Blogs = () => {
  const { state } = useContext(SiteContext);
  const handleSignOut = useContext(SignOut);
  const [data, setData] = useState(0);
  const { key } = useOutletContext();
  const [dataAPI, setDataAPI] = useState([]);
  const [filtered, getFiltered] = useState([]);

  const menuClick = id => {
    setData(id);
  }

  const getData = async url => {
    try {
      // const res = await axios.get(url);
      // setDataAPI(res.data);
      const res = await axios.post(url, { type: 'get' });
      console.log(res.data);
    } catch (err) {
      console.log('Error occured while fetching the data');
    }
  }

  const blogsData = [{ text: 'Search', icon: <i className="i-tag fa-solid fa-house"></i>, click: menuClick }, { text: 'Trending Blogs', icon: <i className="i-tag fa-solid fa-address-card"></i>, click: menuClick }, { text: 'Edu Blogs', icon: <i className="i-tag fa-sharp fa-solid fa-laptop"></i>, click: menuClick }, { text: 'Other', icon: <i className="i-tag fa-brands fa-blogger-b"></i>, click: menuClick }, { text: 'Data Posted', icon: <i className="i-tag fa-solid fa-magnifying-glass-chart"></i>, click: menuClick }]

  const blogsMenu = [...blogsData, { text: 'Sign in', icon: <i className="i-tag fa-solid fa-door-open"></i>, click: menuClick }, { text: 'Sign up', icon: <i className="i-tag fa-solid fa-user-plus"></i>, click: menuClick }];

  const blogsMenu2 = [...blogsData, { text: 'Sign out', icon: <i className="i-tag fa-solid fa-right-from-bracket"></i>, click: handleSignOut }];

  useEffect(() => {
    document.title = 'Blogs';
    if (state) key(blogsMenu2);
    else key(blogsMenu);
    getData(`${API}/blogs`);
    // eslint-disable-next-line
  }, [])

  const handleSearchBlog = data => { }

  const handleSearchEduBlog = data => { }

  const handleSearchOtherBlog = data => { }

  const searchblog = {
    heading: 'Search for blogs...',
    ph: 'search blogs',
    handleSearch: handleSearchBlog,
    filtered
  }

  const edublog = {
    heading: 'Search for edu blogs...',
    ph: 'search edu blogs',
    handleSearch: handleSearchEduBlog,
    filtered
  }

  const otherblog = {
    heading: 'Search other blogs...',
    ph: 'search blogs',
    handleSearch: handleSearchOtherBlog,
    filtered
  }

  return (
    <>
      <div className="main-item main-right">
        {data === 0 ? <SearchBlog {...searchblog} /> : null}
        {data === 1 ? <TrendingBlogs /> : null}
        {data === 2 ? <SearchBlog {...edublog} /> : null}
        {data === 3 ? <SearchBlog {...otherblog} /> : null}
        {data === 4 ? <DataPosted2 /> : null}
        {data === 5 ? <SignIn /> : null}
        {data === 6 ? <SignUp /> : null}
      </div>
    </>
  )
}

export default Blogs;