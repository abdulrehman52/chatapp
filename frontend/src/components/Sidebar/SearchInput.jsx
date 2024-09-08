import React, { useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import useConversation from "../../store/useConversation"
import useGetConversation from '../../hooks/useGetConversations'
import toast from 'react-hot-toast';

const SearchInput = () => {
  const [search,setSearch] = useState("")

const {setSelectedConversation}= useConversation();
const {conversations }= useGetConversation()

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!search) return ;
    if(search.length <3 ){
     return toast.error("search term must be atleast 3 characters long")
    }
    const conversation = conversations.find((c) => c.fullname.toLowerCase().includes(search.toLowerCase()));

    if (conversation){
      setSelectedConversation(conversation)
      setSearch("")
    }else{
      toast.error("No such user Found!!")
    }
  }
  return (
    <form onSubmit={handleSubmit} className='flex items-center gap-2'>
          <label className="input rounded-full input-primary flex bg-gray-700 items-center gap-2">
              <input type="text" className="grow" placeholder="Search" 
              value={search}
              onChange={(e)=> setSearch(e.target.value)}
              />
            </label>
        <button className="btn btn-outline  hover:bg-gray-500 bg-blue-500 text-white">
              <IoSearchOutline />
          </button>
             
    </form>
  )
}

export default SearchInput
