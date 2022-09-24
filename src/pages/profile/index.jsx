import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Button, Image, Upload } from "antd";
import openNotificationWithIcon from "../../components/notification/notification";
import { useForm } from "react-hook-form";
import InputField from "../../components/Input";
const Profile = (props) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImg, setPreviewImg] = useState("");
  const [showChangePassword, setShowChangePassword] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm();
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
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="app bg-[#16213E]">
      <div className="container mx-auto flex-col items-center  h-screen flex  ">
        <div className="mt-[20px] text-center">
          <img
            className="w-60 h-60 mb-4"
            src={
              previewImg
                ? previewImg
                : "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            }
            alt=""
          />
          <Upload
            maxCount={1}
            beforeUpload={() => false}
            onChange={handleChange}
          >
            <Button>Upload</Button>
          </Upload>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="text-left">
            <div className="flex mt-10 items-center w-[30vw]">
              <p className="text-sm min-w-[180px] font-medium uppercase mr-4">
                Fullname:
              </p>
              <InputField
                type="text"
                control={control}
                name={register("fullname")}
                value="Nguyễn Nhật Tín"
              />
            </div>
            <div className="flex mt-10 items-center w-[30vw]">
              <p className="text-sm min-w-[180px] font-medium uppercase mr-4">
                Email:
              </p>
              <InputField
                type="text"
                control={control}
                name={register("email")}
                value="tinnhat0412@gmail.com"
                disabled
              />
            </div>
            <div className="flex mt-10 items-center w-[30vw]">
              <p className="text-sm min-w-[180px] font-medium uppercase mr-4">
                Phone:
              </p>
              <InputField
                type="text"
                control={control}
                name={register("phone")}
                value="123123123123"
              />
            </div>
            <div className="flex mt-10 items-center w-[30vw]">
              <p className="text-sm min-w-[180px] font-medium uppercase mr-4">
                Password:
              </p>
              <InputField
                type="password"
                value="Nguyễn Nhật Tín"
                control={control}
                name={register("password")}
              />
            </div>
            {!showChangePassword && (
              <button
                onClick={() => setShowChangePassword(true)}
                className="uppercase font-medium w-full text-center p-2 text-gray-300 bg-emerald-600 rounded-md  hover:bg-emerald-500 hover:text-white transition-all mt-4"
              >
                Change Password
              </button>
            )}

            {showChangePassword && (
              <div>
                <div className="flex mt-10 items-center w-[30vw]">
                  <p className="text-sm min-w-[180px]  font-medium uppercase mr-4">
                    New Password:
                  </p>
                  <InputField
                    type="password"
                    control={control}
                    name={register("newpass")}
                  />
                </div>
                <div className="flex mt-10 items-center w-[30vw]">
                  <p className="text-sm min-w-[180px] font-medium uppercase mr-4">
                    Retype new password:
                  </p>
                  <InputField
                    type="password"
                    control={control}
                    name={register("renewpass")}
                  />
                </div>
              </div>
            )}

            <button className="uppercase font-medium w-full text-center p-2 text-gray-300 bg-emerald-600 rounded-md  hover:bg-emerald-500 hover:text-white transition-all mt-4">
              Upadte Infomation
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

Profile.propTypes = {};

export default Profile;
