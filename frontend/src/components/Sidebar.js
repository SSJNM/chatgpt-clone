import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux'
// import HistoryContent from './HistoryContent';
import { fetchallblocks } from '../slices/ChatSlice';
import Skeleton  from './Skeleton'
import { fetchHistory,addHistory } from '../thunks';

const Sidebar = ({ isSideBarOpen, setIsSideBarOpen, setInputText,inputText}) => {

  const {isHistoryLoading,history,isHistoryError} = useSelector((state) => state.history)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHistory())
  }, [dispatch])

  const handleNew = async () => {
    const token = localStorage.getItem('token')
    
    try {
      dispatch(addHistory())
      setIsSideBarOpen(false)
      setInputText('')
      // const config = {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //     'Content-Type': 'application/json',
      //   }
      // }
      // await axios.get(`http://localhost:5000/api/messages/${conversationId}`, config).then((res) => {
      //   console.log("New conversation Started")
      //   const messages = res.data
      //   console.log(messages)
      //   dispatch(fetchallblocks(messages))
      // })
    //   .catch((err) => {
    //     console.log(err)
    //  });

    } catch (error) {
      console.error('Error fetching response from server:', error);
    }
  }

  const onSelectHistory = (id) => {
    console.log("Select history", id)
  }

  console.log("Histories are",isHistoryLoading,history,isHistoryError)
  const historyContent = isHistoryLoading ? <Skeleton boxcount={10} className="h-5 w-full" />: (isHistoryError ? <h1>Error in Loading</h1> : history.map((conversation, index) => <div key={index}
    className="p-2 border-b border-gray-700 cursor-pointer hover:bg-gray-700"
    onClick={() => onSelectHistory(conversation.id)}
  >
    {conversation.title}
  </div>))
  
  return (
    <>
      {isSideBarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 transition-opacity duration-300 ease-in-out"
          onClick={() => setIsSideBarOpen(false)}
        ></div>
      )}
      <div
        className={`fixed inset-0 top-0 left-0 w-64 bg-white bg-opacity-100 text-black transform transition-transform duration-300 ease-in-out ${isSideBarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
      <div className='flex mt-2'>
          <button
            className={`top-4 left-4 text-black z-50 transition-transform transform `}
            onClick={() => setIsSideBarOpen(false)}
          >
            <FaBars size={15} className='m-2'/>
          </button>
          <h2 className="text-2xl font-bold ml-5 ">Chat History</h2>
      </div>
          <div className='flex justify-center '>
            <Button onClick={handleNew}> New Chat</Button>
          </div>
          <div className='flex flex-col overflow-y-scroll m-4 flex-1 h-full'>
            {historyContent}
          </div>
        </div>
    </>
  );
};

export default Sidebar;
