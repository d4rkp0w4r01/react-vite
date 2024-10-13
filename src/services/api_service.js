//import axios from 'axios';
import axios from './axios.customize';

const createUserAPI = (fullName, password, email, phone) => {
    const URL_Backend = `/api/v1/user`;
    const data = {
        fullName: fullName,
        email: email,
        password: password,
        phone: phone
    }
    return axios.post(URL_Backend, data)
}
const updateUserAPI = () => {

}
export {
    createUserAPI,
    updateUserAPI
}