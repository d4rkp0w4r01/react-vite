import { Drawer } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
const ViewUserDetail = (props) => {

    const {
        dataDetail,
        setDataDetail,
        isDetailOpen,
        setIsDetailOpen
    } = props;

    return (
        <Drawer title="Chi tiết User"
            width={`25vw`}
            onClose={() => {
                setDataDetail(null);
                setIsDetailOpen(false);
            }}
            open={isDetailOpen}
        >
            {dataDetail ? <>
                <p>Id: {dataDetail._id}</p>
                <br />
                <p>Full name: {dataDetail.fullName}</p>
                <br />
                <p>Email: {dataDetail.email}</p>
                <br />
                <p>Phone number: {dataDetail.phone}</p>
                <br />
                <div>
                    <center><img height={300} width={300}
                        src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataDetail.avatar}`} /></center>
                </div>
                <br />
                <div>
                    <center>
                        <label htmlFor='btnUpload' style={{
                            display: "block", 
                            width: "fit-content", 
                            marginTop: "15px", 
                            padding: "5px 10px", 
                            background: "orange", 
                            borderRadius: "5px", 
                            cursor: "pointer"
                        }}

                        >Upload Avatar</label>
                        <input type="file" hidden id='btnUpload' />
                    </center>
                </div>
                {/* <Button icon={<UploadOutlined />}>Click to Upload</Button> */}
            </>
                :
                <>
                    <p>Không có dữ liệu</p>
                </>
            }
        </Drawer>
    )
}

export default ViewUserDetail;