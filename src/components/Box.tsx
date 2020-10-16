import React from 'react'
import { BoxProps } from '../types'
import './Box.css'

const Box: React.FunctionComponent<BoxProps> = ({children, boxStyle}) => {
  return (
    <div style={boxStyle} className='box'>
      <div className='box-content'>
        {children}
      </div>
    </div>
  )
}

export default Box