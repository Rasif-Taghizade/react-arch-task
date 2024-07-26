import React, { useCallback, useEffect, useState } from 'react';
import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { ILoginFormValues } from './login';
import { useLogin } from './actions/login.mutation';

const LoginComponent: React.FC = () => {

    const [form] = Form.useForm();
    const { mutate } = useLogin();
    const [clientReady, setClientReady] = useState<boolean>(false);

    useEffect(() => {
        setClientReady(true);
    }, []);

    const onFinish = useCallback((values: ILoginFormValues) => {
        console.log('Finish:', values);
        mutate(values);
    }, [mutate]);

    return (
        <div>
            <h1>Login</h1>
            <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}>
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input
                        prefix={<MailOutlined className="site-form-item-icon" />}
                        placeholder="Email"
                        type='email'
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item shouldUpdate>
                    {() => (
                        <Button
                            type="primary"
                            htmlType="submit"
                            disabled={
                                !clientReady ||
                                !form.isFieldsTouched(true) ||
                                !!form.getFieldsError().filter(({ errors }) => errors.length).length
                            }
                        >
                            Log in
                        </Button>
                    )}
                </Form.Item>
            </Form>
        </div>
    )
}

export default LoginComponent;