import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addblock } from '../slices/ChatSlice';
import { v4 as uuidv4 } from 'uuid'; 

function ChatInput(){
    
    const dispatch = useDispatch()
    const [inputText, setInput] = useState('');
  
    const handleSend = async () => {
      if (!inputText.trim()) return ;
      const userMessage = { id: uuidv4(), text: inputText, sender: 'user' };
      addblock(dispatch(addblock(userMessage)))
      setInput('');
  
      try {
        const response = await axios.post('http://localhost:5000/api/chat', { prompt: inputText });
        const botMessage = {id: uuidv4(), text: response.data, sender: 'gpt' };
        addblock(dispatch(addblock(botMessage)))
      } catch (error) {
        const botMessage = {id: uuidv4(), text: "Error from Server", sender: 'gpt' };
        addblock(dispatch(addblock(botMessage)))
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
      onChange={(e) => setInput(e.target.value)}
      onKeyPress={(e) => e.key === 'Enter' && handleSend()}
    />
    {buttonToggler}
  </div>
  </>
}

export default ChatInput