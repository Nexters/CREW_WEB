import styled from "styled-components";
import { BG_GRAY, LIGHT_MAIN_COLOR } from "constants/colors";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${BG_GRAY};
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.header`
  width: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 21px;
`;

export const Title = styled.h1`
  font-size: 40px;
  margin: 0;
  padding: 0;
`;

export const Body = styled.div`
  display: flex;
`;

export const Left = styled.div`
  margin-right: 43px;
`;

export const Right = styled.div``;
