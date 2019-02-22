import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

import { MAIN_COLOR } from "constants/colors";

import * as Styled from "./styled";

class SelectPositionView extends PureComponent {
  public render() {
    return (
      <Styled.Conatiner>
        <Styled.LeftContainer>
          <Link to="/form">
            <Styled.Body>
              <Styled.PositionEN color={MAIN_COLOR}>DESIGNER</Styled.PositionEN>
              <Styled.PositionKR>디자이너</Styled.PositionKR>
              <Styled.Descritpion>
                넥스터즈에서는 UX/UI 어쩌고 저쩌고 넥스터즈에서는 UX/UI 어쩌고
                저쩌고 넥스터즈에서는 UX/UI 어쩌고 저쩌고{" "}
              </Styled.Descritpion>
            </Styled.Body>
          </Link>
        </Styled.LeftContainer>
        <Styled.RightContainer>
          <Link to="/form">
            <Styled.Body>
              <Styled.PositionEN color="white">DEVELOPER</Styled.PositionEN>
              <Styled.PositionKR color="white">개발자</Styled.PositionKR>
              <Styled.Descritpion color="white">
                넥스터즈에서는 UX/UI 어쩌고 저쩌고 넥스터즈에서는 UX/UI 어쩌고
                저쩌고 넥스터즈에서는 UX/UI 어쩌고 저쩌고{" "}
              </Styled.Descritpion>
            </Styled.Body>
          </Link>
        </Styled.RightContainer>
      </Styled.Conatiner>
    );
  }
}

export default SelectPositionView;
