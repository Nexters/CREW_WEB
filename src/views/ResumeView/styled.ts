import styled, { css } from "styled-components";

import { LIGHT_GRAY, MAIN_COLOR } from "constants/colors";

const WIDTH = 1095;

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
  font-size: 30px;
  margin-top: 175px;
  margin-bottom: 106px;
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
  font-size: 16px;
  padding-bottom: 16px;
`;

export const ProfileItemValue = styled.div`
  font-family: NanumSquareB;
  font-size: 22px;
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
  font-size: 20px;
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
  color: #615e62;
  font-size: 16px;
  font-family: NanumSquareR;
  line-height: 1.7;
`;

export const AnswerRight = styled.div`
  width: 690px;
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
  width: 80%;
  height: 54px;
  border-radius: 4px;
  background: #f9f9f9;
  border: none;
  resize: none;
  padding: 10px;
  font-size: 18px;

  :focus {
    outline: none;
  }
`;

export const ScoreBoxes = styled.div`
  width: 100%;
`;

export const ScoreRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  :last-child {
    margin-bottom: 0;
  }
`;

export const ScoreBox = styled.input`
  width: 189px;
  height: 54px;
  border-radius: 4px;
  border: 1px solid #eeeeee;
  font-size: 25px;
  text-align: center;

  :focus {
    outline: none;
    border: 1.5px solid ${MAIN_COLOR};
  }
`;

export const avgScore = styled.div`
  font-family: NanumSquareR;
  font-size: 20px;

  > span {
    display: inline-block;
    margin: 31px 0;
    margin-right: 30px;
  }

  > b {
    font-family: NanumSquareEB;
  }
`;

export const PickSection = styled.section`
  margin-top: 150px;
  margin-bottom: 124px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PickButton = styled.button`
  width: 354px;
  height: 86px;
  border-radius: 3px;
  background-color: #febc27;
  font-size: 25px;
  color: white;
  font-family: NanumSquareR;
  text-align: center;
  cursor: pointer;
  border: none;
`;
