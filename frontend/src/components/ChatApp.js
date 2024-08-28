import React, { useState } from 'react'
import ChatBox from './ChatBox'
import Sidebar from './Sidebar'

function ChatApp() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [conversationId,setConversationId] = useState('c6ad7bc6-c2d7-4dd9-9b7a-ad99550a922a');
  const [inputText, setInputText] = useState('');

  return (
    <div className='flex flex-1 h-full w-full'>
      <ChatBox isSideBarOpen={isSideBarOpen} setIsSideBarOpen={setIsSideBarOpen} setConversationId={setConversationId} conversationId={conversationId} inputText={inputText} setInputText={setInputText}/>
      <Sidebar isSideBarOpen={isSideBarOpen} setIsSideBarOpen={setIsSideBarOpen} inputText={inputText} setInputText={setInputText} />
    </div>
  )
}

export default ChatApp

