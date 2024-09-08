import React from 'react'
import {useAuthContext} from '../../context/authContext'
import useConversation from '../../store/useConversation';
import { extractTime } from '../../utlis/extractTime';

function Message({message}) {
  const {authUser} = useAuthContext();
  const {selectedConversation} = useConversation();
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const dp = fromMe ? authUser.dp : selectedConversation?.dp;
  const bubbleBgColor = fromMe ? "bg-blue-500" : "";
  const formattedTime = extractTime(message.createdAt);

  const shakeClass = message.shouldShake ? "shake" : "";

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="rounded-full w-10 ">
                  <img src={dp} alt="" />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass}pb-2`}>{message.message}</div>
          <div className="text-xs opacity-50 chat-footer flex gap-1 items-center text-white">{formattedTime}</div>
    </div>
  )
}

export default Message
