import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
const SearchInput = () => {
  return (
    <form className='flex items-center gap-2'>
          <label className="input rounded-full input-primary flex bg-gray-700 items-center gap-2">
              <input type="text" className="grow" placeholder="Search" />
            </label>
        <button className="btn btn-outline  hover:bg-gray-500 bg-blue-500 text-white">
              <IoSearchOutline />
          </button>
             
    </form>
  )
}

export default SearchInput
