import React from 'react'
import { Button, Space, Table } from 'antd';
import type { TableProps } from 'antd';
import { IWorker } from '../../../store/store';
import { Link } from 'react-router-dom';
import { useDeleteWorker } from './actions/table.mutation';



const TableComponent: React.FC<{ tableData: IWorker[] }> = ({ tableData }) => {
    const deleteWorker = useDeleteWorker();

    const handleDeleteWorker = (id: string) => {
        console.log('Delete worker with id:', id);
        deleteWorker.mutate(id);
    }

    const columns: TableProps<IWorker>['columns'] = [
        {
            title: 'FullName',
            dataIndex: 'fullName',
            key: 'fullName',
            render: (text: string) => <a>{text}</a>,
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Position',
            dataIndex: 'position',
            key: 'position',
        },
        {
            title: 'Action',
            key: 'action',
            render: (data) => (
                <Space>
                    <Button type="primary">
                        <Link to={`/workers/${data.id}`} state={{ editUserData: data }}>Edit</Link>
                    </Button>
                    <Button type="primary" danger onClick={() => {
                        handleDeleteWorker(data.id)
                    }}>
                        Delete
                    </Button>
                </Space>
            ),
        }
    ];


    return (
        <Table columns={columns} dataSource={tableData.map(
            (worker, index) => ({ ...worker, key: index })
        )} />
    )
}

export default TableComponent;