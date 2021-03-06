import React from 'react';
import {NavLink} from 'react-router-dom'

const Header = () => (
  <header className="top-header">
    <div className="logo"><img className="fluid-img"  src="/i/logo.svg" /></div>
    <ul className="main-nav">
       <li><NavLink exact to='/' activeStyle={{background: 'tomato'}}>Home</NavLink></li>
       <li><NavLink exact to='/about' activeClassName="myActiveClass">About</NavLink></li>
       <li><NavLink exact to='/teachers'>Teachers</NavLink></li>
       <li><NavLink exact to='/courses'>Courses</NavLink></li>

        <li><a href="#">About</a></li>
        <li><a href="#">Teachers</a></li>
      <li><a href="#">Courses</a></li>
    </ul>    
  </header>
);

export default Header;