import React from 'react'
import { Eye , EyeOff   } from 'lucide-react';

const Inputs = ({margintop ="",InputWidth = 'w-full',InputValue,onChangefn, InputType = "email" , InputName = 'email' , InputPlaceholder = "Enter Your Email" , IconVisibility = false , IconClick , ShowPass = false }) => {


  return (
    <div className={`${InputWidth} mb-2 relative flex items-center ${margintop}`}>
      <input 
      type={InputType}
      className={`border border-gray-400 focus:border-black outline-none py-2 pl-2 w-full rounded-xl text-lg`} 
      name={InputName}
      placeholder={InputPlaceholder}
      onChange={onChangefn}
      value={InputValue}
      />
      {IconVisibility && (ShowPass ? <EyeOff className='absolute right-7 cursor-pointer' onClick={IconClick}/> : <Eye  className='absolute right-7 cursor-pointer' onClick={IconClick}/>)}
    </div>
  )
}

export default Inputs
