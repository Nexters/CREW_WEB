import styled from "styled-components";
import { Props } from "./index";

export const Container = styled.button<Props>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background: #979797;
  border-radius: 50%;
  color: white;
  font-size: ${(props) => props.size / 2}px;
  cursor: pointer;
`;
