import styled from "styled-components";

import { MAIN_COLOR, GRAY, BLACK } from "constants/colors";

export interface TabItemProps {
  isSelected: boolean;
}

export const Gnb = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  background: white;
  width: 100vw;
  height: 200px;
  box-shadow: 0 2px 16px 7px rgba(223, 223, 223, 0.5);
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 1400px;
`;

export const Title = styled.h1`
  font-size: 40px;
  margin: 0;
`;

export const Subtitle = styled.h2`
  font-size: 16px;
  font-weight: normal;
  color: ${MAIN_COLOR};
  margin: 0;
  margin-bottom: 20px;
`;

export const Tab = styled.ul`
  position: absolute;
  list-style: none;
  margin: 0;
  padding: 0;
  bottom: 0;
`;

export const TabItem = styled.li<TabItemProps>`
  display: inline-block;
  width: 70px;
  text-align: center;
  padding-bottom: 7px;
  border-bottom: 3px solid
    ${(props) => (props.isSelected ? MAIN_COLOR : "transparent")};
  color: ${(props) => (props.isSelected ? BLACK : GRAY)};
  margin-right: 30px;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }
`;

const MenuList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Menu = styled.li`
  display: inline-block;
  margin-right: 0.5rem;

  :last-child {
    margin-right: 0;
  }
`;
