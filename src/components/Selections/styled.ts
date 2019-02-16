import styled from "styled-components";
import { MAIN_COLOR } from "constants/colors";

interface AnswerOptionProps {
  isSelected: Boolean;
}

interface AnswerLabelProps {
  width?: string;
}

export const Answer = styled.div`
  width: 690px;
  color: #615e62;
  font-size: 20px;
  font-family: NanumSquareR;
  line-height: 1.7;
`;

export const AnswerOptionList = styled.ul`
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const AnswerOption = styled.li<AnswerOptionProps>`
  display: flex;
  align-items: center;
  margin-bottom: 22px;

  :last-child {
    margin-bottom: 0;
  }

  > div {
    border: 1px solid ${(props) => (props.isSelected ? MAIN_COLOR : "#979797")};
    background: ${(props) => (props.isSelected ? MAIN_COLOR : "")};
  }

  > label {
    background: ${(props) =>
      props.isSelected ? "rgba(74, 128, 246, 0.2)" : ""};
  }
`;

export const CheckCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  margin-right: 28px;
  color: white;
  font-size: 22px;
`;

export const AnswerLabel = styled.label<AnswerLabelProps>`
  width: ${(props) => props.width || "640px"};
  background: #f9f9f9;
  padding: 11px 30px;
  font-family: NanumSquareB;
  font-size: 20px;
`;
