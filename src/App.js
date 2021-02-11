import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./helpers/validation";
import './styles/styles.scss'


import {
    BrowserRouter,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";

//containers
import Header from "./containers/header"
import Footer from "./containers/footer"
import Home from "./containers/home";
import Login from "./containers/login";
import Register from "./containers/register";
import NotFound from "./containers/not-found"



class App extends Component {
    render() {
        return (
            <>
                <Header/>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/register" component={Register}/>
                        <Route component={NotFound} />
                    </Switch>
                </BrowserRouter>
                <Footer/>
            </>
        );
    }
}

export default App;