import styled from 'styled-components';
import { BG_GRAY, WHITE, YELLOW, MAIN_COLOR } from 'constants/colors';

export const FormView = styled.div`
  display: flex;
`;

interface AnswerOptionProps {
  isSelected: Boolean;
}

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

export const QuestionList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
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

export const Answer = styled.div`
  width: 690px;
  color: #615e62;
  font-size: 20px;
  font-family: NanumSquareR;
  line-height: 1.7;
`;

export const AnswerOptionList = styled.ul`
  width: 690px;
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
    border: 1px solid ${props => (props.isSelected ? MAIN_COLOR : '#979797')};
    background: ${props => (props.isSelected ? MAIN_COLOR : '')};
  }

  > label {
    background: ${props => (props.isSelected ? 'rgba(74, 128, 246, 0.2)' : '')};
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

export const AnswerLabel = styled.label`
  width: 640px;
  background: #f9f9f9;
  padding: 11px 30px;
  font-family: NanumSquareB;
  font-size: 20px;
`;

export const Question = styled.li`
  display: flex;
  justify-content: space-between;
  font-size: 25px;
  padding-top: 97px;
  padding-bottom: 80px;
  border-bottom: 1px solid #eeeeee;
`;

export const QuestionTitle = styled.div`
  width: 325px;
  line-height: 1.6;
`;

export const Index = styled.div`
  color: ${MAIN_COLOR};
  margin-bottom: 6px;
`;
