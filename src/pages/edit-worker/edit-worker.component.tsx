import { useLocation, useNavigate } from "react-router-dom";
import { useEditWorkerQuery } from "./actions/edit-worker.mutation";
import { IWorker } from "../../store/store";
import { Button, Form, Input } from 'antd'

const EditWorkerComponent = () => {
    const location = useLocation();
    const editedWorker = location.state.editUserData as IWorker;
    const navigate = useNavigate();
    const { mutate } = useEditWorkerQuery();
    console.log(editedWorker)


    const handleEdit = (values: IWorker) => {
        console.log('Success:', values);
        mutate({ ...values, updated_at: new Date().toISOString(), id: editedWorker.id })
        navigate('/workers')
    }

    return (
        <div>
            <h1 style={{ textAlign: 'center', fontSize: '2rem', margin: '1rem 0' }}>EditWorkerComponent</h1>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 8 }}
                initialValues={editedWorker}
                autoComplete="off"
                onFinish={handleEdit}
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
                        Update worker
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default EditWorkerComponent