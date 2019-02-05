import React, { PureComponent, HTMLAttributes } from "react";

import { ApplicantList, Paper } from "components";
import { Applicant } from "models/Applicant";

import * as Styled from "./styled";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  title: string;
  applicants: Applicant[];
}
interface State {}

class ClassifiedList extends PureComponent<Props, State> {
  static defaultProps: Partial<Props> = {
    applicants: []
  };

  public render() {
    const { title, applicants } = this.props;
    return (
      <Paper style={{ padding: "25px" }}>
        <Styled.Header>
          <span>{title}</span>
          <Styled.Count>{applicants.length}</Styled.Count>
        </Styled.Header>
        <Styled.Body>
          <ApplicantList applicants={applicants} type="simple" />
        </Styled.Body>
      </Paper>
    );
  }
}

export default ClassifiedList;
