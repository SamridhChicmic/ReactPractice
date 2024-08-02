import { useState } from 'react'
import {DropDownProps, Option} from './index.d'
function DropDown({placeholder,options,onChange}:DropDownProps) {
    
    const [isShowDropDown,setShowDropDown]=useState(false)
    const handleDropDownClick=()=>{
        setShowDropDown(!isShowDropDown)
    }
    const handleOptionClick=(Option:Option)=>{
        setShowDropDown(false)
        onChange(Option)
    }
  return (
     <div className='relative inline-block text-left'>
     <div onClick={handleDropDownClick}>{placeholder}</div>
    {
         <div className={`${isShowDropDown ? 'block' : 'hidden'} absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}>
          {  options.map((option)=>{
             return (
                <div key={option.label} onClick={()=>{handleOptionClick(option)}}>
                        {option.label}
                </div>
             )
        })}
        </div>
    }
     </div>
  )
}

export default DropDown