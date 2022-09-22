import React from "react";
import PropTypes from "prop-types";
import Icon, { DeleteOutlined } from "@ant-design/icons";
import fetchDataAPI from "../../../api/configApi";
import moment from "moment";
const user = JSON.parse(localStorage.getItem("user"));
function ItemPost(props) {
  const { item, fetchData } = props;
  const handleDelete = async () => {
    await fetchDataAPI(`api/delete/${item._id}`, "DELETE")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response);
      });
    fetchData();
  };
  console.log(item);
  console.log(user);
  return (
    <div className="box rounded-sm w-full border border-slate-50 border-solid p-4 mb-10 relative">
      <div className="flex items-center mb-4">
        <p className="">
          Author: <span className="font-medium">{item.author}</span>
        </p>
        <p className="ml-2 text-sm">
          {moment(item.createDate).format("DD/MM/YYYY hh:mm")}
        </p>
      </div>
      <p>{item.content}</p>
      {item.userid === user?._id && (
        <div
          className="absolute top-[-26px] px-2 py-1 rounded-sm bg-red-600 right-1"
          onClick={handleDelete}
        >
          <DeleteOutlined className="cursor-pointer" />
        </div>
      )}
    </div>
  );
}

ItemPost.propTypes = {};

export default ItemPost;
