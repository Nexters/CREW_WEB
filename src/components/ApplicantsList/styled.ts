import styled from "styled-components";
import { LIGHT_MAIN_COLOR } from "constants/colors";

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  display: block;
  padding: 10px 0;
  border-bottom: 1px solid ${LIGHT_MAIN_COLOR};

  :last-child {
    border-bottom: none;
  }
`;
