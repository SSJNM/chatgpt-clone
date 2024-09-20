import React from 'react'

function ChatContent({chat}) {
    return (
            <div
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
