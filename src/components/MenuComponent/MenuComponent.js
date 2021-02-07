import React, {Component} from 'react';
import {Menu} from 'antd';
import {NavLink} from 'react-router-dom';

export default class MenuComponent extends Component {
    state = {
        current: 'mail',
    };

    handleClick = e => {
        this.setState({ current: e.key });
    };

    render() {
        return (
            <Menu onClick={this.handleClick} mode="horizontal">
                <Menu.Item key="home" >
                    <NavLink to="/">Home</NavLink>
                </Menu.Item>
                <Menu.Item key="users" >
                    <NavLink to="/users">Users</NavLink>
                </Menu.Item>
            </Menu>
        );
    }
}