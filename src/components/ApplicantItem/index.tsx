import React, { PureComponent, HTMLAttributes, Fragment } from "react";
import { Checkbox } from "@material-ui/core";

import { Applicant } from "models/Applicant";

import * as Styled from "./styled";

export type ApplicantComponentType = "default" | "simple";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  applicant: Applicant;
  type: ApplicantComponentType;
}
interface State {}

class ApplicantItem extends PureComponent<Props, State> {
  static defaultProps: Partial<Props> = {
    type: "default"
  };

  public render() {
    const { applicant } = this.props;
    return (
      <Styled.Container {...this.props}>
        <Styled.Left>{this.renderLeftContainer()}</Styled.Left>
        <Styled.Right>{this.renderRightContainer()}</Styled.Right>
      </Styled.Container>
    );
  }

  private renderLeftContainer = () => {
    const { type, applicant } = this.props;
    if (type === "default") {
      return (
        <Fragment>
          <Styled.Number>001</Styled.Number>
          <Styled.Thumbnail src={applicant.profileUrl} />
          <div>
            <Styled.Position>{applicant.position}</Styled.Position>
            <Styled.Name>{applicant.name}</Styled.Name>
          </div>
        </Fragment>
      );
    }
    return (
      <Fragment>
        <Styled.Thumbnail src={applicant.profileUrl} />
        <div>
          <Styled.Position>{applicant.position}</Styled.Position>
          <Styled.Name>{applicant.name}</Styled.Name>
        </div>
      </Fragment>
    );
  };
  private renderRightContainer = () => {
    const { type } = this.props;
    if (type === "default") {
      return (
        <Fragment>
          <Styled.CircleContainer>
            <Styled.Circle />
            <Styled.Circle />
            <Styled.Circle />
            <Styled.Circle />
            <Styled.Circle />
          </Styled.CircleContainer>
          <Styled.Score>80점</Styled.Score>
          <Checkbox />
        </Fragment>
      );
    }
  };
}

export default ApplicantItem;
