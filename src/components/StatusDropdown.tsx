import React, { useRef, useState, useEffect } from 'react'
import { StatusDropdownProps } from '../types'
import ArrowButton from './ArrowButton'
import Box from './Box'
import './StatusDropdown.css'

const STATUS_LIST: string[] = ['Offline', 'Busy', 'Eating Pizza']

const MAP_DOT_COLOR: { [key: string]: string } = {
  Offline: '#DF251D',
  Busy: '#F8A811',
  'Eating Pizza': '#40C28D'
}

interface StatusDropdownItemProps {
  onClick: (value: string) => void
  value: string
}

const StatusDropdownItem: React.FunctionComponent<StatusDropdownItemProps> = ({ onClick, value }) => {
  return (
    <div onClick={() => onClick(value)} style={{display: 'flex', alignItems: 'center', paddingTop: 8, paddingBottom: 8, paddingLeft: 8 }}>
      <span style={{width: 8, height: 8, borderRadius: '50%', backgroundColor: MAP_DOT_COLOR[value]}}/><span style={{paddingLeft: 8}}>{value}</span>
    </div>
  )
}


const StatusDropdown: React.FunctionComponent<StatusDropdownProps> = ({ status, setStatus }) => {
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(0)
  const [left, setLeft] = useState(0)
  const [show, toggleShow] = useState(false)

  useEffect(() => {
    if (dropdownRef.current) {
      const { width, left } = dropdownRef.current?.getBoundingClientRect()
      setWidth(width)
      setLeft(left)
    }
  }, [dropdownRef])
  const onDropdownClick = () => {
    toggleShow(!show)
  }
  const onClick = (value: string) => {
    setStatus(value)
    toggleShow(false)
  }
  return (
    <Box>
      <div ref={dropdownRef} className='status-dropdown'>
        <div style={{display: 'flex', alignItems: 'center', paddingTop: 8, paddingBottom: 8, paddingLeft: 8}}>
          <span style={{width: 8, height: 8, borderRadius: '50%', backgroundColor: MAP_DOT_COLOR[status]}}/><span style={{paddingLeft: 8}}>{status}</span>
        </div>
        <ArrowButton onClick={onDropdownClick} arrowType='down' />
      </div>
      <div
        style={{
          zIndex: 2,
          background: '#C3C3C3',
          position: 'absolute',
          display: 'flex',
          width: width + 5,
          left: left - 4,
        }}>
      {show && <Box boxStyle={{margin: 0, width: '100%', cursor: 'pointer'}}>
        {STATUS_LIST.map( value => <StatusDropdownItem value={value} onClick={onClick} />)}
      </Box>}
      </div>
    </Box>
  )
}

export default StatusDropdown