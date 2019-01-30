import styled from "styled-components";
import { BG_GRAY, LIGHT_MAIN_COLOR } from "constants/colors";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${BG_GRAY};
  padding-top: 86px;
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

export const ApplicantList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ApplicantItem = styled.li`
  display: block;
  padding: 10px 0;
  border-bottom: 1px solid ${LIGHT_MAIN_COLOR};

  :last-child {
    border-bottom: none;
  }
`;
