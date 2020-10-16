import React from 'react'
import { StatusDropdownProps } from '../types'
import ArrowButton from './ArrowButton'
import Box from './Box'
import './StatusDropdown.css'

const StatusDropdown: React.FunctionComponent<StatusDropdownProps> = ({ onClick }) => {
  return (
    <Box>
      <div className='status-dropdown'>
        <span>StatusDropdown</span>
        <ArrowButton onClick={onClick} arrowType='down' />
      </div>
    </Box>
  )
}

export default StatusDropdown