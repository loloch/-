import React from 'react';

import Login from 'container/Login';

import Home from 'container/Home';
 
import QuestionManagementRoute from 'container/QuestionManagement/route';
import PapersManagmentRoute from 'container/PapersManagement/route';

import {
    BrowserRouter as Router,
    Switch,Redirect,
    Route
} from "react-router-dom";

export default ()=>(
    <Router>
        <Switch>
            <Route path="/">
                <Home>
                    <Switch>
                        <Redirect exact from="/" to="/papers/Pd" />
                        <Route path="/papers">
                            <PapersManagmentRoute />
                        </Route>
                        <Route path="/question">
                            <QuestionManagementRoute />
                        </Route>
                    </Switch>
                </Home>
            </Route>
        </Switch>
    </Router>
)
