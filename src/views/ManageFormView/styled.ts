import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Body = styled.div`
  margin-top: 35px;
  width: 1400px;
`;

export const FormList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  > div {
    margin-bottom: 35px;

    :last-child {
      margin-bottom: 0;
    }
  }
`;
