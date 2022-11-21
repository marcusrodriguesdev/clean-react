import React, { memo, useContext } from 'react'
import Spinner from '../Spinner/Spinner'
import Styles from './FormStatus.styles.scss'
import Context from '@/presentation/context/form/FormContext'

const FormStatus: React.FC = () => {
  const { state } = useContext(Context)
  const { isLoading, mainError } = state

  return (
    <div data-testid="error-wrap" className={Styles.errorWrap}>
      { isLoading && <Spinner className={Styles.spinner} /> }
      { mainError && <span data-testid="main-error" className={Styles.error}>{mainError}</span> }
    </div>
  )
}

export default memo(FormStatus)
