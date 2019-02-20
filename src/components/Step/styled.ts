import styled, { css } from "styled-components";
import { MAIN_COLOR } from "constants/colors";

interface NumberProps {
  isSelected: boolean;
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

export const Number = styled.div<NumberProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 35px;
  height: 35px;
  margin-right: 13px;
  color: #423f43;
  transition: 0.3s;
  border-radius: 50%;

  :last-child {
    margin-right: 0;
  }

  ${(props) =>
    props.isSelected &&
    css`
      background: ${MAIN_COLOR};

      color: white;
    `}
`;
