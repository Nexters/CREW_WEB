import styled from 'styled-components';
import { BG_GRAY, WHITE, YELLOW, MAIN_COLOR } from 'constants/colors';

export const FormView = styled.div`
  display: flex;
`;

export const LeftContiainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(50%);
  height: 100vh;
  background: ${WHITE};
  justify-content: center;
`;

export const NumberText = styled.div`
  font-size: 60px;
  color: #5b61ed;
  margin-left: 215px;
`;

export const TitleArea = styled.div`
  font-size: 60px;
  color: #423f43;
  margin-left: 215px;
`;

export const RightContiainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${WHITE};
  justify-content: center;
`;

export const TextinputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const textarea = styled.textarea`
  width: 700px;
  height: 490px;
  border-radius: 4px;
  background: ${BG_GRAY};
  border: 1px solid #423f43;
  margin-bottom: 16px;
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
