import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Responsive from "../../common/Responsive";
const TagBoxBlock = styled(Responsive)``;
const TagForm = styled.form`
  margin-left: 15%;
  display: flex;
  width: 300px;
  border: 2px solid black;
  border-radius: 4px;
  input,
  button {
    border: none;
    outline: none;
    font-size: 1rem;
  }
  input {
    flex: 1;
    padding: 0.5rem;
  }
  button {
    background: black;
    color: white;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
`;
const Tag = styled.div`
  color: darkcyan;
  font-size: 1.2rem;
  font-weight: bolder;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
  & + & {
    margin-left: 1rem;
  }
`;
const TagListBlock = styled.div`
  margin-top: 0.5rem;
  margin-left: 15%;
  display: flex;
`;
const TagItem = React.memo(({ tag, onRemove }) => {
  return <Tag onClick={() => onRemove(tag)}>#{tag}</Tag>;
});
const TagList = React.memo(({ tags, onRemove }) => {
  return (
    <TagListBlock>
      {tags.map((tag) => (
        <TagItem tag={tag} key={tag} onRemove={onRemove}></TagItem>
      ))}
    </TagListBlock>
  );
});

const Tagbox = ({ onChangeTags, tags }) => {
  const [input, setInput] = useState("");
  const [localTags, setLocalTags] = useState([]);

  const onInsert = (value) => {
    if (!value) return;
    if (localTags.includes(value)) return;
    const nextTags = [...localTags, value];
    setLocalTags(nextTags);
    onChangeTags(nextTags);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    onInsert(input);
    setInput("");
  };
  const onChange = (e) => {
    setInput(e.target.value);
    // console.log(input);
  };
  const onRemove = (value) => {
    const nextTags = localTags.filter((tag) => tag !== value);
    setLocalTags(nextTags);
    onChangeTags(nextTags);
  };
  useEffect(() => {
    setLocalTags(tags);
  }, [tags]);
  return (
    <TagBoxBlock>
      <TagForm onSubmit={onSubmit}>
        <input placeholder="태그입력" onChange={onChange} value={input} />
        <button>등록</button>
      </TagForm>
      <TagList tags={localTags} onRemove={onRemove}></TagList>
    </TagBoxBlock>
  );
};

export default Tagbox;
Tagbox.defaultProps = {
  tags: [],
};
