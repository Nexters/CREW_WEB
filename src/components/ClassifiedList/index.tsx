import React, { PureComponent, HTMLAttributes } from "react";

import { ApplicantList, Paper } from "components";
import { Applicant } from "models/Applicant";
import { ApplicantComponentType } from "components/ApplicantItem";

import * as Styled from "./styled";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  title: string;
  applicants: Applicant[];
}
interface State {}

class ClassifiedList extends PureComponent<Props, State> {
  public static defaultProps: Partial<Props> = {
    applicants: [],
  };

  public render() {
    const { title, applicants } = this.props;
    return (
      <Styled.Container>
        <Styled.Header>
          <span>{title}</span>
          <Styled.Count>{applicants.length}</Styled.Count>
        </Styled.Header>
        <Styled.Body>
          <ApplicantList
            applicants={applicants}
            type={ApplicantComponentType.Simple}
          />
        </Styled.Body>
      </Styled.Container>
    );
  }
}

export default ClassifiedList;
