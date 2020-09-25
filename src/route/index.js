import React from 'react';
import User from 'container/User';
import Pd from 'container/Pd';
import Home from 'container/Home';
import { IndexRedirect, Router, Route, browserHistory } from 'react-router';
 
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route
// } from "react-router-dom";
export default ()=>(
    <Router history={browserHistory}>
        <Route path="/" component={Home}>
            <Route path="/Pd" component={Pd} />
            <Route path="/User" component={User} />
        </Route>
    </Router>
)
