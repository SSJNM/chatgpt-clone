import React, { useState } from 'react'
import ChatBox from './ChatBox'
import Sidebar from './Sidebar'
import ChatBoxPreview from './ChatBoxPreview'
function ChatApp() {
  const [isNew,setIsNew] = useState(true)

  return (
    <div className='flex flex-1 items-center justify-center h-full w-full'>
        <Sidebar isNew={setIsNew}/>
        {isNew ? <ChatBoxPreview/> : <ChatBox/>}
    </div>
  )
}

export default ChatApp
