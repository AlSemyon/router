import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import About from './About'
import Teachers from './Teachers'
import Courses from './Courses'
import NotFound from './NotFound'

const App = () => (
    <Router>
        <div className="container">
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/teachers/:name" component={Teachers}/>
                <Route path="/courses" component={Courses}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    </Router>

);

export default App;