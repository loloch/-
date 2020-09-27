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

const PrivateRoute = ({children, ...rest}) => (
    <Route
        { ...rest }
        render={({location})=>sessionStorage.getItem('token')?
            children:
            <Redirect 
                to={{
                    pathname:"/login",
                    state:{ from:location }
                }} 
            />}
    />
)

export default ()=>(
    <Router>
        <Switch>
            <Route path="/login" component={Login} />
            <PrivateRoute path="/home">
                <Home>
                    <Redirect to="/home/Pd" />
                    <QuestionManagementRoute />
                    <PapersManagmentRoute />
                </Home>
            </PrivateRoute>
        </Switch>
    </Router>
)
