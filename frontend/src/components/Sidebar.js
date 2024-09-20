import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { useDispatch } from 'react-redux'
import { fetchHistory,addHistory } from '../thunks';
import HistoryContent from './HistoryContent';

const Sidebar = ({ isSideBarOpen, setIsSideBarOpen, setInputText,inputText}) => {

  const [isHistoryLoading,setIsHistoryLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsHistoryLoading(true);
    dispatch(fetchHistory());
    setIsHistoryLoading(false);
  }, [dispatch])
  

  const handleNew = async () => {
    // const token = localStorage.getItem('token')
  
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

  // if(!isSideBarOpen) return <></>
  
  return (
    <div className={`absolute flex flex-1 h-full w-full transition-all duration-1000  ${isSideBarOpen ? 'z-20' : 'z-0'}`}> 
      <div
        className={`relative inset-0 w-64 h-full flex flex-col bg-sidebar-bg text-white transition-all duration-1000 ease-in-out ${isSideBarOpen ? "translate-x-0 z-20 opacity-100" : "-translate-x-full z-0 opacity-0"
          }`}
      >
          <div className='flex mt-2'>
            <button
              className={`top-4 left-4 text-black z-50 transition-transform transform `}
              onClick={() => setIsSideBarOpen(false)}
            >
              <FaBars size={20} className='m-2 text-white'/>
          </button>
          <h2 className="text-2xl font-bold ml-5 ">Chat History</h2>
          </div>
          <div className='flex justify-center '>
            <Button onClick={handleNew}> New Chat</Button>
          </div>
          <div className='flex flex-col overflow-y-auto m-4 flex-1 h-full'>
          {isHistoryLoading ? <h1> Loading History</h1> : <HistoryContent />}
          </div>
        </div>
        <div
        id="hidden-element"
        className={`relative inset-0 bg-sidebar-bg text-white transform transition-all duration-1000 flex flex-1 ${isSideBarOpen ? 'z-20 opacity-60' : 'z-0 opacity-0'}`}
        onClick={()=> setIsSideBarOpen(false)}
      ></div>
    </div>
  );
};

export default Sidebar;
