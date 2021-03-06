import styled from "styled-components";

import { Props } from "./index";
import { MAIN_COLOR } from "constants/colors";

export const Button = styled.button`
  width: 100px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${MAIN_COLOR};
  border-radius: 4px;
  background: ${(props: Props) => (props.primary ? MAIN_COLOR : "white")};
  color: ${(props: Props) => (props.primary ? "white" : MAIN_COLOR)};
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
`;
