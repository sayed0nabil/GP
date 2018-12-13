import React from 'react';
import {NavLink} from 'react-router-dom';
import './nav.css';
const Nav1 = () => {
    return (
      <div className='navbar'>
        <div className='container'>
          <ul>
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/features">Features</NavLink></li>
            <li><NavLink to="/test">Testominal</NavLink></li>
            <li><NavLink to="/plogs">Plogs</NavLink></li>
            <li><NavLink to="/contact">Contact Us</NavLink></li>
          </ul>
        </div>
      </div>
    );
}

export default Nav1;