import React, { useState } from 'react'
import Buttons from '../components/Buttons'
import Inputs from '../components/Inputs'
import "./home.css"
import { Modal } from '@mui/material'
import {useFormik} from "formik"
import ProductCard from '../components/ProductCard'
const Home = () => {
  const Formik = useFormik(
    {
      initialValues : {name : '' ,price : 0 , number : 0 , entryDate : "" , images : null},
      onSubmit : values => {
        setProducts([...Products , values])
        console.log(Products)
        handleClose()
      }
    }
  )
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const User = { email: "omrianis2@gmail.com", username: "Anisomri", Role: 'admin' }
  const [search, setsearch] = useState("")
  const [open, setOpen] = useState(false)
  const [Products, setProducts] = useState([{
    name : "Gaming Chair",
    price : 15000,
    number : 15 , 
    entryDate : "14-02-2024",
    images : "src/assets/images.jpeg"

  }])
  const FilteredProduct = Products.filter((filterel) => filterel.name.toLowerCase().includes(search.toLowerCase()) )

  return (
    <div className='min-h-screen w-full flex bg-[#EBEAFF]'>
      <div className="min-h-full w-[15%] bg-[#9694FF] rounded-tr-xl rounded-br-xl"></div>
      <div className="right min-h-full w-[100%] bg-transparent">
        <div className="StockHeader flex justify-between   items-center pb-2 px-7">
          <h1 className= {`text-4xl text-black ${User.Role !=="admin"&&'py-2'}`}>StockSense</h1>
          {User.Role == 'admin' && <Buttons ClickBTnFN = {handleOpen} buttonsPadding="py-3" bgButton='bg-[#3D3BF3]' HoverEffect='hover:bg-[#6362f5]' roundedprops='rounded-xl' buttonText='Add a Product' buttonwidth='w-[20%]' />}
          <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div style={style} className='p-10 bg-white rounded-lg'>
          <h1 className='text-xl font-serif py-2'>Add your New Product</h1>
          <form >
            <Inputs 
            InputName='name' 
            InputPlaceholder='enter Product Name' 
            InputType='text' 
            InputValue={Formik.values.name}
            onChangefn={Formik.handleChange}
            />   
            <Inputs 
            InputName='price' 
            InputPlaceholder='enter product price' 
            InputType='number'
            InputValue={Formik.values.price}
            onChangefn={Formik.handleChange}
            />   
            <Inputs 
            InputName='number' 
            InputPlaceholder='enter product number' 
            InputType='number'
            InputValue={Formik.values.number}
            onChangefn={Formik.handleChange}
            />   
            <Inputs 
            InputName='entryDate' 
            InputType='date'
            InputValue={Formik.values.entryDate}
            onChangefn={Formik.handleChange}
            /> 
            <Inputs 
            InputName='images' 
            InputType='file' 
            onChangefn={(e) => {
              Formik.setFieldValue('images', e.target.files[0]);
            }}
            />  
            <Buttons buttonText='Submit' ClickBTnFN={Formik.handleSubmit} />
          </form>
        </div>

      </Modal>

        </div>
        <div className="ProductsContent min-h-[90%] w-full border-4 rounded-lg border-white flex flex-col">
          <div className="searchElement flex gap-2 justify-end pr-3 items-center mb-2">
            <Inputs 
            InputWidth='w-[30%]' 
            InputPlaceholder='Search ...'  
            margintop='mt-5'
            InputType='text'
            InputName='search' 
            InputValue={search}
            onChangefn={(e) => setsearch(e.target.value)}
            />

           

          </div>
          <div className="ProductElements border-2  w-full min-h-full flex gap-2 justify-start flex-wrap">
           {FilteredProduct.map((product , index) => (
            <ProductCard listProducts = {product} key={index} UserRole = {User}/>
           ))}

          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
