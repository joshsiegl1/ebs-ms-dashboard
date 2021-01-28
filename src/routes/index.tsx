import React from "react";
import {
    Switch,
    Route,
    BrowserRouter as Router,
    Redirect,
} from "react-router-dom";

import Dashboard from "../dashboard";
import Emails from "../emails";

const PrivateRoute = ({ Component, ...args }): JSX.Element => {
    return (
        <Route
            {...args}
            render={props =>
                true ? <Component {...props} /> : <Redirect to="/dashboard" />
            }
        />
    );
};

const Routes = (): JSX.Element => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Dashboard} />
                <PrivateRoute path="/dashboard" exact Component={Dashboard} />
                <PrivateRoute path="/emails" exact Component={Emails} />
            </Switch>
        </Router>
    );
};

export default Routes;
