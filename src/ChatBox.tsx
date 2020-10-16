import React, { useState } from 'react'
import './ChatBox.css'

interface BoxProps {
  children?: React.ReactNode
  buttonBoxStyle?: React.CSSProperties
}

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

interface ArrowButtonProps {
  arrowType: string
  onClick: (event: React.FormEvent<HTMLButtonElement>) => void
}

const ArrowButton: React.FunctionComponent<ArrowButtonProps> = ({ arrowType = 'up', onClick}) => {
  return (
    <ButtonBox>
      <button className={`arrow arrow-${arrowType}`} onClick={onClick} />
    </ButtonBox>
  )
}

const Box: React.FunctionComponent<BoxProps> = ({children}) => {
  return (
    <div className='box'>
      <div className='box-content'>
        {children}
      </div>
    </div>
  )
}

interface StatusDropdownProps {
  onClick: (event: React.FormEvent<HTMLButtonElement>) => void
}

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

interface MessageFormProps {
  children?: React.ReactNode
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

const MessageForm: React.FunctionComponent<MessageFormProps> = ({children, onSubmit}) => {
  return (
    <form onSubmit={onSubmit}>
      {children}
    </form>
  )
}

interface Message {
  user: string
  text: string
}

interface MessageListProps {
  messageList: Message[]
}

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

interface MessageInputProps {
  message?: string
  onChange:(event: React.ChangeEvent<HTMLTextAreaElement>) => void 
}

const MessageInput: React.FunctionComponent<MessageInputProps> = ({ message, onChange}) => {
  return (
    <Box>
      <div className='message-input'>
        <textarea value={message} onChange={onChange}/>
      </div>
    </Box>
  )
}

const SubmitButton = () => {
  return (
    <div className='submit-button-container'>
      {/* <button className='submit-button--progress' type='submit'/> */}
      <button className='submit-button' type='submit'/>
    </div>
  )
}


const USER: string = 'jackAttack64'

const ChatBox = () => {
  const [message, setMessage] = useState('')
  const [messageList, setMessageList] = useState([{ user: USER, text: 'This is a message'}])
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!message) {
      return
    }
    const nextMessageList = messageList.slice()
    nextMessageList.push({ user: USER, text: message})
    setMessageList(nextMessageList)
    setMessage('')
  }
  const onStatusDropdownClick = () => console.log('onstatus click')
  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value)
  }
  return (
    <div className='chatbox-container'> 
    <StatusDropdown onClick={onStatusDropdownClick} />
    <MessageList messageList={messageList} />
    <MessageForm onSubmit={onSubmit}>
      <MessageInput message={message} onChange={onChange}/>
      <SubmitButton/>
    </MessageForm>
    </div>
  )
}

export default ChatBox
