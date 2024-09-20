import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux'
import { addblock } from '../slices/ChatSlice';

function ChatInput({inputText,setInputText,conversationId}){

    const dispatch = useDispatch()
  
    const handleSend = async () => {
      if (!inputText.trim()) return ;
    
      try {

        const token = localStorage.getItem('token')
        const config = {
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",   
          }
        }
        setInputText('');
        console.log(conversationId)
        const response = await axios.post('http://localhost:5000/api/messages/send', { "conversationId": conversationId,content: inputText},config);
        addblock(dispatch(addblock(response.data)))
      } catch (error) {
        console.error('Error fetching response from server:', error);
      }
  };

    const buttonToggler = inputText.length  ? <button className="p-2 bg-blue-600 text-white rounded" onClick={handleSend}>Send</button> : <button className="p-2 bg-gray-700 text-black rounded">Send</button>  
      
    return <>
    <div className="flex w-5/6 max-w-md">
    <input
      type="text"
      className="flex-1 p-2 border rounded mr-2 bg-gray-700 overflow-x-hidden overflow-y-auto"
      value={inputText}
      onChange={(e) => setInputText(e.target.value)}
      onKeyPress={(e) => e.key === 'Enter' && handleSend()}
    />
    {buttonToggler}
  </div>
  </>
}

export default ChatInput