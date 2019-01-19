import styled from "styled-components";
import { LIGHT_GRAY } from "constants/colors";

export const LoginView = styled.div`
  display: flex;
`;

export const LeftContiainer = styled.div`
  width: calc(100% - 500px);
  height: 100vh;
  background: ${LIGHT_GRAY};
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: white;
  width: 500px;
  height: 100vh;
`;

export const LoginButtons = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SignUpButton = styled.button`
  border: none;
  background: none;
`;
