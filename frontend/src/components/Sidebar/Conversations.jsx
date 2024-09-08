import React from 'react'
import Chat from './Chat'
import useGetConversations from '../../hooks/useGetConversations'
import { getRandomEmoji } from '../../utlis/emoji';
 

function Conversations () {
 const{loading,conversations}= useGetConversations();
  return (
    <div className='py-2 flex-col overflow-auto'>
      {conversations.map((chat,idx)=>(
        <Chat key={chat._id}
        chat= {chat}
        emoji = {getRandomEmoji()}
        lastIdx = {idx === conversations.length -1} 
        />
      ))}
      { loading ? <span className='loading loading-spinner mx-auto'/> : null }

    </div>
  )
}

export default Conversations
