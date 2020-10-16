import React, { useState } from 'react'
import MessageList from '../MessageList'
import MessageInput from '../MessageInput'
import StatusDropdown from '../StatusDropdown'
import Form from '../Form'
import SubmitButton from '../SubmitButton'
import './ChatBox.css'


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
      <Form onSubmit={onSubmit}>
        <MessageInput message={message} onChange={onChange}/>
        <SubmitButton/>
      </Form>
    </div>
  )
}

export default ChatBox
