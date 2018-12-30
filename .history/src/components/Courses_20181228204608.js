import React from 'react';
import {Route, NavLink} from 'react-router-dom'

const Courses = () => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2> 
      <ul className="course-nav">
        <li><NavLink exact to={`/courses/html`}>HTML</NavLink></li>
        <li><NavLink exact to={`/courses/css`}>CSS</NavLink></li>
        <li><NavLink exact to={`/courses/javascript`}>JavaScript</NavLink></li>
      </ul>
    </div>
    
    {/* Nested Routes */}
    <Route exact path="/courses/html" component={HTML}/>
    <Route exact path="/courses/css" component={CSS}/>
    <Route exact path="/courses/javascript" component={JavaScript}/>

  </div>
);

export default Courses;