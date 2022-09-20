import React, { useRef } from "react";
import PropTypes from "prop-types";
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  RollbackOutlined,
} from "@ant-design/icons";
import { Checkbox, Input } from "antd";
import { useState } from "react";
import Item from "./item";
function Todo(props) {
  const [value, setValue] = useState("");
  const [edit, setEdit] = useState(false);
  console.log(value);
  return (
    <div className="bg-[#16213E] h-screen">
      <div className="container mx-auto">
        <div className="flex items-center justify-center flex-col">
          <p className="pt-20 text-4xl uppercase font-medium ">List to do</p>
          <div className="flex items-center justify-between mt-10 w-2/5 ">
            <Input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            {edit ? (
              <>
                <EditOutlined className="p-2 cursor-pointer" />
                <RollbackOutlined
                  className="p-2 cursor-pointer ml-1"
                  onClick={() => {
                    setValue("");
                    setEdit(false);
                  }}
                />
              </>
            ) : (
              <PlusOutlined className="p-2 cursor-pointer" />
            )}
          </div>
          <div className="flex flex-col mt-4 w-2/5 overflow-x-hidden max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300">
            <Item
              text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
              setValue={setValue}
              setEdit={setEdit}
              edit={edit}
            />
            <Item text={"Lorem ."} setValue={setValue} setEdit={setEdit} />
            <Item text={"Lorem ipsum "} setValue={setValue} setEdit={setEdit} />
            <Item
              text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
              setValue={setValue}
              setEdit={setEdit}
            />
            <Item
              text={"Laaaaaaaaaaaaaaaaaaa consectetur adipisicing elit."}
              setValue={setValue}
              setEdit={setEdit}
            />
            <Item
              text={"Lorem ipsumw3214ewqesicing elit."}
              setValue={setValue}
              setEdit={setEdit}
            />
            <Item
              text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
              setValue={setValue}
              setEdit={setEdit}
            />
            <Item text={"Lorem ."} setValue={setValue} setEdit={setEdit} />
            <Item text={"Lorem ipsum "} setValue={setValue} setEdit={setEdit} />
            <Item
              text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
              setValue={setValue}
              setEdit={setEdit}
            />
            <Item
              text={"Laaaaaaaaaaaaaaaaaaa consectetur adipisicing elit."}
              setValue={setValue}
              setEdit={setEdit}
            />
            <Item
              text={"Lorem ipsumw3214ewqesicing elit."}
              setValue={setValue}
              setEdit={setEdit}
            />
            <Item
              text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
              setValue={setValue}
              setEdit={setEdit}
            />
            <Item text={"Lorem ."} setValue={setValue} setEdit={setEdit} />
            <Item text={"Lorem ipsum "} setValue={setValue} setEdit={setEdit} />
            <Item
              text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
              setValue={setValue}
              setEdit={setEdit}
            />
            <Item
              text={"Laaaaaaaaaaaaaaaaaaa consectetur adipisicing elit."}
              setValue={setValue}
              setEdit={setEdit}
            />
            <Item
              text={"Lorem ipsumw3214ewqesicing elit."}
              setValue={setValue}
              setEdit={setEdit}
            />
            <Item
              text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
              setValue={setValue}
              setEdit={setEdit}
            />
            <Item text={"Lorem ."} setValue={setValue} setEdit={setEdit} />
            <Item text={"Lorem ipsum "} setValue={setValue} setEdit={setEdit} />
            <Item
              text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
              setValue={setValue}
              setEdit={setEdit}
            />
            <Item
              text={"Laaaaaaaaaaaaaaaaaaa consectetur adipisicing elit."}
              setValue={setValue}
              setEdit={setEdit}
            />
            <Item
              text={"Lorem ipsumw3214ewqesicing elit."}
              setValue={setValue}
              setEdit={setEdit}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

Todo.propTypes = {};

export default Todo;
