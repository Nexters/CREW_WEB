import React, { PureComponent } from "react";
import { QuestionType } from "models/Form";
import { Gnb, FormItem, AddButton } from "components";

import * as Styled from "./styled";

import mocked from "mocks/Forms";

class ManageForm extends PureComponent {
  public render() {
    return (
      <Styled.Container>
        <Gnb title='서류심사' subTitle='지원자관리' />
        <Styled.Body>
          <Styled.FormList>
            {mocked.map((question, idx) => (
              <FormItem
                question={question}
                key={`${question.title}__${idx}`}
                index={idx + 1}
              />
            ))}
          </Styled.FormList>
        </Styled.Body>
        <Styled.Bottom>
          <AddButton size={80} />
        </Styled.Bottom>
      </Styled.Container>
    );
  }
}

export default ManageForm;
