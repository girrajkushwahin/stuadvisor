import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Template from './components/Template';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Template />}>
          <Route index element={<Home />} />
          <Route path='about' element ={<About/>} />
          <Route path='contact' element ={<Contact/>} />
        </Route>
        <Route path='*' element ={<Error/>} />
      </Routes>
    </>
  )
}

export default App;