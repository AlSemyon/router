import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './Header'

const App = () => (
    <Router>
        <div className="container">
            <Header/>
        </div>
    </Router>

);

export default App;