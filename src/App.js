import React from 'react';
import {Provider} from 'react-redux'
import {IndexRoute, Switch} from 'react-router'
import {Route, BrowserRouter as Router} from 'react-router-dom';

import './App.css';
import 'semantic-ui-css/semantic.min.css'
import store from './store/configureStore'

import {PhotosPage, PostDetailPage, UserPage} from './pages'
import {UserContainer} from "./containers/UserContainer";
import Header from "./components/Header/header";
import NavSide from "./components/NavSide/navside";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <header className="App-header">
                    <Header />
                </header>
                <div className="container flex">
                    <NavSide />
                    <Router>
                        <div className="content">
                            <div>
                                <Route>
                                    <Switch>
                                        <Route exact path="/" component={UserPage}/>
                                        {/*<Route path="/albums/:id" component={PhotosPage}/>*/}
                                        {/*<Route path="/posts/:id" component={PostDetailPage}/>*/}
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
