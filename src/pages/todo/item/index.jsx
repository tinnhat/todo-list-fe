import React from "react";
import PropTypes from "prop-types";
import { Checkbox } from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useState } from "react";
function Item(props) {
  const { text, setValue, setEdit } = props;
  const [checked, setChecked] = useState(false);
  const handleSetValue = () => {
    console.log(text);
    setValue(text);
    setEdit(true);
  };
  return (
    <p
      className={`flex items-center mb-2 ${
        checked ? "bg-green-600" : "bg-[#25316D]"
      }  p-2 rounded-sm justify-between
      `}
    >
      <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
      <span className="block mx-1">{text}</span>
      <div>
        {!checked && (
          <EditOutlined
            className="pl-2 cursor-pointer"
            onClick={handleSetValue}
          />
        )}
        <DeleteOutlined className="pl-2 cursor-pointer mx-2" />
      </div>
    </p>
  );
}

Item.propTypes = {};

export default Item;
