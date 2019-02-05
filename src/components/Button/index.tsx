import React, { PureComponent, HTMLAttributes } from "react";
import * as Styled from "./styled";

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  primary: boolean;
}
interface State {}

class Button extends PureComponent<Props, State> {
  static defaultProps: Partial<Props> = {
    primary: false
  };

  public render() {
    return <Styled.Button {...this.props}>{this.props.children}</Styled.Button>;
  }
}

export default Button;
