import React from 'react'
import { FormProps } from '../types'

const Form: React.FunctionComponent<FormProps> = ({children, onSubmit}) => {
  return (
    <form onSubmit={onSubmit}>
      {children}
    </form>
  )
}

export default Form