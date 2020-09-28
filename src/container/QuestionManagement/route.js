import React from 'react';
import {
    Switch,
    Route,useRouteMatch
} from "react-router-dom";

import Pd from 'container/QuestionManagement/Pd';
import User from 'container/QuestionManagement/User';

const subPath = '/question';

export default () =>{
    let { path } = useRouteMatch();
    console.log(`${path}${subPath}/Pd`,'questionsroute=============')

    return (
        <Switch>
            <Route path={`${path}/Pd`} component={Pd} />
            <Route path={`${path}/User`} component={User} />
        </Switch>
    )
}
    
