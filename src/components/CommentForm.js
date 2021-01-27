import React, {Component} from 'react';
import {Button, Form, Input} from 'antd';

const layout = {
    labelCol: {span: 8},
    wrapperCol: {span: 10},
};

const tailLayout = {
    wrapperCol: {offset: 8, span: 16},
};

export default class CommentForm extends Component {

    onFinish(values) {
        console.log('Success:', values);
    };

    onFinishFailed(errorInfo) {
        console.log('Failed:', errorInfo);
    };

    render() {
        return (
            <Form
                {...layout}
                name="basic"
                initialValues={{remember: true}}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!'
                        },
                        {
                            min: 5,
                            message: 'Username must be minimum 5 characters.'
                        },
                        {
                            max: 15,
                            message: 'Username must be maximum 15 characters.'
                        }
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Text"
                    name="text"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your text!'
                        },
                        {
                            min: 20,
                            message: 'Text must be minimum 20 characters.'
                        },
                        {
                            max: 50,
                            message: 'Text must be maximum 50 characters.'
                        }
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    {...tailLayout}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        );
    }
};
