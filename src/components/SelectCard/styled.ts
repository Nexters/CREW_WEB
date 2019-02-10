import styled from "styled-components";

import { GRAY2 } from "constants/colors";

export const Container = styled.div`
  display: inline-block;
  position: relative;
  width: 320px;
  height: 320px;
  background: white;
  box-shadow: 0 3px 10px 4px rgba(176, 176, 176, 0.5);
  border-radius: 4px;
`;

export const TextArea = styled.div`
  position: absolute;
  bottom: 16px;
`;

export const TextLabel = styled.div`
  left: 50px;
  font-size: 32px;
`;

export const Description = styled.div`
  font-size: 16px;
  color: ${GRAY2};
`;
