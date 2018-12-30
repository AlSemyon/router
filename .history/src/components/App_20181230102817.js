import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import About from './About'
import Teachers from './Teachers'
import Courses from './Courses'

const App = () => (
    <Router>
        <div className="container">
            <Header/>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/teachers" component={Teachers}/>
            <Route path="/courses" component={Courses}/>
        </div>
    </Router>

);

export default App;