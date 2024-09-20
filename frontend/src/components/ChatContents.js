import React from 'react'
import ChatContent from './ChatContent'

function ChatContents({chats}) {
    const content = chats.map((chat, index) => (
        <div key={chat.id}>
            <ChatContent chat={chat}/>
        </div>
    ))

    return (
    <>
        {content}
    </>
  )
}

export default ChatContents