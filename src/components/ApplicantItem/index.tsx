import React, { PureComponent, HTMLAttributes, Fragment } from "react";
import { Checkbox } from "@material-ui/core";

import { Applicant } from "models/Applicant";
import { pad } from "utils/pad";

import * as Styled from "./styled";

export enum ApplicantComponentType {
  Default = "default",
  Simple = "simple",
}

export interface Props extends HTMLAttributes<HTMLDivElement> {
  type: ApplicantComponentType;
  applicant: Applicant;
  number: number;
  onCheck: (applicant: Applicant) => void;
}

interface State {}

class ApplicantItem extends PureComponent<Props, State> {
  public static defaultProps: Partial<Props> = {
    type: ApplicantComponentType.Default,
  };

  public render() {
    return (
      <Styled.Container {...this.props}>
        <Styled.Left>{this.renderLeftContainer()}</Styled.Left>
        <Styled.Right>{this.renderRightContainer()}</Styled.Right>
      </Styled.Container>
    );
  }

  private renderLeftContainer = () => {
    const { type, applicant, number } = this.props;
    if (type === "default") {
      return (
        <Fragment>
          <Styled.Number>{pad("000", number)}</Styled.Number>
          <Styled.Thumbnail src={applicant.profileUrl} />
          <div>
            <Styled.Position>{applicant.position}</Styled.Position>
            <Styled.Name>{applicant.name}</Styled.Name>
          </div>
        </Fragment>
      );
    } else if (type === "simple") {
      return (
        <Fragment>
          <Styled.Thumbnail src={applicant.profileUrl} />
          <div>
            <Styled.Position>{applicant.position}</Styled.Position>
            <Styled.Name>{applicant.name}</Styled.Name>
          </div>
        </Fragment>
      );
    }
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
          <Checkbox onChange={this.handleChangeCheckBox} />
        </Fragment>
      );
    } else if (type === "simple") {
      return (
        <Styled.Xmark>
          <i className="xi-x xi-close" />
        </Styled.Xmark>
      );
    }
  };

  private handleChangeCheckBox = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    this.props.onCheck(this.props.applicant);
  };
}

export default ApplicantItem;
