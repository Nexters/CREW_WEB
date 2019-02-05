import styled from "styled-components";
import { MAIN_COLOR, LIGHT_GRAY } from "constants/colors";

export const Container = styled.div`
  width: 355px;
  height: 40%;
  border: 0.5px solid ${LIGHT_GRAY};
  border-radius: 4px;
  padding: 22px 10px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  padding: 0 25px;
  margin-bottom: 15px;
`;

export const Count = styled.span`
  color: ${MAIN_COLOR};
`;

export const Body = styled.div`
  height: 80%;
  padding: 0 15px;
  background: white;
  border-radius: 4px;
  overflow-y: scroll;
`;
