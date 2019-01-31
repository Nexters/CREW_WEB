import styled from "styled-components";
import { Props } from "./index";

export const Container = styled.div`
  width: ${(props: Props) => props.width};
  height: ${(props: Props) => props.height};
  background: ${(props: Props) => props.background};
  box-shadow: 0 2px 16px 3px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`;
