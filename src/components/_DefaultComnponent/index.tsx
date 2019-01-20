import React, { PureComponent, HTMLAttributes } from "react";
import * as Styled from "./styled";

export interface Props extends HTMLAttributes<HTMLDivElement> {}
interface State {}

class DefaultComponent extends PureComponent<Props, State> {
  public render() {
    return <Styled.Container {...this.props}>test</Styled.Container>;
  }
}

export default DefaultComponent;
