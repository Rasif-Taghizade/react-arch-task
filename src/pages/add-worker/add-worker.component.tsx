import { IWorker } from '../../store/store'
import { useAddWorkerQuery } from './actions/add-worker.query'
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input } from 'antd'

const AddWorkerComponent = () => {
    const navigate = useNavigate();
    const { mutate } = useAddWorkerQuery();

    const handleFinish = (values: IWorker) => {
        console.log('Success:', values);
        mutate({ ...values, created_at: new Date().toISOString() })
        navigate('/workers')
    }

    return (
        <div>
            <h1 style={{
                textAlign: 'center',
                marginBottom: 20
            }} >Add new worker page</h1>

            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 8 }}
                initialValues={{ remember: true }}
                autoComplete="off"
                onFinish={handleFinish}
            >
                <Form.Item
                    label="Full name"
                    name="fullName"
                    rules={[{ required: true, message: 'Please input your full name!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input type='email' />
                </Form.Item>

                <Form.Item
                    label="Phone"
                    name="phone"
                    rules={[{ required: true, message: 'Please input your phone!' }]}
                >
                    <Input type='tel' />
                </Form.Item>

                <Form.Item
                    label="Address"
                    name="address"
                    rules={[{ required: true, message: 'Please input your address!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Position"
                    name="position"
                    rules={[{ required: true, message: 'Please input your position!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Salary"
                    name="salary"
                    rules={[{ required: true, message: 'Please input your salary!' }]}
                >
                    <Input type='number' />
                </Form.Item>

                <Form.Item
                    label="Date of birth"
                    name="dateOfBirth"
                    rules={[{ required: true, message: 'Please input your date of birth!' }]}
                >
                    <Input type='date' />
                </Form.Item>

                <Form.Item
                    wrapperCol={{ offset: 8, span: 16 }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default AddWorkerComponent