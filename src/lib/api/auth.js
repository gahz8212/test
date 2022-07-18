import client from "./client";
export const login = ({ email, password }) =>
  client.post("/login", { email, password });
export const join = ({ email, nick, password }) => {
  console.log(email, nick, password);
  return client.post("/join", { email, nick, password });
};
export const check = () => client.get("/check");
export const logout = () => client.get("/logout");
