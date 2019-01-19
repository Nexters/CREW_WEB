import React, { PureComponent } from "react";

import { LoginButton } from "components";
import * as Styled from "./styled";

class LoginView extends PureComponent {
  render() {
    return (
      <Styled.LoginView>
        <Styled.LeftContiainer />
        <Styled.RightContainer>
          <Styled.LoginButtons>
            <LoginButton>Kakao</LoginButton>
            <LoginButton>Kakao</LoginButton>
            <LoginButton>Kakao</LoginButton>
          </Styled.LoginButtons>
          <Styled.SignUpButton>회원가입</Styled.SignUpButton>
        </Styled.RightContainer>
      </Styled.LoginView>
    );
  }
}

export default LoginView;
