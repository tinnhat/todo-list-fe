import React, { useState } from "react";
import PropTypes from "prop-types";
import FormLogin from "../../components/formLogin";
import FormRegister from "../../components/formRegister";
import { Input } from "antd";

function Login(props) {
  const [show, setShow] = useState(true);
  const [forgotPass, setForgotPass] = useState(false);
  return (
    <div className="app bg-[#16213E]">
      <div className="container mx-auto  h-screen flex items-center justify-center">
        <div className="bg-[#444F5A] rounded-sm w-3/12 p-4">
          {forgotPass ? (
            <div className="bg-[#30475E] p-4">
              <h6 className="text-white text-center mb-6">Forgot password</h6>
              <div className="mb-4">
                <Input placeholder="Enter your username" />
              </div>
              <a
                className="text-sm text-gray-300 hover:text-gray-100"
                onClick={() => setForgotPass(false)}
              >
                Already have account ? Login Now !
              </a>
              <div className="h-px w-full bg-slate-400 my-4"></div>
              <button className="uppercase font-medium w-full text-center p-2 text-gray-300 bg-emerald-600 rounded-md  hover:bg-emerald-500 hover:text-white transition-all">
                Send
              </button>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between ">
                <div
                  className={`w-3/6 text-center p-2 ${
                    show ? "bg-[#30475E]" : ""
                  } `}
                >
                  <p
                    className="cursor-pointer hover:text-white"
                    onClick={() => setShow(true)}
                  >
                    Login
                  </p>
                </div>
                <div
                  className={`w-3/6 text-center p-2 ${
                    !show ? "bg-[#30475E]" : ""
                  } `}
                >
                  <p
                    className="cursor-pointer hover:text-white"
                    onClick={() => setShow(false)}
                  >
                    Register
                  </p>
                </div>
              </div>
              <div>
                {show ? (
                  <FormLogin setForgotPass={setForgotPass} />
                ) : (
                  <FormRegister setForgotPass={setForgotPass} />
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {};

export default Login;
