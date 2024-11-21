import React, { useState } from 'react'
import './login.css'
import Inputs from '../components/Inputs'
import Buttons from '../components/Buttons'
import {useNavigate} from "react-router-dom"
import { useFormik} from "formik"
import loginvalidation from "../utils/emailvalidation"
const Login = () => {
  const Formik = useFormik(
    {initialValues : {email : "" , password : "" },
    validate:loginvalidation,
    onSubmit : values => {
      Navigate("/Home")
    }
  }
)
    const [ShowPassw, setShowPass] = useState(false) 
    const handleClick = () => {
      setShowPass(!ShowPassw)
    }


  const Navigate = useNavigate()

  return (
    <div className='min-h-screen w-full bg-[#EBEAFF] flex justify-center items-center'>
        <div className="min-h-[90%] w-[90%] flex bg-[#9694FF]">
        <div className="leftc w-1/2 min-h-full rounded-tr-xl rounded-br-xl max-[898px]:hidden">
            <div className="textContent flex flex-col justify-end h-full items-center pb-20">
                <h1 className='text-4xl text-[#EBEAFF] font-bold text-center pb-2 px-2'>StockSense: Smarter Inventory, Better Business</h1>
                <p className='text-2xl text-white  '>Streamline your stock, simplify your success.</p>
            </div>
        </div>
        <div className="w-1/2 h-full bg-white flex flex-col justify-center items-center max-[898px]:w-full">
            <div className="RightText flex flex-col gap-3">
            <h1 className='text-4xl  font-bold  bg-gradient-to-l from-[#9694FF] to-[#3D3BF3] bg-clip-text text-transparent text-center pt-5'>Welcome back To StockSense</h1>
            <p className='text-2xl text-black text-center pb-5 px-2 '>Manage your inventory with ease—sign in to get started</p>
            </div>
            <div className="forms w-[75%]">
                 <form onSubmit={Formik.handleSubmit}>
                 <Inputs 
                  onChangefn={Formik.handleChange}     
                  InputValue={Formik.values.email}   
                  />
                {Formik.errors.email && <p className='text-md font-sans text-red-500 pb-2'>{Formik.errors.email}</p>}
                 <Inputs 
                 InputName="password"
                 InputPlaceholder='Enter your Password' 
                 InputType={ShowPassw ? "text" : "password"}
                 IconVisibility = {true}   
                 IconClick={handleClick}  
                 ShowPass = {ShowPassw}   
                 onChangefn={Formik.handleChange}      
                 InputValue={Formik.values.password}  
                 />
                {Formik.errors.password && <p className='text-md font-sans text-red-500 pb-2'>{Formik.errors.password}</p>}

                 <div className="w-full text-end">
                 <p className=' inline  text-md text-gray-600 cursor-pointer underline hover:text-violet-500'>Forgot Password ?</p>

                 </div>
                 <Buttons ClickBTnFN={Formik.handleSubmit}/>
                 <Buttons 
                 buttonText='Sign In with Google' 
                 ShowSvg = {true}
                 bgButton='bg-[#EBEAFF]'
                 textcolorBtn='text-black'
                 HoverEffect='hover:bg-[#d3d2e5]'
                 />
         <p className='text-md text-gray-600 pt-5 text-center pb-5'>You don't have an account ? <span className='text-md text-gray-600 pt-5 cursor-pointer text-center underline hover:text-violet-500 pb-5'onClick={() => Navigate("/Register")} >Register Here</span></p>
             </form>

            </div>
        </div>
        </div>
    </div>
  )
}


export default Login


