import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const fetchHistory = createAsyncThunk('history/fetchHistory', async () => {
    const response = await axios.get('http://localhost:5000/api/conversations')
    console.log(response)
    await pause(2000);
    return response.data;
  });

function pause(duration) {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve("Pause break has been completed.")
    }, duration);
  })
}


export {fetchHistory}
