import styled, { css } from "styled-components";
import { YELLOW, GRAY2 } from "constants/colors";

import { Props, ApplicantComponentType } from "./index";

export const Container = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: white;
  border-radius: 4px;
  margin-bottom: 11px;
  transition: 0.3s;

  ${(props: Props) =>
    props.type === ApplicantComponentType.Default &&
    css`
      padding: 10px 20px;

      :hover {
        box-shadow: 0 0 5px 2px rgba(212, 212, 212, 0.5);
        transition: 0.3s;
      }
    `}
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
`;

export const Thumbnail = styled.img`
  display: inline-block;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  margin-right: 16px;
`;

export const Number = styled.div`
  font-size: 24px;
  font-family: "NanumSquareL";
  margin-right: 30px;
`;

export const Name = styled.div`
  font-size: 18px;
`;

export const Position = styled.div`
  font-size: 10px;
  color: ${GRAY2};
  margin-bottom: 5px;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
`;

export const Score = styled.div`
  font-family: "NanumSquareL";
  font-size: 18px;
  margin-right: 30px;
`;

export const CircleContainer = styled.div`
  display: flex;
  margin-right: 30px;
`;

export const Circle = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${YELLOW};
  margin-right: 5px;

  :last-child {
    margin-right: 0;
  }
`;

export const Xmark = styled.div`
  font-size: 10px;
  color: #d9d9d9;
`;
