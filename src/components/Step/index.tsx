import React, { PureComponent, HTMLAttributes } from "react";
import * as Styled from "./styled";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  maxStep: number;
  current: number;
}

const Step = (props: Props) => {
  const numbers = [...Array(props.maxStep).keys()];
  return (
    <Styled.Container {...props}>
      {numbers.map((n) => (
        <Styled.Number isSelected={props.current === n + 1}>
          {n + 1}
        </Styled.Number>
      ))}
    </Styled.Container>
  );
};

export default Step;
