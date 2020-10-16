import React from 'react'
import { BoxProps } from '../types'
import './ButtonBox.css'

const ButtonBox: React.FunctionComponent<BoxProps> = ({ children, buttonBoxStyle }) => {
  return (
    <div style={buttonBoxStyle} className='button-box'>
      <div className='button-box-content-container'>
        <div className='button-box-content'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default ButtonBox