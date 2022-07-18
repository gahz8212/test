import React, { useEffect } from "react";
import AuthForm from "../../components/auth/AuthForm";
import { initializeForm, changeField, login } from "../../modules/auth";
import { useDispatch, useSelector } from "react-redux";
import { check } from "../../modules/user";
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth["login"],
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));
  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch(changeField({ form: "login", key: name, value }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(form));
  };
  useEffect(() => {
    if (authError) {
      return;
    }
    if (auth) {
      dispatch(check());
    }
  }, [auth, authError, dispatch]);
  useEffect(() => {
    if (user) {
      try {
        navigate("/");
        localStorage.setItem("user", JSON.stringify(user));
      } catch (e) {
        console.error(e);
      }
    }
  }, [user, navigate]);

  useEffect(() => {
    // dispatch(initializeForm("login"));
    return () => {
      dispatch(initializeForm("login"));
    };
  }, [dispatch]);
  return (
    <AuthForm
      type="login"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    ></AuthForm>
  );
};

export default LoginForm;
