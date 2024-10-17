import axios from "./axios.customize";

const createUserAPI = (fullName, password, email, phone) => {
  const URL_Backend = `/api/v1/user`;
  const data = {
    fullName: fullName,
    email: email,
    password: password,
    phone: phone,
  };
  return axios.post(URL_Backend, data);
};
const updateUserAPI = (_id, fullName, phone) => {
  const URL_Backend = `/api/v1/user`;
  const data = {
    _id: _id,
    fullName: fullName,
    phone: phone,
  };
  return axios.put(URL_Backend, data);
};
const fetchAllUserAPI = (current, pageSize) => {
  const URL_Backend = `/api/v1/user?current=${current}&pageSize=${pageSize}`;
  return axios.get(URL_Backend);
};
const deleteUserAPI = (id) => {
  const URL_Backend = `/api/v1/user/${id}`;
  return axios.delete(URL_Backend);
};
const handleUploadFile = (file, folder) => {
  const URL_Backend = `/api/v1/file/upload`;
  let config = {
    headers: {
      "upload-type": folder,
      "Content-Type": "multipart/form-data",
    },
  };
  const bodyFormData = new FormData();
  bodyFormData.append("fileImg", file);

  return axios.post(URL_Backend, bodyFormData, config);
};

const updateUserAvatarAPI = (avatar, _id, phone, fullName) => {
  const URL_Backend = `/api/v1/user`;
  const data = {
    _id: _id,
    avatar: avatar,
    fullName: fullName,
    phone: phone,
  };
  return axios.put(URL_Backend, data);
};
export {
  createUserAPI,
  updateUserAPI,
  fetchAllUserAPI,
  deleteUserAPI,
  handleUploadFile,
  updateUserAvatarAPI,
};
