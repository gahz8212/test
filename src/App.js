import React from "react";
import { Routes, Route } from "react-router-dom";
import MainForm from "./pages/MainForm";
const App = () => {
  return (
    <Routes>
      <Route path={"/"} element={<MainForm />}></Route>
    </Routes>
  );
};

export default App;
