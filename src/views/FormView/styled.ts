import styled from "styled-components";
import { BG_GRAY, WHITE, YELLOW, MAIN_COLOR } from "constants/colors";

export const FormView = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const Body = styled.div`
  display: flex;
`;

export const LeftContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 460px;
  height: 100vh;
  margin-right: 265px;
`;

export const NumberText = styled.div`
  color: ${MAIN_COLOR};
  font-size: 50px;
  margin-bottom: 15px;
`;

export const TitleArea = styled.div`
  font-size: 50px;
  line-height: 1.5;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${WHITE};
  justify-content: center;
`;

export const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const textarea = styled.textarea`
  box-sizing: border-box;
  width: 660px;
  height: 440px;
  border-radius: 4px;
  background: ${BG_GRAY};
  border: none;
  font-size: 18px;
  padding: 30px 28px;
  margin-bottom: 16px;

  :focus {
    outline: none;
  }
`;

export const btnSave = styled.button`
  width: 81;
  height: 22px;
  font-size: 20px;
  font-family: NanumSquareR;
  margin-top: 50px;
  color: #4a80f6;
  border: none;
`;
