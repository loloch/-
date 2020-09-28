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

const HOMEPATH = '/home';

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
            <PrivateRoute path={HOMEPATH}>
                <Home>
                    <Switch>
                        <Redirect exact from={HOMEPATH} to={`${HOMEPATH}/papers/Pd`} />
                        <Route path={`${HOMEPATH}/papers`}>
                            <PapersManagmentRoute />
                        </Route>
                        <Route path={`${HOMEPATH}/question`}>
                            <QuestionManagementRoute />
                        </Route>
                    </Switch>
                </Home>
            </PrivateRoute>
        </Switch>
    </Router>
)
