import React from "react";
import PropTypes from "prop-types";
import { Input } from "antd";
function FormLogin(props) {
  const { setForgotPass } = props;
  return (
    <div className="bg-[#30475E] p-4">
      <div className="mb-4">
        <Input placeholder="Username" />
      </div>
      <div className="mb-4">
        <Input placeholder="Password" type="password" />
      </div>
      <a
        className="text-sm text-gray-300 hover:text-gray-100"
        onClick={() => setForgotPass(true)}
      >
        Forgot Password ?
      </a>
      <div className="h-px w-full bg-slate-400 my-4"></div>
      <button className="uppercase font-medium w-full text-center p-2 text-gray-300 bg-emerald-600 rounded-md  hover:bg-emerald-500 hover:text-white transition-all">
        Login
      </button>
    </div>
  );
}

FormLogin.propTypes = {};

export default FormLogin;
