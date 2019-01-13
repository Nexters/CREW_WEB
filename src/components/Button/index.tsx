import React, { PureComponent, HTMLAttributes } from "react";
import Styled from "./styled";

export interface Props extends HTMLAttributes<HTMLButtonElement> {}
interface State {}

class Button extends PureComponent<Props, State> {
  render() {
    return <Styled.Button {...this.props}>test</Styled.Button>;
  }
}

export default Button;
