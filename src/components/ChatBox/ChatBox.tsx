import React, { useState, useEffect } from 'react'
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
  const [pending, setPending] = useState(false)
  const [status, setStatus] = useState('Eating Pizza')
  const [messageList, setMessageList] = useState([] as Message[])

  useEffect(() => {
    const messageListCopy = messageList.slice()
    for(let i = 0; i < 10; ++i) {
      messageListCopy.push({ user: USER, text: 'this is a test message: ' + i})
    }
    setMessageList(messageListCopy)
  }, [])

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!message) {
      return
    }
    setPending(true)
    setTimeout(() => {
      const nextMessageList: Message[] = messageList.slice()
      nextMessageList.push({ user: USER, text: message})
      setMessageList(nextMessageList)
      setMessage('')
      setPending(false)
    }, 1000)
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
          <SubmitButton pending={pending}/>
        </Form>
      </div>
    </div>
  )
}

export default ChatBox
