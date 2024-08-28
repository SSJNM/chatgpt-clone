import React, { useState } from 'react'
import ChatContent from './ChatContent'

function ChatContents({chats}) {
    const content = chats.map((chat, index) => (
        <ChatContent chat={chat} textContentKey={chat.id}/>
    ))

    return (
    <>
        {content}
    </>
  )
}

export default ChatContents