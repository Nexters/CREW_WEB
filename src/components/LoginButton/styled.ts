import styled from 'styled-components'
import { BG_GRAY } from 'constants/colors'

import { Props } from './index'

export const LoginButton = styled.button`
  display: flex;
  align-items: center;
  width: 285px;
  height: 60px;
  background: ${BG_GRAY};
  border-radius: 4px;
  padding-left: 67px;
  margin-bottom: 1rem;
  background: white;
  border-radius: 4px;
  border: ${(props: Props) => `2px solid ${props.borderColor}`};
  color: ${(props: Props) => `${props.fontColor}`};
  font-weight: bold;
  cursor: pointer;

  :focus {
    outline: none;
  }
`

export const Logo = styled.img`
  width: 19px;
  height: 19px;
  margin-right: 22px;
`
