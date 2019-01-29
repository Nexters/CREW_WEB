import React, { HTMLAttributes } from "react";
import * as Styled from "./styled";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  width?: string;
  height?: string;
  background?: string;
}

const defaultProps: Props = {
  width: "auto",
  height: "auto",
  background: "#ffffff"
};

export const Paper = (props: Props = defaultProps) => (
  <Styled.Container {...props}>{props.children}</Styled.Container>
);

export default Paper;
