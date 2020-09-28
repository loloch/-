import React from 'react';
import {
    Switch,
    Route,useRouteMatch
} from "react-router-dom";

const Pd = React.lazy(()=>import('container/QuestionManagement/Pd'));
const User = React.lazy(()=>import('container/QuestionManagement/User'));


export default () =>{
    let { path } = useRouteMatch();

    return (
        <Switch>
            <Route path={`${path}/Pd`} component={Pd} />
            <Route path={`${path}/User`} component={User} />
        </Switch>
    )
}
    
