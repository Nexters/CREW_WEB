import React, { PureComponent, ChangeEvent } from "react";
import { TextField } from "@material-ui/core";

import { ProgressiveBar } from "components";
import * as Styled from "./styled";

interface Props {}
interface State {
  textField: string;
}

class FormView extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      textField: "",
    };
  }

  public render() {
    return (
      <Styled.FormView>
        <ProgressiveBar index={3} max={7} />
        <Styled.Body>
          <Styled.LeftContainer>
            <Styled.NumberText>02</Styled.NumberText>
            <Styled.TitleArea>
              개발-디자인 협업 관련 경험이 있으신가요?
            </Styled.TitleArea>
          </Styled.LeftContainer>
          <Styled.RightContainer>
            <Styled.AnswerContainer>
              <Styled.textarea />
              <Styled.btnSave>임시저장</Styled.btnSave>
            </Styled.AnswerContainer>
          </Styled.RightContainer>
        </Styled.Body>
      </Styled.FormView>
    );
  }

  private handleChangeTextField = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    this.setState({
      textField: value,
    });
  };
}

export default FormView;
