import React from 'react';
import { Route, Routes } from 'react-router-dom';
import "./App.css";


import Success from './components/Success';
import Registration from './components/Registration';

const App = () => {
  return (
    <>
      <Routes>
          <Route exact path="/" element={<Registration />} />
          <Route path="/Success" element={<Success />} />
      </Routes>
    </>
  )
}
export default App
