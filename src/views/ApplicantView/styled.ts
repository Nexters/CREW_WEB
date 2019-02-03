import styled from "styled-components";
import { BG_GRAY, LIGHT_MAIN_COLOR } from "constants/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const Main = styled.div`
  width: 1400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
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
  justify-content: space-between;
`;

export const Left = styled.div`
  width: 990px;
  margin-right: 43px;
`;

export const Right = styled.div`
  width: 355px;
`;
