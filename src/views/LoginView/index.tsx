import React, { PureComponent } from "react";

import { LoginButton } from "components";
import * as Styled from "./styled";

class LoginView extends PureComponent {
  public render() {
    return (
      <Styled.LoginView>
        <Styled.LeftContiainer />
        <Styled.RightContainer>
          <Styled.RightBody>
            <Styled.LoginButtons>
              <LoginButton>Login with Google</LoginButton>
              <LoginButton>Login with Facebook</LoginButton>
              <LoginButton>Login with Kakaotalk</LoginButton>
            </Styled.LoginButtons>
            <Styled.SignUpContainer>
              <Styled.SignUpButton>회원가입</Styled.SignUpButton>
            </Styled.SignUpContainer>
          </Styled.RightBody>
        </Styled.RightContainer>
      </Styled.LoginView>
    );
  }
}

export default LoginView;
