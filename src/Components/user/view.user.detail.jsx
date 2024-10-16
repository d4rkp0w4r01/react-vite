import { Drawer, notification } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Button, message, Upload } from "antd";
import { useState } from "react";
import {
  handleUploadFile,
  updateUserAvatarAPI,
} from "../../services/api_service";
const ViewUserDetail = (props) => {
  const { dataDetail, setDataDetail, isDetailOpen, setIsDetailOpen, loadUser } =
    props;

  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const handleOnChangeFile = (event) => {
    if (!event.target.files || event.target.files.length === 0) {
      setSelectedFile(null);
      return null;
    }

    // I've kept this example simple by using the first image instead of multiple
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    }
    console.log(`check file`, preview);
  };
  const handleUpdateUserAvatar = async () => {
    // upload file
    const resUpload = await handleUploadFile(selectedFile, "avatar");
    if (resUpload.data) {
      notification.success({
        message: "Upload File",
        description: "Uploaded File Successfully !",
      });
    } else {
      notification.error({
        message: "Fail Upload File",
        description: JSON.stringify(resUpload.message),
      });
      return;
    }
    console.log(`check:`, resUpload);
    // update user
    const newAvatar = resUpload.data.fileUploaded;
    const resUpdateAvatar = await updateUserAvatarAPI(
      newAvatar,
      dataDetail._id,
      dataDetail.fullName,
      dataDetail.phone
    );

    if (resUpdateAvatar.data) {
      setIsDetailOpen(false);
      setSelectedFile(null);
      setPreview(null);
      await loadUser();
      notification.success({
        message: "Update User Avatar",
        description: "Updated Successfully !",
      });
    } else {
      notification.error({
        message: "Failed To Update User Avatar",
        description: JSON.stringify(resUpdateAvatar.message),
      });
    }
  };
  return (
    <Drawer
      title="Chi tiết User"
      width={`25vw`}
      onClose={() => {
        setDataDetail(null);
        setIsDetailOpen(false);
      }}
      open={isDetailOpen}
    >
      {dataDetail ? (
        <>
          <p>Id: {dataDetail._id}</p>
          <br />
          <p>Full name: {dataDetail.fullName}</p>
          <br />
          <p>Email: {dataDetail.email}</p>
          <br />
          <p>Phone number: {dataDetail.phone}</p>
          <br />
          <div>
            <center>
              <img
                height={300}
                width={300}
                src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${
                  dataDetail.avatar
                }`}
              />
            </center>
          </div>
          <br />
          <div>
            <center>
              <label
                htmlFor="btnUpload"
                style={{
                  display: "block",
                  width: "fit-content",
                  marginTop: "15px",
                  padding: "5px 10px",
                  background: "orange",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Upload Avatar
              </label>
              <input
                type="file"
                hidden
                id="btnUpload"
                onChange={handleOnChangeFile}
              />
            </center>
          </div>
          <br />
          <>
            {preview && (
              <div>
                <center>
                  <img height={300} width={300} src={preview} />
                </center>
              </div>
            )}
            <br />
            <Button type="primary" onClick={() => handleUpdateUserAvatar()}>
              Save
            </Button>
          </>
        </>
      ) : (
        <>
          <p>Không có dữ liệu</p>
        </>
      )}
    </Drawer>
  );
};

export default ViewUserDetail;
