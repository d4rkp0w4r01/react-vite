import { Button, Input, notification } from 'antd';
import { useState } from 'react';
import { createUserAPI } from '../../services/api_service';

const UserForm = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    //console.log(`check input case: `, fullName, Email, Password,phoneNumber); //check input return
    const handleClickBtn = async () => {
        //console.log(`get value by button: `, {fullName,Email,Password,phoneNumber}); // check get data
        const res = await createUserAPI(fullName, password, email, phone)
        if (res.data) {
            notification.success({
                message: `Create User`,
                description: `Created User Successfully`
            })
        }
        //console.log(`check res: `, res.data) //check res
        else {
            notification.error({
                message: `Error Create User`,
                description: JSON.stringify(res.message)
            })
        }
    }
    return (
        <div className="user-form" style={{ margin: "20px 0" }}>
            <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
                <div>
                    <span>FullName</span>
                    <Input
                        value={fullName}
                        //onChange={(event) =>{console.log(`check input`,event.target.value)}} //check input event
                        onChange={(event) => { setFullName(event.target.value) }}
                    />
                </div>
                <div>
                    <span>Email</span>
                    <Input
                        value={email}
                        onChange={(event) => { setEmail(event.target.value) }}
                    />
                </div>
                <div>
                    <span>Password</span>
                    <Input.Password
                        value={password}
                        onChange={(event) => { setPassword(event.target.value) }}
                    />
                </div>
                <div>
                    <span>Phone Number</span>
                    <Input
                        value={phone}
                        onChange={(event) => { setPhone(event.target.value) }}
                    />
                </div>
                <div>
                    <Button type='primary'
                        //onClick={() => handleClickBtn()} // passing value
                        onClick={handleClickBtn}
                    >Create User</Button>
                </div>
            </div>
        </div>
    );

}
export default UserForm;
