import React from "react";
import { Routes, Route } from "react-router-dom";
import MainForm from "./pages/Memoboard/MainForm";
import WriteForm from "./pages/Memoboard/WriteForm";
import PostViewer from "./pages/Memoboard/PostForm";
import TestForm from "./pages/Test/TestForm";
const App = () => {
  return (
    <Routes>
      <Route path={"/"} element={<MainForm />}></Route>
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
