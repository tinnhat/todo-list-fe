import React, { useState } from "react";
import PropTypes from "prop-types";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
function Header(props) {
  const [show, setShow] = useState(false);
  return (
    <div className="bg-[#293462] ">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <ul className="flex">
            <li>
              <a
                href="/todo"
                className="p-4 block hover:bg-slate-500 hover:text-white transition-all"
              >
                To do
              </a>
            </li>
            <li className="ml-4">
              <a
                href="/post"
                className="p-4 block hover:bg-slate-500 hover:text-white transition-all"
              >
                Post
              </a>
            </li>
          </ul>
        </div>
        <div
          className="relative flex cursor-pointer"
          onClick={() => setShow(!show)}
        >
          <p className="pr-2">Nhat tin</p>
          <Avatar size="small" icon={<UserOutlined />} />
          {show && (
            <div className="absolute w-40 right-0 bg-[#30475E] mt-8">
              <p className="p-3 cursor-pointer hover:bg-[#1C3879] transition-all">
                Profile
              </p>
              <p className="p-3 cursor-pointer hover:bg-[#1C3879] transition-all">
                Change password
              </p>
              <p className="p-3 cursor-pointer hover:bg-[#1C3879] transition-all">
                Logout
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {};

export default Header;
