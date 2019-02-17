import styled from "styled-components";
import { BG_GRAY, WHITE, YELLOW, MAIN_COLOR } from "constants/colors";

export const FormView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
`;

// export const LeftArrow = styled.div`
//   display: flex;
//   flex-direction: column;
//   position: absolute;
//   /* left: -80px; */
//   left: 50px;
//   top: 50vh;
//   color: #5b61ed;
// `;

// export const RightArrow = styled.div`
//   position: absolute;
//   right: 50px;
//   top: 50vh;
//   color: #5b61ed;
// `;

// export const arrowSubTitle = styled.div`
//   /* position: absolute;
//   left: -50px;
//   top: 50vh; */
//   color: #000;
// `;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 540px;
  height: 100vh;
  margin-right: 260px;
  justify-content: center;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 100vh;
  background: ${WHITE};
  justify-content: center;
`;

export const TitleArea = styled.div`
  font-size: 54px;
  color: #423f43;
  margin-bottom: 20px;
`;

export const DescArea = styled.div`
  font-size: 20px;
  color: #b8b8b8;
  font-family: NanumSquareR;
`;

export const buttonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

export const completeButton = styled.button`
  width: 100%;
  height: 64px;
  font-size: 20px;
  font-family: NanumSquareR;
  margin-top: 50px;
  background: ${MAIN_COLOR};
  color: ${WHITE};
`;

export const TextInputContainer = styled.div`
  display: flex;
  flex-direction: column;
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
`;

export const RadiboButtonContainer = styled.div`
  display: flex;
  background: "#febc27";
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
