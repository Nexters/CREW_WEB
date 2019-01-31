import React, { PureComponent, HTMLAttributes } from 'react'
import * as Styled from './styled'

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  src: string
  borderColor: string
  fontColor: string
}
interface State {}

class LoginButton extends PureComponent<Props, State> {
  public render() {
    const { src } = this.props
    return (
      <Styled.LoginButton {...this.props}>
        <Styled.Logo src={src} />
        {this.props.children}
      </Styled.LoginButton>
    )
  }
}

export default LoginButton
