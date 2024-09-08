import React, { useState } from 'react'
import { IoIosSend } from "react-icons/io";
import useSendMessage from '../../hooks/useSendMessage';
function MessageInput() {
  const {message, setMessage} = useState("");
  const {loading,sendMessage} =useSendMessage();
  const handleSubmit= async (e)=>{
    e.preventDefault();
    if(!message) return;
    await sendMessage(message);
    setMessage("");
  }
  return (
    <form className='px-4 my-4' onSubmit={handleSubmit} >
        <div className="w-full relative">
            <input type="text"
            className='border text-sm rounded-lg w-full p-2.5 bg-slate-700 text-white'
            placeholder='Message...'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            />
            <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3 cursor-pointer text-white' >
             { loading ? <span className='loading loading-spinner '/> : <IoIosSend />}
            </button>
        </div>
    </form>
  )
}

export default MessageInput
