import React, { PureComponent, HTMLAttributes, Fragment } from "react";
import { Checkbox } from "@material-ui/core";

import { Applicant } from "models/Applicant";

import * as Styled from "./styled";

export type ApplicantComponentType = "default" | "simple";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  onCheck: (applicant: Applicant) => void;
  applicant: Applicant;
  type: ApplicantComponentType;
  number: number;
}
interface State {}

class ApplicantItem extends PureComponent<Props, State> {
  public static defaultProps: Partial<Props> = {
    type: "default",
  };

  public render() {
    return (
      <Styled.Container {...this.props}>
        <Styled.Left>{this.renderLeftContainer()}</Styled.Left>
        <Styled.Right>{this.renderRightContainer()}</Styled.Right>
      </Styled.Container>
    );
  }

  private pad = (number: number) => {
    const base = "000";
    return (
      base.slice(0, base.length - number.toString().length) + number.toString()
    );
  };

  private renderLeftContainer = () => {
    const { type, applicant, number } = this.props;
    if (type === "default") {
      return (
        <Fragment>
          <Styled.Number>{this.pad(number)}</Styled.Number>
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
        <Fragment>
          <i className="xi-x xi-close" />
        </Fragment>
      );
    }
  };

  private handleChangeCheckBox = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (event.target.checked) {
      this.props.onCheck(this.props.applicant);
    }
  };
}

export default ApplicantItem;
