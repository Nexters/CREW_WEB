import styled from 'styled-components';
import { BG_GRAY, WHITE, YELLOW, MAIN_COLOR } from 'constants/colors';

export const FormView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
`;

export const LeftArrow = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  /* left: -80px; */
  left: 50px;
  top: 50vh;
  color: #5b61ed;
`;

export const RightArrow = styled.div`
  position: absolute;
  right: 50px;
  top: 50vh;
  color: #5b61ed;
`;

export const arrowSubTitle = styled.div`
  /* position: absolute;
  left: -50px;
  top: 50vh; */
  color: #000;
`;

export const LeftContiainer = styled.div`
  display: flex;
  flex-direction: column;
  /* width: calc(80%); */
  width: 80vh;
  /* width: 80%vh; */
  height: 100vh;
  /* background: ${WHITE}; */
  /* background: orange; */
  justify-content: center;
  padding-left: 50px;
`;

export const RightContiainer = styled.div`
  display: flex;
  flex-direction: column;
  /* width: calc(80%); */
  width: 80vh;
  height: 100vh;
  padding-right: 50px;
  background: ${WHITE};
  /* background: green; */
  justify-content: center;
`;

export const NumberText = styled.div`
  font-size: 35px;
  color: #5b61ed;
  /* margin-left: 215px; */
`;

export const TitleArea = styled.div`
  font-size: 60px;
  color: #423f43;
  /* margin-left: 50px; */
`;

export const DescArea = styled.div`
  font-size: 15px;
  color: #b8b8b8;
  /* margin-left: 215px; */
`;

export const buttonContainer = styled.div`
  display: flex;
  /* height: 100px; */
  /* flex-direction: column; */
  /* width: 100vh; */
  margin-top: 20px;
  /* background: skyblue; */
  justify-content: flex-end;
  /* align-items: flex-end; */
`;

export const completeButton = styled.div`
  display: flex;
  /* display: flex; */
  /* width: 100px;
  height: 73px; */
  font-size: 15px;
  font-family: NanumSquareR;
  /* margin-top: 50px; */
  /* justify-content: 'flex-end';
  align-items: 'flex-end'; */
  /* background: ${MAIN_COLOR}; */
  color: ${MAIN_COLOR};
  /* color: yellow; */
`;

export const TextinputContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* background: ${YELLOW}; */
  padding-right: 50px;
  /* margin-right: 50px; */
`;

export const SelectWorkContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`;
export const SelectWork = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  color: #b8b8b8;
  margin-bottom: 10px;
  /* margin-right: 50px; */
`;

export const RadiboButtonContainer = styled.div`
  display: flex;
  background: '#febc27';
  justify-content: space-between;
`;
export const RadioButton = styled.button`
  display: flex;
  width: 140px;
  height: 40px;
  font-size: 20px;
  border-radius: 31px;
  justify-content: center;
  align-items: center;
  background: ${MAIN_COLOR};
  color: white;
`;
