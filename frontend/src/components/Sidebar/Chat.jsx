import React from 'react'
import useConversation from '../../store/useConversation'
import { useSocketContext } from '../../context/socketContext';

function Chat({chat,lastIdx,emoji}) {
  const{selectedConversation,setSelectedConversation}= useConversation();

  const isSelected = selectedConversation?._id === chat._id
  const {onlineUsers} = useSocketContext();
  const isOnline = onlineUsers.includes(chat._id)
  return (
    <>
    <div className={'flex gap-2 items-center hover:bg-blue-300 rounded p-2 py-1 cursor-pointer ${isSelected ? "bg-pink-200 : ""}'}
      
      onClick={()=>setSelectedConversation(chat)} >

      <div className={`avatar ${isOnline ? "online" : ""}`}>
        <div className='w-12 rounded-full '>
            <img src={chat.dp} alt="user-avatar" />
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <div className='flex gap-3 justify-between'>
            <p className='font-bold text-slate-700'>{chat.fullname}</p>
            <span className='text-xl'>{emoji}</span>
        </div>
      </div>
    </div>
    
      {!lastIdx && <div className='divider py-0 my-0 h-1' /> }
</>
  )
}

export default Chat
