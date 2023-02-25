import React, { useReducer, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { reducer, initialState } from './reducer/Reducer';
import axios from 'axios';
import Template from './components/Template';
import Home from './components/Home';
import SearchCollege from './components/SearchCollege';
import Academics from './components/Academics';
import Blogs from './components/Blogs';
import UserAccount from './components/UserAccount';
import Error from './components/Error';
const API = 'http://127.0.0.1:8000';
export const SiteContext = React.createContext();
export const SignOut = React.createContext();

let path;
const getPath = data => {
  path = data;
}

const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<Template data={getPath} />}>
        <Route index element={<Home />} />
        <Route path='searchcolleges' element={<SearchCollege />} />
        <Route path='academics' element={<Academics />} />
        <Route path='blogs' element={<Blogs />} />
        <Route path='myaccount' element={<UserAccount />} />
      </Route>
      <Route path='*' element={<Error />} />
    </Routes>
  )
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleSignOut = () => {
    localStorage.removeItem('jwtoken');
    dispatch({ type: 'SWITCH', payload: false });
    if (pathname === '/') {
      navigate('/searchcolleges', { replace: true });
      path('Search College');
    }
    else {
      navigate('/', { replace: true });
      path('Home');
    }
  }

  const isAuthenticate = async url => {
    const token = localStorage.getItem('jwtoken');
    try {
      if (token != null) {
        const res = await axios.post(url, { token });
        if (res) dispatch({ type: 'SWITCH', payload: true });
      }
    } catch (err) {
      console.log(err.response.data);
    }
  }

  useEffect(() => {
    isAuthenticate(`${API}/confidential`);
  })

  return (
    <>
      <SiteContext.Provider value={{ state, dispatch }}>
        <SignOut.Provider value={handleSignOut}>
          <Routing />
        </SignOut.Provider>
      </SiteContext.Provider>
    </>
  )
}

export default App;