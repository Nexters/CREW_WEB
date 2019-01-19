import React, { PureComponent, HTMLAttributes } from "react";
import Styled from "./styled";

export interface Props extends HTMLAttributes<HTMLDivElement> {}
interface State {}

class DefaultComponent extends PureComponent<Props, State> {
  render() {
    return <Styled.Container {...this.props}>test</Styled.Container>;
  }
}

export default DefaultComponent;