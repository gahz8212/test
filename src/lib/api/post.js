import client from "./client";
export const write = ({ title, content, tags }) =>
  client.post("/post/write", { title, content, tags });

export const update = ({ title, content, tags, postId }) =>
  client.patch(`/post/write/${postId}`, { title, content, tags });
export const read = (id) => client.get(`/post/read/${id}`);
export const list = ({ page, nick, tag }) =>
  client.get(`/post`, { params: { page, nick, tag } });
export const removePost = (id) => client.delete(`/post/remove/${id}`);
