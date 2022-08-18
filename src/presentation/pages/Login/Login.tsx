import React from 'react'
import Styles from './Login.styles.scss'
import Spinner from '@/presentation/components/Spinner/Spinner'
import Header from '@/presentation/components/LoginHeader/LoginHeader'
import Footer from '@/presentation/components/Footer/Footer'
import Input from '@/presentation/components/Input/Input'

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <Header />
      <form className={Styles.form}>
        <h2>Login</h2>
        <Input type="email" name="email" placeholder="Digite seu e-mail" />
        <Input type="password" name="password" placeholder="Digite sua senha" />
        <button className={Styles.submit} type="submit">Entrar</button>
        <span className={Styles.link}>Criar conta</span>
        <div className={Styles.errorWrap}>
          <Spinner className={Styles.spinner} />
          <span className={Styles.error}>Erro</span>
        </div>
      </form>
      <Footer />
    </div>
  )
}

export default Login
