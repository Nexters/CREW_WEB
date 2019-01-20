import React, { PureComponent, HTMLAttributes } from "react";
import * as Styled from "./styled";

export interface Props extends HTMLAttributes<HTMLDivElement> {}
interface State {}

class SelectCard extends PureComponent<Props, State> {
  public render() {
    return (
      <Styled.Container {...this.props}>
        <Styled.TextLabel>{this.props.children}</Styled.TextLabel>
      </Styled.Container>
    );
  }
}

export default SelectCard;
