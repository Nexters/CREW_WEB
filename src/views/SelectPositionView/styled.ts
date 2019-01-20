import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-height: 100vh;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 30px;
  margin: 0;
  margin-bottom: 37px;
`;

export const CardConatiner = styled.div`
  > div {
    margin-right: 46px;

    :last-child {
      margin-right: 0;
    }
  }
`;
