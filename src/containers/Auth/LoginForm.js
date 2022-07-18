import React, { useEffect } from "react";
import AuthForm from "../../components/auth/AuthForm";
import { initializeForm, changeField } from "../../modules/auth";
import { useDispatch, useSelector } from "react-redux";
const LoginForm = () => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }) => ({
    form: auth["login"],
  }));
  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch(changeField({ form: "login", key: name, value }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    dispatch(initializeForm("login"));
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
