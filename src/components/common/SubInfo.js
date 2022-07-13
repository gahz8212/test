import React from "react";

const SubInfo = ({ post }) => {
  return (
    <div style={{ marginTop: "0.5rem", fontWeight: "bold", color: "darkgray" }}>
      <span>{post.name}</span>
      <span
        className="middle-dot"
        style={{ margin: "0 1rem", fontWeight: "bolder" }}
      >
        &#183;
      </span>
      <span>{new Date(Date.now()).toLocaleDateString()}</span>
    </div>
  );
};

export default SubInfo;
