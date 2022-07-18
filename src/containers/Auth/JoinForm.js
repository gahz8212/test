import React, { useEffect } from "react";
import AuthForm from "../../components/auth/AuthForm";
import { initializeForm, changeField, join } from "../../modules/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const JoinForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { form, auth, authError } = useSelector(({ auth }) => ({
    form: auth["join"],
    auth: auth.auth,
    authError: auth.authError,
  }));
  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch(changeField({ form: "join", key: name, value }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    // const { email, password, nick } = form;
    // console.log(form);
    dispatch(join(form));
  };
  useEffect(() => {
    dispatch(initializeForm("join"));
  }, [dispatch]);
  useEffect(() => {
    if (authError) {
      return null;
    }
    if (auth === "join_success") {
      navigate("/login");
    }
  }, [auth, authError, navigate]);
  return (
    <AuthForm
      type="join"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    ></AuthForm>
  );
};

export default JoinForm;
