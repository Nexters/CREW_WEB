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
  selectedTab: TabItem;
}

interface TabItem {
  label: Position;
  value: string;
}

const tabItems: TabItem[] = [
  {
    label: Position.Developer,
    value: "developer"
  },
  {
    label: Position.Designer,
    value: "designer"
  }
];

class Gnb extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selectedTab: tabItems[0]
    };
  }

  public componentDidMount() {
    const { history, location } = this.props;
    const { selectedTab } = this.state;
    if (location.search === "") {
      history.replace({
        pathname: location.pathname,
        search: qs.stringify({
          ...qs.parse(location.search.slice(1)),
          tab: selectedTab.value
        })
      });
    }
  }

  public render() {
    return (
      <Styled.Gnb {...this.props}>
        <Styled.Container>
          <div>
            <Styled.Subtitle>{this.props.subTitle}</Styled.Subtitle>
            <Styled.Title>{this.props.title}</Styled.Title>
          </div>
          {this.renderTab()}
        </Styled.Container>
      </Styled.Gnb>
    );
  }

  private renderTab = () => {
    const { selectedTab } = this.state;
    return (
      <Styled.Tab>
        {tabItems.map((item) => (
          <Styled.TabItem
            key={item.label}
            onClick={this.handleClickTabItem(item)}
            isSelected={item === selectedTab}
          >
            {item.label}
          </Styled.TabItem>
        ))}
      </Styled.Tab>
    );
  };

  private handleClickTabItem = (item: TabItem) => () => {
    const { history, location } = this.props;
    history.push({
      pathname: location.pathname,
      search: qs.stringify({
        ...qs.parse(location.search.slice(1)),
        tab: item.value
      })
    });
    this.setState({
      selectedTab: item
    });
  };
}

export default withRouter(Gnb);
