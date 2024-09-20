import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const fetchHistory = createAsyncThunk('history/fetch', async () => {
  console.log("The history is here")
    const token = localStorage.getItem('token')
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    }
    const response = await axios.get('http://localhost:5000/api/conversations',config)
    await pause(2000);
    return response.data;
  });

  const addHistory = createAsyncThunk('history/add', async () => {
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    };
    
    const response = await axios.post('http://localhost:5000/api/conversations/start', {} , config);
    await pause(2000);
    return response.data;
  });

  const deleteHistory = createAsyncThunk('history/delete', async (historyId) => {
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    };
    
    const response = await axios.delete(`http://localhost:5000/api/conversations/delete/${historyId}`, config);
    await pause(2000);
    console.log(response)
    return historyId;
  });

function pause(duration) {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve("Pause break has been completed.")
    }, duration);
  })
}


export {fetchHistory,addHistory,deleteHistory}
