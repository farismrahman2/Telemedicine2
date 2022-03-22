import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Admin, Zoom } from './containers';

ReactDOM.render(
  <React.StrictMode>
    
    <BrowserRouter>
    <Routes>
        <Route path='/control' element={<Admin />} />
        <Route path="/call" element={<Zoom />} />
        <Route path="/" element={<App />}>
      </Route>
    </Routes>
  </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);

