import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { Provider } from 'react-redux';
import App from './pages/App/App.jsx';
import Login from './pages/Login/Login.jsx'
import Signup from './pages/Signup/Signup.jsx'
import Explore from './pages/Explore/Explore.jsx'
import About from './pages/About/About.jsx'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
    <div id="test-id"> 

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/app" element={<App />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/explore" element={<Explore />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
      </BrowserRouter>
    
    </div>,
);
