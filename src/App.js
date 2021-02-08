import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss'
import "./helpers/validation";

import {BrowserRouter as Router, Route, Link, NavLink, Redirect, Switch} from 'react-router-dom';

//containers
import Home from "./containers/home";
import Login from "./containers/login";
import Register from "./containers/register";


class App extends Component {
    render() {
        return (
            <>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/register" component={Register}/>
                    </Switch>
                </Router>
            </>
        );
    }
}

export default App;