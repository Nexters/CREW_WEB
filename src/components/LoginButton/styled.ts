import styled from "styled-components";
import { LIGHT_GRAY } from "constants/colors";

export const LoginButton = styled.button`
  width: 285px;
  height: 60px;
  background: ${LIGHT_GRAY};
  border-radius: 4px;
  margin-bottom: 1rem;

  :focus {
    outline: none;
  }
`;
