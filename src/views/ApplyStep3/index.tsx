import React, { PureComponent, ChangeEvent } from "react";
import { TextField } from "@material-ui/core";
import * as Styled from "./styled";
// import {
//   SinglelineQuestion,
//   MultilineQuestion,
//   SelectQuestion,
//   QuestionType
// } from 'models/Form';
import MockedQuestions from "mocks/Forms";

// const question = [
//   {
//     options: [
//     {
//       key: 'sketch',
//       value: 'Sketch'
//     },
//     {
//       key: 'xd',
//       value: 'XD'
//     },
//     {
//       key: 'photoshop',
//       value: 'Photoshop'
//     },
//     {
//       key: 'illustration',
//       value: 'Illustration'
//     },
//   ]
//   },
// ];

const options = [
  {
    key: "sketch",
    value: "Sketch",
  },
  {
    key: "xd",
    value: "XD",
  },
  {
    key: "photoshop",
    value: "Photoshop",
  },
  {
    key: "illustration",
    value: "Illustration",
  },
];

interface Props {}
interface State {
  textField: string;
}

class ApplyStep3 extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      textField: "",
    };
  }
  public render() {
    return (
      <Styled.FormView>
        <Styled.LeftContiainer>
          <Styled.NumberText>03</Styled.NumberText>
          <Styled.TitleArea>주로 사용하는 언어는 무엇인가요?</Styled.TitleArea>
        </Styled.LeftContiainer>
        <Styled.RightContainer>
          <Styled.TextinputContainer>
            <Styled.AnswerOption key={"1"} isSelected={false}>
              <Styled.CheckCircle>
                <i className="xi-check-min" />
              </Styled.CheckCircle>
              <Styled.AnswerLabel>JAVA</Styled.AnswerLabel>
            </Styled.AnswerOption>
            <Styled.AnswerOption key={"1"} isSelected={true}>
              <Styled.CheckCircle>
                <i className="xi-check-min" />
              </Styled.CheckCircle>
              <Styled.AnswerLabel>PHYTHON</Styled.AnswerLabel>
            </Styled.AnswerOption>
            <Styled.AnswerOption key={"1"} isSelected={false}>
              <Styled.CheckCircle>
                <i className="xi-check-min" />
              </Styled.CheckCircle>
              <Styled.AnswerLabel>PHP</Styled.AnswerLabel>
            </Styled.AnswerOption>
            <Styled.AnswerOption key={"1"} isSelected={false}>
              <Styled.CheckCircle>
                <i className="xi-check-min" />
              </Styled.CheckCircle>
              <Styled.AnswerLabel>Ruby on rails</Styled.AnswerLabel>
            </Styled.AnswerOption>

            <Styled.btnSave>임시저장</Styled.btnSave>
          </Styled.TextinputContainer>
        </Styled.RightContainer>
      </Styled.FormView>
    );
  }

  private handleChangeTextField = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    this.setState({
      textField: value,
    });
  };

  private pad = (number: number) => {
    const based = "00";
    return (
      based.slice(0, based.length - number.toString().length) +
      number.toString()
    );
  };

  // private renderQuestionList = () => {
  //   return MockedQuestions.map((item, index) => {
  //     let answer;
  //     if (item.type === QuestionType.Singline) {
  //       const question = item as SinglelineQuestion;
  //       answer = <Styled.Answer>{question.value}</Styled.Answer>;
  //     } else if (item.type === QuestionType.Multiline) {
  //       const question = item as MultilineQuestion;
  //       answer = <Styled.Answer>{question.value}</Styled.Answer>;
  //     } else if (item.type === QuestionType.Select) {
  //       const question = item as SelectQuestion;
  //       answer = (
  //         <Styled.AnswerOptionList>
  //           {question.options.map((option, index) => (
  //             <Styled.AnswerOption
  //               key={option.key}
  //               isSelected={question.value === index}>
  //               <Styled.CheckCircle>
  //                 {question.value === index && <i className="xi-check-min" />}
  //               </Styled.CheckCircle>
  //               <Styled.AnswerLabel>{option.value}</Styled.AnswerLabel>
  //             </Styled.AnswerOption>
  //           ))}
  //         </Styled.AnswerOptionList>
  //       );
  //     }
  //     return (
  //       <Styled.Question key={`${item.title}::${index}`}>
  //         <Styled.QuestionTitle>
  //           <Styled.Index>{this.pad(index + 1)}</Styled.Index>
  //           <div>{item.title}</div>
  //         </Styled.QuestionTitle>
  //         {answer}
  //       </Styled.Question>
  //     );
  //   });
  // };
}

export default ApplyStep3;
