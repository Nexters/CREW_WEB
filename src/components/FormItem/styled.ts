import styled from "styled-components";
import { MAIN_COLOR } from "constants/colors";

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  padding: 35px 70px;

  :hover {
    background-color: #ffffff;
    box-shadow: 0 2px 25px 10px rgba(0, 0, 0, 0.1);
    transition: 0.3s;

    > div:first-child {
      background: ${MAIN_COLOR};
      transition: 0.3s;
    }
  }
`;

export const BorderTop = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 5px;
  transition: 0.3s;
`;

export const Left = styled.div`
  margin-right: 102px;
`;

export const Index = styled.div`
  color: ${MAIN_COLOR};
  font-size: 27px;
  margin-bottom: 20px;
`;

export const Title = styled.div`
  width: 595px;
  font-family: NanumSquareB;
  font-size: 25px;
`;

export const Right = styled.div`
  width: 575px;
`;

export const SingleLine = styled.input`
  width: 100%;
  background-color: #f9f9f9;
  border-radius: 3px;
  font-size: 18px;
  height: 140px;
  border: none;
  padding: 20px;

  :focus {
    outline: none;
  }
`;

export const MultiLine = styled.textarea`
  width: 100%;
  border-radius: 3px;
  background-color: #f9f9f9;
  border: none;
  font-size: 18px;
  padding: 20px;

  :focus {
    outline: none;
  }
`;
