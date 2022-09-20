import { Button, Input, Upload } from "antd";
import React, { useEffect, useState } from "react";
import openNotificationWithIcon from "../notification/notification";
function FormRegister(props) {
  const { setForgotPass } = props;
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImg, setPreviewImg] = useState("");
  useEffect(() => {
    if (selectedFile) {
      const objectUrl = URL.createObjectURL(selectedFile);
      // console.log(objectUrl);
      setPreviewImg(objectUrl);
    }
  }, [selectedFile]);
  const handleChange = (file) => {
    if (file.fileList.length > 0) {
      if (file.file.type === "image/png" || file.file.type === "image/jpeg") {
        setSelectedFile(file.file);
        return;
      }
      openNotificationWithIcon(
        "error",
        "Invalid image file",
        "Only file PNG or JPEG images are allowed"
      );
      setPreviewImg("");
      setSelectedFile(null);
    } else {
      setPreviewImg("");
      setSelectedFile(null);
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
      <Upload maxCount={1} beforeUpload={() => false} onChange={handleChange}>
        <Button>Upload</Button>
      </Upload>
      <img src={previewImg} alt="" />
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

export default React.memo(FormRegister);
