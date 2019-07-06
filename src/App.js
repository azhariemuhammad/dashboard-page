import React from 'react';
import {Provider} from 'react-redux'
import {IndexRoute, Switch} from 'react-router'
import {Route, BrowserRouter as Router} from 'react-router-dom';

import './App.css';
import 'semantic-ui-css/semantic.min.css'
import store from './store/configureStore'

import {PhotosPage, PostDetailPage, UserPage} from './pages'
import {UserContainer} from "./containers/UserContainer";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <header className="App-header">Social Media Dashboard</header>
                <div className="container">
                    <Router>
                        <div className="flex-between margin-8">
                            <UserContainer/>
                            <div>
                                <Route>
                                    <Switch>
                                        <Route exact path="/:id" component={UserPage}/>
                                        <Route path="/albums/:id" component={PhotosPage}/>
                                        <Route path="/posts/:id" component={PostDetailPage}/>
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
