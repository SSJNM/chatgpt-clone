import { Button } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { useDispatch, useSelector} from 'react-redux'
import HistoryContent from './HistoryContent';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {history,isHistoryLoading,isHistoryError} = useSelector((state) => state.history)
  const dispatch = useDispatch()

  const handleNew = () => {
      // axios.post('http://localhost:5000/api/conversations/start')
      console.log("New conversation Started")
  }

  const onSelectHistory = (id) => {
    console.log("Select history",id)
}
 console.log(history) 
  const historyContent = isHistoryLoading ? <h1>Loading History</h1> : (isHistoryError ? <h1>Error in Loading</h1> : history.map((conversation,index) => <li key={index}
      className="p-4 border-b border-gray-700 cursor-pointer hover:bg-gray-700"
      onClick={() => onSelectHistory(conversation.id)}
    >
    </li>))

  return (
    <>
      <div className={`relative top-0 left-0 h-full bg-gray-900 text-white transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-4">
          <h2 className="text-2xl font-bold">Chat History</h2>
          <ul className='mt-4'>
            <Button onClick={handleNew}> New Chat</Button>
          </ul>
          <ul className="mt-4">
            {historyContent}
          </ul>
        </div>
      </div>
      <button
        className={`fixed top-4 left-4 text-white z-50 transition-transform transform ${isOpen ? 'translate-x-64' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars size={15} />
      </button>
      {/* {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={() => setIsOpen(false)}></div>} */}
    </>
  );
};

export default Sidebar;
