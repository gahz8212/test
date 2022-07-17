import React from "react";
import AuthTemplate from "../../components/auth/AuthTemplate";
import LoginForm from "../../containers/Auth/LoginForm";
const AuthPage = () => {
  return (
    <AuthTemplate>
      <LoginForm type="login" />
    </AuthTemplate>
  );
};

export default AuthPage;
