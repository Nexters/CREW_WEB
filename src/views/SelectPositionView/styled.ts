import styled from "styled-components";

interface ColorProps {
  color?: string;
}

export const Conatiner = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

export const LeftContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vw;
  box-sizing: border-box;
  cursor: pointer;
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vw;
  box-sizing: border-box;
  background: #2a292e;
  cursor: pointer;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 550px;
`;

export const PositionEN = styled.label<ColorProps>`
  display: inline-block;
  font-size: 20px;
  font-family: NanumSquareB;
  color: ${(props) => props.color};
  margin-bottom: 18px;
`;

export const PositionKR = styled.label<ColorProps>`
  display: inline-block;
  font-family: NanumSquareB;
  font-size: 45px;
  color: ${(props) => props.color};
  margin-bottom: 30px;
`;

export const Descritpion = styled.p<ColorProps>`
  font-family: NanumSquareB;
  font-size: 20px;
  color: ${(props) => props.color};
`;
