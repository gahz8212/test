import client from "./client";
export const write = ({ title, content, tags }) =>
  client.post("/post/write", { title, content, tags });
<<<<<<< HEAD
export const update = ({ title, content, tags, postId }) =>
  client.patch(`/post/write/${postId}`, { title, content, tags });
export const read = (id) => client.get(`/post/read/${id}`);
export const list = ({ page, nick, tag }) =>
  client.get(`/post`, { params: { page, nick, tag } });
export const removePost = (id) => client.delete(`/post/remove/${id}`);
=======
export const read = (id) => client.get(`/post/write/${id}`);
export const list = () => client.get(`/post`);
export const remove = (id) => client.delete(`/post/remove/${id}`);
>>>>>>> 419d780b00efd31f4dac61efe38bb1f66e00e6e0
