import React from 'react'

function HistoryContent(conversation,conversationKey) {
  return (
    <>
    <div
        key={conversationKey}
    >
        {conversation.title}
        </div>
    </>
  )
}

export default HistoryContent