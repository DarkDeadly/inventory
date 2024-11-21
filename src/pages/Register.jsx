import React, { useEffect, useState } from 'react'
import "./register.css"
import Inputs from '../components/Inputs'
import Buttons from '../components/Buttons'
import { useNavigate } from 'react-router-dom'
import validation from "../utils/validation"
import {useFormik} from "formik"
const Register = () => {
    const [ShowPassw, setShowPass] = useState(false) 
    const [ShowCPassw, setShowCPass] = useState(false) 
    const [RegisteredData, setRegisteredData] = useState([
      {
        email : "omrianis2@gmail.com",
        username : "anisomri"
      }
    ])
    const Formik = useFormik(
        {initialValues : {email : "" , password : "" , confirmPass : "" , username : "" , Role : "user"},
        validate : validation,
        onSubmit : values => {
          setRegisteredData([...RegisteredData , values])
          const existingEmail = RegisteredData.find((item) => item.email === values.email)
          if (existingEmail) {
            alert("Email already exists please try again")
          }
          if (!existingEmail) {
            localStorage.setItem("RegisteredItems" , JSON.stringify(RegisteredData))
            Navigate("/")
          }
        }
      }
    )
    const Navigate = useNavigate()
    const handleClick = () => {
      setShowPass(!ShowPassw)
    }
    const HandleConfirmShow = () => {
        setShowCPass(!ShowCPassw)
      }
      
  return (
    <div className='min-h-screen w-full bg-[#EBEAFF] flex justify-center items-center'>
        <div className="h-[90%] w-[90%] flex bg-[#9694FF]">
        <div className="left w-1/2 min-h-full rounded-tr-xl rounded-br-xl max-[898px]:hidden">
            <div className="textContent flex flex-col justify-end h-full items-center pb-20">
                <h1 className='text-4xl text-[#EBEAFF] font-bold text-center pb-2 px-2'>StockSense: Smarter Inventory, Better Business</h1>
                <p className='text-2xl text-white  '>Streamline your stock, simplify your success.</p>
            </div>
        </div>
        <div className="w-1/2 h-full bg-white flex flex-col justify-center items-center max-[898px]:w-full">
            <div className="RightText flex flex-col gap-3">
            <h1 className='text-4xl  font-bold  bg-gradient-to-l from-[#9694FF] to-[#3D3BF3] bg-clip-text text-transparent text-center pt-5'>Welcome To StockSense</h1>
            <p className='text-2xl text-black text-center pb-5 px-2 '>Manage your inventory with ease—sign up to get started</p>
            </div>
            <div className="forms w-[75%]">
                <form onSubmit={Formik.handleSubmit}>
                    <Inputs 
                    InputName="username"
                    InputPlaceholder='Enter your Username' 
                    InputType="username"
                    onChangefn={Formik.handleChange}
                    InputValue={Formik.values.username}   
                    />
                    {Formik.errors.username && <p className='text-md font-sans text-red-500 pb-2'>{Formik.errors.username }</p>}
                    <Inputs 
                    onChangefn={Formik.handleChange}
                    InputValue={Formik.values.email}   
                    />
                    {Formik.errors.email && <p className='text-md font-sans text-red-500 pb-2'>{Formik.errors.email }</p>}
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
                    {Formik.errors.password && <p className='text-md font-sans text-red-500 pb-2'>{Formik.errors.password }</p>}

                    <Inputs 
                    InputName="confirmPass"
                    InputPlaceholder='Confirm your Password' 
                    InputType={ShowCPassw ? "text" : "password"}
                    IconVisibility = {true}   
                    IconClick={HandleConfirmShow}  
                    ShowPass = {ShowCPassw}  
                    onChangefn={Formik.handleChange}
                    InputValue={Formik.values.confirmPass}   

                    />
                    {Formik.errors.confirmPass && <p className='text-md font-sans text-red-500 pb-2'>{Formik.errors.confirmPass }</p>}

                    <Buttons 
                    buttonText='Sign Up'
                    ClickBTnFN={Formik.handleSubmit}
                    />
                    <Buttons 
                    buttonText='Sign Up with Google' 
                    ShowSvg = {true}
                    bgButton='bg-[#EBEAFF]'
                    textcolorBtn='text-black'
                    HoverEffect='hover:bg-[#d3d2e5]'
                    />
            <p className='text-md text-gray-600 pt-5 text-center pb-5'>You have an account ? <span className='text-md text-gray-600 pt-5 cursor-pointer text-center underline hover:text-violet-500'onClick={() => Navigate("/")} >Sign In Here</span></p>
                </form>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Register
