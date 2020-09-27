import React from 'react';
import {
    BrowserRouter as Router,
    Switch,Redirect,
    Route,useRouteMatch
} from "react-router-dom";

import Pd from 'container/PapersManagement/Pd';
import User from 'container/PapersManagement/User';

const subPath = '/papers';

export default () =>{
    let { path } = useRouteMatch();
    return (
        <Switch>
            <Route path={`${path}${subPath}/Pd`} component={Pd} />
            <Route path={`${path}${subPath}/User`} component={User} />
        </Switch>
    )
}
    
