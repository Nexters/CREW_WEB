import React, { PureComponent } from "react";
import { SelectCard } from "components";
import * as Styled from "./styled";

class SelectPositionView extends PureComponent {
  public render() {
    return (
      <div>
        <Styled.BackgroundTop />
        <Styled.BackgroundBottom />
        <Styled.Container>
          <div>
            <Styled.Title>지원 직군을 선택해주세요.</Styled.Title>
            <Styled.CardConatiner>
              <SelectCard
                label="디자이너"
                description="지원자 리스트를 확인할 수 있습니다."
              />
              <SelectCard
                label="개발자"
                description="지원폼의 수정 및 관리가 가능합니다."
              />
            </Styled.CardConatiner>
          </div>
        </Styled.Container>
      </div>
    );
  }
}

export default SelectPositionView;
