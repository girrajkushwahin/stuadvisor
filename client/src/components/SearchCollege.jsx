import React, { useEffect, useState, useContext } from 'react';
import { useOutletContext } from 'react-router-dom';
import axios from 'axios';
import { SignOut, SiteContext } from '../App';
import SignIn from './SignIn';
import SignUp from './SignUp';
import SearchClg from './SearchClg';
import TopClg from './TopClg';
import SearchClg2 from './SearchClg2';
const API = 'http://127.0.0.1:8000';

const SearchCollege = () => {
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
      const res = await axios.get(url);
      setDataAPI(res.data);
    } catch (err) {
      console.log('Error occured while fetching the data');
    }
  }

  const searchCollegeData = [{ text: 'Search', icon: <i className="i-tag fa-solid fa-house"></i>, click: menuClick }, { text: 'Top Colleges', icon: <i className="i-tag fa-solid fa-address-card"></i>, click: menuClick }, { text: 'Course Wise', icon: <i className="i-tag fa-sharp fa-solid fa-laptop"></i>, click: menuClick }, { text: 'City Wise', icon: <i className="i-tag fa-brands fa-blogger-b"></i>, click: menuClick }, { text: 'State Wise', icon: <i className="i-tag fa-solid fa-magnifying-glass-chart"></i>, click: menuClick }]

  const searchCollegeMenu = [...searchCollegeData, { text: 'Sign in', icon: <i className="i-tag fa-solid fa-door-open"></i>, click: menuClick }, { text: 'Sign up', icon: <i className="i-tag fa-solid fa-user-plus"></i>, click: menuClick }];

  const searchCollegeMenu2 = [...searchCollegeData, { text: 'Sign out', icon: <i className="i-tag fa-solid fa-right-from-bracket"></i>, click: handleSignOut }];

  useEffect(() => {
    document.title = 'Search College';
    if (state) key(searchCollegeMenu2);
    else key(searchCollegeMenu);
    getData(`${API}/clgdata`);
    // eslint-disable-next-line
  }, []);

  const handleSearchCourseWise = (data) => {
    const newData = dataAPI.filter(elem => {
      const course = elem.bycourse.toLowerCase().replaceAll('.', '').replaceAll(' ', '');
      const userData = data.toLowerCase().trimEnd().replaceAll('.', '').replaceAll(' ', '');
      return course === userData;
    })
    getFiltered(newData);
  }

  const handleSearchCityWise = (data) => {
    const newData = dataAPI.filter(elem => {
      const userData = data.toLowerCase().trimEnd().replaceAll(' ', '');
      const status = elem.city.includes(userData);
      return status === true;
    })
    getFiltered(newData);
  }

  const handleSearchStateWise = (data) => {
    let stateName = '';
    if (data.toLowerCase() === 'mp') stateName = 'Madhya Pradesh';
    else if (data.toLowerCase() === 'up') stateName = 'Uttar Pradesh';
    else stateName = data;
    const newData = dataAPI.filter(elem => {
      const state = elem.state.replaceAll(' ', '');
      const userData = stateName.toLowerCase().trimEnd().replaceAll(' ', '');
      const status = state.includes(userData);
      return status === true;
    })
    getFiltered(newData);
  }
  const courseWise = {
    heading: 'Search according to Courses...',
    ph: 'Enter course name...',
    item1: 'B.Tech',
    item2: 'MBBS',
    item3: 'MBA',
    item4: 'B.Sc',
    item5: 'Diploma',
    handleSearch: handleSearchCourseWise,
    filtered: filtered
  }

  const cityWise = {
    heading: 'Search according to Cities...',
    ph: 'Enter city name...',
    item1: 'Mumbai',
    item2: 'Bangalore',
    item3: 'Hyderabad',
    item4: 'Kolkata',
    item5: 'Chennai',
    handleSearch: handleSearchCityWise,
    filtered: filtered
  }

  const stateWise = {
    heading: 'Search according to states...',
    ph: 'Enter state name...',
    item1: 'MP',
    item2: 'UP',
    item3: 'Bihar',
    item4: 'Maharashtra',
    item5: 'Rajasthan',
    handleSearch: handleSearchStateWise,
    filtered: filtered
  }

  return (
    <>
      <div className="main-item main-right">
        {data === 0 ? <SearchClg data={dataAPI} /> : null}
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