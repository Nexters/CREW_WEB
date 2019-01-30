import React, { PureComponent, HTMLAttributes } from "react";
import * as Styled from "./styled";

import { Paper } from "components";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  title: string;
}
interface State {}

class ClassifiedList extends PureComponent<Props, State> {
  public render() {
    const { title } = this.props;
    return (
      <Paper
        style={{ padding: "27px 45px" }}
        background="#e6e6f6"
        width="620px"
      >
        {title}
      </Paper>
    );
  }
}

export default ClassifiedList;
