import { Space, Table, Tag } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import UpdateUserModal from './update.user.modal';
import { useState } from 'react';
const UserTable = (props) => {
    const { dataUsers } = props
    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
    const [dataUpdate, setDataUpdate] = useState (null);
    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
            render: (_, record) => {
                return (
                    <a href='#'>{record._id}</a>
                )
            }
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Role',
            dataIndex: 'role',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <EditOutlined 
                    onClick={() => {
                        setDataUpdate(record);
                        setIsModalUpdateOpen(true);
                    }}
                    />
                    <DeleteOutlined />
                </Space>
            ),
        }
    ];

    return (
        <>
            <Table columns={columns}
                dataSource={dataUsers}
                rowKey={`_id`}
            />
        <UpdateUserModal
        isModalUpdateOpen={isModalUpdateOpen}
        setIsModalUpdateOpen={setIsModalUpdateOpen}
        dataUpdate = {dataUpdate}
        setDataUpdate = {setDataUpdate}
        />
        </>
    );
}
export default UserTable;