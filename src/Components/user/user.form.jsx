import { Button, Input } from 'antd';
import { useState } from 'react';

const UserForm = () => {
    const [fullName, setFullName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    //console.log(`check input case: `, fullName, Email, Password,phoneNumber); //check input return
    const handleClick = () =>{
        //console.log(`get value by button: `, {fullName,Email,Password,phoneNumber}); // check get data
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
                        value={Email}
                        onChange={(event) => {setEmail(event.target.value)}}
                        />
                    </div>
                    <div>
                        <span>Password</span>
                        <Input.Password 
                        value={Password}
                        onChange={(event) => {setPassword(event.target.value)}}
                        />
                    </div>
                    <div>
                        <span>Phone Number</span>
                        <Input 
                        value={phoneNumber}
                        onChange={(event) => {setPhoneNumber(event.target.value)}}
                        />
                    </div>
                    <div>
                        <Button type='primary'
                        //onClick={() => handleClickBtn()} // passing value
                        onClick={handleClick}
                        >Create User</Button>
                    </div>
            </div>
        </div>
    );

}
export default UserForm;
