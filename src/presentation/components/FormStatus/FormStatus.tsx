import React, { memo, useContext } from 'react'
import Spinner from '../Spinner/Spinner'
import Styles from './FormStatus.styles.scss'
import Context from '@/presentation/context/form/FormContext'

const FormStatus: React.FC = () => {
  const { isLoading, errorMessage } = useContext(Context)
  return (
    <div data-testid="error-wrap" className={Styles.errorWrap}>
      { isLoading && <Spinner className={Styles.spinner} /> }
      { errorMessage && <span className={Styles.error}>Erro</span>}
    </div>
  )
}

export default memo(FormStatus)
