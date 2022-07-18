import React from "react";
import { Routes, Route } from "react-router-dom";
import MainForm from "./pages/Memoboard/MainForm";
import WriteForm from "./pages/Memoboard/WriteForm";
import PostViewer from "./pages/Memoboard/PostForm";
import LoginForm from "./pages/Auth/LoginPage";
import JoinForm from "./pages/Auth/JoinPage";
import TestForm from "./pages/Test/TestForm";
const App = () => {
  return (
    <Routes>
      <Route path={"/login"} element={<LoginForm />}></Route>
      <Route path={"/"} element={<MainForm />}></Route>
      <Route path={"/join"} element={<JoinForm />}></Route>
      <Route path={"/option"} element={<TestForm />}></Route>
      <Route path={"/write"} element={<WriteForm />}></Route>
      <Route path={"/@:nick/"}>
        <Route index element={<MainForm />} />
        <Route path={":postId"} element={<PostViewer />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
