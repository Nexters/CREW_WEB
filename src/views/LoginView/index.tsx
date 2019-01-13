import React, { PureComponent } from "react";
import { LoginButton } from "components";

class LoginView extends PureComponent {
  render() {
    return (
      <div>
        LoginView
        <div>
          <LoginButton>Kakao</LoginButton>
          <LoginButton>Kakao</LoginButton>
          <LoginButton>Kakao</LoginButton>
        </div>
      </div>
    );
  }
}

export default LoginView;
