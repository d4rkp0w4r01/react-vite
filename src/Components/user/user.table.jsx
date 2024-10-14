import { Space, Table, Tag } from 'antd';
import { fetchAllUserAPI } from '../../services/api_service';
import { useEffect, useState } from 'react';

const UserTable = () => {
    const [dataUsers, setDataUser] = useState([])
    useEffect(() => {
        console.log(`render 111`)
        loadUser();
    }, []);
    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
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
    ];

    const loadUser = async () => {
        const res = await fetchAllUserAPI()
        setDataUser(res.data)
    }

    return (
        <Table columns={columns}
            dataSource={dataUsers}
            rowKey={`_id`}
        />
    );
}
export default UserTable;