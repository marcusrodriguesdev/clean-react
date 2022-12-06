import { Login } from '@/presentation/pages'
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

type Props = {
  makeLogin: React.FC
}

const Router: React.FC<Props> = (props: Props) => {
  const { makeLogin } = props

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' component={makeLogin} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
