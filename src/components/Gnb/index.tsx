import React, { PureComponent, HTMLAttributes } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

import qs from "querystring";
import { Position } from "models/Applicant";

import * as Styled from "./styled";

export interface Props
  extends HTMLAttributes<HTMLDivElement>,
    RouteComponentProps {
  subTitle: string;
  title: string;
}
interface State {
  selectedTab: string;
  selectedStep: string;
}

interface TabItem {
  label: Position;
  value: string;
}

interface Step {
  step: string;
  label: string;
}

const TAB_ITEMS: TabItem[] = [
  {
    label: Position.Developer,
    value: "developer",
  },
  {
    label: Position.Designer,
    value: "designer",
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
      selectedTab: TAB_ITEMS[0].value,
      selectedStep: STEPS[0].step,
    };
  }

  public componentDidMount() {
    const { history, location } = this.props;
    const { selectedTab, selectedStep } = this.state;
    if (location.search === "") {
      history.replace({
        pathname: location.pathname,
        search: qs.stringify({
          ...qs.parse(location.search.slice(1)),
          tab: selectedTab,
          step: selectedStep,
        }),
      });
    } else {
      const { tab, step } = qs.parse(location.search.slice(1));
      this.setState({
        selectedStep: step as string,
        selectedTab: tab as string,
      });
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
    const { selectedTab } = this.state;
    return (
      <Styled.Tab>
        {TAB_ITEMS.map((item) => (
          <Styled.TabItem
            key={item.label}
            onClick={this.handleClickTabItem(item)}
            isSelected={item.value === selectedTab}
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
    const { history, location } = this.props;
    history.push({
      pathname: location.pathname,
      search: qs.stringify({
        ...qs.parse(location.search.slice(1)),
        tab: item.value,
      }),
    });
    this.setState({
      selectedTab: item.value,
    });
  };
}

export default withRouter(Gnb);
