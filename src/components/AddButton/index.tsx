import React, { HTMLAttributes } from "react";
import * as Styled from "./styled";

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  size: number;
}

export const AddButton = (props: Props) => (
  <Styled.Container {...props}>
    <i className='xi-plus' />
  </Styled.Container>
);

export default AddButton;
