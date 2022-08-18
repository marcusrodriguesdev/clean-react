import React, { memo } from 'react'
import Spinner from '../Spinner/Spinner'
import Styles from './FormStatus.styles.scss'

const FormStatus: React.FC = () => {
  return (
    <div className={Styles.errorWrap}>
      <Spinner className={Styles.spinner} />
      <span className={Styles.error}>Erro</span>
    </div>
  )
}

export default memo(FormStatus)
