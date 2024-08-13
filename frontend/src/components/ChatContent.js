import React from 'react'

function ChatContent({ textContent, textContentKey }) {
    return (
        <>
            <div
                key={textContentKey}
                className={`flex ${textContent.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
                <div
                    className={`p-4 rounded-lg ${textContent.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-white'
                        }`}
                >
                    {textContent.text}
                </div>
            </div>
        </>
    )
}

export default ChatContent
