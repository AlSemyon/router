import React from 'react';
import {NavLink} from 'react-router-dom'

const Courses = ({match}) => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2> 
      <ul className="course-nav">
        <li><NavLink exact to={`${match.url}/html`}>HTML</NavLink></li>
        <li><NavLink exact to={`${match.url}/css`}>CSS</NavLink></li>
        <li><NavLink exact to={`${match.url}/javascript`}>JavaScript</NavLink></li>
      </ul>
    </div>
    
    {/* Nested Routes */}


  </div>
);

export default Courses;