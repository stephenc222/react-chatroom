import React, { useState } from 'react'
import MessageList from '../MessageList'
import MessageInput from '../MessageInput'
import StatusDropdown from '../StatusDropdown'
import Form from '../Form'
import SubmitButton from '../SubmitButton'
import './ChatBox.css'
import { Message } from '../../types'

const USER: string = 'jackAttack64'

const ChatBox = () => {
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('Eating Pizza')
  const [messageList, setMessageList] = useState([] as Message[])

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!message) {
      return
    }
    const nextMessageList: Message[] = messageList.slice()
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
      <div className='logo-container'>
        <span className='guy-logo'/>
        <span id='lol-text'/>
        <span id='instant-messenger-text'>Instant Messenger</span>
      </div>
      <div className='chatbox'> 
        <StatusDropdown status={status} setStatus={setStatus} onClick={onStatusDropdownClick} />
        <MessageList messageList={messageList} />
        <Form onSubmit={onSubmit}>
          <MessageInput message={message} onChange={onChange}/>
          <SubmitButton/>
        </Form>
      </div>
    </div>
  )
}

export default ChatBox
