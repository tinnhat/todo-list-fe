import React from "react";
import PropTypes from "prop-types";
import TextArea from "antd/lib/input/TextArea";
import { Button } from "antd";
import ItemPost from "./item";

function Post(props) {
  return (
    <div className="bg-[#16213E]">
      <div className="container mx-auto">
        <div className="pt-20 text-center">
          <p className=" text-4xl uppercase font-medium">Share your post</p>
        </div>
        <div className="mt-6 text-right">
          <TextArea rows={4} />
          <Button className="mt-2 bg-red-400 text-slate-300 uppercase w-24 hover:bg-red-500 border-none hover:text-white transition-all">
            Send
          </Button>
        </div>
        <div className="flex items-center justify-center flex-col mt-10">
          <ItemPost />
          <ItemPost />
          <ItemPost />
          <ItemPost />
          <ItemPost />
          <ItemPost />
          <ItemPost />
        </div>
      </div>
    </div>
  );
}

Post.propTypes = {};

export default Post;
