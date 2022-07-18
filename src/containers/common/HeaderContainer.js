import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/common/Header";
import { logout } from "../../modules/user";
import { useNavigate } from "react-router-dom";
const HeaderContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector(({ user }) => ({
    user: user.user,
  }));
  const onLogout = () => {
    dispatch(logout());
    try {
      localStorage.removeItem("user");
    } catch (e) {
      console.log("local storage is not working");
    }
    navigate("/login");
  };
  return <Header user={user} onLogout={onLogout}></Header>;
};

export default HeaderContainer;
