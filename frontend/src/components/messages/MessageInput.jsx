import React from 'react'
import { IoIosSend } from "react-icons/io";
function MessageInput() {
  return (
    <form className='px-4 my-4'>
        <div className="w-full relative">
            <input type="text"
            className='border text-sm rounded-lg w-full p-2.5 bg-slate-700 text-white'
            placeholder='Message...'
            />
            <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3 cursor-pointer text-white' >
             <IoIosSend />
            </button>
        </div>
    </form>
  )
}

export default MessageInput
