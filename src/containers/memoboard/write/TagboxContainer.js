import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeWrite } from "../../../modules/write";
import Tagbox from "../../../components/memoboard/write/Tagbox";
const TagboxContainer = () => {
  const dispatch = useDispatch();
  const { tags } = useSelector(({ write }) => ({
    tags: write.tags,
  }));
  const onChange = (payload) => {
    console.log(payload);
    dispatch(changeWrite({ key: "tags", value: payload }));
  };
  return <Tagbox onChangeTags={onChange} tags={tags}></Tagbox>;
};

export default TagboxContainer;
