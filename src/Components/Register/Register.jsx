import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'




export default function Register() {
  const [error, seterror] = useState(null)
  const [Lodeing, setLodeing] = useState(false)
  let navegetor =useNavigate()
  async function SendDataToApi(e){
   setLodeing(true)
   let respons=await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup",e).catch((e)=>{seterror(`${e.response.data.errors.param} : ${e.response.data.errors.msg}`);setLodeing(false)})
    if(respons.data.message==="success"){
      navegetor("/login")
      setLodeing(false)
    }
  }
  let validationSchema=yup.object({
    name:yup.string().required("Name is Required").min(3, "Name MinLength 3").max(15,"Name MaxLength 15"),
    email:yup.string().required("Email is Required").email("Email is Not valed"),
    password:yup.string().required("password is Required").matches(/^[A-Z][a-zA-Z0-9]{5,15}$/,"password stert letter Captal and password Length 6 to 15 "),
    rePassword:yup.string().required("rePassword is Required").oneOf([yup.ref("password")],"rePassword is valed"),
    phone:yup.string().required("phone is Required").matches(/^01[0125][0-9]{8}$/,"phone is valed")
    
  })

  let formik =useFormik({
    initialValues:{
      name:"",
      email:"",
      password:"",
      rePassword:"",
      phone:""
    },onSubmit:(SendDataToApi),validationSchema
  })
  
  return <>
  <div className='w-75 m-auto'>
    <h2>Register Now</h2>
    {error?<div className=' alert alert-danger text-center p-2'>{error}</div>:null}
  <form onSubmit={formik.handleSubmit} >
    <label htmlFor="name">Name : </label>
    <input type="name" id='name' name='name' className=' form-control my-2' onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} />
    {formik.errors.name && formik.touched.name? <div className=' alert alert-danger p-2'> {formik.errors.name}</div> :""}
    <label htmlFor="email">Email :</label>
    <input type="email" id='email' name='email' className=' form-control my-2' onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} />
    {formik.errors.email && formik.touched.email?<div className=' alert alert-danger p-2'> {formik.errors.email}</div>:""}
    <label htmlFor="password">Password :</label>
    <input type="password" id='password' name='password' className=' form-control my-2' onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} />
    {formik.errors.password && formik.touched.password?<div className=' alert alert-danger p-2'> {formik.errors.password}</div>:""}
    <label htmlFor="rePassword">RePassword :</label>
    <input type="password" id='rePassword' name='rePassword' className=' form-control my-2' onChange={formik.handleChange} value={formik.values.rePassword} onBlur={formik.handleBlur} />
    {formik.errors.rePassword && formik.touched.rePassword?<div className=' alert alert-danger p-2'> {formik.errors.rePassword}</div>:""}
    <label htmlFor="tel">Phone :</label>
    <input type="phone" id='phone' name='phone' className=' form-control my-2' onChange={formik.handleChange} value={formik.values.phone} onBlur={formik.handleBlur} />
    {formik.errors.phone && formik.touched.phone?<div className=' alert alert-danger p-2'> {formik.errors.phone}</div>:""}
    {Lodeing?<button className='btn bg-lighta ' disabled> Loading... </button>:
    <button type='submit' disabled={!(formik.isValid &&  formik.dirty)} className=' btn bg-lighta' > Register </button>
    }
      
  </form>
  </div>
  </>
}
