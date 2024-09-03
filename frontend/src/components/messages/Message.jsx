import React from 'react'

function Message() {
  return (
    <div className='chat chat-end'>
      <div className="chat-image avatar">
        <div className="rounded-full w-10 ">
                  <img src="https://avatar.iran.liara.run/public/girl?username=Maria" alt="" />
        </div>
      </div>
      <div className={'chat-bubble text-white bg-blue-500'}>Hi! whats upp?</div>
          <div className="text-xs opacity-50 chat-footer flex gap-1 items-center text-white">09:45</div>
    </div>
  )
}

export default Message
