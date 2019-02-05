import styled from "styled-components";
import { MAIN_COLOR } from "constants/colors";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  margin-bottom: 15px;
`;

export const Count = styled.span`
  color: ${MAIN_COLOR};
`;

export const Body = styled.div`
  background: white;
  border-radius: 4px;
`;
