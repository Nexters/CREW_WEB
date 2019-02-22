import styled from "styled-components";
import { GRAY2 } from "constants/colors";
import BG from "images/pattern.svg";

const RIGHT_WIDTH = "524px";

export const LoginView = styled.div`
  display: flex;
`;

export const LeftContainer = styled.div`
  width: calc(100% - ${RIGHT_WIDTH});
  height: 100vh;
  background-image: url(${BG});
  background-size: cover;
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: white;
  width: ${RIGHT_WIDTH};
  height: 100vh;
`;

export const RightHeader = styled.div`
  width: 340px;
  margin-bottom: 30px;
`;

export const RightHeaderTitle = styled.h1`
  font-family: NanumSquareEB;
  font-size: 40px;
  margin: 0;
  margin-bottom: 10px;
`;

export const RightHeaderSubTitle = styled.h2`
  font-family: NanumSquareB;
  font-size: 20px;
  color: ${GRAY2};
  margin: 0;
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
  font-family: NanumSquareEB;
  font-size: 15px;
`;
