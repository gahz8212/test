import client from "./client";
export const write = ({ title, content, tags }) =>
  client.post("/post/write", { title, content, tags });
export const read = (id) => client.get(`/post/write/${id}`);
export const list = () => client.get(`/post`);
