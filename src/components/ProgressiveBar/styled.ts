import styled from "styled-components";
import { MAIN_COLOR } from "constants/colors";

import { Props } from "./index";

export const Container = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 6px;
  background: #d8d8d8;
`;

export const Bar = styled.div<Props>`
  width: ${(props) => `calc(${(props.index * 100) / props.max}%)`};
  transition: 0.6s;
  height: 6px;
  background: ${MAIN_COLOR};
`;
