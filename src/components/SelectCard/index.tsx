import React, { PureComponent, HTMLAttributes } from "react";
import * as Styled from "./styled";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  label: string;
  description: string;
}
interface State {}

class SelectCard extends PureComponent<Props, State> {
  public render() {
    const { label, description } = this.props;
    return (
      <Styled.Container {...this.props}>
        <Styled.TextArea>
          <Styled.TextLabel>{label}</Styled.TextLabel>
          <Styled.Description>{description}</Styled.Description>
        </Styled.TextArea>
      </Styled.Container>
    );
  }
}

export default SelectCard;
