import React, { SFC, HTMLAttributes } from "react";
import * as Styled from "./styled";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  width?: string;
  height?: string;
  background?: string;
}

export const Paper: SFC<Props> = (props) => (
  <Styled.Container {...props}>{props.children}</Styled.Container>
);

Paper.defaultProps = {
  width: "auto",
  height: "auto",
  background: "white"
};

export default Paper;
