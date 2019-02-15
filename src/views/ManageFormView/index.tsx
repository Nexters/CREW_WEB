import React, { PureComponent } from "react";
import { QuestionType } from "models/Form";
import { Gnb, FormItem } from "components";

class ManageForm extends PureComponent {
  public render() {
    return (
      <div>
        <Gnb title='서류심사' subTitle='지원자관리' />
        <FormItem type={QuestionType.MultiLine} index={1} />
      </div>
    );
  }
}

export default ManageForm;
