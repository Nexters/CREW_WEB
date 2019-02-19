import React, { PureComponent, HTMLAttributes } from "react";
import * as Styled from "./styled";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  index: number;
  max: number;
}

const ProgressiveBar = (props: Props) => (
  <Styled.Container>
    <Styled.Bar {...props} />
  </Styled.Container>
);

export default ProgressiveBar;
