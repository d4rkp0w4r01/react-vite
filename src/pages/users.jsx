import UserForm from '../Components/user/user.form';
import UserTable from '../Components/user/user.table'
import { useEffect, useState } from 'react';
import { fetchAllUserAPI } from '../services/api_service';
const UserPage = (props) => {
    const [dataUsers, setDataUser] = useState([])
    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const res = await fetchAllUserAPI()
        setDataUser(res.data)
    }

    return (
        <div style={{ padding: "20 px" }}>
            <UserForm loadUser={loadUser} />
            <UserTable dataUsers={dataUsers}
                loadUser={loadUser}
            />
        </div>
    );

}
export default UserPage;
