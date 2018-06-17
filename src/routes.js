import React from 'react';
import {Route, BrowserRouter,Switch} from 'react-router-dom';
import Landing from './Components/Landing/landing';
import UserDetails from './Components/UserDetails/userDetails';

const Routes = props => {
    return (
        <BrowserRouter >
            <Switch>
                <Route exact path="/" component={Landing}/>
                <Route path="/userDetails" component={UserDetails}/>
            </Switch >
        </BrowserRouter>
    )
}
export default Routes