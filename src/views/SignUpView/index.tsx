import React, { PureComponent, ChangeEvent } from "react";
import {
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  FormControl,
} from "@material-ui/core";
import Step from "@material-ui/core/Step";
import * as Styled from "./styled";
import { string } from "prop-types";
import { InputType } from "src/models/Input";
import { TextInput } from "src/components";

interface RadioOption {
  label: string;
  value: string;
}
interface Props {}
interface State {
  textField: string;
  selectedJob: string;
}

const JOB_MENU: RadioOption[] = [
  {
    label: "학생",
    value: "student",
  },
  {
    label: "취준생",
    value: "jobSeeker",
  },
  {
    label: "직장인",
    value: "worker",
  },
];

class ApplyStep1 extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      textField: "",
      selectedJob: JOB_MENU[0].value,
    };
  }
  public render() {
    return (
      <Styled.FormView>
        <Styled.Container>
          <Styled.LeftContainer>
            <Styled.TitleArea>회원가입</Styled.TitleArea>
            <Styled.DescArea>
              회원가입에 필요한 최소한의 데이터를 입력해주세요
            </Styled.DescArea>
          </Styled.LeftContainer>
          <Styled.RightContainer>
            <Styled.TextInputContainer>
              <TextInput label="이름" type={InputType.STRING} />
              <TextInput label="나이" type={InputType.NUMBER} />
              <TextField
                label="E-mail"
                value={this.state.textField}
                onChange={this.handleChangeTextField}
                margin="normal"
              />
              <TextField
                label="전화번호"
                value={this.state.textField}
                onChange={this.handleChangeTextField}
                margin="normal"
              />
              <Styled.SelectWorkContainer>
                <FormControl>
                  <FormLabel>직업</FormLabel>
                  <RadioGroup
                    value={this.state.selectedJob}
                    onChange={this.handleChangeRadio}
                    row
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    {JOB_MENU.map(option => (
                      <FormControlLabel
                        label={option.label}
                        value={option.value}
                        control={<Radio />}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              </Styled.SelectWorkContainer>
            </Styled.TextInputContainer>

            <Styled.buttonContainer>
              <Styled.completeButton>완료</Styled.completeButton>
            </Styled.buttonContainer>
          </Styled.RightContainer>
        </Styled.Container>
      </Styled.FormView>
    );
  }

  private handleChangeRadio = (e: ChangeEvent<{}>, value: string) => {
    this.setState({ selectedJob: value });
  };

  private handleChangeTextField = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    this.setState({
      textField: value,
    });
  };
}

export default ApplyStep1;
