import React, { useState } from "react";
import PropTypes from "prop-types";
import { Input, Modal, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import openNotificationWithIcon from "../notification/notification";
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = (error) => reject(error);
  });
const uploadButton = (
  <div>
    <PlusOutlined />
    <div
      style={{
        marginTop: 8,
      }}
    >
      Upload
    </div>
  </div>
);
function FormRegister(props) {
  const { setForgotPass } = props;
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);
  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };

  const handleChange = ({ fileList: newFileList }) => {
    if (newFileList[0].type === "png" || newFileList[0].type === "jpg") {
      setFileList(newFileList);
    } else {
      openNotificationWithIcon(
        "success",
        "Invalid file type",
        "only file PNG or JPEG images are supported"
      );
    }
  };
  return (
    <div className="bg-[#30475E] p-4">
      <div className="mb-4">
        <Input placeholder="Fullname" />
      </div>
      <div className="mb-4">
        <Input placeholder="Username" />
      </div>
      <div className="mb-4">
        <Input placeholder="Email" />
      </div>
      <div className="mb-4">
        <Input placeholder="Phone" />
      </div>
      <div className="mb-4">
        <Input placeholder="Password" type="password" />
      </div>
      <div className="mb-4">
        <Input placeholder="RePassword" type="password" />
      </div>
      <>
        <Upload
          listType="picture-card"
          onPreview={handlePreview}
          onChange={handleChange}
          maxCount={1}
        >
          {uploadButton}
        </Upload>
        <Modal
          open={previewOpen}
          title={previewTitle}
          footer={null}
          onCancel={handleCancel}
        >
          <img
            alt="example"
            style={{
              width: "100%",
            }}
            src={previewImage}
          />
        </Modal>
      </>
      <a
        className="text-sm text-gray-300 hover:text-gray-100"
        onClick={() => setForgotPass(true)}
      >
        Forgot Password ?
      </a>
      <div className="h-px w-full bg-slate-400 my-4"></div>

      <button className="uppercase font-medium w-full text-center p-2 text-gray-300 bg-emerald-600 rounded-md  hover:bg-emerald-500 hover:text-white transition-all">
        Register
      </button>
    </div>
  );
}

FormRegister.propTypes = {};

export default FormRegister;
