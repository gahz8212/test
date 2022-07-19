import React from "react";
import { Link } from "react-router-dom";
const SubInfo = ({ post }) => {
  // console.log(post);
  return (
    <div style={{ marginTop: "0.2rem", fontWeight: "bold", color: "darkgray" }}>
      <span>
        <Link to={`/?nick=${post.User.nick}`}>{post.User.nick}</Link>
      </span>
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
