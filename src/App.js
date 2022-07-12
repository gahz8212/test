import React from "react";
import { Routes, Route } from "react-router-dom";
import MainForm from "./pages/MainForm";
import WriteForm from "./pages/WriteForm";
const App = () => {
  return (
    <Routes>
      <Route path={"/"} element={<MainForm />}></Route>
      <Route path={"/write"} element={<WriteForm />}></Route>
    </Routes>
  );
};

export default App;
