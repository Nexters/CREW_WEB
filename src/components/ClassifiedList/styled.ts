import styled from "styled-components";
import { MAIN_COLOR, LIGHT_GRAY } from "constants/colors";

export const Container = styled.div`
  width: 355px;
  height: 80%;
  max-height: 80%;
  overflow-y: scroll;
  border: 0.5px solid ${LIGHT_GRAY};
  border-radius: 4px;
  padding: 26px 31px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  margin-bottom: 15px;
`;

export const Count = styled.span`
  color: ${MAIN_COLOR};
`;

export const Body = styled.div`
  height: 80%;
  padding: 0;
  background: white;
  border-radius: 4px;
  overflow-y: scroll;
`;
