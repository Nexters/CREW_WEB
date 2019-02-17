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
export const TitleArea = styled.div`
  font-size: 80px;
  color: #423f43;
`;

export const DescArea = styled.div`
  font-size: 22px;
  color: #b8b8b8;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${WHITE};
  justify-content: center;
`;

export const completeButton = styled.button`
  width: 676px;
  height: 73px;
  font-size: 20px;
  font-family: NanumSquareR;
  margin-top: 50px;
  background: ${MAIN_COLOR};
  color: ${WHITE};
`;

export const TextinputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SelectWorkContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
export const SelectWork = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  color: #b8b8b8;
  margin-right: 50px;
`;

export const RadiboButtonContainer = styled.div`
  display: flex;
  background: '#febc27';
  justify-content: space-between;
`;
