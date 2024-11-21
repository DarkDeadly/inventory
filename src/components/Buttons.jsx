import React from 'react'
import GoogleSvg from "../assets/icons8-google.svg"
const Buttons = ({buttonsPadding = "py-4" ,roundedprops = "rounded-full",buttonwidth = "w-full",  ClickBTnFN,buttonText = "Sign In" , ShowSvg = false , bgButton = 'bg-black' , textcolorBtn = 'text-white' , HoverEffect = 'hover:bg-slate-800'}) => {
  return (
    <div className={`${buttonwidth} ${bgButton} ${roundedprops} mt-3 relative flex items-center ${HoverEffect}`}>
      {ShowSvg && (<img src={GoogleSvg} className='h-[40%] w-[40%] absolute max-[498px]:hidden' />)}
      <button type="submit" className={`w-full text-center ${textcolorBtn} ${buttonsPadding} text-lg`} onClick={ClickBTnFN}>{buttonText}</button>
    </div>
  )
}

export default Buttons
