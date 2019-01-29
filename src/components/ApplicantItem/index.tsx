import React, { PureComponent, HTMLAttributes } from "react";
import { Checkbox } from "@material-ui/core";

import { Applicant } from "models/Applicant";
import * as Styled from "./styled";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  applicant: Applicant;
}
interface State {}

class ApplicantItem extends PureComponent<Props, State> {
  public render() {
    const { applicant } = this.props;
    return (
      <Styled.Container {...this.props}>
        <Styled.Left>
          <Styled.Thumbnail src={applicant.profileUrl} />
          <div>
            <Styled.Position>{applicant.position}</Styled.Position>
            <Styled.Name>{applicant.name}</Styled.Name>
          </div>
        </Styled.Left>
        <div>
          <Checkbox />
        </div>
      </Styled.Container>
    );
  }
}

export default ApplicantItem;
