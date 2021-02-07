import React from 'react';
import './App.css'
import UserContainer from "./containers/UserContainer";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MenuComponent from "./components/MenuComponent/MenuComponent";

function App() {

    const Paths = {
        home: '/',
        users: '/users',
    };

    return (
        <Router>
            <MenuComponent/>
            <Switch>
                <Route exact path={Paths.home}>
                    <h3>Home</h3>
                </Route>
                <Route exact path={Paths.users}>
                    <UserContainer/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;