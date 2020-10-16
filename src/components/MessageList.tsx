import React from 'react'
import ArrowButton from './ArrowButton'
import ButtonBox from './ButtonBox'
import Box from './Box'
import { Message, MessageListProps } from '../types'
import './MessageList.css'


const MessageListItem: React.FunctionComponent<Message> = ({user, text})  => {
  return (
    <div className='message-list--item'>
      <span>{user}</span>: {text}
    </div>
  )
}

const MessageListScrollBar: React.FunctionComponent = ({}) => {
  return (
    <div className='message-list-scrollbar'>
      <ArrowButton arrowType='up' onClick={() => console.warn('up arrow click')}/>
        <ButtonBox buttonBoxStyle={{ height: 9 }} />
      <ArrowButton arrowType='down' onClick={() => console.warn('down arrow click')} />
    </div>
  )
}


const MessageList: React.FunctionComponent<MessageListProps> = ({messageList}) => {
  console.log('MessageList', { messageList })
  return (
    <Box>
      <div className='message-list-container'>
        <div className='message-list'>
          {messageList.map((messageItem, index) => <MessageListItem {...messageItem} key={`message_list_item_${index}`} />)}
        </div>
        <MessageListScrollBar/>
      </div>
    </Box>
  )
}

export default MessageList
