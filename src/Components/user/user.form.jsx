import { Button, Input } from 'antd';
import { useState } from 'react';
import axios from 'axios';
const UserForm = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    //console.log(`check input case: `, fullName, Email, Password,phoneNumber); //check input return
    const handleClickBtn = () =>{
        //console.log(`get value by button: `, {fullName,Email,Password,phoneNumber}); // check get data
        const URL_Backend = `http://192.168.1.8:8080/api/v1/user`;
        const  data = {
            fullName: fullName,
            email: email,
            password: password,
            phone: phone
        }
        axios.post(URL_Backend,data)
    }
    return (
        <div className="user-form" style={{ margin: "20px 0" }}>
            <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
                    <div>
                        <span>FullName</span>
                        <Input 
                        value={fullName}
                        //onChange={(event) =>{console.log(`check input`,event.target.value)}} //check input event
                       onChange={(event) =>{setFullName(event.target.value)}}
                        />
                    </div>
                    <div>
                        <span>Email</span>
                        <Input 
                        value={email}
                        onChange={(event) => {setEmail(event.target.value)}}
                        />
                    </div>
                    <div>
                        <span>Password</span>
                        <Input.Password 
                        value={password}
                        onChange={(event) => {setPassword(event.target.value)}}
                        />
                    </div>
                    <div>
                        <span>Phone Number</span>
                        <Input
                        value={phone}
                        onChange={(event) => {setPhone(event.target.value)}}
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
