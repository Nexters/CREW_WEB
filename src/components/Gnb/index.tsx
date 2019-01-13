import React, { PureComponent, HTMLAttributes } from "react";
import Styled from "./styled";

export interface Props extends HTMLAttributes<HTMLDivElement> {}
interface State {}

interface GnbMenu {
  key: string;
  label: string;
  path: string;
}

const menus: GnbMenu[] = [
  {
    key: "menu1",
    label: "menu1",
    path: "/"
  },
  {
    key: "menu2",
    label: "menu2",
    path: "/"
  }
];

class Gnb extends PureComponent<Props, State> {
  render() {
    return (
      <Styled.Container {...this.props}>
        <Styled.MenuList>
          {menus.map((menu) => (
            <Styled.Menu>{menu.label}</Styled.Menu>
          ))}
        </Styled.MenuList>
        test
      </Styled.Container>
    );
  }
}

export default Gnb;
