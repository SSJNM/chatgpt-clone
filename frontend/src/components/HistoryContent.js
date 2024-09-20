import React from 'react'
import { Skeleton } from '@mui/material'
import { useSelector} from 'react-redux'

function onSelectHistory(id){
  console.log("Select history", id)
  console.log(1)
}

function HistoryContent(){
  
  const {isHistoryLoading,history,isHistoryError} = useSelector((state) => state.history)

  if(isHistoryLoading){
    return <Skeleton boxcount={10} className="h-5 w-full" />
  }

  if(isHistoryError){
    return <h1>Error in Loading</h1>
  }

  const content = history.map((conversation, index) => <div key={conversation.id} className="p-2 border-b border-gray-700 cursor-pointer hover:bg-gray-700"
    onClick={() => {
      // console.log(conversation)
    onSelectHistory(conversation.id)
  }}>
  {conversation.title}
</div>)

console.log(history)

  return (
    <div>
      {content}
    </div>
  )
  
}

export default HistoryContent