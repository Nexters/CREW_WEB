import React, { PureComponent, HTMLAttributes } from "react";

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
        <Styled.Thumbnail src={applicant.profileUrl} />
        <Styled.Name>{applicant.name}</Styled.Name>
      </Styled.Container>
    );
  }
}

export default ApplicantItem;
