import React from 'react';
import {Switch} from 'react-router'
import {Route, BrowserRouter as Router} from 'react-router-dom';

import './App.css';
import 'semantic-ui-css/semantic.min.css'

import {DashboardPage} from './pages'
import Header from "./components/Header/header";
import NavSide from "./components/NavSide/navside";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Header/>
            </header>
            <div className="container d-flex">
                <NavSide/>
                <Router>
                    <div className="content">
                        <div>
                            <Route>
                                <Switch>
                                    <Route exact path="/" component={DashboardPage}/>
                                </Switch>
                            </Route>
                        </div>
                    </div>
                </Router>
            </div>
        </div>
    );
}

export default App;
