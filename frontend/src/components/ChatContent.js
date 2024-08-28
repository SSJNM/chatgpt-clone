import React, { useState } from 'react'

function ChatContent({ chat, textContentKey }) {
    const [isChatFetching,setIsChatFetching] = useState(false)
    const [isChatError,setIsChatError] = useState(null)


    return (
            <div
                key={textContentKey}
                className="flex flex-col"
            >
                <div className='flex justify-end'>
                    <div
                        className="p-4 rounded-lg bg-blue-600 text-white"
                    >
                        {chat.content}
                    </div>
                </div>
                <div className='flex justify-start'>
                    <div
                        className="p-4 rounded-lg bg-gray-700 text-white"
                    >
                        {chat.response}
                    </div>
                </div>
            </div>
    )
}

export default ChatContent
