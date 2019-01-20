import React, { PureComponent } from "react";
import { SelectCard } from "components";
import * as Styled from "./styled";

class SelectPositionView extends PureComponent {
  public render() {
    return (
      <Styled.Container>
        <div>
          <Styled.Title>지원 직군을 선택해주세요.</Styled.Title>
          <Styled.CardConatiner>
            <SelectCard>디자이너</SelectCard>
            <SelectCard>개발자</SelectCard>
          </Styled.CardConatiner>
        </div>
      </Styled.Container>
    );
  }
}

export default SelectPositionView;
