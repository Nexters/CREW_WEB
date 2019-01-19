import React, { PureComponent, HTMLAttributes } from "react";
import Styled from "./styled";

export interface Props extends HTMLAttributes<HTMLButtonElement> {}
interface State {}

class LoginButton extends PureComponent<Props, State> {
  public render() {
    return (
      <Styled.LoginButton {...this.props}>
        {this.props.children}
      </Styled.LoginButton>
    );
  }
}

export default LoginButton;
