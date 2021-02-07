import React from 'react';
import './App.css'
import UserContainer from "./containers/UserContainer";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MenuComponent from "./components/MenuComponent/MenuComponent";
import {UserDetailsComponent} from "./components/UserDetails/UserDetailsComponent";

function App() {

    const Paths = {
        home: '/',
        users: '/users',
        user: '/users/:userId',
    };

    return (
        <Router>
            <div>
                <MenuComponent/>
                <Switch>
                    <Route exact path={Paths.home} render={() => <h3>Home</h3>} />
                    <Route exact path={Paths.users} render={() => <UserContainer/>} />
                    <Route exact path={Paths.user} render={() => <UserDetailsComponent />} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;