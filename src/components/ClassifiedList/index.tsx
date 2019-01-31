import React, { PureComponent, HTMLAttributes } from "react";
import * as Styled from "./styled";

import { ApplicantList, Paper } from "components";
import { Applicant } from "models/Applicant";

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
      <Paper
        style={{ padding: "27px 45px", boxShadow: "0 2px 6px 3px #d6d6ff" }}
        background="#e6e6f6"
        width="620px"
      >
        <Styled.Header>
          <span>{title}</span>
          <Styled.Count>{applicants.length}</Styled.Count>
        </Styled.Header>
        <Styled.Body>
          <ApplicantList applicants={applicants} />
        </Styled.Body>
      </Paper>
    );
  }
}

export default ClassifiedList;
