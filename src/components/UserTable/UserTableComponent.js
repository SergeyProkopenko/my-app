import React, {Component} from 'react';
import {Table} from 'antd';
import {userTableColumns} from "./columns";

export default class UserTableComponent extends Component {

    state = {};

    componentDidMount() {
        this.props.fetch()
    }

    render() {

        const {data, isLoading} = this.props;
        return (
            <>
                <Table
                    title={() => 'Header'}
                    footer={() => 'Footer'}
                    loading={isLoading}
                    dataSource={data}
                    columns={userTableColumns}
                    bordered
                    size={'small'}
                >
                </Table>
            </>
        );
    }
}