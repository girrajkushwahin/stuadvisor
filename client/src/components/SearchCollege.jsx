import React, { useEffect, useState, useContext } from 'react';
import { useOutletContext } from 'react-router-dom';
import { SignOut, SiteContext } from '../App';
import SignIn from './SignIn';
import SignUp from './SignUp';
import SearchClg from './SearchClg';
import TopClg from './TopClg';
import SearchClg2 from './SearchClg2';

const SearchCollege = () => {
  const { state } = useContext(SiteContext);
  const handleSignOut = useContext(SignOut);
  const [data, setData] = useState(0);
  const { key } = useOutletContext();

  const menuClick = id => {
    setData(id);
  }

  const searchCollegeData = [{ text: 'Search', icon: <i className="i-tag fa-solid fa-house"></i>, click: menuClick }, { text: 'Top Colleges', icon: <i className="i-tag fa-solid fa-address-card"></i>, click: menuClick }, { text: 'Course Wise', icon: <i className="i-tag fa-sharp fa-solid fa-laptop"></i>, click: menuClick }, { text: 'City Wise', icon: <i className="i-tag fa-brands fa-blogger-b"></i>, click: menuClick }, { text: 'State Wise', icon: <i className="i-tag fa-solid fa-magnifying-glass-chart"></i>, click: menuClick }]

  const searchCollegeMenu = [...searchCollegeData, { text: 'Sign in', icon: <i className="i-tag fa-solid fa-door-open"></i>, click: menuClick }, { text: 'Sign up', icon: <i className="i-tag fa-solid fa-user-plus"></i>, click: menuClick }];

  const searchCollegeMenu2 = [...searchCollegeData, { text: 'Sign out', icon: <i className="i-tag fa-solid fa-right-from-bracket"></i>, click: handleSignOut }];

  useEffect(() => {
    document.title = 'Search College';
    if (state) key(searchCollegeMenu2);
    else key(searchCollegeMenu);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleCourseWise = data => { }

  const handleCityWise = data => { }

  const handleStateWise = data => { }

  const courseWise = {
    heading: 'Search according to Courses...',
    ph: 'Enter course name...',
    item1: 'B.tech',
    item2: 'M.tech',
    item3: 'MBA',
    item4: 'Bsc Computers',
    item5: 'Nursing',
    method: handleCourseWise
  }

  const cityWise = {
    heading: 'Search according to Cities...',
    ph: 'Enter city name...',
    item1: 'Mumbai',
    item2: 'Banglore',
    item3: 'Hyderabad',
    item4: 'Kolkata',
    item5: 'Chennai',
    method: handleCityWise
  }

  const stateWise = {
    heading: 'Search according to states...',
    ph: 'Enter state name...',
    item1: 'MP',
    item2: 'UP',
    item3: 'Bihar',
    item4: 'Maharashtra',
    item5: 'Rajasthan',
    method: handleStateWise
  }

  return (
    <>
      <div className="main-item main-right">
        {data === 0 ? <SearchClg /> : null}
        {data === 1 ? <TopClg /> : null}
        {data === 2 ? <SearchClg2 {...courseWise} /> : null}
        {data === 3 ? <SearchClg2 {...cityWise} /> : null}
        {data === 4 ? <SearchClg2 {...stateWise} /> : null}
        {data === 5 ? <SignIn /> : null}
        {data === 6 ? <SignUp /> : null}
      </div>
    </>
  )
}

export default SearchCollege;