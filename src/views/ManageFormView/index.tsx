import React, { PureComponent } from "react";
import { QuestionType } from "models/Form";
import { Gnb, FormItem } from "components";

import * as Styled from "./styled";

class ManageForm extends PureComponent {
  public render() {
    return (
      <Styled.Container>
        <Gnb title='서류심사' subTitle='지원자관리' />
        <Styled.Body>
          <Styled.FormList>
            <FormItem
              type={QuestionType.SingleLine}
              index={1}
              title='지원자가 NEXTERS에 지원하게 된 동기는 무엇인가요?'
            />
            <FormItem
              type={QuestionType.MultiLine}
              index={2}
              title='지원자가 NEXTERS에 지원하게 된 동기는 무엇인가요?'
            />
            <FormItem
              type={QuestionType.Select}
              index={3}
              title='지원자가 NEXTERS에 지원하게 된 동기는 무엇인가요?'
            />
          </Styled.FormList>
        </Styled.Body>
      </Styled.Container>
    );
  }
}

export default ManageForm;
