import React, { PureComponent } from 'react'

import { LoginButton } from 'components'
import { Link } from 'react-router-dom'

import GoogleLogo from 'images/googleLogo.png'
import FacebookLogo from 'images/facebookLogo.png'
import KakaoLogo from 'images/kakaoLogo.png'

import * as Styled from './styled'

class LoginView extends PureComponent {
  public render() {
    return (
      <Styled.LoginView>
        <Styled.LeftContiainer />
        <Styled.RightContainer>
          <Styled.RightBody>
            <Styled.LoginButtons>
              <LoginButton
                src={GoogleLogo}
                borderColor="#ccdefd"
                fontColor="#70a3fa">
                Login with Google
              </LoginButton>
              <LoginButton
                src={FacebookLogo}
                borderColor="#aebbda"
                fontColor="#39579a">
                Login with Facebook
              </LoginButton>
              <LoginButton
                src={KakaoLogo}
                borderColor="#fff264"
                fontColor="#000000">
                Login with Kakaotalk
              </LoginButton>
            </Styled.LoginButtons>
            <Styled.SignUpContainer>
              <Link to="/applicants">
                <Styled.SignUpButton>회원가입</Styled.SignUpButton>
              </Link>
            </Styled.SignUpContainer>
          </Styled.RightBody>
        </Styled.RightContainer>
      </Styled.LoginView>
    )
  }
}

export default LoginView
