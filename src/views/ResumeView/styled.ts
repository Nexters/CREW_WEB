import styled, { css } from "styled-components";

import { LIGHT_GRAY, MAIN_COLOR } from "constants/colors";

const WIDTH = 1245;

interface AnswerOptionProps {
  isSelected: Boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Header = styled.header`
  width: ${WIDTH}px;
`;

export const Title = styled.h1`
  font-size: 40px;
  margin-top: 175px;
  margin-bottom: 109px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 55px 67px;
  border: 1px solid ${LIGHT_GRAY};
`;

export const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export const ProfileItem = styled.div``;

export const ProfileItemLabel = styled.label`
  display: inline-block;
  color: ${MAIN_COLOR};
  font-family: NanumSquareR;
  font-size: 20px;
  padding-bottom: 16px;
`;

export const ProfileItemValue = styled.div`
  font-family: NanumSquareB;
  font-size: 28px;
`;

export const Body = styled.div`
  width: ${WIDTH}px;
  padding-top: 78px;
`;

export const QuestionList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Question = styled.li`
  display: flex;
  justify-content: space-between;
  font-size: 25px;
  padding-top: 97px;
  padding-bottom: 80px;
  border-bottom: 1px solid #eeeeee;
`;

export const Index = styled.div`
  color: ${MAIN_COLOR};
  margin-bottom: 6px;
`;

export const QuestionTitle = styled.div`
  width: 325px;
  line-height: 1.6;
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

export const AnswerLabel = styled.label`
  width: 640px;
  background: #f9f9f9;
  padding: 11px 30px;
  font-family: NanumSquareB;
  font-size: 20px;
`;

export const Bottom = styled.div`
  width: ${WIDTH}px;
`;

export const Section = styled.section`
  padding-top: 95px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Label = styled.h2`
  display: block;
  width: 100%;
  font-size: 30px;
`;

export const Comment = styled.textarea`
  width: 100%;
  height: 277px;
  border-radius: 4px;
  background: #f9f9f9;
  border: none;
  margin-bottom: 16px;
`;
