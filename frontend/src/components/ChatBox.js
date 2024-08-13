import React,{useEffect,useRef} from 'react'
import logo from '../chatgpt-icon.svg'
import ChatInput from './ChatInput';
import ChatContent from './ChatContent';
import { useSelector} from 'react-redux'


function ChatBox() {


    const chat = useSelector((state)=> state.chats)
    const ChatContents = chat.map((message, index) => (
        <ChatContent textContent={message} textContentKey={index}/>
    ))

    const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
        if (messagesEndRef.current) {
          messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      };
    
      // Scroll to bottom whenever messages change
      useEffect(() => {
        scrollToBottom();
      }, [chat]);

    return (
            <div className="flex min-h-screen bg-gray-900 text-white App">
                <div className="flex flex-col flex-1 h-screen relative z-0 overflow-hidden">
                    <div className="flex items-center p-4 bg-gray-800 shadow">
                        <div className="flex-1 text-2xl font-bold">ChatGPT Clone</div>
                        <img src={logo} className="w-8 h-4 p-2 App-logo" alt="ChatGPT logo" />
                    </div>

                    <div className="flex p-2 overflow-y-auto bg-gray-900 m-2 h-4/5 ">
                        <div className="flex-col flex-1 text-sm space-y-2"> {/* Spacing for the childen will be decided by its parent */} 
                            {ChatContents}
                            <div ref={messagesEndRef} /> {/* Added refernce for keeping scroll bar bottom */}
                        </div>
                    </div >

                    <div className="flex flex-1 relative bottom-0 p-4 bg-gray-800 shadow justify-center items-center">
                        <ChatInput/>
                    </div>
                </div>
            </div> 
    )

}

export default ChatBox


