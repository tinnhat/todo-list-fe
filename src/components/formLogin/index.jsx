import React from "react";
import PropTypes from "prop-types";
import { Input } from "antd";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const schema = yup
  .object({
    username: yup.string().required(),
    password: yup.string().required(),
  })
  .required();
function FormLogin(props) {
  const { setForgotPass } = props;
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(watch().username);
  return (
    <div className="bg-[#30475E] p-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <p className="error-label">{errors.username?.message}</p>
          <input
            {...register("username")}
            // control={control}
            // placeholder="Username"
            // name={register("username", { required: true })}
          />
        </div>
        <div className="mb-4">
          <p className="error-label">{errors.password?.message}</p>
          <Input
            control={control}
            placeholder="Password"
            type="password"
            name={register("password", { required: true })}
          />
        </div>
        <a
          className="text-sm text-gray-300 hover:text-gray-100"
          onClick={() => setForgotPass(true)}
        >
          Forgot Password ?
        </a>
        <div className="h-px w-full bg-slate-400 my-4"></div>
        <button
          type="submit"
          className="uppercase font-medium w-full text-center p-2 text-gray-300 bg-emerald-600 rounded-md  hover:bg-emerald-500 hover:text-white transition-all"
        >
          Login
        </button>
      </form>
    </div>
  );
}

FormLogin.propTypes = {};

export default FormLogin;
