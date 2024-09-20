import React,{useEffect,useRef, useState} from 'react'
import logo from '../chatgpt-icon.svg'
import ChatInput from './ChatInput';
import ChatContents from './ChatContents' 
import { FaBars } from 'react-icons/fa';
import { useDispatch, useSelector} from 'react-redux'
import { fetchallChats } from '../slices/ChatSlice';
import Skeleton from './Skeleton';
import axios from 'axios';

function pause(duration) {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve("Pause break has been completed.")
    }, duration);
  })
}


function ChatBox({conversationId,setConversationId,setIsSideBarOpen,isSideBarOpen,inputText,setInputText}) {

    const [isChatLoading, setIsChatLoading] = useState(false);
    const [isChatError,setIsChatEror] = useState(null);

    const {chats} = useSelector((state)=> state.chats)
    
    // console.log("Chat is",chats)
    
    const dispatch = useDispatch()

    useEffect(() => {
        setIsChatLoading(true)
        const token = localStorage.getItem('token')
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        }
        const fetchData = async () => {
            try {
              const response = await axios.get(`http://localhost:5000/api/messages/${conversationId}`,config);
              await pause(5000)
              console.log("5 second gone")
              dispatch(fetchallChats(response.data))
            } catch (error) {
              console.error("Error fetching data:", error);
            }
          };
      
        fetchData().then(() => {
            setIsChatLoading(false)
        }).catch((err) => {
            setIsChatLoading(false)
            setIsChatEror(err)
            console.log(isChatError)
        });
    }, [dispatch,conversationId,isChatError]);


    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        if (messagesEndRef.current) {
          messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      };
    
      // Scroll to bottom whenever messages change
      useEffect(() => {
        scrollToBottom();
      }, [chats]);

    return (
            <div className="flex flex-1 min-h-screen bg-gray-900 text-white App ">
                <div className="flex flex-col flex-1 h-screen relative z-0 overflow-hidden">
                    <div className="flex items-center p-4 bg-gray-800 shadow">
                        <button
                            onClick={() => setIsSideBarOpen(!isSideBarOpen)}
                            className="m-4 px-4 py-2 bg-blue-500 text-white rounded"
                            >
                            <FaBars size={15} />
                        </button>
                        <div className='flex flex-1'>
                        <div className="flex-1 text-end text-3xl font-bold">ChatGPT Clone</div>
                        <img src={logo} className="w-8 h-4 p-2 App-logo" alt="ChatGPT logo" />
                        </div>
                    </div>

                    <div className="flex p-2 overflow-y-auto bg-gray-900 m-2 h-4/5 ">
                        <div className="flex-col flex-1 text-sm space-y-2"> {/* Spacing for the childen will be decided by its parent */} 
                            {isChatLoading ? <Skeleton boxcount={10} className="h-5 w-full"/> : <ChatContents chats={chats} /> }
                            <div ref={messagesEndRef} /> {/* Added refernce for keeping scroll bar bottom */}
                        </div>
                    </div >

                    <div className="flex flex-1 relative bottom-0 p-4 bg-gray-800 shadow justify-center items-center">
                        <ChatInput inputText={inputText} setInputText={setInputText} conversationId={conversationId} setConversationId={setConversationId} />
                    </div>
                </div>
            </div> 
    )

}

export default ChatBox


