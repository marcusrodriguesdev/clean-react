import React, { memo } from 'react'
import Logo from '../Logo/Logo'
import Styles from './LoginHeader.styles.scss'

const LoginHeader: React.FC = () => {
  return (
    <header className={Styles.header}>
      <Logo />
      <h1>4Dev - Enquetes para Programadores</h1>
    </header>
  )
}

export default memo(LoginHeader)
