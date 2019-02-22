import React, { PureComponent, HTMLAttributes } from "react";
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { History } from "history";
import qs from "querystring";

import { Position } from "models/Applicant";
import { changePosition } from "actions/applicants";
import { AppState } from "reducers/rootReducer";
import { replaceUrlQuery, getQuery } from "utils/historyHelper";

import * as Styled from "./styled";

export interface Props
  extends HTMLAttributes<HTMLDivElement>,
    RouteComponentProps {
  changePosition: (position: Position, history: History<any>) => void;
  selectedPosition: Position;
  subTitle: string;
  title: string;
}
interface State {
  selectedStep: string;
}

interface TabItem {
  label: string;
  value: Position;
}

interface Step {
  step: string;
  label: string;
}

const TAB_ITEMS: TabItem[] = [
  {
    label: "개발자",
    value: Position.Developer,
  },
  {
    label: "디자이너",
    value: Position.Designer,
  },
];

const STEPS = [
  {
    step: "01",
    label: "서류 심사",
  },
  {
    step: "02",
    label: "면접 심사",
  },
  {
    step: "03",
    label: "최종 합격",
  },
];

class Gnb extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selectedStep: STEPS[0].step,
    };
  }

  public componentDidMount() {
    const { history, location } = this.props;
    const { selectedStep } = this.state;
    if (location.search === "") {
      replaceUrlQuery(history, {
        step: selectedStep,
        tab: Position.Developer,
      });
    } else {
      const { tab, step } = getQuery(history.location);
      this.setState({
        selectedStep: step as string,
      });
      this.props.changePosition(tab as Position, history);
    }
  }

  public render() {
    const { selectedStep } = this.state;
    return (
      <Styled.Gnb {...this.props}>
        <Styled.Container>
          <Styled.Subtitle>{this.props.subTitle}</Styled.Subtitle>
          <Styled.Body>
            <Styled.Left>
              <Styled.Title>{this.props.title}</Styled.Title>
            </Styled.Left>
            <Styled.Right>
              {STEPS.map((item) => (
                <Styled.Step
                  key={item.step}
                  isSelected={selectedStep === item.step}
                  onClick={this.handleClickStep(item)}
                >
                  <Styled.StepNumber>{item.step}</Styled.StepNumber>
                  <Styled.StepLabel>{item.label}</Styled.StepLabel>
                </Styled.Step>
              ))}
            </Styled.Right>
          </Styled.Body>
          {this.renderTab()}
        </Styled.Container>
      </Styled.Gnb>
    );
  }

  private renderTab = () => {
    const { selectedPosition } = this.props;
    return (
      <Styled.Tab>
        {TAB_ITEMS.map((item) => (
          <Styled.TabItem
            key={item.label}
            onClick={this.handleClickTabItem(item)}
            isSelected={item.value === selectedPosition}
          >
            {item.label}
          </Styled.TabItem>
        ))}
      </Styled.Tab>
    );
  };

  private handleClickStep = (item: Step) => () => {
    const { history, location } = this.props;
    history.push({
      pathname: location.pathname,
      search: qs.stringify({
        ...qs.parse(location.search.slice(1)),
        step: item.step,
      }),
    });
    this.setState({
      selectedStep: item.step,
    });
  };

  private handleClickTabItem = (item: TabItem) => () => {
    const { history } = this.props;
    this.props.changePosition(item.value, history);
  };
}

const mapStateToProps = (state: AppState) => ({
  selectedPosition: state.applicantReducer.selectedPosition,
});
const mapDispatchToProps = {
  changePosition,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default withRouter(withConnect(Gnb));
