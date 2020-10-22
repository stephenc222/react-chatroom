import React, { useRef, useState, useEffect } from 'react'
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

const MessageListScrollBar: React.FunctionComponent<{y: number, onUpArrowClick: () => void, onDownArrowClick: () => void, scrollPos: number}> = ({y, onUpArrowClick, onDownArrowClick, scrollPos}) => {
  return (
    <div  className='message-list-scrollbar'>
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', width: '100%', position: 'relative'}}>
        <ArrowButton buttonBoxStyle={{top: 0 }} arrowType='up' onClick={onUpArrowClick}/>
          <div style={{position: 'absolute', top: scrollPos, width: '100%'}}>
            <ButtonBox buttonBoxStyle={{height: 9 }} />
          </div>
        <ArrowButton buttonBoxStyle={{top: y, position: 'absolute'}} arrowType='down' onClick={onDownArrowClick} />
      </div>
    </div>
  )
}

const BOX_HEIGHT: number = 39
const SCROLL_ADJUSTMENT: number = 10

const MessageList: React.FunctionComponent<MessageListProps> = ({messageList}) => {
  const scrollBarRef = useRef<HTMLDivElement>(null)
  const messageListRef = useRef<HTMLDivElement>(null)
  const [page, setPage] = useState(0)
  const [pageSize, setPageSize] = useState(0)
  const [height, setHeight] = useState(0)
  const [scrollPos, setScrollPos] = useState(BOX_HEIGHT)
  const [numPages, setNumPages] = useState(0)

  useEffect(() => {
    if (scrollBarRef.current && messageListRef.current) {
      const { height } = scrollBarRef.current?.getBoundingClientRect()
      const { height: listHeight } = messageListRef.current?.getBoundingClientRect()
      setHeight(height)
      setPageSize(height)
      setNumPages(Math.floor(listHeight / height))
    }
  }, [scrollBarRef, messageListRef, messageList])
  const onDownArrowClick = () => {
    // need slight adjustment to make the scroll bar "flush" with the bottom button
    const bottomPos = height - BOX_HEIGHT - SCROLL_ADJUSTMENT
    if (page + 1 === numPages) {
      setPage(page + 1)
      setScrollPos(bottomPos)
      return
    }
    if (page < numPages) {
      setPage(page + 1)
      const nextScrollPos = (BOX_HEIGHT * 0.4) * (page + 1) + BOX_HEIGHT
      setScrollPos(nextScrollPos)
    }
  }
  const onUpArrowClick = () => {
    if (page > 0) {
      setPage(page - 1)
      setScrollPos((BOX_HEIGHT * 0.4) * (page - 1)+ BOX_HEIGHT) 
    }
  }
  return (
    <Box>
      <div ref={scrollBarRef} className='message-list-container'>
        <div style={{position: 'relative', overflow: 'hidden' }} className='message-list'>
          <div ref={messageListRef} style={{position: 'absolute', top: pageSize * -1 *(page)}}>
            {messageList.map((messageItem, index) => <MessageListItem {...messageItem} key={`message_list_item_${index}`} />)}
          </div>
        </div>
        <MessageListScrollBar scrollPos={scrollPos} y={height - BOX_HEIGHT} onDownArrowClick={onDownArrowClick} onUpArrowClick={onUpArrowClick} />
      </div>
    </Box>
  )
}

export default MessageList
