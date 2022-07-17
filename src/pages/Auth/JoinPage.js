import React from "react";
import AuthTemplate from "../../components/auth/AuthTemplate";
import JoinForm from "../../containers/Auth/JoinForm";
const JoinPage = () => {
  return (
    <div>
      <AuthTemplate>
        <JoinForm type="join" />
      </AuthTemplate>
    </div>
  );
};

export default JoinPage;
