import React from 'react';
import {Provider} from 'react-redux'
import {Switch} from 'react-router'
import {Route, BrowserRouter as Router} from 'react-router-dom';

import './App.css';
import 'semantic-ui-css/semantic.min.css'
import store from './store/configureStore'

import {DashboardPage} from './pages'
import Header from "./components/Header/header";
import NavSide from "./components/NavSide/navside";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <header className="App-header">
                    <Header />
                </header>
                <div className="container d-flex">
                    <NavSide />
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
        </Provider>
    );
}

export default App;
