import React from 'react';
import {Route, NavLink, Redirect} from 'react-router-dom'
import CoursesContainer from './courses/CoursesContainer'
import {frontEnd, htmlCourses, javaScriptCourses} from '../data'


const Courses = ({match}) => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2> 
      <ul className="course-nav">
        <li><NavLink exact to={`${match.url}/html`}>HTML</NavLink></li>
        <li><NavLink to={`${match.url}/css`}>CSS</NavLink></li>
        <li><NavLink to={`${match.url}/javascript`}>JavaScript</NavLink></li>
      </ul>
    </div>
    
    {/* Nested Routes */}
    <Route exact path={match.path} render={() => <Redirect to={`${match.url}/html`}/>}/>
    
    <Route path={`${match.url}/html`} 
           render={() => <CoursesContainer data={htmlCourses}/>}/>
    <Route path={`${match.url}/css`}
           render={() => <CoursesContainer data={frontEnd}/>}/>
    <Route path={`${match.url}/javascript`}
           render={() => <CoursesContainer data={javaScriptCourses}/>}/>

  </div>
);

export default Courses;