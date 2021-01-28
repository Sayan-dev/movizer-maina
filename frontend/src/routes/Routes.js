import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';


import HomeScreen from '../components/Screens/Home/HomeScreen';

const Routes = (props) => {


    return (
        <Router>
            <Switch>

                <Route path="/" exact component={HomeScreen} />


            
            </Switch>
        </Router>
    );
};

export default Routes;