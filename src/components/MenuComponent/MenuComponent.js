import React, {Component} from 'react';
import {Menu} from 'antd';
import {Link} from 'react-router-dom';

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
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="users" >
                    <Link to="/users">Users</Link>
                </Menu.Item>
            </Menu>
        );
    }
}