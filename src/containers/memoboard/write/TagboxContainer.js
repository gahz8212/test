import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeWrite } from "../../../modules/write";
import Tagbox from "../../../components/memoboard/write/Tagbox";
const isString = (value) => typeof value === "string";
const TagboxContainer = () => {
  const dispatch = useDispatch();
  const { tags } = useSelector(({ write }) => ({
    tags: write.tags,
  }));
  const array = [];
  tags.map((tag) => (isString(tag) ? array.push(tag) : array.push(tag.title)));
  const onChange = (payload) => {
    // console.log(payload);
    dispatch(changeWrite({ key: "tags", value: payload }));
  };
  return <Tagbox onChangeTags={onChange} tags={array}></Tagbox>;
};

export default TagboxContainer;
