import React, { PureComponent, HTMLAttributes, Fragment } from "react";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import { Checkbox } from "@material-ui/core";

import { Applicant } from "models/Applicant";
import { pad } from "utils/pad";
import { getPositionKORLabel } from "utils/position";

import * as Styled from "./styled";

export enum ApplicantComponentType {
  Default = "default",
  Simple = "simple",
}

export interface Props
  extends RouteComponentProps,
    HTMLAttributes<HTMLDivElement> {
  type: ApplicantComponentType;
  applicant: Applicant;
  number: number;
  onCheck: (applicant: Applicant) => void;
  onCancel?: (applicant: Applicant) => void;
  isChecked?: boolean;
}

interface State {}

class ApplicantItem extends PureComponent<Props, State> {
  public static defaultProps: Partial<Props> = {
    type: ApplicantComponentType.Default,
    isChecked: false,
  };

  public render() {
    return (
      <Styled.Container {...this.props}>
        <Link to={`/resume?id=${this.props.applicant.id}`}>
          <Styled.Left>{this.renderLeftContainer()}</Styled.Left>
        </Link>
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
            <Styled.Position>
              {getPositionKORLabel(applicant.position)}
            </Styled.Position>
            <Styled.Name>{applicant.name}</Styled.Name>
          </div>
        </Fragment>
      );
    } else if (type === "simple") {
      return (
        <Fragment>
          <Styled.Thumbnail src={applicant.profileUrl} />
          <div>
            <Styled.Position>
              {getPositionKORLabel(applicant.position)}
            </Styled.Position>
            <Styled.Name>{applicant.name}</Styled.Name>
          </div>
        </Fragment>
      );
    }
  };

  private renderRightContainer = () => {
    const { type, applicant } = this.props;

    if (type === "default") {
      return (
        <Fragment>
          <Styled.CircleContainer>
            {applicant.scores.map((score) => (
              <Styled.Circle active={score.score !== 0} />
            ))}
          </Styled.CircleContainer>
          <Styled.Score>{applicant.avg}점</Styled.Score>
          <Checkbox
            checked={this.props.isChecked}
            onChange={this.handleChangeCheckBox}
          />
        </Fragment>
      );
    } else if (type === "simple") {
      return (
        <Styled.Xmark onClick={this.handleClickXmark}>
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

  private handleClickXmark = () => {
    const { onCancel, applicant } = this.props;
    if (onCancel) {
      onCancel(applicant);
    }
  };
}

export default withRouter(ApplicantItem);
