import styled from "styled-components";
import { BG_GRAY } from "constants/colors";

export const LoginView = styled.div`
  display: flex;
`;

export const LeftContiainer = styled.div`
  width: calc(100% - 500px);
  height: 100vh;
  background: ${BG_GRAY};
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

export const RightBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginButtons = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SignUpContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const SignUpButton = styled.button`
  border: none;
  background: none;
  font-size: 20px;
`;
