import React from 'react'
import { ArrowButtonProps } from '../types'
import ButtonBox from './ButtonBox'
import './ArrowButton.css'

const ArrowButton: React.FunctionComponent<ArrowButtonProps> = ({ arrowType = 'up', onClick}) => {
  return (
    <ButtonBox>
      <button className={`arrow arrow-${arrowType}`} onClick={onClick} />
    </ButtonBox>
  )
}

export default ArrowButton