import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import Details from './pages/Details';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/Details/:id" element={<Details/>} />
      </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);