import styled from "styled-components";

const Container = styled.div`
  background: red;
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

export default { Container, MenuList, Menu };
