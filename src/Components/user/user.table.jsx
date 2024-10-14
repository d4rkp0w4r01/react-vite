import { Space, Table, Tag } from 'antd';

const UserTable = (props) => {
    const {dataUsers} = props

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

    return (
        <Table columns={columns}
            dataSource={dataUsers}
            rowKey={`_id`}
        />
    );
}
export default UserTable;