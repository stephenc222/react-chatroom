import React from 'react'
import { MessageInputProps } from '../types'
import Box from './Box'
import './MessageInput.css'

const MessageInput: React.FunctionComponent<MessageInputProps> = ({ message, onChange}) => {
  return (
    <Box>
      <div className='message-input'>
        <textarea value={message} onChange={onChange}/>
      </div>
    </Box>
  )
}

export default MessageInput