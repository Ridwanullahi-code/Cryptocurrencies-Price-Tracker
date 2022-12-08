import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Detail from '../pages/Detail';
import '../style/App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crypto-details" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
