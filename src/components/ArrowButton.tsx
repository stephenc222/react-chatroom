import React from 'react'
import { ArrowButtonProps } from '../types'
import ButtonBox from './ButtonBox'
import './ArrowButton.css'

const ArrowButton: React.FunctionComponent<ArrowButtonProps> = ({ arrowType = 'up', onClick, buttonBoxStyle}) => {
  return (
    <ButtonBox buttonBoxStyle={buttonBoxStyle} onClick={onClick} >
      <button className={`arrow arrow-${arrowType}`} />
    </ButtonBox>
  )
}

export default ArrowButton