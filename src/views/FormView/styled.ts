import styled from 'styled-components'
import { BG_GRAY, WHITE, YELLOW } from 'constants/colors'

export const FormView = styled.div`
  display: flex;
`

export const LeftContiainer = styled.div`
  display: flex;
  /* width: calc(100% - 500px); */
  flex-direction: column;
  width: calc(50%);
  height: 100vh;
  /* background: ${BG_GRAY}; */
  background: ${WHITE};
  justify-content: center;
  /* align-items: center; */
`
export const TitleArea = styled.div`
  font-size: 80px;
  color: #423f43;
`

export const DescArea = styled.div`
  font-size: 22px;
  color: #b8b8b8;
`

export const RightContiainer = styled.div`
  display: flex;
  /* width: calc(100% - 500px); */
  flex-direction: column;
  /* width: calc(50%); */
  height: 100vh;
  /* background: ${BG_GRAY}; */
  background: ${WHITE};
  justify-content: center;
  /* align-items: center; */
`

export const completeButton = styled.button`
  width: 676px;
  height: 73px;
  font-size: 20px;
  font-family: NanumSquareR;
`

export const TextinputContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${YELLOW};
  /* width: calc(50%); */
  /* font-size: 80px;
  color: #423f43; */
`
