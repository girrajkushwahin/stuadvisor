import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Template from './components/Template';
import Home from './components/Home';
import SearchCollege from './components/SearchCollege';
import Academics from './components/Academics';
import Blogs from './components/Blogs';
import Confidential from './components/Confidential';
import Error from './components/Error';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Template />}>
          <Route index element={<Home />} />
          <Route path='searchcolleges' element={<SearchCollege />} />
          <Route path='academics' element={<Academics />} />
          <Route path='blogs' element={<Blogs />} />
          <Route path='confidential' element={<Confidential />} />
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  )
}

export default App;