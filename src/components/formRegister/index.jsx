import { Button, Input, Upload } from "antd";
import React, { useEffect, useState } from "react";
import openNotificationWithIcon from "../notification/notification";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputField from "../Input";
const schema = yup
  .object({
    fullname: yup.string().required(),
    username: yup.string().required(),
    phone: yup.string().required(),
    email: yup.string().email("Must be a valid email").max(255).required(),
    password: yup.string().min(8, "Password is too short").required(),
    repassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  })
  .required();
function FormRegister(props) {
  const { setForgotPass } = props;
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImg, setPreviewImg] = useState("");
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
  });
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
    <div className="bg-[#30475E] p-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <p className="error-label">{errors.fullname?.message}</p>
          <InputField
            control={control}
            placeholder="Fullname"
            name={register("fullname", { required: true })}
            required={true}
          />
        </div>
        <div className="mb-4">
          <p className="error-label">{errors.username?.message}</p>
          <InputField
            placeholder="Username"
            control={control}
            name={register("username", { required: true })}
            required={true}
          />
        </div>
        <div className="mb-4">
          <p className="error-label">{errors.email?.message}</p>
          <InputField
            placeholder="Email"
            control={control}
            name={register("email", { required: true })}
            required={true}
          />
        </div>
        <div className="mb-4">
          <p className="error-label">{errors.phone?.message}</p>
          <InputField
            placeholder="Phone"
            control={control}
            name={register("phone", { required: true })}
            required={true}
          />
        </div>
        <div className="mb-4">
          <p className="error-label">{errors.password?.message}</p>
          <InputField
            placeholder="Password"
            type="password"
            control={control}
            name={register("password", { required: true })}
            required={true}
          />
        </div>
        <div className="mb-4">
          <p className="error-label">{errors.repassword?.message}</p>
          <InputField
            placeholder="RePassword"
            type="password"
            control={control}
            name={register("repassword", { required: true })}
            required={true}
          />
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
      </form>
    </div>
  );
}

FormRegister.propTypes = {};

export default React.memo(FormRegister);
