import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './Header'
import Home from './Home'

const App = () => (
    <Router>
        <div className="container">
            <Header/>
            <Route exact path="/" component={Home}/>
        </div>
    </Router>

);

export default App;