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

export const LeftHeader = styled.div`
  font-size: 12px;
  padding-left: 21px;
`;

export const LeftButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  > button {
    margin-right: 18px;

    :last-child {
      margin-right: 0;
    }
  }
`;

export const Right = styled.div`
  width: 355px;
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 20px;

  :last-child {
    margin-bottom: 0;
  }

  > button {
    margin-top: 18px;
  }
`;
